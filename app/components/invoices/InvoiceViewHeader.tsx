import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { formatDateTime } from '../warehouse/format';
import type { SavedInvoice } from '~/store/invoices/types';
import { INVOICE_KIND_LABELS, InvoiceTypeBadge } from './common';

// Top bar of an opened invoice: back, which invoice it is, and `children`
// as its actions.
export default function InvoiceViewHeader({
  invoice,
  title,
  onBack,
  children,
}: {
  invoice: SavedInvoice;
  title: string;
  onBack: () => void;
  children: ReactNode;
}): ReactNode {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/90 backdrop-blur px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3 min-w-0">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="gap-1 shrink-0 hover:cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت
        </Button>
        <div className="flex flex-col gap-1 min-w-0">
          <h2 className="text-sm lg:text-lg font-bold text-slate-800">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <InvoiceTypeBadge type={invoice.data.invoiceType} />
            <span>{INVOICE_KIND_LABELS[invoice.kind]}</span>
            <span>· ثبت: {formatDateTime(invoice.createdAt)}</span>
            {invoice.updatedAt !== invoice.createdAt && (
              <span>· آخرین ویرایش: {formatDateTime(invoice.updatedAt)}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}
