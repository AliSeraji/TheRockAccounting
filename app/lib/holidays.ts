import { addDays, format, getDay } from 'date-fns-jalali';

// Official solar (Jalali) holidays, keyed "month/day"
const SOLAR_HOLIDAYS: Record<string, string> = {
  '1/1': 'عید نوروز',
  '1/2': 'عید نوروز',
  '1/3': 'عید نوروز',
  '1/4': 'عید نوروز',
  '1/12': 'روز جمهوری اسلامی',
  '1/13': 'روز طبیعت',
  '3/14': 'رحلت امام خمینی',
  '3/15': 'قیام ۱۵ خرداد',
  '11/22': 'پیروزی انقلاب اسلامی',
  '12/29': 'ملی شدن صنعت نفت',
};

// Official lunar (Hijri) holidays, keyed "month/day"
const LUNAR_HOLIDAYS: Record<string, string> = {
  '1/9': 'تاسوعای حسینی',
  '1/10': 'عاشورای حسینی',
  '2/20': 'اربعین حسینی',
  '2/28': 'رحلت پیامبر اکرم و شهادت امام حسن مجتبی (ع)',
  '3/8': 'شهادت امام حسن عسکری (ع)',
  '3/17': 'میلاد پیامبر اکرم و امام جعفر صادق (ع)',
  '6/3': 'شهادت حضرت فاطمه زهرا (س)',
  '7/13': 'ولادت امام علی (ع)',
  '7/27': 'مبعث پیامبر اکرم',
  '8/15': 'ولادت حضرت قائم (عج)',
  '9/21': 'شهادت امام علی (ع)',
  '10/1': 'عید سعید فطر',
  '10/2': 'تعطیل به مناسبت عید سعید فطر',
  '10/25': 'شهادت امام جعفر صادق (ع)',
  '12/10': 'عید سعید قربان',
  '12/18': 'عید سعید غدیر خم',
};

// Iran sets lunar dates by moon sighting, so a computed date can be a day
// off. Correct them from the official calendar here, keyed "yyyy/M/d"
// (Jalali). The value replaces that day's holidays; [] removes them.
const HOLIDAY_OVERRIDES: Record<string, string[]> = {};

const hijriFormatter = new Intl.DateTimeFormat(
  'en-u-ca-islamic-umalqura-nu-latn',
  { month: 'numeric', day: 'numeric' }
);

const toHijri = (date: Date) => {
  const parts = hijriFormatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value);
  return { month: get('month'), day: get('day') };
};

export const getHolidays = (date: Date): string[] => {
  const override = HOLIDAY_OVERRIDES[format(date, 'yyyy/M/d')];
  if (override) return override;

  const titles: string[] = [];
  const solar = SOLAR_HOLIDAYS[format(date, 'M/d')];
  if (solar) titles.push(solar);

  const hijri = toHijri(date);
  const lunar = LUNAR_HOLIDAYS[`${hijri.month}/${hijri.day}`];
  if (lunar) titles.push(lunar);
  // Last day of Safar (29th or 30th)
  if (hijri.month === 2 && toHijri(addDays(date, 1)).month === 3) {
    titles.push('شهادت امام رضا (ع)');
  }

  return titles;
};

export const isFriday = (date: Date) => getDay(date) === 5;

export const isHoliday = (date: Date) =>
  isFriday(date) || getHolidays(date).length > 0;
