import type React from 'react';
import type { InvoiceDataType } from '~/store/types';
import {
  DELETE_COLUMN,
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '../floating-table/columns';

export type InvoiceTableItem = {
  label: string;
  width: string;
  // Prints the title on its side with tight padding, so the column can be as
  // narrow as its digits.
  vertical?: boolean;
};

// The printed receipts' row number column.
export const RECEIPT_ROW_NUMBER: InvoiceTableItem = {
  label: 'ردیف',
  width: 'w-[3%]',
  vertical: true,
};

// The body cell under RECEIPT_ROW_NUMBER keeps the same tight padding.
export const RECEIPT_ROW_NUMBER_CELL = 'px-1';

// A receipt column's title, turned on its side when the column asks for it.
export function ReceiptColumnLabel({
  item,
}: {
  item: InvoiceTableItem;
}): React.ReactNode {
  if (!item.vertical) return item.label;
  return (
    <span className="inline-block rotate-180 [writing-mode:vertical-rl]">
      {item.label}
    </span>
  );
}

// The stone table's columns between the row number and the delete button.
// The editable rows and the saved invoice's table both read them.
export const STONE_COLUMNS = {
  code: { label: 'کد', width: 'w-[9%]' },
  type: { label: 'نوع سنگ', width: 'w-[15%]', align: 'start' },
  thickness: { label: 'قطر', unit: 'سانت', width: 'w-[7%]' },
  quantity: { label: 'تعداد', width: 'w-[7%]' },
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

// Receipt column widths add up to 100%, or the browser hands out the rest
// in proportion and the narrow columns grow again.
export const deliveryTableItems: InvoiceTableItem[] = [
  RECEIPT_ROW_NUMBER,
  { label: 'نوع سنگ', width: 'w-[42%]' },
  { label: 'قطر', width: 'w-[9%]' },
  { label: 'عرض', width: 'w-[9%]' },
  { label: 'طول', width: 'w-[9%]' },
  { label: 'تعداد', width: 'w-[12%]' },
  { label: 'متراژ', width: 'w-[16%]' },
];

export const salesTableItems: InvoiceTableItem[] = [
  RECEIPT_ROW_NUMBER,
  { label: 'نوع سنگ', width: 'w-[22%]' },
  { label: 'قطر', width: 'w-[6%]' },
  { label: 'تعداد', width: 'w-[6%]' },
  { label: 'عرض', width: 'w-[6%]' },
  { label: 'طول', width: 'w-[6%]' },
  { label: 'متراژ', width: 'w-[11%]' },
  { label: 'بهاء (ریال)', width: 'w-[16%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[24%]' },
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
