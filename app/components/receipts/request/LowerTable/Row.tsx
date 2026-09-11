import type { ReactNode } from 'react';
import { TableCell, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';

export default function Row({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}): ReactNode {
  return (
    <TableRow>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(index)}
      </TableCell>
      <TableCell className="whitespace-normal wrap-break-word border-2 border-gray-400 p-1 text-center text-[10px]">
        {service.serviceType}
      </TableCell>
      <TableCell className="border-2 border-gray-400 p-1 text-center text-[10px]">
        {convertToPersianDigits(service.quantity)}
      </TableCell>
      <TableCell className="whitespace-normal wrap-break-word border-2 border-gray-400 p-1 text-center text-[10px]">
        {service.description}
      </TableCell>
    </TableRow>
  );
}
