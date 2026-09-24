import type React from 'react';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { InvoiceDataType } from '~/store/types';

interface DeliveryTableBodyProps {
  items: InvoiceDataType['items'];
  startIndex: number;
}

const cellClass =
  'border-s border-slate-200 first:border-s-0 p-2 text-2xs text-center text-slate-900';

export const DeliveryTableBody = ({
  items,
  startIndex,
}: DeliveryTableBodyProps): React.ReactNode => {
  return (
    <TableBody>
      {items.map((item, index) => (
        <TableRow key={item.id} className="border-0 even:bg-slate-50">
          <TableCell className={cellClass}>
            {convertToPersianDigits(startIndex + index + 1)}
          </TableCell>
          <TableCell
            className={`whitespace-normal wrap-break-word ${cellClass}`}
          >
            {item.stoneType}
          </TableCell>
          <TableCell className={cellClass}>
            {convertToPersianDigits(item.thickness)}
          </TableCell>
          <TableCell className={cellClass}>
            {convertToPersianDigits(item.width)}
          </TableCell>
          <TableCell className={cellClass}>
            {convertToPersianDigits(item.length)}
          </TableCell>
          <TableCell className={cellClass}>
            {convertToPersianDigits(item.quantity)}
          </TableCell>
          <TableCell className={cellClass}>
            {convertToPersianDigits(item.area)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
