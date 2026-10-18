import type { StateCreator } from 'zustand';
import type { BlockItem, BlocksSlice, WarehouseStore } from '../types';
import { newId } from '~/lib/id';

export const emptyBlock: BlockItem = {
  id: '',
  code: '',
  name: '',
  length: '',
  width: '',
  height: '',
  weight: '',
  volume: '',
  price: '',
  partnerPrice: '',
  notes: '',
  date: '',
};

export const createBlocksSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  BlocksSlice
> = (set, get) => ({
  blocks: [],
  addBlock: (item) => {
    const { blocks } = get();
    const id = newId();
    set({ blocks: [...blocks, { ...item, id }] });
    return id;
  },
  updateBlock: (id, item) =>
    set((state) => ({
      blocks: state.blocks.map((i) => (i.id === id ? item : i)),
    })),
  removeBlock: (id) =>
    set((state) => ({ blocks: state.blocks.filter((i) => i.id !== id) })),
});
