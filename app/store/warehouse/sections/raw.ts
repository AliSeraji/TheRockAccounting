import type { StateCreator } from 'zustand';
import type { RawItem, RawSlice, WarehouseStore } from '../types';
import { newId } from '~/lib/id';
import { openingMovements } from '../helpers';

export const emptyRaw: RawItem = {
  id: '',
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
    const { raw, movements } = get();
    const id = newId();
    set({
      raw: [...raw, { ...item, id }],
      movements: [...movements, ...openingMovements(id, 'raw', item.quantity)],
    });
    return id;
  },
  updateRaw: (id, item) =>
    set((state) => ({
      raw: state.raw.map((i) =>
        i.id === id ? { ...item, quantity: i.quantity } : i
      ),
    })),
  removeRaw: (id) =>
    set((state) => ({ raw: state.raw.filter((i) => i.id !== id) })),
});
