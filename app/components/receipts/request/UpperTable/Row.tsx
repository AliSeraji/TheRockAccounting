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
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px] ">
        {convertToPersianDigits(index)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {item.stoneType || ''}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.length)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.width)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.thickness)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.quantity)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.area)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {''}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {''}
      </TableCell>
    </TableRow>
  );
}
