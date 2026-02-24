import { Printer } from 'lucide-react';
import { useMemo, type ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import { receiptPager } from '~/helper/helper';
import RequestReceiptPage from './RequestReceiptPage';
import { useSettingsStore } from '~/store/useSettingsStore';

const ITEMS_PER_PAGE = 8;

export default function RequestProduct({ data }: Props): ReactNode {
  const pages = useMemo(() => receiptPager(data, ITEMS_PER_PAGE), [data.items]);
  const logo = useSettingsStore((state) => state.logo);
  const companyName = useSettingsStore((state) => state.companyName);
  const totalPages = pages.length;

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="print-receipt" dir="rtl">
        {pages.map((page) => (
          <RequestReceiptPage
            key={page.pageNumber}
            data={data}
            items={page.items}
            startIndex={page.startIndex}
            isLastPage={page.isLastPage}
            pageNumber={page.pageNumber}
            totalPages={totalPages}
            logo={logo}
            companyName={companyName}
          />
        ))}
      </div>
    </div>
  );
}
