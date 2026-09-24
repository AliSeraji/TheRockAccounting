import type React from 'react';
import { TableCell, TableFooter, TableRow } from '~/components/ui/table';
import { cleanTrailingZeros, convertToPersianDigits } from '~/lib/utils';

interface DeliveryTableFooterProps {
  totalArea: number;
}

const cellClass =
  'border-t border-s border-slate-300 first:border-s-0 p-2 text-center text-slate-900';

export const DeliveryTableFooter = ({
  totalArea,
}: DeliveryTableFooterProps): React.ReactNode => {
  return (
    <TableFooter className="border-0 bg-white text-2xs">
      <TableRow className="border-0 font-bold">
        <TableCell colSpan={6} className={cellClass}>
          متراژ کل
        </TableCell>
        <TableCell className={`${cellClass} bg-brand-100 text-brand-950`}>
          {totalArea
            ? convertToPersianDigits(cleanTrailingZeros(totalArea.toFixed(2)))
            : ''}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};
