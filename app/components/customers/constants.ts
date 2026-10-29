import type {
  AccountNature,
  AccountRole,
  PersonType,
  SaleRate,
} from '~/store/customers/types';

export const PERSON_TYPE_OPTIONS: readonly PersonType[] = ['حقیقی', 'حقوقی'];

export const ACCOUNT_ROLE_OPTIONS: readonly AccountRole[] = [
  'مشتری',
  'تامین‌کننده',
  'مشتری و تامین‌کننده',
  'بازاریاب',
  'کارمند',
  'سایر',
];

export const ACCOUNT_NATURE_OPTIONS: readonly AccountNature[] = [
  'تجاری',
  'غیرتجاری',
];

export const SALE_RATE_OPTIONS: readonly SaleRate[] = [
  'قیمت مصرف‌کننده',
  'قیمت همکار',
  'قیمت عمده',
  'قیمت ویژه',
];

export const roleColors: Record<AccountRole, string> = {
  مشتری: 'bg-teal-100 text-teal-800',
  تامین‌کننده: 'bg-amber-100 text-amber-800',
  'مشتری و تامین‌کننده': 'bg-indigo-100 text-indigo-800',
  بازاریاب: 'bg-purple-100 text-purple-800',
  کارمند: 'bg-sky-100 text-sky-800',
  سایر: 'bg-slate-100 text-slate-700',
};
