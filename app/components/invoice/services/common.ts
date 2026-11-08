import {
  DELETE_COLUMN,
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '../../floating-table/columns';

// The services table's columns between the row number and the delete
// button. The editable rows and the saved invoice's table both read them.
export const SERVICE_COLUMNS = {
  service: { label: 'شرح خدمات', width: 'w-[22%]', align: 'start' },
  description: { label: 'توضیحات', width: 'w-[25%]', align: 'start' },
  quantity: { label: 'مقدار', width: 'w-[10%]' },
  unitPrice: { label: 'بهاء واحد', unit: 'ریال', width: 'w-[15%]' },
  total: { label: 'مبلغ کل', unit: 'ریال', width: 'w-[20%]' },
} satisfies Record<string, FloatingColumn>;

export const servicesTableItems: FloatingColumn[] = [
  ROW_NUMBER_COLUMN,
  ...Object.values(SERVICE_COLUMNS),
  DELETE_COLUMN,
];
