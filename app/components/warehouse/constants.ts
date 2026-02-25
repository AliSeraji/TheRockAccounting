import type { WarehouseItem } from '~/store/warehouse/types';

export const emptyForm: WarehouseItem = {
  id: 0,
  code: '',
  category: '',
  categoryName: '',
  name: '',
  diameter: '',
  length: '',
  width: '',
  area: '',
  purchasePrice: '',
  salePrice: '',
  notes: '',
  date: '',
};

export const formFields: {
  label: string;
  key: keyof typeof emptyForm;
  type?: string;
  placeholder?: string;
}[] = [
  { label: 'کد', key: 'code', placeholder: 'کد محصول' },
  { label: 'دسته‌بندی', key: 'categoryName', placeholder: '  دسته‌بندی' },
  { label: 'نام محصول', key: 'name', placeholder: 'نوع سنگ' },
  { label: 'قطر', key: 'diameter', placeholder: 'به سانتی متر' },
  { label: 'طول', key: 'length', placeholder: 'به متر' },
  { label: 'عرض', key: 'width', placeholder: 'به متر' },
  { label: 'متراژ', key: 'area', placeholder: 'به متر' },
  {
    label: 'قیمت خرید',
    key: 'purchasePrice',
    type: 'number',
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت فروش',
    key: 'salePrice',
    type: 'number',
    placeholder: 'به ریال',
  },
];

export const categoryColors: Record<string, string> = {
  TRM: 'bg-amber-100 text-amber-800',
  TRV: 'bg-orange-100 text-orange-800',
  TNX: 'bg-yellow-100 text-yellow-800',
  CHN: 'bg-sky-100 text-sky-800',
  STN: 'bg-slate-100 text-slate-700',
  GRN: 'bg-emerald-100 text-emerald-800',
  LMS: 'bg-lime-100 text-lime-800',
  LMN: 'bg-teal-100 text-teal-800',
  MRM: 'bg-pink-100 text-pink-800',
  MRT: 'bg-purple-100 text-purple-800',
};
