import type React from 'react';
import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import SalesReceiptsPage from './SalesReceiptPage';
import { receiptPager } from '~/helper/helper';
import { useSettingsStore } from '~/store/useSettingsStore';

const ITEMS_PER_PAGE = 15;

export default function SalesInvoice({ data }: Props): React.ReactNode {
  const pages = useMemo(() => receiptPager(data, ITEMS_PER_PAGE), [data.items]);
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
            isLastPage={page.isLastPage}
            pageNumber={page.pageNumber}
            totalPages={pages.length}
            logo={logo}
            companyName={companyName}
          />
        ))}
      </div>
    </div>
  );
}
