import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../../ui/table';
import { InvoiceTableHeader } from '../TableHeader';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import ServiceRow from './ServiceRow';
import { servicesTableItems } from './common';
import { Button } from '~/components/ui/button';
import { Plus } from 'lucide-react';

export default function ServicesTable(): React.ReactNode {
  const addService = useInvoiceStore((state) => state.addService);
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
        <Footer addService={addService} />
      </TableBody>
    </Table>
  );
}

function Footer({ addService }: { addService: () => void }): React.ReactNode {
  const totalServicesAmount = useInvoiceStore(
    (state) => state.totals.totalServicesAmount
  );
  return (
    <TableRow className="w-full flex flex-row bg-slate-100 font-semibold text-slate-800">
      <TableCell className="flex flex-row justify-center items-center w-[25%] border border-slate-300 p-2 text-center ">
        جمع خدمات
      </TableCell>
      <TableCell className="w-[25%] border border-slate-300 p-2" />

      <TableCell className="w-[25%] border border-slate-300 p-2" />
      <TableCell className="flex flex-row justify-center w-[20%] border border-slate-300 p-2 text-center items-center">
        {formatRialAmount(convertToPersianDigits(totalServicesAmount)) || '-'}
      </TableCell>
      <TableCell className="w-[5%] border border-slate-300 p-2">
        <Button
          onClick={addService}
          size="xs"
          className="bg-slate-700 hover:bg-slate-800 gap-1 w-10 hover:cursor-pointer flex flex-row items-center justify-center"
        >
          <Plus className="w-2 h-2 lg:w-4 lg:h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
