import type React from 'react';
import { TableCell, TableFooter, TableRow } from '~/components/ui/table';
import {
  cleanTrailingZeros,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import type { InvoiceTotals } from '~/store/types';

const cellClass =
  'border-t border-s border-slate-300 first:border-s-0 p-2 text-center text-slate-900';

export default function SalesTableFooter({
  totals,
}: {
  totals?: InvoiceTotals;
}): React.ReactNode {
  return (
    <TableFooter className="border-0 bg-white text-2xs">
      <TableRow className="border-0 font-bold">
        <TableCell colSpan={3} className={`${cellClass}`}>
          جمع فاکتور
        </TableCell>
        <TableCell className={cellClass}>
          {convertToPersianDigits(totals?.totalQuantity || '')}
        </TableCell>
        <TableCell colSpan={2} className={cellClass}></TableCell>
        <TableCell className={cellClass}>
          {totals?.totalArea
            ? convertToPersianDigits(
                cleanTrailingZeros(totals.totalArea.toFixed(2))
              )
            : ''}
        </TableCell>
        <TableCell className={cellClass}></TableCell>
        <TableCell
          className={`${cellClass} bg-brand-100 text-2xs text-brand-950`}
        >
          {formatRialAmount(convertToPersianDigits(totals?.totalAmount || ''))}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
