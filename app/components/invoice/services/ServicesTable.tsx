import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../../ui/table';
import { InvoiceTableHeader } from '../TableHeader';
import { useInvoiceForm } from '~/store/useInvoiceForm';
import {
  convertToPersianDigits,
  formatRialAmount,
  handleArrowNavigation,
} from '~/lib/utils';
import ServiceRow from './ServiceRow';
import { servicesTableItems } from './common';

export default function ServicesTable(): React.ReactNode {
  const addService = useInvoiceForm((state) => state.addService);
  const services = useInvoiceForm((state) => state.services);
  const updateService = useInvoiceForm((state) => state.updateService);
  const removeService = useInvoiceForm((state) => state.removeService);

  return (
    <Table className="w-full min-w-200 lg:min-w-0">
      <InvoiceTableHeader items={servicesTableItems} />
      <TableBody onKeyDown={handleArrowNavigation}>
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
  const totalServicesAmount = useInvoiceForm(
    (state) => state.totals.totalServicesAmount
  );
  return (
    <TableRow className="w-full flex flex-row *:min-w-0 font-semibold text-slate-800 [&>td]:bg-slate-100">
      <TableCell className="flex flex-row justify-center items-center w-[25%] border border-slate-300 p-2 text-center ">
        جمع خدمات
      </TableCell>
      <TableCell className="w-[25%] border border-slate-300 p-2" />

      <TableCell className="w-[25%] border border-slate-300 p-2" />
      <TableCell className="flex flex-row justify-center w-[20%] border border-slate-300 p-2 text-center items-center">
        {formatRialAmount(convertToPersianDigits(totalServicesAmount)) || '-'}
      </TableCell>
      <TableCell className="w-[5%] border border-slate-300 p-2" />
    </TableRow>
  );
}
