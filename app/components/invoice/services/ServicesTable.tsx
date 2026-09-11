import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../../ui/table';
import { InvoiceTableHeader } from '../TableHeader';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import ServiceRow from './ServiceRow';
import { servicesTableItems } from './common';

export default function ServicesTable({
  addService,
}: {
  addService: () => void;
}): React.ReactNode {
  const services = useInvoiceStore((state) => state.services);
  const updateService = useInvoiceStore((state) => state.updateService);
  const removeService = useInvoiceStore((state) => state.removeService);

  return (
    <Table className="w-full">
      <InvoiceTableHeader items={servicesTableItems} />
      <TableBody>
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
        <Footer />
      </TableBody>
    </Table>
  );
}

function Footer(): React.ReactNode {
  const totalServicesAmount = useInvoiceStore(
    (state) => state.totals.totalServicesAmount
  );
  return (
    <TableRow className="w-full flex flex-row bg-slate-100 font-semibold text-slate-800">
      <TableCell className="w-[25%] border border-slate-300 p-2 text-center">
        جمع خدمات
      </TableCell>
      <TableCell className="w-[25%] border border-slate-300 p-2" />
      <TableCell className="w-[20%] border border-slate-300 p-2 text-center">
        {formatRialAmount(convertToPersianDigits(totalServicesAmount)) || '-'}
      </TableCell>
      <TableCell className="w-[30%] border border-slate-300 p-2" />
    </TableRow>
  );
}
