import { memo, type ReactNode } from 'react';
import { TableRow, TableCell } from '~/components/ui/table';
import { cn, convertToPersianDigits } from '~/lib/utils';
import type { DataTableColumn, DataTableItem } from './types';

interface DataTableRowProps<T extends DataTableItem> {
  item: T;
  rowNumber: number;
  columns: DataTableColumn<T>[];
  isSelected: boolean;
  // Highlights rows that need attention, such as negative stock.
  isFlagged: boolean;
  flagLabel?: string;
  onSelect: (item: T) => void;
}

const cellClass = 'flex flex-row justify-center px-4 py-3 text-slate-600';

export const rowStateClass = (
  isSelected: boolean,
  isFlagged: boolean
): string => {
  if (isFlagged) {
    return isSelected
      ? 'bg-red-100 ring-1 ring-inset ring-red-400 hover:bg-red-200/70'
      : 'bg-red-50 ring-1 ring-inset ring-red-200 hover:bg-red-100';
  }
  return isSelected
    ? 'bg-brand-100 ring-1 ring-inset ring-brand-400 hover:bg-brand-200/70'
    : 'bg-white hover:bg-brand-50';
};

function DataTableRow<T extends DataTableItem>({
  item,
  rowNumber,
  columns,
  isSelected,
  isFlagged,
  flagLabel,
  onSelect,
}: DataTableRowProps<T>): ReactNode {
  return (
    <TableRow
      onClick={() => onSelect(item)}
      title={isFlagged ? flagLabel : undefined}
      className={cn(
        'flex flex-row w-full max-h-11.5 rounded-xl cursor-pointer border-0 transition-[background-color,box-shadow] duration-150',
        rowStateClass(isSelected, isFlagged)
      )}
    >
      <TableCell className={cn(cellClass, 'w-[5%] px-2 text-slate-400')}>
        {convertToPersianDigits(rowNumber)}
      </TableCell>
      {columns.map((col) => (
        <TableCell
          key={col.key}
          className={cn(cellClass, col.width, col.className)}
        >
          {col.render(item)}
        </TableCell>
      ))}
    </TableRow>
  );
}

// memo drops the generic signature, so cast it back.
export default memo(DataTableRow) as typeof DataTableRow;
