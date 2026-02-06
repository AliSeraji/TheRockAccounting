import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const yekan = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];

const dahgan = [
  '',
  '',
  'بیست',
  'سی',
  'چهل',
  'پنجاه',
  'شصت',
  'هفتاد',
  'هشتاد',
  'نود',
];

const dahyek = [
  'ده',
  'یازده',
  'دوازده',
  'سیزده',
  'چهارده',
  'پانزده',
  'شانزده',
  'هفده',
  'هجده',
  'نوزده',
];

const sadgan = [
  '',
  'یکصد',
  'دویست',
  'سیصد',
  'چهارصد',
  'پانصد',
  'ششصد',
  'هفتصد',
  'هشتصد',
  'نهصد',
];

const baseName = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون'];

function threeDigitToWords(num: number): string {
  if (num === 0) return '';

  const sad = Math.floor(num / 100);
  const dah = Math.floor((num % 100) / 10);
  const yek = num % 10;

  const parts: string[] = [];

  if (sad > 0) {
    parts.push(sadgan[sad]);
  }

  if (dah === 1) {
    parts.push(dahyek[yek]);
  } else {
    if (dah > 1) {
      parts.push(dahgan[dah]);
    }
    if (yek > 0) {
      parts.push(yekan[yek]);
    }
  }

  return parts.join(' و ');
}

export function numberToWords(num: number): string {
  if (num === 0) return 'صفر';
  if (num < 0) return 'منفی ' + numberToWords(-num);

  num = Math.floor(num);

  const parts: string[] = [];
  let baseIndex = 0;

  while (num > 0) {
    const threeDigits = num % 1000;
    if (threeDigits > 0) {
      const words = threeDigitToWords(threeDigits);
      if (baseIndex > 0) {
        parts.unshift(`${words} ${baseName[baseIndex]}`);
      } else {
        parts.unshift(words);
      }
    }
    num = Math.floor(num / 1000);
    baseIndex++;
  }

  return parts.join(' و ');
}

export function formatNumber(num: number): string {
  return num.toLocaleString('fa-IR');
}

export function convertToPersianDigits(num: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num)
    .replace(/\d/g, (digit) => persianDigits[Number(digit)])
    .replace(/\./g, '/');
}

export function convertToEnDigits(num: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/[۰-۹]/g, (digit) =>
    String(persianDigits.indexOf(digit))
  );
}

export function persianNumberToText(num: string | number): string {
  const englishNum = convertToEnDigits(num);
  const parsed = parseFloat(englishNum);
  if (isNaN(parsed)) return '';
  return numberToWords(parsed);
}

export const cleanTrailingZeros = (str: string): string => {
  if (str.includes('.') && !str.endsWith('.')) {
    return str.replace(/\.?0+$/, '');
  }
  return str;
};
