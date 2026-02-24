import type React from 'react';
import { useMemo } from 'react';
import type { Props } from '../types';
import ReceiptPage from './receipt';
import { receiptPager } from '~/helper/helper';
import { useSettingsStore } from '~/store/useSettingsStore';

const ITEMS_PER_PAGE = 10;

export default function DeliveryReceipt({ data }: Props): React.ReactNode {
  const pages = useMemo(() => receiptPager(data, ITEMS_PER_PAGE), [data.items]);
  const logo = useSettingsStore((state) => state.logo);
  const companyName = useSettingsStore((state) => state.companyName);

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
            logo={logo}
            companyName={companyName}
          />
        ))}
      </div>
    </div>
  );
}
