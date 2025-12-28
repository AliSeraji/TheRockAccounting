import type React from 'react';
import { TableCell, TableRow } from '../ui/table';
import type { StoneItem } from './types';
import { Input } from '../ui/input';
import { convertToPersianDigits } from '~/lib/utils';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export default function Row({
  rowItem,
  index,
  update,
  remove,
}: {
  rowItem: StoneItem;
  index: number;
  update: (id: number, field: keyof StoneItem, value: string) => void;
  remove: (id: number) => void;
}): React.ReactNode {
  return (
    <TableRow className="w-full flex flex-row hover:bg-slate-50 transition-colors">
      <TableCell className="w-[5%] border border-slate-200 p-2 text-center text-slate-700 font-medium">
        {index + 1}
      </TableCell>
      <TableCell className="w-[15%] border border-slate-200 p-1">
        <Input
          value={rowItem.stoneType}
          onChange={(e) => update(rowItem.id, 'stoneType', e.target.value)}
          className="border-0 text-center text-sm h-8"
          placeholder="انتخاب"
        />
      </TableCell>
      <TableCell className="w-[8%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.thickness)}
          onChange={(e) => update(rowItem.id, 'thickness', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[7%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.quantity)}
          onChange={(e) => update(rowItem.id, 'quantity', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[8%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.width)}
          onChange={(e) => update(rowItem.id, 'width', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[8%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.length)}
          onChange={(e) => update(rowItem.id, 'length', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[12%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.area)}
          onChange={(e) => update(rowItem.id, 'area', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[12%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.price)}
          onChange={(e) => update(rowItem.id, 'price', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[20%] border border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(rowItem.total)}
          onChange={(e) => update(rowItem.id, 'total', e.target.value)}
          className="border-0 text-center text-sm h-8"
        />
      </TableCell>
      <TableCell className="w-[5%] border border-slate-200 p-1 text-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => remove(rowItem.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 hover:cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
