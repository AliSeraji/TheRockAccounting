import {
  useState,
  type FocusEvent,
  type KeyboardEventHandler,
  type ReactNode,
} from 'react';
import { Table, TableBody } from '../ui/table';
import { cn } from '~/lib/utils';
import FloatingHeader from './FloatingHeader';
import type { FloatingColumn } from './columns';

// A desktop table whose rows float as cards (FloatingRow). `footer` goes
// under the table: the totals bar or pagination. `track` gives the invoice
// tables' segmented header, which raises the column being typed in.
export default function FloatingTable({
  columns,
  track = false,
  className,
  onKeyDown,
  footer,
  children,
}: {
  columns: FloatingColumn[];
  track?: boolean;
  className?: string;
  onKeyDown?: KeyboardEventHandler<HTMLTableSectionElement>;
  footer?: ReactNode;
  children: ReactNode;
}): ReactNode {
  const [active, setActive] = useState<number | null>(null);

  // The column of the focused field. A computed (read-only) field or a
  // button raises nothing.
  const followFocus = (e: FocusEvent<HTMLTableSectionElement>) => {
    const target = e.target as Element;
    const cell = target.closest('td');
    if (
      !cell?.parentElement ||
      !(target instanceof HTMLInputElement) ||
      target.readOnly
    ) {
      setActive(null);
      return;
    }
    setActive(Array.from(cell.parentElement.children).indexOf(cell));
  };

  const leaveTable = (e: FocusEvent<HTMLTableSectionElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setActive(null);
  };

  return (
    <>
      <Table className={cn('flex w-full flex-col', className)}>
        <FloatingHeader columns={columns} track={track} active={active} />
        {/* pb-2 keeps the last row's hover shadow inside the scroll box.
            ui/table drops the last row's border; a card keeps it. */}
        <TableBody
          onKeyDown={onKeyDown}
          onFocus={track ? followFocus : undefined}
          onBlur={track ? leaveTable : undefined}
          className="flex flex-col gap-2 pb-2 [&_tr:last-child]:border"
        >
          {children}
        </TableBody>
      </Table>
      {footer}
    </>
  );
}
