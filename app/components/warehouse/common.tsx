import * as React from 'react';
import {
  Archive,
  Factory,
  Mountain,
  ShoppingBag,
  Warehouse,
} from 'lucide-react';
import type { WarehouseId } from '~/store/warehouse/types';

export const ACCENT: { from: string; to: string } = {
  from: '#c6a469',
  to: '#96733a',
};

export type WarehouseSectionDescriptor = {
  id: WarehouseId;
  title: string;
  desc: string;
  iconName: string;
};

export const WAREHOUSE_SECTIONS: WarehouseSectionDescriptor[] = [
  {
    id: 'main',
    title: 'انبار اصلی سنگ',
    desc: 'موجودی قابل فروش؛ فاکتورها از این انبار کسر می‌شوند',
    iconName: 'Warehouse',
  },
  {
    id: 'secondary',
    title: 'انبار فرعی',
    desc: 'انبار پشتیبان؛ بدون ارتباط با فاکتورها',
    iconName: 'Archive',
  },
  {
    id: 'block',
    title: 'انبار کوپ سنگ',
    desc: 'کوپ‌های سنگ؛ خرید و فروش بر اساس حجم',
    iconName: 'Mountain',
  },
  {
    id: 'misc',
    title: 'انبار متفرقه',
    desc: 'کالاهای خریداری‌شده؛ مصرفی یا مخصوص مشتری',
    iconName: 'ShoppingBag',
  },
  {
    id: 'raw',
    title: 'انبار تولید (مواد اولیه)',
    desc: 'مدیریت داخلی مواد اولیه مجموعه',
    iconName: 'Factory',
  },
];

type IconComponent = React.FC<
  React.SVGProps<SVGSVGElement> & { className?: string }
>;

export const ICONS_BY_NAME: Record<string, IconComponent> = {
  Warehouse,
  Archive,
  Mountain,
  ShoppingBag,
  Factory,
};
