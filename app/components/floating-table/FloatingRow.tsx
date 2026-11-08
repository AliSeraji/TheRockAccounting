import type { ComponentProps, ReactNode } from 'react';
import { TableCell, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { ROW, ROW_BLANK } from './styles';

// One row of a floating table: a white card that starts with its number in a
// badge. A blank row, with nothing typed yet, is dashed.
export default function FloatingRow({
  number,
  numberWidth = 'w-[3%]',
  blank = false,
  className,
  children,
  ...props
}: ComponentProps<'tr'> & {
  number: number;
  numberWidth?: string;
  blank?: boolean;
}): ReactNode {
  return (
    <TableRow className={cn(ROW, blank && ROW_BLANK, className)} {...props}>
      <TableCell className={cn('flex justify-center p-0', numberWidth)}>
        <Badge
          className={cn(
            'size-6.5 bg-brand-100 p-0 text-[13px] font-bold text-brand-900',
            blank && 'border-dashed border-slate-300 bg-transparent'
          )}
        >
          {convertToPersianDigits(number)}
        </Badge>
      </TableCell>
      {children}
    </TableRow>
  );
}
