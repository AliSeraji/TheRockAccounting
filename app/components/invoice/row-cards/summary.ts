import {
  cleanTrailingZeros,
  convertToEnDigits,
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
import { BLOCK_MEASURE_UNIT, STONE_MEASURE_UNIT } from './fields';
import type { TotalStat } from './RowCardTotals';

// What a closed row card shows. Each part is '' while the row has no value
// for it.
export interface RowSummary {
  title: string;
  code: string;
  meta: string;
  amount: string;
  measure: string;
}

// Inputs can be '' or '-' (cleared), and computed fields are '0' until the
// row has what they need, so only a positive number counts as a value.
const hasValue = (value: string): boolean =>
  parseFloat(convertToEnDigits(value)) > 0;

const digits = (value: string): string =>
  convertToPersianDigits(cleanTrailingZeros(value.trim()));

export const formatValue = (value: string): string =>
  hasValue(value) ? digits(value) : '';

export const formatMeasure = (value: string, unit: string): string =>
  hasValue(value) ? `${digits(value)} ${unit}` : '';

export const formatAmount = (value: string): string =>
  hasValue(value) ? formatRialAmount(digits(value)) : '';

const joinMeta = (parts: (string | false)[]): string =>
  parts.filter(Boolean).join(' · ');

export const stoneSummary = (item: StoneItem): RowSummary => ({
  title: item.stoneType.trim(),
  code: convertToPersianDigits(item.stoneCode.trim()),
  meta: joinMeta([
    hasValue(item.quantity) && `${digits(item.quantity)} عدد`,
    hasValue(item.width) &&
      hasValue(item.length) &&
      `${digits(item.width)}×${digits(item.length)} م`,
    hasValue(item.thickness) && `قطر ${digits(item.thickness)}`,
  ]),
  amount: formatAmount(item.total),
  measure: formatMeasure(item.area, STONE_MEASURE_UNIT),
});

export const blockSummary = (item: BlockInvoiceItem): RowSummary => ({
  title: item.blockType.trim(),
  code: convertToPersianDigits(item.blockCode.trim()),
  meta: joinMeta([
    hasValue(item.length) &&
      hasValue(item.width) &&
      hasValue(item.height) &&
      `${digits(item.length)}×${digits(item.width)}×${digits(item.height)} م`,
    hasValue(item.weight) && `${digits(item.weight)} تن`,
  ]),
  amount: formatAmount(item.total),
  measure: formatMeasure(item.volume, BLOCK_MEASURE_UNIT),
});

// A service has no code or measure; its line is quantity × unit price, then
// the description.
export const serviceSummary = (service: ServiceItem): RowSummary => ({
  title: service.serviceType.trim(),
  code: '',
  meta: joinMeta([
    hasValue(service.quantity) &&
      hasValue(service.unitPrice) &&
      `${digits(service.quantity)} × ${formatAmount(service.unitPrice)}`,
    convertToPersianDigits(service.description.trim()),
  ]),
  amount: formatAmount(service.total),
  measure: '',
});

// The totals box under the cards, formatted like the table's footer row.
const totalAmountStat = (totalAmount: number): TotalStat => ({
  label: 'مبلغ کل (ریال)',
  value: formatRialAmount(convertToPersianDigits(totalAmount)),
  highlight: true,
});

export const stoneTotalStats = (totals: InvoiceTotals): TotalStat[] => [
  { label: 'تعداد', value: convertToPersianDigits(totals.totalQuantity) },
  {
    label: 'متراژ (مترمربع)',
    value: convertToPersianDigits(totals.totalArea),
  },
  totalAmountStat(totals.totalAmount),
];

export const blockTotalStats = (totals: BlockInvoiceTotals): TotalStat[] => [
  { label: 'وزن (تن)', value: convertToPersianDigits(totals.totalWeight) },
  {
    label: 'متراژ (مترمکعب)',
    value: convertToPersianDigits(totals.totalVolume),
  },
  totalAmountStat(totals.totalAmount),
];

export const serviceTotalStats = (totalServicesAmount: number): TotalStat[] => [
  totalAmountStat(totalServicesAmount),
];
