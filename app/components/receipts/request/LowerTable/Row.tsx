import type { ReactNode } from 'react';
import { TableCell, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { StoneItem } from '~/store/types';

export default function Row({
  item,
  index,
}: {
  item: StoneItem;
  index: number;
}): ReactNode {
  return (
    <TableRow>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(index)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(item.area)}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {}
      </TableCell>
    </TableRow>
  );
}
