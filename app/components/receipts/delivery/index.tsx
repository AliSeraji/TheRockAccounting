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
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          /* Hide everything except receipt */
          body * {
            visibility: hidden;
          }

          #delivery-receipt,
          #delivery-receipt * {
            visibility: visible;
          }

          /* Reset body and html for print */
          html, body {
            width: 210mm;
            height: 148mm;
            margin: 0 !important;
            padding: 0 !important;
          }

          #delivery-receipt {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
          }

          @page {
            size: 210mm 148mm;
            margin: 5mm;
          }

          .receipt-page {
            page-break-after: always;
            break-after: page;
            width: 100% !important;
            max-width: 200mm !important;
            height: 138mm !important;
            min-height: unset !important;
            padding: 3mm 5mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            overflow: hidden !important;
          }

          .receipt-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }

          .no-print {
            display: none !important;
          }

          tr {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          table {
            font-size: 11px !important;
          }

          [data-slot="table-container"] {
            overflow: visible !important;
          }
        }
      `}</style>

      <div className="space-y-4">
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

        <div id="delivery-receipt" dir="rtl">
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
    </>
  );
}
