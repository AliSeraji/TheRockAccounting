import type {
  BlockItem,
  MiscItem,
  RawItem,
  StockMovementReason,
  StoneStockItem,
} from '~/store/warehouse/types';

export enum FieldTypes {
  PRICE,
  NUMBER,
  TEXT,
  CALCULATED,
}

export type FormFieldConfig<T> = {
  label: string;
  key: keyof T & string;
  type: FieldTypes;
  placeholder?: string;
  required?: boolean;
  allowNegative?: boolean;
  // Marks the item's stock. It is typed in when the item is created and then
  // only changes through a stock correction (its «اصلاح» button in the form).
  stock?: boolean;
};

export const stoneFormFields: FormFieldConfig<StoneStockItem>[] = [
  {
    label: 'کد',
    key: 'code',
    type: FieldTypes.TEXT,
    placeholder: 'کد محصول',
    required: true,
  },
  {
    label: 'دسته‌بندی',
    key: 'category',
    type: FieldTypes.TEXT,
    placeholder: 'دسته‌بندی',
    required: true,
  },
  {
    label: 'نام سنگ',
    key: 'name',
    type: FieldTypes.TEXT,
    placeholder: 'نوع سنگ',
    required: true,
  },
  {
    label: 'قطر',
    key: 'thickness',
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
    required: true,
    // Stock can go below zero when more is sold than is on hand.
    allowNegative: true,
    stock: true,
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
    label: 'قیمت عمده',
    key: 'wholesalePrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت همکار',
    key: 'partnerPrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت مصرف‌کننده',
    key: 'consumerPrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
];

export const blockFormFields: FormFieldConfig<BlockItem>[] = [
  {
    label: 'کد',
    key: 'code',
    type: FieldTypes.TEXT,
    placeholder: 'کد کوپ',
    required: true,
  },
  {
    label: 'نام کوپ سنگ',
    key: 'name',
    type: FieldTypes.TEXT,
    placeholder: 'نام کوپ',
    required: true,
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
    label: 'ارتفاع',
    key: 'height',
    type: FieldTypes.NUMBER,
    placeholder: 'به متر',
  },
  {
    label: 'وزن',
    key: 'weight',
    type: FieldTypes.NUMBER,
    placeholder: 'به تن',
  },
  {
    label: 'متراژ (مترمکعب)',
    key: 'volume',
    // Filled in from the dimensions, but editable so it can go below zero.
    type: FieldTypes.NUMBER,
    placeholder: 'به مترمکعب',
    allowNegative: true,
    stock: true,
  },
  {
    label: 'قیمت',
    key: 'price',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت همکار',
    key: 'partnerPrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
];

export const miscFormFields: FormFieldConfig<MiscItem>[] = [
  {
    label: 'شرح',
    key: 'description',
    type: FieldTypes.TEXT,
    placeholder: 'شرح کالا',
    required: true,
  },
  {
    label: 'تعداد',
    key: 'quantity',
    type: FieldTypes.NUMBER,
    placeholder: 'تعداد موجود',
    required: true,
    allowNegative: true,
    stock: true,
  },
  {
    label: 'قیمت',
    key: 'price',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت همکار',
    key: 'partnerPrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
];

export const rawFormFields: FormFieldConfig<RawItem>[] = [
  {
    label: 'شرح',
    key: 'description',
    type: FieldTypes.TEXT,
    placeholder: 'شرح ماده اولیه',
    required: true,
  },
  {
    label: 'تعداد',
    key: 'quantity',
    type: FieldTypes.NUMBER,
    placeholder: 'تعداد موجود',
    required: true,
    allowNegative: true,
    stock: true,
  },
  {
    label: 'قیمت خرید',
    key: 'purchasePrice',
    type: FieldTypes.PRICE,
    placeholder: 'به ریال',
  },
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

// How each kind of stock movement is named on the stock card.
export const MOVEMENT_REASONS: Record<StockMovementReason, string> = {
  opening: 'موجودی اول دوره',
  purchase: 'خرید',
  sale: 'فروش',
  transfer: 'انتقال',
  adjustment: 'اصلاح موجودی',
  reversal: 'برگشت',
};
