import type { ReactNode } from 'react';
import { requestLowerTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export default function Header(): ReactNode {
  return (
    <TableHeader className="bg-gray-200">
      <TableRow>
        {requestLowerTableItems.map((item) => (
          <TableHead
            key={item.label}
            className={`border-2 border-gray-500 p-1 text-center text-[10px] ${item.width}`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
