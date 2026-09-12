import type { InvoiceDataType } from '~/store/types';

export type InvoiceTableItem = {
  label: string;
  width: string;
};

export const invoiceTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[3%]' },
  { label: 'کد', width: 'w-[9%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'قطر (سانتی متر)', width: 'w-[7%]' },
  { label: 'تعداد', width: 'w-[7%]' },
  { label: 'عرض (متر)', width: 'w-[7%]' },
  { label: 'طول (متر)', width: 'w-[7%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[10%]' },
  { label: 'بهاء (ریال)', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[18%]' },
  { label: 'عملیات', width: 'w-[5%]' },
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
