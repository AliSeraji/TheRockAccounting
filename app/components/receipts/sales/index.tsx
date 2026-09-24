import type React from 'react';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import type { Props } from '../types';
import SalesReceiptsPage from './SalesReceiptPage';
import { salesReceiptPager } from '~/helper/helper';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const ITEMS_PER_PAGE = 15;

export default function SalesInvoice({ data }: Props): React.ReactNode {
  const pages = useMemo(
    () => salesReceiptPager(data, ITEMS_PER_PAGE),
    [data.items, data.services]
  );
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
            data={data}
            items={page.items}
            startIndex={page.startIndex}
            services={page.services}
            serviceStartIndex={page.serviceStartIndex}
            showItemsFooter={page.showItemsFooter}
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
