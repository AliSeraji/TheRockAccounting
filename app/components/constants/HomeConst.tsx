import {
  BarChart3,
  DollarSign,
  FileText,
  MessageSquare,
  Settings,
  Users,
  Receipt,
  FileCheck2,
} from 'lucide-react';
import {
  CUSTOMER_REGISTER,
  CARGO,
  PRIVATE_INVOICE,
  PURCHASE_REG,
  RECEIPT_ISSUE,
  SETTINGS,
  WAREHOUSE,
} from '~/routes/constants';

export const dashboardItems = [
  {
    title: 'فاکتور فروش',
    icon: FileCheck2,
    color: 'bg-brand-800',
    description: 'مدیریت فاکتورهای فروش',
    to: RECEIPT_ISSUE,
  },
  {
    title: 'کالاو انبار',
    icon: FileText,
    color: 'bg-slate-700',
    description: 'مدیریت کالاها و انبار داری',
    to: WAREHOUSE,
  },
  {
    title: 'مشتریان',
    icon: Users,
    color: 'bg-brand-700',
    description: 'ثبت و مدیریت مشتریان',
    to: CUSTOMER_REGISTER,
  },
  {
    title: 'حساب داری',
    icon: DollarSign,
    color: 'bg-brand-950',
    description: 'مدیریت حساب‌ها و امور مالی',
    to: CARGO,
  },
  {
    title: 'گزارشات',
    icon: BarChart3,
    color: 'bg-slate-800',
    description: 'گزارش‌گیری و تحلیل داده‌ها',
    to: PURCHASE_REG,
  },
  {
    title: 'صورت حساب اشخاص',
    icon: Receipt,
    color: 'bg-brand-900',
    description: 'مدیریت صورت حساب‌ها',
    to: PRIVATE_INVOICE,
  },
  {
    title: 'تنظیمات',
    icon: Settings,
    color: 'bg-slate-600',
    description: 'تنظیمات و پیکربندی سیستم',
    to: SETTINGS,
  },
  {
    title: 'خروج',
    icon: MessageSquare,
    color: 'bg-slate-900',
    description: 'خروج از سیستم',
    to: '/',
  },
];
