import { ArrowRight, FileText, Save } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import type React from 'react';
import { RECEIPT_ISSUE } from '~/routes/constants';
import PageHeader from '../ui/PageHeader';

export default function InvoiceHeader(): React.ReactNode {
  const content = (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <Link
          to={RECEIPT_ISSUE}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-slate-600" />
        </Link>
        <div className="w-px h-6 bg-slate-200" />
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
            صدور فاکتور
          </p>
          <p className="text-xs text-slate-400">مدیریت و صدور فاکتورها</p>
        </div>
      </div>
      <Button
        size={'sm'}
        className="text-xs text-gray-300 gap-1.5 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 hover:cursor-pointer shadow-sm"
      >
        <Save className="w-3.5 h-3.5" />
        ذخیره
      </Button>
    </div>
  );

  return <PageHeader content={content} />;
}
