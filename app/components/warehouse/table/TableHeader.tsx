import type { ReactNode } from 'react';
import { TableHeader, TableRow, TableHead } from '~/components/ui/table';
import { warehouseColumns } from '../constants';
import { cn } from '~/lib/utils';

export default function WarehouseTableHeader(): ReactNode {
  return (
    <TableHeader>
      <TableRow className="flex flex-row w-full bg-slate-50 border-b border-slate-200 text-slate-600">
        {warehouseColumns.map((col) => (
          <TableHead
            key={col.label}
            className={cn(
              `flex flex-row justify-center text-right px-4 py-3 font-medium whitespace-nowrap ${col.width}`
            )}
          >
            {col.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
