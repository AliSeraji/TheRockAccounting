import type { StateCreator } from 'zustand';
import type { StoneStockItem, StonesSlice, WarehouseStore } from '../types';
import seed from '../../../dummy_data/stones.json';
import { newId } from '~/lib/id';
import {
  TRANSFER_TARGET,
  formatQuantity,
  makeMovement,
  normalizeCode,
  openingMovements,
  parseQuantity,
  withStoneQuantity,
} from '../helpers';

export const emptyStone: StoneStockItem = {
  id: '',
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

// The seed only carries identity fields; everything else starts empty. Its
// ids are fixed rather than random so the server and client renders agree.
const seedStones: StoneStockItem[] = seed.map(
  ({ code, category, name, notes }, index) => ({
    ...emptyStone,
    id: String(index + 1),
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
    const { stones, movements } = get();
    const id = newId();
    set({
      stones: {
        ...stones,
        [warehouse]: [...stones[warehouse], { ...item, id }],
      },
      movements: [
        ...movements,
        ...openingMovements(id, warehouse, item.quantity),
      ],
    });
    return id;
  },
  updateStone: (warehouse, id, item) =>
    set((state) => ({
      stones: {
        ...state.stones,
        [warehouse]: state.stones[warehouse].map((i) =>
          i.id === id ? withStoneQuantity(item, i.quantity, item.date) : i
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
    set(({ stones, movements, enabled }) => {
      const to = TRANSFER_TARGET[from];
      if (!enabled[from] || !enabled[to]) return {};
      const source = stones[from].find((i) => i.id === id);
      if (!source) return {};
      const available = parseQuantity(source.quantity);
      const moved = Math.min(quantity, available);
      if (moved <= 0) return {};

      const date = new Date().toISOString();
      const withQuantity = (item: StoneStockItem, qty: number) =>
        withStoneQuantity(item, formatQuantity(qty), date);

      // The source row stays even when emptied, so its history stays with it.
      const fromItems = stones[from].map((i) =>
        i.id === id ? withQuantity(i, available - moved) : i
      );

      // Same code in the destination means the same product: add to that row.
      const code = normalizeCode(source.code);
      const target = stones[to].find((i) => normalizeCode(i.code) === code);
      const targetId = target?.id ?? newId();
      const toItems = target
        ? stones[to].map((i) =>
            i.id === targetId
              ? withQuantity(i, parseQuantity(i.quantity) + moved)
              : i
          )
        : [...stones[to], { ...withQuantity(source, moved), id: targetId }];

      const ref = { type: 'transfer', id: newId() } as const;
      const logged = [
        { itemId: id, warehouse: from, delta: formatQuantity(-moved) },
        { itemId: targetId, warehouse: to, delta: formatQuantity(moved) },
      ].map((entry) =>
        makeMovement({ ...entry, reason: 'transfer', ref, note: '' }, date)
      );

      return {
        stones: { ...stones, [from]: fromItems, [to]: toItems },
        movements: [...movements, ...logged],
      };
    }),
});
