import type { KeyboardEventHandler, ReactNode } from 'react';
import { Table, TableBody } from '../ui/table';
import { cn } from '~/lib/utils';
import FloatingHeader from './FloatingHeader';
import type { FloatingColumn } from './columns';

// A desktop table whose rows float as cards (FloatingRow). `footer` goes
// under the table: total tiles or pagination.
export default function FloatingTable({
  columns,
  className,
  onKeyDown,
  footer,
  children,
}: {
  columns: FloatingColumn[];
  className?: string;
  onKeyDown?: KeyboardEventHandler<HTMLTableSectionElement>;
  footer?: ReactNode;
  children: ReactNode;
}): ReactNode {
  return (
    <>
      <Table className={cn('flex w-full flex-col', className)}>
        <FloatingHeader columns={columns} />
        {/* pb-2 keeps the last row's hover shadow inside the scroll box.
            ui/table drops the last row's border; a card keeps it. */}
        <TableBody
          onKeyDown={onKeyDown}
          className="flex flex-col gap-2 pb-2 [&_tr:last-child]:border"
        >
          {children}
        </TableBody>
      </Table>
      {footer}
    </>
  );
}
