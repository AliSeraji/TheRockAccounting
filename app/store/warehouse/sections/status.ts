import type { StateCreator } from 'zustand';
import type { StatusSlice, WarehouseStore } from '../types';
import { canBeDisabled } from '../helpers';

export const createStatusSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  StatusSlice
> = (set) => ({
  // Every warehouse starts on; the optional ones can be switched off later.
  enabled: {
    main: true,
    secondary: true,
    block: true,
    misc: true,
    raw: true,
  },
  setWarehouseEnabled: (id, enabled) => {
    if (!canBeDisabled(id)) return;
    set((state) => ({
      enabled: { ...state.enabled, [id]: enabled },
      editor: enabled ? state.editor : { mode: 'closed' },
    }));
  },
});
