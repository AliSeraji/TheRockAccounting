import type { ReactNode } from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';
import {
  SEGMENT_ON,
  SEGMENT_TRACK,
  SEGMENT_TRANSITION,
} from '../ui/segmented-control';
import { cn } from '~/lib/utils';
import type { FloatingColumn } from './columns';

// The column names over a floating table.
// - Plain (the lists): small labels, the unit on a second line.
// - Track (the invoice tables): a segmented-control track, one line per
//   label. The column being typed in (`active`) rises as a white segment.
//   px-px lines the columns up with the rows' 1px border.
export default function FloatingHeader({
  columns,
  track = false,
  active = null,
}: {
  columns: FloatingColumn[];
  track?: boolean;
  active?: number | null;
}): ReactNode {
  if (track) {
    return (
      <TableHeader className="[&_tr]:border-b-0">
        <TableRow
          className={cn(
            'mb-2 flex w-full items-center *:min-w-0',
            SEGMENT_TRACK,
            'px-px'
          )}
        >
          {columns.map((column, index) => (
            <TableHead
              key={column.label || index}
              title={column.label}
              data-state={column.label && index === active ? 'on' : 'off'}
              className={cn(
                'flex h-8.5 items-center justify-center rounded-[9px] px-1 text-[12.5px] font-medium text-slate-700 data-[state=on]:font-bold',
                SEGMENT_TRANSITION,
                SEGMENT_ON,
                column.align === 'start' && 'justify-start px-3',
                column.width
              )}
            >
              <span className="truncate">
                {column.label || ' '}
                {column.unit && (
                  <span className="font-normal text-slate-600">
                    {' '}
                    ({column.unit})
                  </span>
                )}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
    );
  }

  return (
    <TableHeader className="[&_tr]:border-b-0">
      <TableRow className="flex w-full items-end px-px pb-2 *:min-w-0">
        {columns.map((column, index) => (
          <TableHead
            key={column.label || index}
            title={column.label}
            className={cn(
              'flex h-auto flex-col justify-end px-1 text-center text-xs leading-snug text-slate-600',
              column.align === 'start' && 'px-3 text-start',
              column.width
            )}
          >
            <span className="truncate">{column.label || ' '}</span>
            {column.unit && (
              <span className="truncate text-[10.5px] font-normal">
                {column.unit}
              </span>
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
