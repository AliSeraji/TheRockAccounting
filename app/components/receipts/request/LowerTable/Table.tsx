import type { ReactNode } from 'react';
import { Table } from '~/components/ui/table';
import Header from './Header';

import type { InvoiceDataType } from '~/store/types';
import Body from './Body';

export default function LowerTable({
  items,
  startIdx,
}: {
  items: InvoiceDataType['items'];
  startIdx: number;
}): ReactNode {
  return (
    <Table className="w-full border-collapse mb-4 text-sm">
      <Header />
      <Body items={items} startIdx={startIdx} />
    </Table>
  );
}
