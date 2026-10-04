import type { StateCreator } from 'zustand';
import type { StatusSlice, WarehouseStore } from '../types';
import { canBeDisabled } from '../helpers';

export const createStatusSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  StatusSlice
> = (set) => ({
  // Optional warehouses start off and are enabled when the user needs them.
  enabled: {
    main: true,
    secondary: false,
    block: false,
    misc: false,
    raw: false,
  },
  setWarehouseEnabled: (id, enabled) => {
    if (!canBeDisabled(id)) return;
    set((state) => ({
      enabled: { ...state.enabled, [id]: enabled },
      editor: enabled ? state.editor : { mode: 'closed' },
    }));
  },
});
