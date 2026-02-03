import { Table } from '~/components/ui/table';
import { DeliveryTableHeader } from './Header';
import { DeliveryTableBody } from './TableBody';
import { DeliveryTableFooter } from './TableFooter';
import type { InvoiceData } from '../types';

interface ReceiptTableProps {
  items: InvoiceData['items'];
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
    <Table className="w-full border-collapse mb-4 text-sm">
      <DeliveryTableHeader />
      <DeliveryTableBody items={items} startIndex={startIndex} />
      {isLastPage && <DeliveryTableFooter totalArea={totalArea} />}
    </Table>
  );
}
