import { BLOCK_ROW_FIELDS } from '../block/types';
import { INVOICE_ROW_FIELDS } from '../types';

// Each kind's four size fields, in the order of the table's columns. The edit
// form and the read-only view of a saved invoice both lay them out.
export const STONE_SIZE_FIELDS = [
  { label: 'قطر (سانت)', field: INVOICE_ROW_FIELDS.THICKNESS },
  { label: 'تعداد', field: INVOICE_ROW_FIELDS.QUANTITY },
  { label: 'عرض (متر)', field: INVOICE_ROW_FIELDS.WIDTH },
  { label: 'طول (متر)', field: INVOICE_ROW_FIELDS.LENGTH },
] as const;

export const BLOCK_SIZE_FIELDS = [
  { label: 'طول (متر)', field: BLOCK_ROW_FIELDS.LENGTH },
  { label: 'عرض (متر)', field: BLOCK_ROW_FIELDS.WIDTH },
  { label: 'ارتفاع (متر)', field: BLOCK_ROW_FIELDS.HEIGHT },
  { label: 'وزن (تن)', field: BLOCK_ROW_FIELDS.WEIGHT },
] as const;

export const STONE_PRICE_LABEL = 'بهاء (ریال)';
// A block's price is per cubic meter.
export const BLOCK_PRICE_LABEL = 'بهاء هر مترمکعب (ریال)';
export const SERVICE_PRICE_LABEL = 'بهاء واحد (ریال)';

export const STONE_MEASURE_UNIT = 'م²';
export const BLOCK_MEASURE_UNIT = 'م³';
