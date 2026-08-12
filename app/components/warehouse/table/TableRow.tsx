import { memo, type ReactNode } from 'react';
import { TableRow, TableCell } from '~/components/ui/table';
import type { WarehouseItem } from '~/store/warehouse/types';
import { categoryColors } from '../constants';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';

interface WarehouseTableRowProps {
  item: WarehouseItem;
  isEven: boolean;
}

const WarehouseTableRow = memo(function WarehouseTableRow({
  item,
  isEven,
}: WarehouseTableRowProps): ReactNode {
  const isSelected = useWarehouseStore(
    (state) => state.selectedItem?.id === item.id
  );
  const setSelectedItem = useWarehouseStore((state) => state.setSelectedItem);

  return (
    <TableRow
      onClick={() => setSelectedItem(item)}
      className={`border-b border-slate-100 hover:bg-teal-50 transition-colors cursor-pointer ${
        isSelected
          ? 'bg-teal-50 ring-1 ring-inset ring-teal-300'
          : isEven
            ? 'bg-white'
            : 'bg-slate-50/50'
      }`}
    >
      <TableCell className="px-4 py-3 text-slate-700 font-mono text-xs whitespace-nowrap">
        {item.code || '—'}
      </TableCell>
      <TableCell className="px-4 py-3">
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
      <TableCell className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">
        {item.name}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.diameter || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.length || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.width || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.area || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.purchasePrice
          ? Number(item.purchasePrice).toLocaleString('fa-IR')
          : '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.salePrice ? Number(item.salePrice).toLocaleString('fa-IR') : '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600">
        {item.quantity ? Number(item.quantity).toLocaleString('fa-IR') : '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-500 max-w-48 truncate">
        {item.notes || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
        {item.date || '—'}
      </TableCell>
    </TableRow>
  );
});

export default WarehouseTableRow;
