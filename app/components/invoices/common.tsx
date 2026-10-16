import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { INVOICE_TYPES } from '~/store/invoices/helpers';
import type { InvoiceKind } from '~/store/types';

export const INVOICE_KIND_LABELS: Record<InvoiceKind, string> = {
  stone: 'سنگ',
  block: 'کوپ سنگ',
};

export function InvoiceTypeBadge({ type }: { type: string }): ReactNode {
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap',
        type === INVOICE_TYPES.SALES
          ? 'bg-brand-100 text-brand-800'
          : 'bg-slate-100 text-slate-600'
      )}
    >
      {type}
    </span>
  );
}
