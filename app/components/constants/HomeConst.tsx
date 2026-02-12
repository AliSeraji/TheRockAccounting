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
  BUYER_REGISTER,
  CARGO,
  DOC_REQUEST,
  INFO,
  INVOICE,
  PRIVATE_INVOICE,
  PURCHASE_REG,
  RECEIPT_ISSUE,
} from '~/routes/constants';

export const dashboardItems = [
  {
    title: 'صدور فاکتور',
    icon: FileCheck2,
    color: 'from-teal-400 to-teal-600',
    description: 'مدیریت و صدور فاکتورها',
    to: RECEIPT_ISSUE,
  },
  {
    title: 'کالاو انبار',
    icon: FileText,
    color: 'from-blue-400 to-blue-600',
    description: 'مدیریت کالاها و انبار داری',
    to: DOC_REQUEST,
  },
  {
    title: 'مشتریان',
    icon: Users,
    color: 'from-purple-400 to-purple-600',
    description: 'ثبت و مدیریت مشتریان',
    to: BUYER_REGISTER,
  },
  {
    title: 'حساب داری',
    icon: DollarSign,
    color: 'from-green-400 to-green-600',
    description: 'مدیریت حساب‌ها و امور مالی',
    to: CARGO,
  },
  {
    title: 'گزارشات',
    icon: BarChart3,
    color: 'from-orange-400 to-orange-600',
    description: 'گزارش‌گیری و تحلیل داده‌ها',
    to: PURCHASE_REG,
  },
  {
    title: 'صورت حساب اشخاص',
    icon: Receipt,
    color: 'from-red-400 to-red-600',
    description: 'مدیریت صورت حساب‌ها',
    to: PRIVATE_INVOICE,
  },
  {
    title: 'تنظیمات',
    icon: Settings,
    color: 'from-emerald-400 to-emerald-600',
    description: 'تنظیمات و پیکربندی سیستم',
    to: INFO,
  },
  {
    title: 'خروج',
    icon: MessageSquare,
    color: 'from-yellow-400 to-yellow-600',
    description: 'خروج از سیستم',
    to: '/',
  },
];
