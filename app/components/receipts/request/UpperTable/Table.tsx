import type { ReactNode } from 'react';
import { Table } from '~/components/ui/table';
import Header from './Header';
import type { InvoiceDataType } from '~/store/types';
import Body from './Body';

interface TableProps {
  items: InvoiceDataType['items'];
  startIndex: number;
}

export default function UpperTable({
  items,
  startIndex,
}: TableProps): ReactNode {
  return (
    <Table className="w-full border-collapse mb-2 text-[10px]">
      <Header />
      <Body items={items} startIndex={startIndex} />
    </Table>
  );
}
