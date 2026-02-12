import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import type React from 'react';
import { RECEIPT_ISSUE } from '~/routes/constants';
import PageHeader from '../ui/pageHeader';

export default function InvoiceHeader(): React.ReactNode {
  const content = (
    <div className="px-3 py-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Link
            to={RECEIPT_ISSUE}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-slate-700" />
          </Link>
          <div className="flex flex-row items-center gap-3">
            <p className="text-lg font-bold bg-linear-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              صدور فاکتور
            </p>
            <p className="text-xs text-slate-500">ایجاد و مدیریت فاکتورها</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button
            size={'sm'}
            className="text-xs text-gray-300 gap-1 bg-linear-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 hover:cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            ذخیره
          </Button>
        </div>
      </div>
    </div>
  );

  return <PageHeader content={content} />;
}
