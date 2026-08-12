import { create } from 'zustand/react';
import type { WarehouseItem, WarehouseState } from './types';
import warehouseData from '../../dummy_data/stones.json';

export const emptyItem: WarehouseItem = {
  id: -1,
  code: '',
  category: '',
  name: '',
  diameter: '',
  length: '',
  width: '',
  area: '',
  purchasePrice: '',
  salePrice: '',
  quantity: '',
  notes: '',
  date: '',
};

const initialState = {
  items: warehouseData.map((item, index) => ({
    ...item,
    id: index + 1,
    quantity: '',
    date: '',
  })),
  selectedItem: emptyItem,
};

export const useWarehouseStore = create<WarehouseState>((set, get) => ({
  ...initialState,
  setSelectedItem: (item: WarehouseItem) => set({ selectedItem: item }),
  updateSelectedItem: (field, value) => {
    const { selectedItem } = get();
    let newSelectedItem = { ...selectedItem, [field]: value };
    if (['width', 'length', 'quantity'].includes(field)) {
      const width = newSelectedItem.width || '0';
      const length = newSelectedItem.length || '0';
      const quantity = newSelectedItem.quantity || '0';
      const area =
        parseFloat(width) * parseFloat(length) * parseFloat(quantity);
      newSelectedItem.area = area > 0 ? area.toFixed(2).toString() : '0';
    }
    set({ selectedItem: newSelectedItem });
  },
  addItem: (item: WarehouseItem) =>
    set((state) => ({ items: [...state.items, item] })),
  updateItem: (id: number, item: WarehouseItem) => {
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? item : i)),
    }));
  },
  removeItem: (id: number) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
