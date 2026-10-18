import type { ReactNode } from 'react';
import { Table, TableBody, TableFooter as TFoot } from '~/components/ui/table';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';
import DataTableFooter from './DataTableFooter';
import DataTableCard from './DataTableCard';
import TablePagination from './TablePagination';
import { useIsMobile } from '~/hooks/use-mobile';
import type { DataTableColumn, DataTableItem } from './types';

interface DataTableProps<T extends DataTableItem> {
  columns: DataTableColumn<T>[];
  items: T[];
  // Row number of the first item, so numbering continues across pages.
  firstRowNumber: number;
  selectedId?: string | null;
  onSelect: (item: T) => void;
  isFlagged?: (item: T) => boolean;
  flagLabel?: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function DataTable<T extends DataTableItem>({
  columns,
  items,
  firstRowNumber,
  selectedId,
  onSelect,
  isFlagged,
  flagLabel,
  currentPage,
  totalPages,
  setCurrentPage,
}: DataTableProps<T>): ReactNode {
  const isMobile = useIsMobile();

  // Phones get stacked cards without a header instead of a wide table.
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 p-2 text-sm">
        {items.map((item, idx) => (
          <DataTableCard
            key={item.id}
            item={item}
            rowNumber={firstRowNumber + idx}
            columns={columns}
            isSelected={item.id === selectedId}
            isFlagged={isFlagged?.(item) ?? false}
            flagLabel={flagLabel}
            onSelect={onSelect}
          />
        ))}
        {totalPages > 1 && (
          <div className="border-t border-slate-200 pt-3 pb-1">
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <Table className="flex flex-col w-[unset] text-sm">
      <DataTableHeader columns={columns} />
      <TableBody className="w-full flex flex-col gap-2 p-2">
        {items.map((item, idx) => (
          <DataTableRow
            key={item.id}
            item={item}
            rowNumber={firstRowNumber + idx}
            columns={columns}
            isSelected={item.id === selectedId}
            isFlagged={isFlagged?.(item) ?? false}
            flagLabel={flagLabel}
            onSelect={onSelect}
          />
        ))}
      </TableBody>
      <TFoot>
        <DataTableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </TFoot>
    </Table>
  );
}
