import type React from 'react';
import PageHeader from '../ui/PageHeader';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Home } from 'lucide-react';
import { HOME } from '~/routes/constants';

export const ReceiptIssueHeader = (): ReactNode => {
  const content = (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <Link
          to={HOME}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-slate-600" />
        </Link>
        <div className="w-px h-6 bg-slate-200" />
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-sm">
          <Home className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
            مدیریت و صدور فاکتورها
          </p>
          <p className="text-xs text-slate-400">داشبورد اصلی</p>
        </div>
      </div>
    </div>
  );

  return <PageHeader content={content} />;
};
