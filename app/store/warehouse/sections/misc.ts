import type { StateCreator } from 'zustand';
import type { MiscItem, MiscSlice, WarehouseStore } from '../types';
import { nextId } from '../helpers';

export const emptyMisc: MiscItem = {
  id: -1,
  description: '',
  quantity: '',
  price: '',
  partnerPrice: '',
  notes: '',
  date: '',
};

export const createMiscSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  MiscSlice
> = (set, get) => ({
  misc: [],
  addMisc: (item) => {
    const { misc } = get();
    const id = nextId(misc);
    set({ misc: [...misc, { ...item, id }] });
    return id;
  },
  updateMisc: (id, item) =>
    set((state) => ({
      misc: state.misc.map((i) => (i.id === id ? item : i)),
    })),
  removeMisc: (id) =>
    set((state) => ({ misc: state.misc.filter((i) => i.id !== id) })),
});
