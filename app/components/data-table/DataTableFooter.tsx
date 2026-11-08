import type { ReactNode } from 'react';
import TablePagination, { type TablePaginationProps } from './TablePagination';

// The pagination under a desktop list.
export default function DataTableFooter(
  props: TablePaginationProps
): ReactNode {
  if (props.totalPages <= 1) return null;

  return (
    <div className="flex justify-center border-t border-slate-200 py-3">
      <TablePagination {...props} />
    </div>
  );
}
