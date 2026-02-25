import { create } from 'zustand/react';
import type { WarehouseItem, WarehouseState } from './types';
import warehouseData from '../../dummy_data/stones.json';
const initialState = {
  items: warehouseData.map((item, index) => ({
    ...item,
    id: index + 1,
    timestamp: '',
  })),
};

export const useWarehouseStore = create<WarehouseState>((set, get) => ({
  ...initialState,
  addItem: (item: WarehouseItem) =>
    set((state) => ({ items: [...state.items, item] })),
  updateItem: (id: number, field: keyof WarehouseItem, value: string) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    })),
  removeItem: (id: number) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
