import { create } from 'zustand';
import type { BlockItem, WarehouseStore } from './types';
import { createStonesSlice } from './sections/stones';
import { createBlocksSlice } from './sections/blocks';
import { createMiscSlice } from './sections/misc';
import { createRawSlice } from './sections/raw';
import { createMovementsSlice } from './sections/movements';
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
  ...createMovementsSlice(...state),
  ...createEditorSlice(...state),
  ...createNavigationSlice(...state),
  ...createStatusSlice(...state),
}));

// Invoices may only draw stock from the main warehouse.
export const selectInvoiceStones = (state: WarehouseStore) => state.stones.main;

const NO_BLOCKS: BlockItem[] = [];

// Block invoices draw from the block warehouse while it is enabled.
export const selectInvoiceBlocks = (state: WarehouseStore) =>
  state.enabled.block ? state.blocks : NO_BLOCKS;
