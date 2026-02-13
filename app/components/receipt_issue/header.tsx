import PageHeader from '../ui/PageHeader';
import type { ReactNode } from 'react';
import { Home } from 'lucide-react';
import { HOME } from '~/routes/constants';

export const ReceiptIssueHeader = (): ReactNode => {
  return (
    <PageHeader
      icon={<Home className="w-5 h-5 text-white" />}
      link={HOME}
      currentPage="مدیریت و صدور فاکتورها"
      lastPage="داشبورد اصلی"
    />
  );
};
