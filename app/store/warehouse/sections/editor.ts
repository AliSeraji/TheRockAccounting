import type { StateCreator } from 'zustand';
import type { EditorSlice, WarehouseStore } from '../types';

export const createEditorSlice: StateCreator<
  WarehouseStore,
  [],
  [],
  EditorSlice
> = (set) => ({
  editor: { mode: 'closed' },
  openItem: (id) => set({ editor: { mode: 'view', id } }),
  openNewItem: () => set({ editor: { mode: 'create' } }),
  startEditing: (id) => set({ editor: { mode: 'edit', id } }),
  closeEditor: () => set({ editor: { mode: 'closed' } }),
});

// Id of the item open in the dialog, used to highlight its table row.
export const selectOpenItemId = ({ editor }: WarehouseStore): number | null =>
  editor.mode === 'view' || editor.mode === 'edit' ? editor.id : null;
