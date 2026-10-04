import { format } from 'date-fns-jalali';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';

export const EMPTY = '—';

// Isolates a negative number as LTR so the minus stays in front in RTL text.
const isolateNegative = (text: string): string =>
  text.startsWith('-') ? `\u2066${text}\u2069` : text;

export const formatNumber = (value: string): string =>
  value ? isolateNegative(convertToPersianDigits(value)) : EMPTY;

export const formatPrice = (value: string): string =>
  value ? formatRialAmount(convertToPersianDigits(value)) : EMPTY;

// Dates are stored as ISO strings and shown in the Jalali calendar.
export const formatDateTime = (iso: string): string =>
  iso
    ? convertToPersianDigits(format(new Date(iso), 'yyyy/MM/dd - HH:mm'))
    : EMPTY;
