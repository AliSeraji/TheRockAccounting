import type { StateCreator } from 'zustand';
import type { MovementsSlice, WarehouseId, WarehouseStore } from '../types';
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
});
