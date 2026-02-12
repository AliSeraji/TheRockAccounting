import { Printer } from 'lucide-react';
import { useMemo, type ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import { receiptPager } from '~/helper/helper';
import RequestReceiptPage from './RequestReceiptPage';

const ITEMS_PER_PAGE = 8;

export default function RequestProduct({ data }: Props): ReactNode {
  const pages = useMemo(() => receiptPager(data, ITEMS_PER_PAGE), [data.items]);
  const totalPages = pages.length;

  const handlePrint = () => {
    const style = document.createElement('style');
    style.id = 'print-page-size';
    style.textContent =
      '@media print { @page { size: 148mm 210mm; margin: 5mm; } html, body { width: 148mm !important; height: 210mm !important; } }';
    document.head.appendChild(style);
    window.print();
    style.remove();
  };

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش درخواست سنگ (A5)
        </h2>
        <Button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 gap-2"
        >
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>

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
          />
        ))}
      </div>
    </div>
  );
}
