import type { ReactNode } from 'react';
import InvoiceBody from '~/components/invoice';
import InvoiceActions from '~/components/invoice/InvoiceActions';

export default function InvoiceSection(): ReactNode {
  return (
    <div className="w-full flex flex-col items-center px-2 md:px-0">
      <div className="w-full py-2">
        <InvoiceBody />
        <InvoiceActions />
      </div>
    </div>
  );
}
