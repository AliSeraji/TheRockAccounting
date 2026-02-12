import type { ReactNode } from 'react';
import { TableBody } from '~/components/ui/table';
import type { InvoiceDataType } from '~/store/types';
import Row from './Row';

export default function Body({
  items,
  startIndex,
}: {
  items: InvoiceDataType['items'];
  startIndex: number;
}): ReactNode {
  return (
    <TableBody>
      {items.map((item, index) => (
        <Row key={item.id} item={item} index={startIndex + index + 1} />
      ))}
    </TableBody>
  );
}
