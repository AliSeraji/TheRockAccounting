import type { WarehouseItem } from '~/store/warehouse/types';
import type { emptyItem } from '~/store/warehouse/useWarehouse';

export enum FieldTypes {
  PRICE,
  NUMBER,
  TEXT,
  CALCULATED,
}

export const formFields: {
  label: string;
  key: keyof typeof emptyItem;
  type?: FieldTypes;
  placeholder?: string;
}[] = [
  { label: 'کد', key: 'code', type: FieldTypes.TEXT, placeholder: 'کد محصول' },
  {
    label: 'دسته‌بندی',
    key: 'category',
    type: FieldTypes.TEXT,
    placeholder: '  دسته‌بندی',
  },
  {
    label: 'نام محصول',
    key: 'name',
    type: FieldTypes.TEXT,
    placeholder: 'نوع سنگ',
  },
  {
    label: 'قطر',
    key: 'diameter',
    type: FieldTypes.NUMBER,
    placeholder: 'به سانتی متر',
  },
  {
    label: 'طول',
    key: 'length',
    type: FieldTypes.NUMBER,
    placeholder: 'به متر',
  },
  {
    label: 'عرض',
    key: 'width',
    type: FieldTypes.NUMBER,
    placeholder: 'به متر',
  },
  {
    label: 'تعداد',
    key: 'quantity',
    type: FieldTypes.NUMBER,
    placeholder: 'تعداد موجود',
  },
  {
    label: 'متراژ',
    key: 'area',
    type: FieldTypes.CALCULATED,
    placeholder: 'به متر',
  },
  {
    label: 'قیمت خرید',
    key: 'purchasePrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت فروش',
    key: 'salePrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
];

export const warehouseColumns = [
  'کد',
  'دسته‌بندی',
  'نام محصول',
  'قطر',
  'طول',
  'عرض',
  'متراژ',
  'قیمت خرید',
  'قیمت فروش',
  'تعداد',
  'توضیحات',
  'زمان ثبت/ویرایش',
];

export const categoryColors: Record<string, string> = {
  ترامیت: 'bg-amber-100 text-amber-800',
  تراورتن: 'bg-orange-100 text-orange-800',
  تونکسیت: 'bg-yellow-100 text-yellow-800',
  چینی: 'bg-sky-100 text-sky-800',
  سنگ: 'bg-slate-100 text-slate-700',
  گرانیت: 'bg-emerald-100 text-emerald-800',
  لایمستون: 'bg-lime-100 text-lime-800',
  لیمون: 'bg-teal-100 text-teal-800',
  مرمر: 'bg-pink-100 text-pink-800',
  مارتیت: 'bg-purple-100 text-purple-800',
};
