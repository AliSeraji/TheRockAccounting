import type { ReactNode } from 'react';
import TablePagination, { type TablePaginationProps } from './TablePagination';

// The pagination under a desktop list, floating on the cream body like the
// rows above it.
export default function DataTableFooter(
  props: TablePaginationProps
): ReactNode {
  if (props.totalPages <= 1) return null;

  return (
    <div className="flex justify-center pt-2 pb-2">
      <TablePagination {...props} floating />
    </div>
  );
}
