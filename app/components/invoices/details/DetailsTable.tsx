import type { ReactNode } from 'react';
import { TableCell } from '~/components/ui/table';
import FloatingTable from '~/components/floating-table/FloatingTable';
import FloatingRow from '~/components/floating-table/FloatingRow';
import TotalBar from '~/components/floating-table/TotalBar';
import { MIN_TABLE_WIDTH } from '~/components/floating-table/styles';
import {
  ROW_NUMBER_COLUMN,
  type FloatingColumn,
} from '~/components/floating-table/columns';
import type { TotalStat } from '~/components/invoice/row-cards/RowCardTotals';
import { cn } from '~/lib/utils';

export type DetailColumn<T> = FloatingColumn & {
  render: (row: T) => ReactNode;
  // The row's amount, in bold.
  strong?: boolean;
};

// A read-only version of the invoice tables: the same header and floating
// rows, with the totals bar underneath.
export default function DetailsTable<T extends { id: number }>({
  columns,
  rows,
  title,
  stats,
}: {
  columns: DetailColumn<T>[];
  rows: T[];
  title?: string;
  stats: TotalStat[];
}): ReactNode {
  return (
    <FloatingTable
      columns={[ROW_NUMBER_COLUMN, ...columns]}
      track
      className={MIN_TABLE_WIDTH}
      footer={<TotalBar title={title} stats={stats} />}
    >
      {rows.map((row, index) => (
        <FloatingRow key={row.id} number={index + 1}>
          {columns.map((col) => (
            <TableCell
              key={col.label}
              className={cn(
                'flex justify-center px-2 text-sm text-slate-700',
                col.align === 'start' &&
                  'justify-start px-3 font-medium text-slate-900',
                col.strong && 'font-bold text-slate-900',
                col.width
              )}
            >
              <span className="truncate">{col.render(row)}</span>
            </TableCell>
          ))}
        </FloatingRow>
      ))}
    </FloatingTable>
  );
}
