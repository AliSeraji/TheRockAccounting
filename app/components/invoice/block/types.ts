import type { BlockInvoiceItem } from '~/store/types';

export const BLOCK_ROW_FIELDS = {
  BLOCK_CODE: 'blockCode',
  BLOCK_TYPE: 'blockType',
  LENGTH: 'length',
  WIDTH: 'width',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  VOLUME: 'volume',
  PRICE: 'price',
  TOTAL: 'total',
} as const satisfies Record<string, keyof BlockInvoiceItem>;

export type BlockRowField =
  (typeof BLOCK_ROW_FIELDS)[keyof typeof BLOCK_ROW_FIELDS];
