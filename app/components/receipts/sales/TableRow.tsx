import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { InvoiceDataType } from '~/store/types';

interface SalesTableRowProps {
  rowItems: InvoiceDataType['items'];
  startIndex: number;
}

export default function SalesTableBody({
  rowItems,
  startIndex,
}: SalesTableRowProps): React.ReactNode {
  return (
    <TableBody>
      {rowItems.map((item, index) => (
        <TableRow key={item.id} className="hover:bg-gray-50">
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(startIndex + index + 1)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {item.stoneType}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.thickness)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.quantity)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            ${convertToPersianDigits(item.width)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.length)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.area)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.price)}
          </TableCell>
          <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
            {convertToPersianDigits(item.total)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
