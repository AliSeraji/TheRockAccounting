import {
  getDate,
  getMonth,
  getYear,
  startOfMonth,
  startOfWeek,
  subDays,
} from 'date-fns-jalali';
import { convertToEnDigits, convertToPersianDigits } from './utils';

export type DatePreset = 'today' | 'yesterday' | 'week' | 'month';

// Both ends of a date range, as `jalaliKey`s.
export type DayRangeKeys = { from: number; to: number };

const MONTHS = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

// A Jalali date as one comparable number: '1405/8/9' → 14050809. Dates are
// stored unpadded, so the strings themselves don't sort. Null when `date`
// isn't a y/m/d date.
export function jalaliKey(date: string): number | null {
  const parts = convertToEnDigits(date).split('/').map(Number);
  if (parts.length !== 3 || !parts.every((n) => Number.isInteger(n))) {
    return null;
  }
  const [year, month, day] = parts;
  return year * 10000 + month * 100 + day;
}

const keyOf = (date: Date): number =>
  getYear(date) * 10000 + (getMonth(date) + 1) * 100 + getDate(date);

// The days a preset covers, counted back from `now`. A week starts on
// Saturday, a month on its 1st.
export function presetRange(
  preset: DatePreset,
  now: Date = new Date()
): DayRangeKeys {
  const today = keyOf(now);
  switch (preset) {
    case 'today':
      return { from: today, to: today };
    case 'yesterday': {
      const yesterday = keyOf(subDays(now, 1));
      return { from: yesterday, to: yesterday };
    }
    case 'week':
      return { from: keyOf(startOfWeek(now, { weekStartsOn: 6 })), to: today };
    case 'month':
      return { from: keyOf(startOfMonth(now)), to: today };
  }
}

const split = (key: number) => ({
  year: Math.floor(key / 10000),
  month: Math.floor(key / 100) % 100,
  day: key % 100,
});

// with the year only when asked for.
export function dayLabel(key: number, withYear = false): string {
  const { year, month, day } = split(key);
  const text = `${day} ${MONTHS[month - 1]}${withYear ? ` ${year}` : ''}`;
  return convertToPersianDigits(text);
}

// or with years when they differ.
export function rangeLabel({ from, to }: DayRangeKeys): string {
  const start = split(from);
  const end = split(to);
  if (start.year !== end.year) {
    return `${dayLabel(from, true)} تا ${dayLabel(to, true)}`;
  }
  if (start.month !== end.month) {
    return `${dayLabel(from)} تا ${dayLabel(to)}`;
  }
  return `${convertToPersianDigits(start.day)} تا ${dayLabel(to)}`;
}
