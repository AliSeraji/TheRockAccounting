import { create } from 'zustand';
import type { WarehouseStore } from './types';
import { createStonesSlice } from './sections/stones';
import { createBlocksSlice } from './sections/blocks';
import { createMiscSlice } from './sections/misc';
import { createRawSlice } from './sections/raw';
import { createEditorSlice } from './sections/editor';
import { createNavigationSlice } from './sections/navigation';
import { createStatusSlice } from './sections/status';

export { emptyStone } from './sections/stones';
export { emptyBlock } from './sections/blocks';
export { emptyMisc } from './sections/misc';
export { emptyRaw } from './sections/raw';
export { selectOpenItemId } from './sections/editor';

export const useWarehouseStore = create<WarehouseStore>()((...state) => ({
  ...createStonesSlice(...state),
  ...createBlocksSlice(...state),
  ...createMiscSlice(...state),
  ...createRawSlice(...state),
  ...createEditorSlice(...state),
  ...createNavigationSlice(...state),
  ...createStatusSlice(...state),
}));

// Invoices may only draw stock from the main warehouse.
export const selectInvoiceStones = (state: WarehouseStore) => state.stones.main;
