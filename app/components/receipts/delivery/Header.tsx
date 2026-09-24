import type React from 'react';
import { deliveryTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

interface DeliveryTableHeaderProps {
  items?: typeof deliveryTableItems;
}

export const DeliveryTableHeader = ({
  items = deliveryTableItems,
}: DeliveryTableHeaderProps): React.ReactNode => {
  return (
    <TableHeader className="w-full">
      <TableRow className="border-0 bg-brand-700">
        {items.map((item) => (
          <TableHead
            key={item.label}
            className={`border-s border-brand-500 first:border-s-0 last:border-e-0 p-2 text-2xs font-normal text-white text-center ${item.width}`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
