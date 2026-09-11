import { memo, type ReactNode } from 'react';
import { TableRow, TableCell } from '~/components/ui/table';
import type { WarehouseItem } from '~/store/warehouse/types';
import { categoryColors } from '../constants';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { convertToPersianDigits } from '~/lib/utils';

interface WarehouseTableRowProps {
  item: WarehouseItem;
}

const WarehouseTableRow = memo(function WarehouseTableRow({
  item,
}: WarehouseTableRowProps): ReactNode {
  const isSelected = useWarehouseStore(
    (state) => state.selectedItem?.id === item.id
  );
  const setSelectedItem = useWarehouseStore((state) => state.setSelectedItem);

  return (
    <TableRow
      onClick={() => setSelectedItem(item)}
      className={`flex flex-row w-full rounded-xl cursor-pointer border-0 transition-[background-color,box-shadow] duration-150 ${
        isSelected
          ? 'bg-indigo-50 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-100/70'
          : 'bg-white hover:bg-indigo-50/50'
      }`}
    >
      <TableCell className="flex flex-row justify-center px-4 py-3 text-slate-700 font-mono text-xs whitespace-nowrap w-[10%]">
        {item.code || '—'}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[13%] px-4 py-3">
        {item.category ? (
          <span
            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${categoryColors[item.category] ?? 'bg-slate-100 text-slate-600'}`}
          >
            {item.category}
          </span>
        ) : (
          '—'
        )}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[22%] px-4 py-3 font-medium text-slate-800 whitespace-nowrap">
        {convertToPersianDigits(item.name.replace(item.category, ''))}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[5%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(item.diameter || '—')}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[5%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(item.length || '—')}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[10%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(item.width || '—')}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[10%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(item.area || '—')}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[10%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(
          item.purchasePrice
            ? Number(item.purchasePrice).toLocaleString('fa-IR')
            : '—'
        )}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[10%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(
          item.salePrice ? Number(item.salePrice).toLocaleString('fa-IR') : '—'
        )}
      </TableCell>
      <TableCell className="flex flex-row justify-center w-[5%] px-4 py-3 text-slate-600">
        {convertToPersianDigits(
          item.quantity ? Number(item.quantity).toLocaleString('fa-IR') : '—'
        )}
      </TableCell>
    </TableRow>
  );
});

export default WarehouseTableRow;
