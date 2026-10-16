import type React from 'react';
import type { InvoiceSnapshot } from '~/store/types';
import ReceiptPage from './receipt';
import ReceiptTable from './Table';
import BlockDeliveryTable from './BlockTable';
import { receiptPager } from '~/helper/helper';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const ITEMS_PER_PAGE = 10;

// Each page with its part of the items table, which depends on the kind.
function deliveryPages(invoice: InvoiceSnapshot) {
  if (invoice.kind === 'stone') {
    const { totals } = invoice.data;
    return receiptPager(invoice.data, ITEMS_PER_PAGE).map((page) => ({
      pageNumber: page.pageNumber,
      itemsTable: (
        <ReceiptTable
          items={page.items}
          startIndex={page.startIndex}
          isLastPage={page.isLastPage}
          totalArea={totals.totalArea}
        />
      ),
    }));
  }
  const { totals } = invoice.data;
  return receiptPager(invoice.data, ITEMS_PER_PAGE).map((page) => ({
    pageNumber: page.pageNumber,
    itemsTable: (
      <BlockDeliveryTable
        items={page.items}
        startIndex={page.startIndex}
        isLastPage={page.isLastPage}
        totals={totals}
      />
    ),
  }));
}

export default function DeliveryReceipt({
  invoice,
}: {
  invoice: InvoiceSnapshot;
}): React.ReactNode {
  const pages = deliveryPages(invoice);
  const logo = useSettingsStore((state) => state.logo);
  const companyName = useSettingsStore((state) => state.companyName);

  const totalPages = pages.length;

  return (
    <div className="font-vazirmatn w-full space-y-4">
      <div className="print-receipt space-y-8 print:space-y-0">
        {pages.map((page) => (
          <ReceiptPage
            key={page.pageNumber}
            data={invoice.data}
            itemsTable={page.itemsTable}
            pageNumber={page.pageNumber}
            totalPages={totalPages}
            logo={logo}
            companyName={companyName || ''}
          />
        ))}
      </div>
    </div>
  );
}
