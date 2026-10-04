import type { ReactNode } from 'react';
import { Table, TableBody, TableFooter as TFoot } from '~/components/ui/table';
import WarehouseTableHeader from './TableHeader';
import WarehouseTableRow from './TableRow';
import TableFooter from './TableFooter';
import WarehouseMobileCard from './MobileCard';
import WarehousePagination from './Pagination';
import { useIsMobile } from '~/hooks/use-mobile';
import type { WarehouseColumn, WarehouseRowItem } from './types';

interface WarehouseTableProps<T extends WarehouseRowItem> {
  columns: WarehouseColumn<T>[];
  items: T[];
  // Row number of the first item, so numbering continues across pages.
  firstRowNumber: number;
  selectedId: number | null;
  onSelect: (item: T) => void;
  isFlagged?: (item: T) => boolean;
  flagLabel?: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function WarehouseTable<T extends WarehouseRowItem>({
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
}: WarehouseTableProps<T>): ReactNode {
  const isMobile = useIsMobile();

  // Phones get stacked cards without a header instead of a wide table.
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 p-2 text-sm">
        {items.map((item, idx) => (
          <WarehouseMobileCard
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
            <WarehousePagination
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
      <WarehouseTableHeader columns={columns} />
      <TableBody className="w-full flex flex-col gap-2 p-2">
        {items.map((item, idx) => (
          <WarehouseTableRow
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
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </TFoot>
    </Table>
  );
}
