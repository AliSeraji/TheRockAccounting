import type React from 'react';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { InvoiceDataType } from '~/store/types';

interface DeliveryTableBodyProps {
  items: InvoiceDataType['items'];
  startIndex: number;
}

export const DeliveryTableBody = ({
  items,
  startIndex,
}: DeliveryTableBodyProps): React.ReactNode => {
  return (
    <TableBody>
      {items.map((item, index) => (
        <TableRow key={item.id} className="hover:bg-gray-50">
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(startIndex + index + 1)}
          </TableCell>
          <TableCell className="whitespace-normal wrap-break-word border-2 border-gray-400 p-1.5 text-center text-2xs">
            {item.stoneType || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(item.thickness) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(item.length) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(item.width) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(item.quantity) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center text-2xs">
            {convertToPersianDigits(item.area) || ''}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
