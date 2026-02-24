import type { ReactNode } from 'react';
import { TableBody } from '~/components/ui/table';
import type { InvoiceDataType } from '~/store/types';
import Row from './Row';

export default function Body({
  items,
  startIdx,
}: {
  items: InvoiceDataType['items'];
  startIdx: number;
}): ReactNode {
  return (
    <TableBody>
      {items.map((item, idx) => {
        return <Row key={item.id} item={item} index={startIdx + idx + 1} />;
      })}
    </TableBody>
  );
}
