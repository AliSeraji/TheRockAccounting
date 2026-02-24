import type { ReactNode } from 'react';
import { requestUpperTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export default function Header(): ReactNode {
  return (
    <TableHeader className="w-full border-collapse mb-2 text-[10px]">
      <TableRow className="bg-gray-200">
        {requestUpperTableItems.map((item) => {
          return (
            <TableHead
              key={item.label}
              className={`justify-center text-center border-2 border-gray-500 p-1 ${item.width}`}
            >
              {item.label}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
}
