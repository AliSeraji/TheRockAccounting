import type React from 'react';
import { Table } from '~/components/ui/table';
import SalesTableHeader from './TableHeader';
import SalesTableBody from './TableBody';
import SalesTableFooter from './Footer';
import type { InvoiceDataType, InvoiceTotals } from '~/store/types';

interface SalesTableProps {
  items: InvoiceDataType['items'];
  startIndex: number;
  isLastPage: boolean;
  totals: InvoiceTotals;
}

export default function SalesTable({
  items,
  startIndex,
  isLastPage,
  totals,
}: SalesTableProps): React.ReactNode {
  return (
    <div className="mb-2 overflow-hidden rounded-md border border-slate-300 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <Table className="w-full border-spacing-0 text-[10px]">
        <SalesTableHeader />
        <SalesTableBody rowItems={items} startIndex={startIndex} />
        {isLastPage && <SalesTableFooter totals={totals} />}
      </Table>
    </div>
  );
}
