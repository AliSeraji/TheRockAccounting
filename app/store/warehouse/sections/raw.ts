import type { StateCreator } from 'zustand';
import type { RawItem, RawSlice, WarehouseStore } from '../types';
import { nextId } from '../helpers';

export const emptyRaw: RawItem = {
  id: -1,
  description: '',
  quantity: '',
  purchasePrice: '',
  notes: '',
  date: '',
};

export const createRawSlice: StateCreator<WarehouseStore, [], [], RawSlice> = (
  set,
  get
) => ({
  raw: [],
  addRaw: (item) => {
    const { raw } = get();
    const id = nextId(raw);
    set({ raw: [...raw, { ...item, id }] });
    return id;
  },
  updateRaw: (id, item) =>
    set((state) => ({
      raw: state.raw.map((i) => (i.id === id ? item : i)),
    })),
  removeRaw: (id) =>
    set((state) => ({ raw: state.raw.filter((i) => i.id !== id) })),
});
