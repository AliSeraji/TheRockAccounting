import {
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '../floating-table/columns';

// Placeholder for an empty cell. The mobile card leaves these values out.
export const EMPTY = '—';

// A list's row-number column on desktop, wider than an invoice table's.
export const LIST_NUMBER_COLUMN = {
  ...ROW_NUMBER_COLUMN,
  width: 'w-[5%]',
} satisfies FloatingColumn;
