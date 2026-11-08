import type { ReactNode } from 'react';
import { Trash2 } from 'lucide-react';
import { TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { cn } from '~/lib/utils';
import { DELETE_COLUMN } from './columns';

// The delete button at the end of an editable row. It stays muted until the
// row is hovered.
export default function DeleteCell({
  onRemove,
}: {
  onRemove: () => void;
}): ReactNode {
  return (
    <TableCell className={cn('flex justify-center p-0', DELETE_COLUMN.width)}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="حذف ردیف"
        onClick={onRemove}
        className="size-8 rounded-full text-slate-500 hover:cursor-pointer hover:bg-red-50 hover:text-red-700 group-hover:bg-red-50 group-hover:text-red-600"
      >
        <Trash2 />
      </Button>
    </TableCell>
  );
}
