import type { ReactNode } from 'react';
import InvoiceBody from '~/components/invoice';
import BlockTable from '~/components/invoice/block/BlockTable';
import InvoiceActions from '~/components/invoice/InvoiceActions';
import {
  InvoiceStoreContext,
  type InvoiceStoreKey,
} from '~/store/useInvoiceForm';

const BLOCK_DRAFT: InvoiceStoreKey = { kind: 'block', mode: 'draft' };

// The shared invoice cards edit the block invoice draft inside this context.
export default function BlockInvoiceSection(): ReactNode {
  return (
    <InvoiceStoreContext value={BLOCK_DRAFT}>
      <div className="w-full flex flex-col items-center px-2 md:px-0">
        <div className="w-full py-2">
          <InvoiceBody itemsTable={<BlockTable />} />
          <InvoiceActions />
        </div>
      </div>
    </InvoiceStoreContext>
  );
}
