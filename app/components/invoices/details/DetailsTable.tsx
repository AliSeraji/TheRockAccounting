import type { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { cn } from '~/lib/utils';

export type DetailColumn<T> = {
  label: string;
  width: string;
  render: (row: T, index: number) => ReactNode;
  // Shown in the totals row, for columns after the label.
  footer?: ReactNode;
};

const headClass =
  'border border-slate-300 p-2.5 text-xs text-center text-slate-800 whitespace-nowrap';
const cellClass = 'border border-slate-200 p-2 text-center text-slate-700';
const footerCellClass =
  'border border-slate-300 p-2 text-center font-semibold text-slate-800';

// A read-only version of the invoice tables. The totals row puts
// `footerLabel` across the first `footerSpan` columns.
export default function DetailsTable<T extends { id: number }>({
  columns,
  rows,
  footerLabel,
  footerSpan,
}: {
  columns: DetailColumn<T>[];
  rows: T[];
  footerLabel: string;
  footerSpan: number;
}): ReactNode {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-full min-w-200 lg:min-w-0 text-sm">
        <TableHeader>
          <TableRow className="bg-slate-100 hover:bg-slate-100">
            {columns.map((col) => (
              <TableHead key={col.label} className={cn(headClass, col.width)}>
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id} className="hover:bg-slate-50">
              {columns.map((col) => (
                <TableCell key={col.label} className={cellClass}>
                  {col.render(row, index)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-slate-100 hover:bg-slate-100">
          <TableRow className="hover:bg-slate-100">
            <TableCell colSpan={footerSpan} className={footerCellClass}>
              {footerLabel}
            </TableCell>
            {columns.slice(footerSpan).map((col) => (
              <TableCell key={col.label} className={footerCellClass}>
                {col.footer}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
