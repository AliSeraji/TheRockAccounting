import type { ReactNode } from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';
import { cn } from '~/lib/utils';
import type { FloatingColumn } from './columns';

// The column names over a floating table: plain labels, with the unit on a
// second line. px-px lines them up with the rows' 1px border.
export default function FloatingHeader({
  columns,
}: {
  columns: FloatingColumn[];
}): ReactNode {
  return (
    <TableHeader className="[&_tr]:border-b-0">
      <TableRow className="flex w-full items-end px-px pb-2 *:min-w-0">
        {columns.map((column, index) => (
          <TableHead
            key={column.label || index}
            title={column.label}
            className={cn(
              'flex h-auto flex-col justify-end px-1 text-center text-xs leading-snug text-slate-600',
              column.align === 'start' && 'px-3 text-start',
              column.width
            )}
          >
            <span className="truncate">{column.label || ' '}</span>
            {column.unit && (
              <span className="truncate text-[10.5px] font-normal">
                {column.unit}
              </span>
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
