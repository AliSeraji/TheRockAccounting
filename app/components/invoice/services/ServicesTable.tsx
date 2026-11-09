import type React from 'react';
import { useInvoiceForm } from '~/store/useInvoiceForm';
import { useIsMobile } from '~/hooks/use-mobile';
import { handleArrowNavigation } from '~/lib/utils';
import FloatingTable from '../../floating-table/FloatingTable';
import TotalBar from '../../floating-table/TotalBar';
import { MIN_TABLE_WIDTH } from '../../floating-table/styles';
import ServiceRowCards from '../row-cards/ServiceRowCards';
import { serviceTotalStats } from '../row-cards/summary';
import ServiceRow from './ServiceRow';
import { servicesTableItems } from './common';

export default function ServicesTable(): React.ReactNode {
  const addService = useInvoiceForm((state) => state.addService);
  const services = useInvoiceForm((state) => state.services);
  const updateService = useInvoiceForm((state) => state.updateService);
  const removeService = useInvoiceForm((state) => state.removeService);
  const totalServicesAmount = useInvoiceForm(
    (state) => state.totals.totalServicesAmount
  );
  const isMobile = useIsMobile();

  // Phones get one card per service instead of the wide table.
  if (isMobile) return <ServiceRowCards />;

  return (
    <FloatingTable
      columns={servicesTableItems}
      track
      className={MIN_TABLE_WIDTH}
      onKeyDown={handleArrowNavigation}
      footer={
        <TotalBar
          title="جمع خدمات"
          stats={serviceTotalStats(totalServicesAmount)}
        />
      }
    >
      {services.map((service, index) => (
        <ServiceRow
          key={service.id}
          serviceItem={service}
          index={index}
          update={updateService}
          remove={removeService}
          addService={addService}
        />
      ))}
    </FloatingTable>
  );
}
