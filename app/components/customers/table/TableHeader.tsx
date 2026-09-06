import type { ReactNode } from 'react';
import { TableHeader, TableRow, TableHead } from '~/components/ui/table';
import { customerColumns } from '../constants';

export default function CustomersTableHeader(): ReactNode {
  return (
    <TableHeader>
      <TableRow className="bg-slate-50 border-b border-slate-200 text-slate-600">
        {customerColumns.map((col) => (
          <TableHead
            key={col}
            className="text-right px-4 py-3 font-medium whitespace-nowrap"
          >
            {col}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
