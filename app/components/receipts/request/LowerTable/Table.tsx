import type { ReactNode } from 'react';
import { Table } from '~/components/ui/table';
import Header from './Header';

import type { ServiceItem } from '~/store/types';
import Body from './Body';

export default function LowerTable({
  services,
  startIdx,
}: {
  services: ServiceItem[];
  startIdx: number;
}): ReactNode {
  return (
    <Table className="w-full border-collapse mb-4 text-sm">
      <Header />
      <Body services={services} startIdx={startIdx} />
    </Table>
  );
}
