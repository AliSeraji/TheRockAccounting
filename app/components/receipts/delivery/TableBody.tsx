import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import type { InvoiceData } from '../types';
import { convertToPersianDigits } from '~/lib/utils';

interface DeliveryTableBodyProps {
  items: InvoiceData['items'];
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
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(startIndex + index + 1)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {item.stoneType || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(item.thickness) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(item.length) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(item.width) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(item.quantity) || ''}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-1.5 text-center">
            {convertToPersianDigits(item.area) || ''}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
