import type React from 'react';
import { TableCell, TableFooter, TableRow } from '~/components/ui/table';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import type { InvoiceTotals } from '~/store/types';

export default function SalesTableFooter({
  totals,
}: {
  totals?: InvoiceTotals;
}): React.ReactNode {
  return (
    <TableFooter className="text-xs">
      <TableRow className="font-bold">
        <TableCell
          colSpan={3}
          className="border-2 border-gray-400 p-2 text-center"
        >
          جمع فاکتور
        </TableCell>
        <TableCell className="border-2 border-gray-400 p-2 text-center">
          {convertToPersianDigits(totals?.totalQuantity || '')}
        </TableCell>
        <TableCell
          colSpan={2}
          className="border-2 border-gray-400 p-2"
        ></TableCell>
        <TableCell className="border-2 border-gray-400 p-2 text-center">
          {convertToPersianDigits(totals?.totalArea || '')}
        </TableCell>
        <TableCell className="border-2 border-gray-400 p-2"></TableCell>
        <TableCell className="border-2 border-gray-400 p-2 text-center">
          {formatRialAmount(convertToPersianDigits(totals?.totalAmount || ''))}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
