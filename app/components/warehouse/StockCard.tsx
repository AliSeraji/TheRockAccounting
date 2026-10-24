import type { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { StockMovement, WarehouseId } from '~/store/warehouse/types';
import {
  TRANSFER_TARGET,
  formatQuantity,
  parseQuantity,
} from '~/store/warehouse/helpers';
import { MOVEMENT_REASONS } from './constants';
import { WAREHOUSE_SECTIONS } from './common';
import { formatDateTime, formatNumber, stockUnit } from './format';

const headClass =
  'border border-slate-300 p-2 text-xs text-center text-slate-800 whitespace-nowrap';
const cellClass = 'border border-slate-200 p-2 text-center text-slate-700';

const sectionTitle = (id: WarehouseId) =>
  WAREHOUSE_SECTIONS.find((s) => s.id === id)?.title ?? '';

// What a movement was. Transfers name the other warehouse.
const describe = ({ reason, warehouse, delta }: StockMovement): string => {
  if (reason !== 'transfer') return MOVEMENT_REASONS[reason];
  if (warehouse !== 'main' && warehouse !== 'secondary') return 'انتقال';
  const other = sectionTitle(TRANSFER_TARGET[warehouse]);
  return delta.startsWith('-') ? `انتقال به ${other}` : `انتقال از ${other}`;
};

const amountClass = (value: string) =>
  value.startsWith('-') ? 'text-red-700' : 'text-emerald-700';

// One item's stock card: its movements, oldest first, with the balance after
// each.
export default function StockCard({
  warehouse,
  itemId,
}: {
  warehouse: WarehouseId;
  itemId: string;
}): ReactNode {
  const movements = useWarehouseStore((state) => state.movements);

  const rows: { movement: StockMovement; balance: string }[] = [];
  let balance = 0;
  for (const movement of movements) {
    if (movement.itemId !== itemId || movement.warehouse !== warehouse) {
      continue;
    }
    balance += parseQuantity(movement.delta);
    rows.push({ movement, balance: formatQuantity(balance) });
  }

  if (rows.length === 0) {
    return (
      <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-sm text-slate-500">
        هنوز گردشی برای این مورد ثبت نشده است.
      </p>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow className="bg-slate-100 hover:bg-slate-100">
            <TableHead className={cn(headClass, 'w-[30%]')}>تاریخ</TableHead>
            <TableHead className={cn(headClass, 'w-[36%]')}>شرح</TableHead>
            <TableHead className={cn(headClass, 'w-[17%]')}>
              تغییر ({stockUnit(warehouse)})
            </TableHead>
            <TableHead className={cn(headClass, 'w-[17%]')}>مانده</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(({ movement, balance }) => (
            <TableRow key={movement.id} className="hover:bg-slate-50">
              <TableCell className={cn(cellClass, 'text-xs whitespace-nowrap')}>
                {formatDateTime(movement.date)}
              </TableCell>
              <TableCell className={cellClass}>
                <div>{describe(movement)}</div>
                {movement.note && (
                  <div className="mt-0.5 text-xs text-slate-500 whitespace-normal">
                    {movement.note}
                  </div>
                )}
              </TableCell>
              <TableCell className={cellClass}>
                <span
                  dir="ltr"
                  className={cn('font-semibold', amountClass(movement.delta))}
                >
                  {convertToPersianDigits(
                    movement.delta.startsWith('-')
                      ? movement.delta
                      : `+${movement.delta}`
                  )}
                </span>
              </TableCell>
              <TableCell
                className={cn(
                  cellClass,
                  'font-semibold',
                  balance.startsWith('-') && 'text-red-700'
                )}
              >
                {formatNumber(balance)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
