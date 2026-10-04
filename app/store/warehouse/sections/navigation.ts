import type { StateCreator } from 'zustand';
import type { NavigationSlice, WarehouseStore } from '../types';

export const createNavigationSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  NavigationSlice
> = (set) => ({
  activeWarehouse: 'main',
  // An open item belongs to the previous warehouse, so close it on switch.
  setActiveWarehouse: (id) =>
    set({ activeWarehouse: id, editor: { mode: 'closed' } }),
});
