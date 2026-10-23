export type StoneWarehouseId = 'main' | 'secondary';

export type WarehouseId = StoneWarehouseId | 'block' | 'misc' | 'raw';

// Item ids are UUIDs (`newId` in ~/lib/id). An empty id marks an unsaved item.
//
// Every warehouse slice treats stock (a block's volume) the same way: `add*`
// logs the starting stock as an 'opening' movement, `update*` keeps the stored
// stock (only `adjustStock` and transfers change it), and `remove*` leaves the
// item's movements in the log.

export type StoneStockItem = {
  id: string;
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
  addStone: (warehouse: StoneWarehouseId, item: StoneStockItem) => string;
  updateStone: (
    warehouse: StoneWarehouseId,
    id: string,
    item: StoneStockItem
  ) => void;
  removeStone: (warehouse: StoneWarehouseId, id: string) => void;
  // Moves `quantity` of an item to the paired warehouse, merging by code, and
  // logs it as a pair of 'transfer' movements. The source row stays, even at
  // zero. Does nothing if either warehouse is disabled.
  transferStone: (from: StoneWarehouseId, id: string, quantity: number) => void;
}

// Quarried stone blocks, bought and sold by volume rather than by piece.
export type BlockItem = {
  id: string;
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
  addBlock: (item: BlockItem) => string;
  updateBlock: (id: string, item: BlockItem) => void;
  removeBlock: (id: string) => void;
}

// Purchased goods that are used up or kept for a specific customer.
export type MiscItem = {
  id: string;
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
  addMisc: (item: MiscItem) => string;
  updateMisc: (id: string, item: MiscItem) => void;
  removeMisc: (id: string) => void;
}

// Production raw materials, tracked for the company's internal use only.
export type RawItem = {
  id: string;
  description: string;
  quantity: string;
  purchasePrice: string;
  notes: string;
  date: string;
};

export interface RawSlice {
  raw: RawItem[];
  // Returns the id assigned to the new item.
  addRaw: (item: RawItem) => string;
  updateRaw: (id: string, item: RawItem) => void;
  removeRaw: (id: string) => void;
}

// Why an item's stock changed.
export type StockMovementReason =
  // The stock an item starts with.
  | 'opening'
  | 'purchase'
  // Only sales invoices move stock, never pre-invoices.
  | 'sale'
  // Written in pairs: one out of the source, one into the destination.
  | 'transfer'
  // A manual correction, e.g. after counting the stock.
  | 'adjustment'
  // Undoes an earlier movement, e.g. for a cancelled invoice.
  | 'reversal';

// The record a movement came from.
export type StockMovementRef = {
  type: 'invoice' | 'transfer' | 'movement';
  id: string;
};

// One change to one item's stock. Movements are only ever added, never edited
// or deleted; an item's stock is the sum of its movements' deltas.
export type StockMovement = {
  id: string;
  itemId: string;
  warehouse: WarehouseId;
  // Signed decimal string. Its unit follows the warehouse: m³ for blocks,
  // pieces everywhere else.
  delta: string;
  reason: StockMovementReason;
  ref: StockMovementRef | null;
  note: string;
  // ISO timestamp
  date: string;
};

export interface MovementsSlice {
  // Oldest first. Written only by the actions that change stock, in the same
  // update as the item's quantity, so the two always agree.
  movements: StockMovement[];
  // Sets an item's stock (a block's volume) to `stock`, e.g. after counting
  // it, and logs the difference as an 'adjustment' with `note` as its reason.
  // Does nothing if the stock doesn't change or the warehouse is disabled.
  adjustStock: (
    warehouse: WarehouseId,
    id: string,
    stock: number,
    note: string
  ) => void;
}

// Which item the dialog shows. Only one warehouse is on screen at a time, so
// a single editor serves all of them.
export type ItemEditor =
  | { mode: 'closed' }
  | { mode: 'view'; id: string }
  | { mode: 'edit'; id: string }
  | { mode: 'create' };

export interface EditorSlice {
  editor: ItemEditor;
  openItem: (id: string) => void;
  openNewItem: () => void;
  startEditing: (id: string) => void;
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
  MovementsSlice &
  EditorSlice &
  NavigationSlice &
  StatusSlice;
