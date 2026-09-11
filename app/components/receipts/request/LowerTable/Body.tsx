import type { ReactNode } from 'react';
import { TableBody } from '~/components/ui/table';
import type { ServiceItem } from '~/store/types';
import Row from './Row';

export default function Body({
  services,
  startIdx,
}: {
  services: ServiceItem[];
  startIdx: number;
}): ReactNode {
  return (
    <TableBody>
      {services.map((service, idx) => (
        <Row key={service.id} service={service} index={startIdx + idx + 1} />
      ))}
    </TableBody>
  );
}
