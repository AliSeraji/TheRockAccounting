import type { InvoiceDataType } from '~/store/types';

export type InvoiceTableItem = {
  label: string;
  width: string;
};

export const invoiceTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'قطر (سانتی متر)', width: 'w-[10%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'عرض (متر)', width: 'w-[8%]' },
  { label: 'طول (متر)', width: 'w-[8%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[12%]' },
  { label: 'بهاء (ریال)', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
  { label: 'عملیات', width: 'w-[5%]' },
];

export const deliveryTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: '(سانتی متر) قطر', width: 'w-[8%]' },
  { label: 'عرض (متر)', width: 'w-[8%]' },
  { label: 'طول (سانتی متر)', width: 'w-[20%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[5%]' },
];

export const salesTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'قطر (سانتی متر)', width: 'w-[8%]' },
  { label: 'تعداد', width: 'w-[5%]' },
  { label: 'عرض (متر)', width: 'w-[8%]' },
  { label: 'طول (متر)', width: 'w-[8%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[12%]' },
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
  { label: 'شرح خدمات', width: 'w-[50%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[8%]' },
  { label: 'واحد', width: 'w-[5%]' },
  { label: 'توضیحات', width: 'w-[32%]' },
];

export interface ReceiptProps {
  data: InvoiceDataType;
  items: InvoiceDataType['items'];
  startIndex: number;
  isLastPage: boolean;
  pageNumber: number;
  totalPages: number;
}
