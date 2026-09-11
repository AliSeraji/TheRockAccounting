import type React from 'react';
import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '~/components/ui/button';
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
  const logo = useSettingsStore((state) => state.logo);
  const companyName = useSettingsStore((state) => state.companyName);

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
            logo={logo}
            companyName={companyName || ''}
          />
        ))}
      </div>
    </div>
  );
}
