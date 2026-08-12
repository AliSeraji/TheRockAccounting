import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { DashboardCard } from '~/components/DashoboardCard';
import { INVOICE } from '~/routes/constants';
import {
  FileText,
  Search,
  Printer,
  ArchiveRestore,
  ClipboardList,
  FileOutput,
} from 'lucide-react';
import { ReceiptIssueHeader } from '~/components/receipt_issue/header';

const receiptManagementItems = [
  {
    title: 'صدور فاکتور جدید',
    icon: FileText,
    color: 'from-teal-400 to-teal-600',
    description: 'ایجاد و صدور فاکتور جدید',
    to: INVOICE,
  },
  {
    title: 'جستجوی رسید',
    icon: Search,
    color: 'from-blue-400 to-blue-600',
    description: 'جستجو در رسیدهای صادر شده',
    to: '#',
  },
  {
    title: 'چاپ رسید',
    icon: Printer,
    color: 'from-purple-400 to-purple-600',
    description: 'چاپ و خروجی رسیدها',
    to: '#',
  },
  {
    title: 'بایگانی رسیدها',
    icon: ArchiveRestore,
    color: 'from-orange-400 to-orange-600',
    description: 'مشاهده و مدیریت رسیدهای بایگانی شده',
    to: '#',
  },
  {
    title: 'لیست رسیدها',
    icon: ClipboardList,
    color: 'from-green-400 to-green-600',
    description: 'مشاهده لیست کامل رسیدها',
    to: '#',
  },
  {
    title: 'خروجی گزارش',
    icon: FileOutput,
    color: 'from-red-400 to-red-600',
    description: 'دریافت خروجی و گزارش از رسیدها',
    to: '#',
  },
];

export const ReceiptIssue = (): ReactNode => {
  return (
    <div className="h-full flex flex-col relative justify-center" dir="rtl">
      <ReceiptIssueHeader />
      <div className="max-h-full overflow-auto pt-20 md:pt-0 px-2">
        <div className="flex justify-center pb-5">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-6">
            {receiptManagementItems.map((item, index) => (
              <Link key={index + item.title} to={item.to}>
                <DashboardCard
                  title={item.title}
                  icon={item.icon}
                  color={item.color}
                  description={item.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptIssue;
