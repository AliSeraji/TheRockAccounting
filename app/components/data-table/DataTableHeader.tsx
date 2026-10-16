import type { ReactNode } from 'react';
import { TableHeader, TableRow, TableHead } from '~/components/ui/table';
import { cn } from '~/lib/utils';
import type { DataTableColumn, DataTableItem } from './types';

const headClass =
  'flex flex-row justify-center text-right px-4 py-3 font-medium whitespace-nowrap';

export default function DataTableHeader<T extends DataTableItem>({
  columns,
}: {
  columns: DataTableColumn<T>[];
}): ReactNode {
  return (
    <TableHeader>
      <TableRow className="flex flex-row w-full bg-slate-50 border-b border-slate-200 text-slate-600">
        <TableHead className={cn(headClass, 'w-[5%] px-2')}>ردیف</TableHead>
        {columns.map((col) => (
          <TableHead key={col.key} className={cn(headClass, col.width)}>
            {col.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
