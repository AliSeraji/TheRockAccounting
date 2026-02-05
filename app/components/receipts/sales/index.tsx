import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';
import SalesReceiptsPage from './SalesREceiptPage';

const ITEMS_PER_PAGE = 7;

export default function SalesInvoice({ data }: Props): React.ReactNode {
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

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <style></style>
      <div className="font-vazirmatn w-full space-y-4">
        <div className="flex max-w-7xl justify-between items-center mb-4 px-2">
          <h2 className="text-xl font-bold text-gray-800">
            پیش‌نمایش فاکتور فروش (A4)
          </h2>
          <Button
            onClick={handlePrint}
            className="bg-gray-800 hover:bg-gray-900 gap-2"
          >
            <Printer className="w-4 h-4" />
            چاپ
          </Button>
        </div>
        <div>
          {pages.map((page) => (
            <SalesReceiptsPage
              key={page.pageNumber}
              data={data}
              items={page.items}
              startIndex={page.startIndex}
              isLastPage={page.isLastPage}
              pageNumber={page.pageNumber}
              totalPages={pages.length}
            />
          ))}
        </div>
      </div>
    </>
  );
}
