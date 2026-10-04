import type { StateCreator } from 'zustand';
import type { StoneStockItem, StonesSlice, WarehouseStore } from '../types';
import seed from '../../../dummy_data/stones.json';
import {
  TRANSFER_TARGET,
  calcStoneArea,
  formatQuantity,
  nextId,
  normalizeCode,
  parseQuantity,
} from '../helpers';

export const emptyStone: StoneStockItem = {
  id: -1,
  code: '',
  category: '',
  name: '',
  thickness: '',
  length: '',
  width: '',
  quantity: '',
  area: '',
  purchasePrice: '',
  wholesalePrice: '',
  partnerPrice: '',
  consumerPrice: '',
  notes: '',
  date: '',
};

// The seed only carries identity fields; everything else starts empty.
const seedStones: StoneStockItem[] = seed.map(
  ({ code, category, name, notes }, index) => ({
    ...emptyStone,
    id: index + 1,
    code,
    category,
    name,
    notes,
  })
);

export const createStonesSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  StonesSlice
> = (set, get) => ({
  stones: { main: seedStones, secondary: [] },
  addStone: (warehouse, item) => {
    const { stones } = get();
    const id = nextId(stones[warehouse]);
    set({
      stones: {
        ...stones,
        [warehouse]: [...stones[warehouse], { ...item, id }],
      },
    });
    return id;
  },
  updateStone: (warehouse, id, item) =>
    set((state) => ({
      stones: {
        ...state.stones,
        [warehouse]: state.stones[warehouse].map((i) =>
          i.id === id ? item : i
        ),
      },
    })),
  removeStone: (warehouse, id) =>
    set((state) => ({
      stones: {
        ...state.stones,
        [warehouse]: state.stones[warehouse].filter((i) => i.id !== id),
      },
    })),
  transferStone: (from, id, quantity) =>
    set(({ stones, enabled }) => {
      const to = TRANSFER_TARGET[from];
      if (!enabled[from] || !enabled[to]) return {};
      const source = stones[from].find((i) => i.id === id);
      if (!source) return {};
      const available = parseQuantity(source.quantity);
      const moved = Math.min(quantity, available);
      if (moved <= 0) return {};

      const date = new Date().toISOString();
      const withQuantity = (item: StoneStockItem, qty: number) => {
        const next = { ...item, quantity: formatQuantity(qty), date };
        return { ...next, area: calcStoneArea(next) };
      };

      const remaining = parseQuantity(formatQuantity(available - moved));
      const fromItems =
        remaining > 0
          ? stones[from].map((i) =>
              i.id === id ? withQuantity(i, remaining) : i
            )
          : stones[from].filter((i) => i.id !== id);

      // Same code in the destination means the same product: add to that row.
      const code = normalizeCode(source.code);
      const target = stones[to].find((i) => normalizeCode(i.code) === code);
      const toItems = target
        ? stones[to].map((i) =>
            i.id === target.id
              ? withQuantity(i, parseQuantity(i.quantity) + moved)
              : i
          )
        : [
            ...stones[to],
            { ...withQuantity(source, moved), id: nextId(stones[to]) },
          ];

      return { stones: { ...stones, [from]: fromItems, [to]: toItems } };
    }),
});
