import type { ReactNode } from 'react';
import { Table, TableBody } from '~/components/ui/table';
import type { WarehouseItem } from '~/store/warehouse/types';
import WarehouseTableHeader from './TableHeader';
import WarehouseTableRow from './TableRow';

interface WarehouseTableProps {
  items: WarehouseItem[];
  selectedId: number | null;
  onSelectItem: (item: WarehouseItem) => void;
}

export default function WarehouseTable({
  items,
  selectedId,
  onSelectItem,
}: WarehouseTableProps): ReactNode {
  return (
    <Table className="w-full text-sm">
      <WarehouseTableHeader />
      <TableBody>
        {items.map((item, idx) => (
          <WarehouseTableRow
            key={item.id}
            item={item}
            isSelected={item.id === selectedId}
            isEven={idx % 2 === 0}
            onSelect={onSelectItem}
          />
        ))}
      </TableBody>
    </Table>
  );
}
