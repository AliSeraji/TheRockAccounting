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
  { label: 'مقدار (مترمربع)', width: 'w-[8%]' },
  { label: 'بهاء واحد (ریال)', width: 'w-[15%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
  { label: 'توضیحات', width: 'w-[27%]' },
];

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
    <Table className="w-full border-separate border-spacing-0 mb-2 [&_td]:border-t-0 [&_th+th]:border-s-0 [&_td+td]:border-s-0">
      <SalesTableHeader items={salesServicesTableItems} />
      <TableBody>
        {services.map((service, index) => (
          <TableRow key={service.id} className="hover:bg-gray-50">
            <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
              {convertToPersianDigits(startIndex + index + 1)}
            </TableCell>
            <TableCell className="whitespace-normal wrap-break-word border-2 border-gray-400 p-2 text-sm text-center">
              {service.serviceType}
            </TableCell>
            <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
              {convertToPersianDigits(service.quantity)}
            </TableCell>
            <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
              {formatRialAmount(convertToPersianDigits(service.unitPrice))}
            </TableCell>
            <TableCell className="border-2 border-gray-400 p-2 text-sm text-center">
              {formatRialAmount(convertToPersianDigits(service.total))}
            </TableCell>
            <TableCell className="whitespace-normal wrap-break-word border-2 border-gray-400 p-2 text-sm text-center">
              {service.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {isLastPage && (
        <TableFooter className="text-xs">
          <TableRow className="font-bold">
            <TableCell
              colSpan={4}
              className="border-2 border-gray-400 p-2 text-center"
            >
              جمع خدمات
            </TableCell>
            <TableCell className="border-2 border-gray-400 p-2 text-center">
              {formatRialAmount(convertToPersianDigits(totalServicesAmount))}
            </TableCell>
            <TableCell className="border-2 border-gray-400 p-2 last:rounded-bl-lg"></TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
