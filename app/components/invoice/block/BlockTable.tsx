import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../../ui/table';
import { InvoiceTableHeader } from '../TableHeader';
import { useBlockInvoice } from '~/store/useInvoiceForm';
import {
  convertToPersianDigits,
  formatRialAmount,
  handleArrowNavigation,
} from '~/lib/utils';
import BlockRow from './BlockTableRow';
import { blockTableItems } from './common';

export default function BlockTable(): React.ReactNode {
  const addItem = useBlockInvoice((state) => state.addItem);
  const items = useBlockInvoice((state) => state.items);
  const updateItem = useBlockInvoice((state) => state.updateItem);
  const removeItem = useBlockInvoice((state) => state.removeItem);

  return (
    <Table className="w-full">
      <InvoiceTableHeader items={blockTableItems} />
      <TableBody onKeyDown={handleArrowNavigation}>
        {items.map((item, index) => (
          <BlockRow
            key={item.id}
            rowItem={item}
            index={index}
            update={updateItem}
            remove={removeItem}
            addItem={addItem}
            isNewRow={index === items.length - 1 && items.length > 1}
          />
        ))}
        <Footer />
      </TableBody>
    </Table>
  );
}

function Footer(): React.ReactNode {
  const totals = useBlockInvoice((state) => state.totals);
  return (
    <TableRow className="w-full flex flex-row font-semibold text-slate-800 [&>td]:bg-slate-100">
      <TableCell className="w-[34%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        جمع فاکتور
      </TableCell>
      <TableCell className="w-[14%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
      <TableCell className="w-[7%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {convertToPersianDigits(totals.totalWeight) || '-'}
      </TableCell>
      <TableCell className="w-[10%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {convertToPersianDigits(totals.totalVolume) || '-'}
      </TableCell>
      <TableCell className="w-[12%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
      <TableCell className="w-[18%] border border-slate-300 p-2 text-center flex flex-row items-center justify-center">
        {formatRialAmount(convertToPersianDigits(totals.totalAmount)) || '-'}
      </TableCell>
      <TableCell className="w-[5%] border border-slate-300 p-2 flex flex-row items-center justify-center" />
    </TableRow>
  );
}
