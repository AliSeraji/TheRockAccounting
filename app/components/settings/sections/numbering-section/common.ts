import { convertToPersianDigits } from '~/lib/utils';

export const Months = [
  { value: '1', label: 'فروردین' },
  { value: '2', label: 'اردیبهشت' },
  { value: '3', label: 'خرداد' },
  { value: '4', label: 'تیر' },
  { value: '5', label: 'مرداد' },
  { value: '6', label: 'شهریور' },
  { value: '7', label: 'مهر' },
  { value: '8', label: 'آبان' },
  { value: '9', label: 'آذر' },
  { value: '10', label: 'دی' },
  { value: '11', label: 'بهمن' },
  { value: '12', label: 'اسفند' },
];

const getCurrentJalaliYear = (): number => {
  const formatted = new Intl.DateTimeFormat('en-US-u-ca-persian', {
    year: 'numeric',
  }).format(new Date());
  return Number(formatted.replace(/\D/g, ''));
};

const YEARS_BEFORE = 100;
const YEARS_AFTER = 20;
const CURRENT_JALALI_YEAR = getCurrentJalaliYear();

export const Years = Array.from(
  { length: YEARS_BEFORE + YEARS_AFTER + 1 },
  (_, i) => {
    const year = CURRENT_JALALI_YEAR + YEARS_AFTER - i;
    return {
      value: year.toString(),
      label: convertToPersianDigits(year.toString()),
    };
  }
);
