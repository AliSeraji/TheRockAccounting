import * as React from 'react';
import {
  FileText,
  Mountain,
  ArchiveRestore,
  ClipboardList,
  FileOutput,
} from 'lucide-react';
import type { ReceiptSectionDescriptor } from './types';

export const ACCENT: { from: string; to: string } = {
  from: '#c6a469',
  to: '#96733a',
};

export const RECEIPT_SECTIONS: ReceiptSectionDescriptor[] = [
  {
    id: 'invoice',
    title: 'صدور فاکتور جدید',
    desc: 'ایجاد و صدور فاکتور جدید',
    iconName: 'FileText',
  },
  {
    id: 'block',
    title: 'فاکتور کوپ سنگ',
    desc: 'صدور فاکتور فروش کوپ سنگ',
    iconName: 'Mountain',
  },
  {
    id: 'list',
    title: 'لیست فاکتورها',
    desc: 'جستجو، مشاهده و ویرایش فاکتورهای ثبت شده',
    iconName: 'ClipboardList',
  },
];

type IconComponent = React.FC<
  React.SVGProps<SVGSVGElement> & { className?: string }
>;

export const ICONS_BY_NAME: Record<string, IconComponent> = {
  FileText,
  Mountain,
  ArchiveRestore,
  ClipboardList,
  FileOutput,
};
