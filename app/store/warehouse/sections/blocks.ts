import type { StateCreator } from 'zustand';
import type { BlockItem, BlocksSlice, WarehouseStore } from '../types';
import { nextId } from '../helpers';

export const emptyBlock: BlockItem = {
  id: -1,
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
    const id = nextId(blocks);
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
