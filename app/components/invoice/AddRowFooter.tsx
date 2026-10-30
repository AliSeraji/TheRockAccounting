import type React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { CardFooter } from '../ui/card';

// The add-row button at the foot of an invoice table's card. justify-end puts
// it on the left in RTL, under the table's delete column.
export default function AddRowFooter({
  label,
  onAdd,
}: {
  label: string;
  onAdd: () => void;
}): React.ReactNode {
  return (
    <CardFooter className="justify-end rounded-b-lg border-t border-slate-200 bg-slate-50 px-1 py-2 lg:px-4 lg:py-3">
      <Button
        onClick={onAdd}
        size="sm"
        className="gap-1.5 bg-slate-700 hover:bg-slate-800 hover:cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        {label}
      </Button>
    </CardFooter>
  );
}
