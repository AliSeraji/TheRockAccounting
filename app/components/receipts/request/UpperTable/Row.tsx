import type { ReactNode } from 'react';
import { TableCell, TableRow } from '~/components/ui/table';
import type { StoneItem } from '~/store/types';
import { convertToPersianDigits } from '~/lib/utils';

export default function Row({
  item,
  index,
}: {
  item: StoneItem;
  index: number;
}): ReactNode {
  return (
    <TableRow>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs ">
        {convertToPersianDigits(index)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {item.stoneType || ''}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {convertToPersianDigits(item.length)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {convertToPersianDigits(item.width)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {convertToPersianDigits(item.thickness)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {convertToPersianDigits(item.quantity)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {convertToPersianDigits(item.area)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {''}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-xs">
        {''}
      </TableCell>
    </TableRow>
  );
}
