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
    <Table className="w-full border-separate border-spacing-0 mb-2 [&_td]:border-t-0 [&_th+th]:border-s-0 [&_td+td]:border-s-0">
      <SalesTableHeader />
      <SalesTableBody rowItems={items} startIndex={startIndex} />
      {isLastPage && <SalesTableFooter totals={totals} />}
    </Table>
  );
}
