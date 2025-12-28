import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { InvoiceTableHeader } from './TableHeader';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import Row from './TableRow';
import { convertToPersianDigits } from '~/lib/utils';

export default function InvoiceTable(): React.ReactNode {
  const { items, updateItem, removeItem } = useInvoiceStore();

  return (
    <Table className="w-full">
      <InvoiceTableHeader />
      <TableBody>
        {items.map((item, index) => {
          return (
            <Row
              key={index}
              rowItem={item}
              index={index}
              update={updateItem}
              remove={removeItem}
            />
          );
        })}
        <Footer />
      </TableBody>
    </Table>
  );
}

function Footer(): React.ReactNode {
  const { getTotals } = useInvoiceStore();
  const totals = getTotals();
  return (
    <TableRow className="w-full flex flex-row bg-slate-100 font-semibold text-slate-800">
      <TableCell className="w-[28%] border border-slate-300 p-2 text-center">
        جمع فاکتور
      </TableCell>
      <TableCell className="w-[7%] border border-slate-300 p-2 text-center">
        {convertToPersianDigits(totals.totalQuantity) || '-'}
      </TableCell>
      <TableCell className="w-[16%] border border-slate-300 p-2" />
      <TableCell className="w-[12%] border border-slate-300 p-2 text-center">
        {convertToPersianDigits(totals.totalArea) || '-'}
      </TableCell>
      <TableCell className="w-[12%] border border-slate-300 p-2" />
      <TableCell className="w-[20%] border border-slate-300 p-2 text-center">
        {convertToPersianDigits(totals.totalAmount) || '-'}
      </TableCell>
      <TableCell className="w-[5%] border border-slate-300 p-2" />
    </TableRow>
  );
}
