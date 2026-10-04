import type {
  BlockItem,
  MiscItem,
  RawItem,
  StoneStockItem,
} from '~/store/warehouse/types';
import { convertToPersianDigits } from '~/lib/utils';
import { isNegativeStock } from '~/store/warehouse/helpers';
import { categoryColors } from './constants';
import { EMPTY, formatNumber, formatPrice } from './format';
import type { WarehouseColumn } from './table/types';

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${categoryColors[category] ?? 'bg-slate-100 text-slate-600'}`}
    >
      {category}
    </span>
  );
}

export const stoneColumns: WarehouseColumn<StoneStockItem>[] = [
  {
    key: 'code',
    label: 'کد',
    width: 'w-[10%]',
    className: 'text-slate-700 font-mono text-xs whitespace-nowrap',
    mobile: 'code',
    render: (item) => item.code || EMPTY,
  },
  {
    key: 'category',
    label: 'دسته‌بندی',
    width: 'w-[13%]',
    mobile: 'badge',
    // EMPTY rather than an empty badge, so the mobile card can drop it.
    render: (item) =>
      item.category ? <CategoryBadge category={item.category} /> : EMPTY,
  },
  {
    key: 'name',
    label: 'نام سنگ',
    width: 'w-[18%]',
    className: 'font-medium text-slate-800 whitespace-nowrap',
    mobile: 'title',
    render: (item) =>
      convertToPersianDigits(item.name.replace(item.category, '')),
  },
  {
    key: 'thickness',
    label: 'قطر',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.thickness),
  },
  {
    key: 'length',
    label: 'طول',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.length),
  },
  {
    key: 'width',
    label: 'عرض',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.width),
  },
  {
    key: 'quantity',
    label: 'تعداد',
    width: 'w-[8%]',
    render: (item) =>
      isNegativeStock(item) ? (
        <span className="font-bold text-red-700">
          {formatNumber(item.quantity)}
        </span>
      ) : (
        formatNumber(item.quantity)
      ),
  },
  {
    key: 'area',
    label: 'متراژ',
    width: 'w-[10%]',
    render: (item) => formatNumber(item.area),
  },
  {
    key: 'consumerPrice',
    label: 'قیمت مصرف‌کننده',
    width: 'w-[15%]',
    className: 'whitespace-nowrap',
    mobile: 'highlight',
    render: (item) => formatPrice(item.consumerPrice),
  },
];

export const blockColumns: WarehouseColumn<BlockItem>[] = [
  {
    key: 'code',
    label: 'کد',
    width: 'w-[10%]',
    className: 'text-slate-700 font-mono text-xs whitespace-nowrap',
    mobile: 'code',
    render: (item) => item.code || EMPTY,
  },
  {
    key: 'name',
    label: 'نام کوپ سنگ',
    width: 'w-[17%]',
    className: 'font-medium text-slate-800 whitespace-nowrap',
    mobile: 'title',
    render: (item) => convertToPersianDigits(item.name) || EMPTY,
  },
  {
    key: 'length',
    label: 'طول',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.length),
  },
  {
    key: 'width',
    label: 'عرض',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.width),
  },
  {
    key: 'height',
    label: 'ارتفاع',
    width: 'w-[7%]',
    mobile: 'meta',
    render: (item) => formatNumber(item.height),
  },
  {
    key: 'weight',
    label: 'وزن (تن)',
    width: 'w-[9%]',
    render: (item) => formatNumber(item.weight),
  },
  {
    key: 'volume',
    label: 'مترمکعب',
    width: 'w-[9%]',
    render: (item) => formatNumber(item.volume),
  },
  {
    key: 'price',
    label: 'قیمت',
    width: 'w-[14%]',
    className: 'whitespace-nowrap',
    mobile: 'highlight',
    render: (item) => formatPrice(item.price),
  },
  {
    key: 'partnerPrice',
    label: 'قیمت همکار',
    width: 'w-[15%]',
    className: 'whitespace-nowrap',
    render: (item) => formatPrice(item.partnerPrice),
  },
];

export const miscColumns: WarehouseColumn<MiscItem>[] = [
  {
    key: 'description',
    label: 'شرح',
    width: 'w-[48%]',
    className: 'font-medium text-slate-800',
    mobile: 'title',
    render: (item) => item.description || EMPTY,
  },
  {
    key: 'quantity',
    label: 'تعداد',
    width: 'w-[12%]',
    render: (item) => formatNumber(item.quantity),
  },
  {
    key: 'price',
    label: 'قیمت',
    width: 'w-[17%]',
    className: 'whitespace-nowrap',
    mobile: 'highlight',
    render: (item) => formatPrice(item.price),
  },
  {
    key: 'partnerPrice',
    label: 'قیمت همکار',
    width: 'w-[18%]',
    className: 'whitespace-nowrap',
    render: (item) => formatPrice(item.partnerPrice),
  },
];

export const rawColumns: WarehouseColumn<RawItem>[] = [
  {
    key: 'description',
    label: 'شرح',
    width: 'w-[60%]',
    className: 'font-medium text-slate-800',
    mobile: 'title',
    render: (item) => item.description || EMPTY,
  },
  {
    key: 'quantity',
    label: 'تعداد',
    width: 'w-[15%]',
    render: (item) => formatNumber(item.quantity),
  },
  {
    key: 'purchasePrice',
    label: 'قیمت خرید',
    width: 'w-[20%]',
    className: 'whitespace-nowrap',
    mobile: 'highlight',
    render: (item) => formatPrice(item.purchasePrice),
  },
];
