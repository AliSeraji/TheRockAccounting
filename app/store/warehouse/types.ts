export type StoneWarehouseId = 'main' | 'secondary';

export type WarehouseId = StoneWarehouseId | 'block' | 'misc' | 'raw';

export type StoneStockItem = {
  id: number;
  code: string;
  category: string;
  name: string;
  thickness: string;
  length: string;
  width: string;
  quantity: string;
  area: string;
  purchasePrice: string;
  wholesalePrice: string;
  partnerPrice: string;
  consumerPrice: string;
  notes: string;
  date: string;
};

export interface StonesSlice {
  stones: Record<StoneWarehouseId, StoneStockItem[]>;
  // Returns the id assigned to the new item.
  addStone: (warehouse: StoneWarehouseId, item: StoneStockItem) => number;
  updateStone: (
    warehouse: StoneWarehouseId,
    id: number,
    item: StoneStockItem
  ) => void;
  removeStone: (warehouse: StoneWarehouseId, id: number) => void;
  // Moves `quantity` of an item to the paired warehouse, merging by code.
  // Does nothing if either warehouse is disabled.
  transferStone: (from: StoneWarehouseId, id: number, quantity: number) => void;
}

// Quarried stone blocks, bought and sold by volume rather than by piece.
export type BlockItem = {
  id: number;
  code: string;
  name: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  volume: string;
  price: string;
  partnerPrice: string;
  notes: string;
  date: string;
};

export interface BlocksSlice {
  blocks: BlockItem[];
  // Returns the id assigned to the new item.
  addBlock: (item: BlockItem) => number;
  updateBlock: (id: number, item: BlockItem) => void;
  removeBlock: (id: number) => void;
}

// Purchased goods that are used up or kept for a specific customer.
export type MiscItem = {
  id: number;
  description: string;
  quantity: string;
  price: string;
  partnerPrice: string;
  notes: string;
  date: string;
};

export interface MiscSlice {
  misc: MiscItem[];
  // Returns the id assigned to the new item.
  addMisc: (item: MiscItem) => number;
  updateMisc: (id: number, item: MiscItem) => void;
  removeMisc: (id: number) => void;
}

// Production raw materials, tracked for the company's internal use only.
export type RawItem = {
  id: number;
  description: string;
  quantity: string;
  purchasePrice: string;
  notes: string;
  date: string;
};

export interface RawSlice {
  raw: RawItem[];
  // Returns the id assigned to the new item.
  addRaw: (item: RawItem) => number;
  updateRaw: (id: number, item: RawItem) => void;
  removeRaw: (id: number) => void;
}

// Which item the dialog shows. Only one warehouse is on screen at a time, so
// a single editor serves all of them.
export type ItemEditor =
  | { mode: 'closed' }
  | { mode: 'view'; id: number }
  | { mode: 'edit'; id: number }
  | { mode: 'create' };

export interface EditorSlice {
  editor: ItemEditor;
  openItem: (id: number) => void;
  openNewItem: () => void;
  startEditing: (id: number) => void;
  closeEditor: () => void;
}

export interface NavigationSlice {
  activeWarehouse: WarehouseId;
  setActiveWarehouse: (id: WarehouseId) => void;
}

export interface StatusSlice {
  // The main warehouse is always enabled; the others can be switched off.
  enabled: Record<WarehouseId, boolean>;
  setWarehouseEnabled: (id: WarehouseId, enabled: boolean) => void;
}

export type WarehouseStore = StonesSlice &
  BlocksSlice &
  MiscSlice &
  RawSlice &
  EditorSlice &
  NavigationSlice &
  StatusSlice;
