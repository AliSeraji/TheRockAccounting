import type { StateCreator } from 'zustand';
import type { MiscItem, MiscSlice, WarehouseStore } from '../types';
import { newId } from '~/lib/id';
import { openingMovements } from '../helpers';

export const emptyMisc: MiscItem = {
  id: '',
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
    const { misc, movements } = get();
    const id = newId();
    set({
      misc: [...misc, { ...item, id }],
      movements: [...movements, ...openingMovements(id, 'misc', item.quantity)],
    });
    return id;
  },
  updateMisc: (id, item) =>
    set((state) => ({
      misc: state.misc.map((i) =>
        i.id === id ? { ...item, quantity: i.quantity } : i
      ),
    })),
  removeMisc: (id) =>
    set((state) => ({ misc: state.misc.filter((i) => i.id !== id) })),
});
