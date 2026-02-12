import type { ReactNode } from 'react';
import { requestLowerTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader } from '~/components/ui/table';

export default function Header(): ReactNode {
  return (
    <TableHeader className="bg-gray-200">
      {requestLowerTableItems.map((item) => {
        return (
          <TableHead className="border-2 border-gray-500 p-1 text-center text-[10px]">
            {item.label}
          </TableHead>
        );
      })}
    </TableHeader>
  );
}
