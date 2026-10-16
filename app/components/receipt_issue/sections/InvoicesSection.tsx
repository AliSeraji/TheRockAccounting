import { useEffect, useRef, type ReactNode } from 'react';
import InvoicesList from '~/components/invoices/InvoicesList';
import InvoiceDetails from '~/components/invoices/InvoiceDetails';
import InvoiceEditor from '~/components/invoices/InvoiceEditor';
import {
  selectOpenInvoice,
  useInvoicesStore,
} from '~/store/invoices/useInvoicesStore';

// The invoice list tab: the list, or one invoice opened from it, read-only
// or being edited.
export default function InvoicesSection(): ReactNode {
  const view = useInvoicesStore((state) => state.view);
  const invoice = useInvoicesStore(selectOpenInvoice);
  const rootRef = useRef<HTMLDivElement>(null);

  // Opening an invoice from far down the list should start at its top. The
  // scroll margin is taller than the page header and tabs above this
  // section, so this scrolls the page all the way up.
  useEffect(() => {
    rootRef.current?.scrollIntoView({ block: 'start' });
  }, [view]);

  return (
    <div
      ref={rootRef}
      className="w-full flex flex-col items-center px-2 md:px-0 scroll-mt-40"
    >
      <div className="w-full py-2 pb-8">
        {!invoice ? (
          <InvoicesList />
        ) : view.mode === 'edit' ? (
          <InvoiceEditor key={invoice.id} invoice={invoice} />
        ) : (
          <InvoiceDetails key={invoice.id} invoice={invoice} />
        )}
      </div>
    </div>
  );
}
