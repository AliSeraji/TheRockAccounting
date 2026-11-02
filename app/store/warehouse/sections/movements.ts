import type { StateCreator } from 'zustand';
import type {
  MovementsSlice,
  StockMovement,
  StockMovementReason,
  StockSale,
  WarehouseId,
  WarehouseStore,
} from '../types';
import {
  formatQuantity,
  makeMovement,
  parseQuantity,
  withStoneQuantity,
} from '../helpers';

// The stored stock of one item (a block's volume), if the item exists.
const stockOf = (
  state: WarehouseStore,
  warehouse: WarehouseId,
  id: string
): string | undefined => {
  switch (warehouse) {
    case 'main':
    case 'secondary':
      return state.stones[warehouse].find((i) => i.id === id)?.quantity;
    case 'block':
      return state.blocks.find((i) => i.id === id)?.volume;
    case 'misc':
      return state.misc.find((i) => i.id === id)?.quantity;
    case 'raw':
      return state.raw.find((i) => i.id === id)?.quantity;
  }
};

// The state change that sets one item's stock.
const withStock = (
  state: WarehouseStore,
  warehouse: WarehouseId,
  id: string,
  stock: string,
  date: string
): Partial<WarehouseStore> => {
  const update = <T extends { id: string }>(items: T[], change: (i: T) => T) =>
    items.map((i) => (i.id === id ? change(i) : i));
  switch (warehouse) {
    case 'main':
    case 'secondary':
      return {
        stones: {
          ...state.stones,
          [warehouse]: update(state.stones[warehouse], (i) =>
            withStoneQuantity(i, stock, date)
          ),
        },
      };
    case 'block':
      return {
        blocks: update(state.blocks, (i) => ({ ...i, volume: stock, date })),
      };
    case 'misc':
      return {
        misc: update(state.misc, (i) => ({ ...i, quantity: stock, date })),
      };
    case 'raw':
      return {
        raw: update(state.raw, (i) => ({ ...i, quantity: stock, date })),
      };
  }
};

// One entry per item with its amounts summed. Items that sum to zero drop
// out.
const perItem = (sales: StockSale[]): StockSale[] => {
  const totals = new Map<string, StockSale>();
  for (const sale of sales) {
    const key = `${sale.warehouse}/${sale.itemId}`;
    const amount = (totals.get(key)?.amount ?? 0) + sale.amount;
    totals.set(key, { ...sale, amount });
  }
  return [...totals.values()].filter(
    (sale) => formatQuantity(sale.amount) !== '0'
  );
};

// Whether two per-item lists hold the same amounts of the same items.
const sameStock = (a: StockSale[], b: StockSale[]): boolean =>
  a.length === b.length &&
  a.every((x) =>
    b.some(
      (y) =>
        y.warehouse === x.warehouse &&
        y.itemId === x.itemId &&
        formatQuantity(y.amount) === formatQuantity(x.amount)
    )
  );

// What an invoice's movements have taken, net of returns, per item.
const heldBy = (movements: StockMovement[], invoiceId: string): StockSale[] =>
  perItem(
    movements
      .filter(({ ref }) => ref?.type === 'invoice' && ref.id === invoiceId)
      .map(({ warehouse, itemId, delta }) => ({
        warehouse,
        itemId,
        amount: -parseQuantity(delta),
      }))
  );

// The stock log. Each action that changes stock appends its movements in the
// same `set()` that updates the stored stock.
export const createMovementsSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  MovementsSlice
> = (set) => ({
  movements: [],
  adjustStock: (warehouse, id, stock, note) =>
    set((state) => {
      if (!state.enabled[warehouse]) return {};
      const current = stockOf(state, warehouse, id);
      if (current === undefined) return {};
      const delta = formatQuantity(stock - parseQuantity(current));
      if (delta === '0') return {};

      const date = new Date().toISOString();
      const movement = makeMovement(
        { itemId: id, warehouse, delta, reason: 'adjustment', ref: null, note },
        date
      );
      return {
        ...withStock(state, warehouse, id, formatQuantity(stock), date),
        movements: [...state.movements, movement],
      };
    }),
  setInvoiceStock: (invoiceId, sales) =>
    set((state) => {
      // A deleted item has no stock to return or take.
      const exists = ({ warehouse, itemId }: StockSale) =>
        stockOf(state, warehouse, itemId) !== undefined;
      const held = heldBy(state.movements, invoiceId).filter(exists);
      const wanted = sales.filter((sale) => sale.amount > 0 && exists(sale));
      if (sameStock(held, perItem(wanted))) return {};

      const date = new Date().toISOString();
      const ref = { type: 'invoice', id: invoiceId } as const;
      // Each change builds on the last, so an item on two rows loses both.
      let next = state;
      const logged: StockMovement[] = [];
      const apply = (
        { warehouse, itemId }: StockSale,
        delta: number,
        reason: StockMovementReason
      ) => {
        const current = stockOf(next, warehouse, itemId);
        if (current === undefined) return;
        const stock = formatQuantity(parseQuantity(current) + delta);
        next = { ...next, ...withStock(next, warehouse, itemId, stock, date) };
        logged.push(
          makeMovement(
            {
              itemId,
              warehouse,
              delta: formatQuantity(delta),
              reason,
              ref,
              note: '',
            },
            date
          )
        );
      };
      held.forEach((sale) => apply(sale, sale.amount, 'reversal'));
      wanted.forEach((sale) => apply(sale, -sale.amount, 'sale'));

      const { stones, blocks, misc, raw } = next;
      return {
        stones,
        blocks,
        misc,
        raw,
        movements: [...state.movements, ...logged],
      };
    }),
});
