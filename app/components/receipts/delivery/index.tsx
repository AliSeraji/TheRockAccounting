import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import ReceiptPage from './receipt';

const ITEMS_PER_PAGE = 5;

export default function DeliveryReceipt({ data }: Props): React.ReactNode { 
  const pages = useMemo(() => {
    const totalPages = Math.ceil(data.items.length / ITEMS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, pageIndex) => {
      const startIndex = pageIndex * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return {
        items: data.items.slice(startIndex, endIndex),
        startIndex,
        pageNumber: pageIndex + 1,
        isLastPage: pageIndex === totalPages - 1,
      };
    });
  }, [data.items]);

  const totalPages = pages.length;

  const handlePrint = () => {
    const style = document.createElement('style');
    style.id = 'print-page-size';
    style.textContent =
      '@media print { @page { size: 210mm 148mm; margin: 5mm; } html, body { width: 210mm !important; height: 148mm !important; } }';
    document.head.appendChild(style);
    window.print();
    style.remove();
  };

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="flex flex-row mx-70 justify-between items-center mb-4 no-print">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش رسید تحویل بار (A5)
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
