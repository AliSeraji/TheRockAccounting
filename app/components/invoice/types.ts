import type { StoneItem } from '~/store/types';

export const INVOICE_ROW_FIELDS = {
  STONE_TYPE: 'stoneType',
  STONE_CODE: 'stoneCode',
  THICKNESS: 'thickness',
  QUANTITY: 'quantity',
  WIDTH: 'width',
  LENGTH: 'length',
  AREA: 'area',
  PRICE: 'price',
  TOTAL: 'total',
  STOCK_ID: 'stockId',
} as const satisfies Record<string, keyof StoneItem>;

export type InvoiceRowField =
  (typeof INVOICE_ROW_FIELDS)[keyof typeof INVOICE_ROW_FIELDS];

// A warehouse entry offered by StoneCodeInput and StoneTypeInput.
export type StoneSuggestion = { id: string; code: string; name: string };
