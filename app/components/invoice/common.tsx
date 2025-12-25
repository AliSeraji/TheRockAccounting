export type InvoiceTableItem = {
  label: string;
  width: string;
};

export const invoiceTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'ضخامت تقریبی', width: 'w-[8%]' },
  { label: 'تعداد', width: 'w-[7%]' },
  { label: 'طول', width: 'w-[8%]' },
  { label: 'عرض', width: 'w-[8%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[12%]' },
  { label: 'بهاء', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
  { label: 'عملیات', width: 'w-[5%]' },
];
