import type React from 'react';
import { TableCell, TableRow } from '../ui/table';
import type { StoneItem } from './types';
import { Input } from '../ui/input';

export default function Row({
  rowItem,
  index,
}: {
  rowItem: StoneItem;
  index: number;
}): React.ReactNode {
  return (
    <TableRow className="hover:bg-slate-50 transition-colors">
      <TableCell className="border border-slate-200 p-2 text-center text-slate-700 font-medium">
        {index + 1}
      </TableCell>
      <TableCell className="border border-slate-200 p-1">
        <Input
          value={rowItem.stoneType}
          onChange={(e) => updateItem(rowItem.id, 'stoneType', e.target.value)}
          className="border-0 text-center text-sm h-8"
          placeholder="انتخاب"
        />
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}
