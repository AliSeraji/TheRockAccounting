import type React from 'react';
import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import ReceiptPage from './receipt';
import { receiptPager } from '~/helper/helper';

const ITEMS_PER_PAGE = 10;

export default function DeliveryReceipt({ data }: Props): React.ReactNode {
  const pages = useMemo(() => receiptPager(data, ITEMS_PER_PAGE), [data.items]);

  const totalPages = pages.length;

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="print-receipt" dir="rtl">
        {pages.map((page) => (
          <ReceiptPage
            key={page.pageNumber}
            data={data}
            items={page.items}
            startIndex={page.startIndex}
            isLastPage={page.isLastPage}
            pageNumber={page.pageNumber}
            totalPages={totalPages}
          />
        ))}
      </div>
    </div>
  );
}
