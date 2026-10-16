import type React from 'react';
import { useShallow } from 'zustand/react/shallow';
import type { InvoiceSnapshot } from '~/store/types';
import SalesReceiptsPage from './SalesReceiptPage';
import SalesTable from './Table';
import BlockSalesTable from './BlockTable';
import { salesReceiptPager } from '~/helper/helper';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const ITEMS_PER_PAGE = 15;

// Each page with its part of the items table, which depends on the kind.
function salesPages(invoice: InvoiceSnapshot) {
  if (invoice.kind === 'stone') {
    const { totals } = invoice.data;
    return salesReceiptPager(invoice.data, ITEMS_PER_PAGE).map((page) => ({
      ...page,
      itemsTable: page.items.length > 0 && (
        <SalesTable
          items={page.items}
          startIndex={page.startIndex}
          isLastPage={page.showItemsFooter}
          totals={totals}
        />
      ),
    }));
  }
  const { totals } = invoice.data;
  return salesReceiptPager(invoice.data, ITEMS_PER_PAGE).map((page) => ({
    ...page,
    itemsTable: page.items.length > 0 && (
      <BlockSalesTable
        items={page.items}
        startIndex={page.startIndex}
        isLastPage={page.showItemsFooter}
        totals={totals}
      />
    ),
  }));
}

export default function SalesInvoice({
  invoice,
}: {
  invoice: InvoiceSnapshot;
}): React.ReactNode {
  const pages = salesPages(invoice);
  const {
    logo,
    companyName,
    address,
    phone,
    mobile,
    defaultNote,
    signature,
    seal,
    showLogo,
    showSignature,
    showSeal,
    showPageNumbers,
  } = useSettingsStore(
    useShallow((state) => ({
      logo: state.logo,
      companyName: state.companyName,
      address: state.address,
      phone: state.phone,
      mobile: state.mobile,
      defaultNote: state.defaultNote,
      signature: state.signature,
      seal: state.seal,
      showLogo: state.showLogo,
      showSignature: state.showSignature,
      showSeal: state.showSeal,
      showPageNumbers: state.showPageNumbers,
    }))
  );

  return (
    <div className="font-vazirmatn w-full space-y-4">
      <div className="print-receipt space-y-8 print:space-y-0">
        {pages.map((page) => (
          <SalesReceiptsPage
            key={page.pageNumber}
            data={invoice.data}
            itemsTable={page.itemsTable}
            services={page.services}
            serviceStartIndex={page.serviceStartIndex}
            isLastPage={page.isLastPage}
            pageNumber={page.pageNumber}
            totalPages={pages.length}
            logo={showLogo ? logo : null}
            companyName={companyName || ''}
            companyAddress={address || ''}
            companyPhone={phone || ''}
            companyMobile={mobile || ''}
            defaultNote={defaultNote}
            signature={showSignature ? signature : null}
            seal={showSeal ? seal : null}
            showPageNumbers={showPageNumbers}
          />
        ))}
      </div>
    </div>
  );
}
