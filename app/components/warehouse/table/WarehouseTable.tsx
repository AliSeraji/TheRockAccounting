import type { ReactNode } from 'react';
import { Table, TableBody, TableFooter as TFoot } from '~/components/ui/table';
import type { WarehouseItem } from '~/store/warehouse/types';
import WarehouseTableHeader from './TableHeader';
import WarehouseTableRow from './TableRow';
import TableFooter from './TableFooter';

interface WarehouseTableProps {
  items: WarehouseItem[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function WarehouseTable({
  items,
  currentPage,
  totalPages,
  setCurrentPage,
}: WarehouseTableProps): ReactNode {
  return (
    <Table className="flex flex-col w-[unset] text-sm">
      <WarehouseTableHeader />
      <TableBody className="w-full flex flex-col gap-2 p-2">
        {items.map((item, idx) => (
          <WarehouseTableRow key={item.id} item={item} />
        ))}
      </TableBody>
      <TFoot>
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </TFoot>
    </Table>
  );
}
