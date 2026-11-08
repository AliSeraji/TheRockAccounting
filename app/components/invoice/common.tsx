import type { InvoiceDataType } from '~/store/types';
import {
  DELETE_COLUMN,
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '../floating-table/columns';

export type InvoiceTableItem = {
  label: string;
  width: string;
};

// The stone table's columns between the row number and the delete button.
// The editable rows and the saved invoice's table both read them.
export const STONE_COLUMNS = {
  code: { label: 'کد', width: 'w-[9%]' },
  type: { label: 'نوع سنگ', width: 'w-[15%]', align: 'start' },
  thickness: { label: 'قطر', unit: 'سانتی‌متر', width: 'w-[7%]' },
  quantity: { label: 'تعداد', unit: 'عدد', width: 'w-[7%]' },
  width: { label: 'عرض', unit: 'متر', width: 'w-[7%]' },
  length: { label: 'طول', unit: 'متر', width: 'w-[7%]' },
  area: { label: 'متراژ', unit: 'مترمربع', width: 'w-[10%]' },
  price: { label: 'بهاء', unit: 'ریال', width: 'w-[12%]' },
  total: { label: 'مبلغ کل', unit: 'ریال', width: 'w-[18%]' },
} satisfies Record<string, FloatingColumn>;

export const invoiceTableItems: FloatingColumn[] = [
  ROW_NUMBER_COLUMN,
  ...Object.values(STONE_COLUMNS),
  DELETE_COLUMN,
];

export const deliveryTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'قطر', width: 'w-[8%]' },
  { label: 'عرض', width: 'w-[8%]' },
  { label: 'طول', width: 'w-[20%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'متراژ', width: 'w-[5%]' },
];

export const salesTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'قطر ', width: 'w-[8%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'عرض ', width: 'w-[8%]' },
  { label: 'طول ', width: 'w-[8%]' },
  { label: 'متراژ ', width: 'w-[12%]' },
  { label: 'بهاء (ریال)', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
];

export const requestUpperTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'شرح', width: 'w-[15%]' },
  { label: 'عرض (متر)', width: 'w-[10%]' },
  { label: 'طول (متر)', width: 'w-[10%]' },
  { label: 'قطر (سانتی متر)', width: 'w-[10%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[10%]' },
  { label: 'واحد', width: 'w-[10%]' },
  { label: 'توضیحات', width: 'w-[25%]' },
];

export const requestLowerTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'شرح خدمات', width: 'w-[45%]' },
  { label: 'مقدار', width: 'w-[10%]' },
  { label: 'توضیحات', width: 'w-[40%]' },
];

export interface ReceiptProps {
  data: InvoiceDataType;
  items: InvoiceDataType['items'];
  startIndex: number;
  isLastPage: boolean;
  pageNumber: number;
  totalPages: number;
  logo: string | null;
  companyName: string;
}
