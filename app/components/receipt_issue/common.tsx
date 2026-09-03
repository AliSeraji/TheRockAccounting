import * as React from 'react';
import {
  FileText,
  Search,
  Printer,
  ArchiveRestore,
  ClipboardList,
  FileOutput,
} from 'lucide-react';
import type { ReceiptSectionDescriptor } from './types';

export const ACCENT: { from: string; to: string } = {
  from: '#2dd4bf',
  to: '#0d9488',
};

export const RECEIPT_SECTIONS: ReceiptSectionDescriptor[] = [
  {
    id: 'invoice',
    title: 'صدور فاکتور جدید',
    desc: 'ایجاد و صدور فاکتور جدید',
    iconName: 'FileText',
  },
  {
    id: 'search',
    title: 'جستجوی رسید',
    desc: 'جستجو در رسیدهای صادر شده',
    iconName: 'Search',
  },
  {
    id: 'print',
    title: 'چاپ رسید',
    desc: 'چاپ و خروجی رسیدها',
    iconName: 'Printer',
  },
  {
    id: 'archive',
    title: 'بایگانی رسیدها',
    desc: 'مشاهده و مدیریت رسیدهای بایگانی شده',
    iconName: 'ArchiveRestore',
  },
  {
    id: 'list',
    title: 'لیست رسیدها',
    desc: 'مشاهده لیست کامل رسیدها',
    iconName: 'ClipboardList',
  },
  {
    id: 'export',
    title: 'خروجی گزارش',
    desc: 'دریافت خروجی و گزارش از رسیدها',
    iconName: 'FileOutput',
  },
];

type IconComponent = React.FC<
  React.SVGProps<SVGSVGElement> & { className?: string }
>;

export const ICONS_BY_NAME: Record<string, IconComponent> = {
  FileText,
  Search,
  Printer,
  ArchiveRestore,
  ClipboardList,
  FileOutput,
};
