import {
  DELETE_COLUMN,
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '../../floating-table/columns';

// The block table's columns between the row number and the delete button.
// The editable rows and the saved invoice's table both read them.
export const BLOCK_COLUMNS = {
  code: { label: 'کد کوپ', width: 'w-[9%]' },
  type: { label: 'نوع کوپ سنگ', width: 'w-[15%]', align: 'start' },
  length: { label: 'طول', unit: 'متر', width: 'w-[7%]' },
  width: { label: 'عرض', unit: 'متر', width: 'w-[7%]' },
  height: { label: 'ارتفاع', unit: 'متر', width: 'w-[7%]' },
  weight: { label: 'وزن', unit: 'تن', width: 'w-[7%]' },
  volume: { label: 'متراژ', unit: 'مترمکعب', width: 'w-[10%]' },
  price: { label: 'بهاء', unit: 'ریال', width: 'w-[12%]' },
  total: { label: 'مبلغ کل', unit: 'ریال', width: 'w-[18%]' },
} satisfies Record<string, FloatingColumn>;

export const blockTableItems: FloatingColumn[] = [
  ROW_NUMBER_COLUMN,
  ...Object.values(BLOCK_COLUMNS),
  DELETE_COLUMN,
];
