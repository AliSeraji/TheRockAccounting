import type { ReactNode } from 'react';
import { isFilledService } from '~/store/invoices/helpers';
import type { ServiceItem } from '~/store/types';
import RowCardList from './RowCardList';
import RowCardTotals from './RowCardTotals';
import ServiceCardBody from './ServiceCardBody';
import { serviceSummary, serviceTotalStats } from './summary';

// A saved invoice's services on a phone, read-only, in place of its services
// table.
export default function SavedServiceCards({
  services,
  totalServicesAmount,
}: {
  services: ServiceItem[];
  totalServicesAmount: number;
}): ReactNode {
  return (
    <RowCardList
      items={services}
      isFilled={isFilledService}
      summarize={serviceSummary}
      renderBody={(service) => <ServiceCardBody service={service} />}
      totals={
        <RowCardTotals
          title="جمع خدمات"
          rowCount={services.length}
          stats={serviceTotalStats(totalServicesAmount)}
        />
      }
    />
  );
}
