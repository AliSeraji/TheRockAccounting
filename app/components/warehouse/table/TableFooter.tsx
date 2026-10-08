import type { ReactNode } from 'react';
import { TableRow, TableCell } from '~/components/ui/table';
import WarehousePagination, {
  type WarehousePaginationProps,
} from './Pagination';

export default function TableFooter(
  props: WarehousePaginationProps
): ReactNode {
  if (props.totalPages <= 1) return null;

  return (
    <TableRow className="flex flex-row w-full justify-center border-t border-slate-200">
      <TableCell colSpan={12} className="py-3">
        <WarehousePagination {...props} />
      </TableCell>
    </TableRow>
  );
}
