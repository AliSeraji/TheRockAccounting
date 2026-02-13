import { FileText } from 'lucide-react';
import type React from 'react';
import { RECEIPT_ISSUE } from '~/routes/constants';
import PageHeader from '../ui/PageHeader';

export default function InvoiceHeader(): React.ReactNode {
  return (
    <PageHeader
      lastPage="مدیریت و صدور فاکتورها"
      currentPage="صدور فاکتور"
      link={RECEIPT_ISSUE}
      icon={
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
          <FileText className="w-5 h-5 text-white" />
        </div>
      }
    />
  );
}
