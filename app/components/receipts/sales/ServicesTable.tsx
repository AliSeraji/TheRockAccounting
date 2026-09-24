import type React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '~/components/ui/table';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';
import type { InvoiceTableItem } from '~/components/invoice/common';
import SalesTableHeader from './TableHeader';

const salesServicesTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'شرح خدمات', width: 'w-[25%]' },
  { label: 'توضیحات', width: 'w-[27%]' },
  { label: 'مقدار', width: 'w-[8%]' },
  { label: 'بهاء واحد (ریال)', width: 'w-[15%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
];

const cellClass =
  'border-s border-slate-200 first:border-s-0 p-2 text-2xs text-center text-slate-900';

const footerCellClass =
  'border-t border-s border-slate-300 first:border-s-0 p-2 text-center text-slate-900';

interface SalesServicesTableProps {
  services: ServiceItem[];
  startIndex: number;
  isLastPage: boolean;
  totalServicesAmount: number;
}

export default function SalesServicesTable({
  services,
  startIndex,
  isLastPage,
  totalServicesAmount,
}: SalesServicesTableProps): React.ReactNode {
  return (
    <div className="mb-2 overflow-hidden rounded-md border border-slate-300 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <Table className="w-full border-separate border-spacing-0 text-[10px]">
        <SalesTableHeader items={salesServicesTableItems} />
        <TableBody>
          {services.map((service, index) => (
            <TableRow key={service.id} className="border-0 even:bg-slate-50">
              <TableCell className={cellClass}>
                {convertToPersianDigits(startIndex + index + 1)}
              </TableCell>
              <TableCell
                className={`whitespace-normal wrap-break-word ${cellClass}`}
              >
                {service.serviceType}
              </TableCell>
              <TableCell className={cellClass}>{service.description}</TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(service.quantity)}
              </TableCell>
              <TableCell className={cellClass}>
                {formatRialAmount(convertToPersianDigits(service.unitPrice))}
              </TableCell>
              <TableCell
                className={`whitespace-normal wrap-break-word ${cellClass}`}
              >
                {formatRialAmount(convertToPersianDigits(service.total))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {isLastPage && (
          <TableFooter className="border-0 bg-white text-2xs">
            <TableRow className="border-0 font-bold">
              <TableCell colSpan={4} className={`${footerCellClass}`}>
                جمع خدمات
              </TableCell>
              <TableCell className={`${footerCellClass}`}></TableCell>
              <TableCell
                className={`${footerCellClass} bg-brand-100 text-2xs text-brand-950`}
              >
                {formatRialAmount(convertToPersianDigits(totalServicesAmount))}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
