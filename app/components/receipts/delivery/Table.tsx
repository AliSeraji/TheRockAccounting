import type React from 'react';
import { Table } from '~/components/ui/table';
import { DeliveryTableHeader } from './Header';
import { DeliveryTableBody } from './TableBody';
import { DeliveryTableFooter } from './TableFooter';
import type { InvoiceDataType } from '~/store/types';

interface ReceiptTableProps {
  items: InvoiceDataType['items'];
  startIndex: number;
  isLastPage: boolean;
  totalArea: number;
}

export default function ReceiptTable({
  items,
  startIndex,
  isLastPage,
  totalArea,
}: ReceiptTableProps): React.ReactNode {
  return (
    <div className="mb-2 overflow-hidden rounded-md border border-slate-300 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <Table className="w-full border-spacing-0 text-[10px]">
        <DeliveryTableHeader />
        <DeliveryTableBody items={items} startIndex={startIndex} />
        {isLastPage && <DeliveryTableFooter totalArea={totalArea} />}
      </Table>
    </div>
  );
}
