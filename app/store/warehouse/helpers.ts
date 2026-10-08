import type {
  BlockItem,
  StoneStockItem,
  StoneWarehouseId,
  WarehouseId,
} from './types';

// Invoices depend on the main warehouse, so it can never be switched off.
export const canBeDisabled = (id: WarehouseId): boolean => id !== 'main';

// Stock can only move between the main and secondary warehouses.
export const TRANSFER_TARGET: Record<StoneWarehouseId, StoneWarehouseId> = {
  main: 'secondary',
  secondary: 'main',
};

export const calcStoneArea = ({
  length,
  width,
  quantity,
}: Pick<StoneStockItem, 'length' | 'width' | 'quantity'>): string => {
  const area =
    parseFloat(length || '0') *
    parseFloat(width || '0') *
    parseFloat(quantity || '0');
  // A negative quantity gives a negative area, showing the shortfall.
  return Number.isFinite(area) && area !== 0 ? area.toFixed(2) : '0';
};

const AREA_INPUTS: (keyof StoneStockItem)[] = ['length', 'width', 'quantity'];

// Keeps the area in sync while a stone is being edited.
export const deriveStone = (
  item: StoneStockItem,
  field: keyof StoneStockItem
): StoneStockItem =>
  AREA_INPUTS.includes(field) ? { ...item, area: calcStoneArea(item) } : item;

export const calcBlockVolume = ({
  length,
  width,
  height,
}: Pick<BlockItem, 'length' | 'width' | 'height'>): string => {
  const volume =
    parseFloat(length || '0') *
    parseFloat(width || '0') *
    parseFloat(height || '0');
  return Number.isFinite(volume) && volume !== 0 ? volume.toFixed(2) : '0';
};

const VOLUME_INPUTS: (keyof BlockItem)[] = ['length', 'width', 'height'];

// Keeps the volume in sync while a block is being edited.
export const deriveBlock = (
  item: BlockItem,
  field: keyof BlockItem
): BlockItem =>
  VOLUME_INPUTS.includes(field)
    ? { ...item, volume: calcBlockVolume(item) }
    : item;

export const nextId = (items: { id: number }[]): number =>
  items.reduce((max, item) => Math.max(max, item.id), 0) + 1;

export const parseQuantity = (quantity: string): number =>
  parseFloat(quantity) || 0;

export const isNegativeStock = (item: { quantity: string }): boolean =>
  parseQuantity(item.quantity) < 0;

// Round away float noise (0.1 + 0.2) before storing as a string.
export const formatQuantity = (quantity: number): string =>
  String(parseFloat(quantity.toFixed(4)));

export const normalizeCode = (code: string): string =>
  code.trim().toLowerCase();
