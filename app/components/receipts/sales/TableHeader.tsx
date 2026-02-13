import type React from 'react';
import { salesTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

interface SalesTableHeaderProps {
  items?: typeof salesTableItems;
}

export default function SalesTableHeader({
  items = salesTableItems,
}: SalesTableHeaderProps): React.ReactNode {
  return (
    <TableHeader className="w-full border-collapse mb-6 ">
      <TableRow className="bg-gray-200 ">
        {items.map((item) => (
          <TableHead
            key={item.label}
            className={`border-2 border-gray-500 p-2 text-xs text-center ${item.width} `}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
