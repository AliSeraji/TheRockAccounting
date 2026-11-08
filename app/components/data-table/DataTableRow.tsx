import { memo, type ReactNode } from 'react';
import { TableCell } from '~/components/ui/table';
import { cn } from '~/lib/utils';
import FloatingRow from '../floating-table/FloatingRow';
import { LIST_NUMBER_COLUMN } from './constants';
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
  // A selected or flagged row's inset ring is its outline, in place of the
  // card's border.
  return (
    <FloatingRow
      number={rowNumber}
      numberWidth={LIST_NUMBER_COLUMN.width}
      onClick={() => onSelect(item)}
      title={isFlagged ? flagLabel : undefined}
      className={cn(
        'cursor-pointer',
        rowStateClass(isSelected, isFlagged),
        (isSelected || isFlagged) &&
          'border-transparent hover:border-transparent focus-within:border-transparent'
      )}
    >
      {columns.map((col) => (
        <TableCell
          key={col.key}
          className={cn(cellClass, col.width, col.className)}
        >
          {col.render(item)}
        </TableCell>
      ))}
    </FloatingRow>
  );
}

// memo drops the generic signature, so cast it back.
export default memo(DataTableRow) as typeof DataTableRow;
