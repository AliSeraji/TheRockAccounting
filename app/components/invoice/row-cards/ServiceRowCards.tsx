import type { ReactNode } from 'react';
import { isFilledService } from '~/store/invoices/helpers';
import { useInvoiceForm } from '~/store/useInvoiceForm';
import RowCardList from './RowCardList';
import RowCardTotals from './RowCardTotals';
import ServiceCardBody from './ServiceCardBody';
import { serviceSummary, serviceTotalStats } from './summary';

// The invoice's services on a phone, in place of ServicesTable.
export default function ServiceRowCards(): ReactNode {
  const services = useInvoiceForm((state) => state.services);
  const updateService = useInvoiceForm((state) => state.updateService);
  const removeService = useInvoiceForm((state) => state.removeService);
  const addService = useInvoiceForm((state) => state.addService);
  const totalServicesAmount = useInvoiceForm(
    (state) => state.totals.totalServicesAmount
  );

  return (
    <RowCardList
      items={services}
      isFilled={isFilledService}
      summarize={serviceSummary}
      onRemove={removeService}
      // Most invoices have no services, so the blank one stays closed.
      openLoneBlank={false}
      renderBody={(service, autoFocus) => (
        <ServiceCardBody
          service={service}
          update={updateService}
          addService={addService}
          autoFocus={autoFocus}
        />
      )}
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
