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
    color: 'from-brand-500 to-brand-800',
    description: 'مدیریت فاکتورهای فروش',
    to: RECEIPT_ISSUE,
  },
  {
    title: 'کالاو انبار',
    icon: FileText,
    color: 'from-slate-500 to-slate-700',
    description: 'مدیریت کالاها و انبار داری',
    to: WAREHOUSE,
  },
  {
    title: 'مشتریان',
    icon: Users,
    color: 'from-brand-400 to-brand-700',
    description: 'ثبت و مدیریت مشتریان',
    to: CUSTOMER_REGISTER,
  },
  {
    title: 'حساب داری',
    icon: DollarSign,
    color: 'from-brand-700 to-brand-950',
    description: 'مدیریت حساب‌ها و امور مالی',
    to: CARGO,
  },
  {
    title: 'گزارشات',
    icon: BarChart3,
    color: 'from-slate-600 to-slate-800',
    description: 'گزارش‌گیری و تحلیل داده‌ها',
    to: PURCHASE_REG,
  },
  {
    title: 'صورت حساب اشخاص',
    icon: Receipt,
    color: 'from-brand-500 to-brand-900',
    description: 'مدیریت صورت حساب‌ها',
    to: PRIVATE_INVOICE,
  },
  {
    title: 'تنظیمات',
    icon: Settings,
    color: 'from-slate-400 to-slate-600',
    description: 'تنظیمات و پیکربندی سیستم',
    to: SETTINGS,
  },
  {
    title: 'خروج',
    icon: MessageSquare,
    color: 'from-slate-700 to-slate-900',
    description: 'خروج از سیستم',
    to: '/',
  },
];
