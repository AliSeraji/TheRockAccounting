import {
  cleanTrailingZeros,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import type {
  BlockInvoiceItem,
  BlockInvoiceTotals,
  InvoiceTotals,
  ServiceItem,
  StoneItem,
} from '~/store/types';
import { EMPTY } from '~/components/data-table/constants';
import type { DetailColumn } from './DetailsTable';

// Cleared numeric inputs hold '-'.
const hasValue = (value: string): boolean =>
  value.trim() !== '' && value.trim() !== '-';

const text = (value: string): string =>
  hasValue(value) ? convertToPersianDigits(value) : EMPTY;

const amount = (value: string | number): string =>
  hasValue(String(value))
    ? formatRialAmount(convertToPersianDigits(String(value)))
    : EMPTY;

const total = (value: number): string =>
  value ? convertToPersianDigits(cleanTrailingZeros(String(value))) : EMPTY;

const rowNumber = { label: 'ردیف', width: 'w-[4%]' };

export const stoneItemColumns = (
  totals: InvoiceTotals
): DetailColumn<StoneItem>[] => [
  { ...rowNumber, render: (_, index) => convertToPersianDigits(index + 1) },
  { label: 'کد', width: 'w-[9%]', render: (item) => text(item.stoneCode) },
  {
    label: 'نوع سنگ',
    width: 'w-[16%]',
    render: (item) => text(item.stoneType),
  },
  {
    label: 'قطر (سانتی متر)',
    width: 'w-[8%]',
    render: (item) => text(item.thickness),
  },
  {
    label: 'تعداد',
    width: 'w-[7%]',
    render: (item) => text(item.quantity),
    footer: total(totals.totalQuantity),
  },
  { label: 'عرض (متر)', width: 'w-[8%]', render: (item) => text(item.width) },
  { label: 'طول (متر)', width: 'w-[8%]', render: (item) => text(item.length) },
  {
    label: 'متراژ (مترمربع)',
    width: 'w-[10%]',
    render: (item) => text(cleanTrailingZeros(item.area)),
    footer: total(totals.totalArea),
  },
  {
    label: 'بهاء (ریال)',
    width: 'w-[12%]',
    render: (item) => amount(item.price),
  },
  {
    label: 'مبلغ کل (ریال)',
    width: 'w-[18%]',
    render: (item) => amount(item.total),
    footer: amount(totals.totalAmount),
  },
];

export const blockItemColumns = (
  totals: BlockInvoiceTotals
): DetailColumn<BlockInvoiceItem>[] => [
  { ...rowNumber, render: (_, index) => convertToPersianDigits(index + 1) },
  { label: 'کد کوپ', width: 'w-[9%]', render: (item) => text(item.blockCode) },
  {
    label: 'نوع کوپ سنگ',
    width: 'w-[16%]',
    render: (item) => text(item.blockType),
  },
  { label: 'طول (متر)', width: 'w-[7%]', render: (item) => text(item.length) },
  { label: 'عرض (متر)', width: 'w-[7%]', render: (item) => text(item.width) },
  {
    label: 'ارتفاع (متر)',
    width: 'w-[7%]',
    render: (item) => text(item.height),
  },
  {
    label: 'وزن (تن)',
    width: 'w-[8%]',
    render: (item) => text(item.weight),
    footer: total(totals.totalWeight),
  },
  {
    label: 'متراژ (مترمکعب)',
    width: 'w-[10%]',
    render: (item) => text(cleanTrailingZeros(item.volume)),
    footer: total(totals.totalVolume),
  },
  {
    label: 'بهاء (ریال)',
    width: 'w-[12%]',
    render: (item) => amount(item.price),
  },
  {
    label: 'مبلغ کل (ریال)',
    width: 'w-[18%]',
    render: (item) => amount(item.total),
    footer: amount(totals.totalAmount),
  },
];

export const serviceColumns = (
  totalServicesAmount: number
): DetailColumn<ServiceItem>[] => [
  { ...rowNumber, render: (_, index) => convertToPersianDigits(index + 1) },
  {
    label: 'شرح خدمات',
    width: 'w-[24%]',
    render: (service) => text(service.serviceType),
  },
  {
    label: 'توضیحات',
    width: 'w-[27%]',
    render: (service) => text(service.description),
  },
  {
    label: 'مقدار',
    width: 'w-[10%]',
    render: (service) => text(service.quantity),
  },
  {
    label: 'بهاء واحد (ریال)',
    width: 'w-[15%]',
    render: (service) => amount(service.unitPrice),
  },
  {
    label: 'مبلغ کل (ریال)',
    width: 'w-[20%]',
    render: (service) => amount(service.total),
    footer: amount(totalServicesAmount),
  },
];
