import type { ReactNode } from 'react';
import { Table, TableBody } from '~/components/ui/table';
import type { WarehouseItem } from '~/store/warehouse/types';
import WarehouseTableHeader from './TableHeader';
import WarehouseTableRow from './TableRow';

interface WarehouseTableProps {
  items: WarehouseItem[];
}

export default function WarehouseTable({
  items,
}: WarehouseTableProps): ReactNode {
  return (
    <Table className="w-full text-sm">
      <WarehouseTableHeader />
      <TableBody>
        {items.map((item, idx) => (
          <WarehouseTableRow
            key={item.id}
            item={item}
            isEven={idx % 2 === 0}
          />
        ))}
      </TableBody>
    </Table>
  );
}
