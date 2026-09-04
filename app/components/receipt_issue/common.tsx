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
    title: 'جستجوی فاکتور',
    desc: 'جستجو در فاکتورهای صادر شده',
    iconName: 'Search',
  },
  {
    id: 'print',
    title: 'چاپ فاکتور',
    desc: 'چاپ و خروجی فاکتورها',
    iconName: 'Printer',
  },
  {
    id: 'list',
    title: 'لیست فاکتورها',
    desc: 'مشاهده لیست کامل فاکتورها',
    iconName: 'ClipboardList',
  },
  {
    id: 'export',
    title: 'خروجی گزارش',
    desc: 'دریافت خروجی و گزارش از فاکتورها',
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
