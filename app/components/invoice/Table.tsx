import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { InvoiceTableHeader } from './TableHeader';
import { useStoneInvoice } from '~/store/useInvoiceForm';
import Row from './TableRow';
import StoneRowCards from './row-cards/StoneRowCards';
import { useIsMobile } from '~/hooks/use-mobile';
import {
  convertToPersianDigits,
  formatRialAmount,
  handleArrowNavigation,
} from '~/lib/utils';

export default function InvoiceTable(): React.ReactNode {
  const addItem = useStoneInvoice((state) => state.addItem);
  const items = useStoneInvoice((state) => state.items);
  const updateItem = useStoneInvoice((state) => state.updateItem);
  const removeItem = useStoneInvoice((state) => state.removeItem);
  const isMobile = useIsMobile();

  // Phones get one card per row instead of the wide table.
  if (isMobile) return <StoneRowCards />;

  return (
    <Table className="w-full">
      <InvoiceTableHeader />
      <TableBody onKeyDown={handleArrowNavigation}>
        {items.map((item, index) => {
          return (
            <Row
              key={item.id}
              rowItem={item}
              index={index}
              update={updateItem}
              remove={removeItem}
              addItem={addItem}
            />
          );
        })}
        <Footer />
      </TableBody>
    </Table>
  );
}

function Footer(): React.ReactNode {
  const totals = useStoneInvoice((state) => state.totals);
  return (
    <TableRow className="w-full flex flex-row font-semibold text-slate-800 [&>td]:bg-slate-100">
      <TableCell className="w-[34%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        جمع فاکتور
      </TableCell>
      <TableCell className="w-[7%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {convertToPersianDigits(totals.totalQuantity) || '-'}
      </TableCell>
      <TableCell className="w-[14%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
      <TableCell className="w-[10%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {convertToPersianDigits(totals.totalArea) || '-'}
      </TableCell>
      <TableCell className="w-[12%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
      <TableCell className="w-[18%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {formatRialAmount(convertToPersianDigits(totals.totalAmount)) || '-'}
      </TableCell>
      <TableCell className="w-[5%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
    </TableRow>
  );
}
