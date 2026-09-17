import type React from 'react';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { InvoiceTableHeader } from './TableHeader';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import Row from './TableRow';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export default function InvoiceTable(): React.ReactNode {
  const addItem = useInvoiceStore((state) => state.addItem);
  const items = useInvoiceStore((state) => state.items);
  const updateItem = useInvoiceStore((state) => state.updateItem);
  const removeItem = useInvoiceStore((state) => state.removeItem);

  return (
    <Table className="w-full">
      <InvoiceTableHeader />
      <TableBody>
        {items.map((item, index) => {
          return (
            <Row
              key={item.id}
              rowItem={item}
              index={index}
              update={updateItem}
              remove={removeItem}
              addItem={addItem}
              isNewRow={index === items.length - 1 && items.length > 1}
            />
          );
        })}
        <Footer addItem={addItem} />
      </TableBody>
    </Table>
  );
}

function Footer({ addItem }: { addItem: () => void }): React.ReactNode {
  const totals = useInvoiceStore((state) => state.totals);
  return (
    <TableRow className="w-full flex flex-row bg-slate-100 font-semibold text-slate-800">
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
      <TableCell className="w-[5%] border border-slate-300 p-2 flex flex-row items-center justify-center">
        <Button
          onClick={addItem}
          size="xs"
          className="bg-slate-700 hover:bg-slate-800 hover:cursor-pointer rounded-sm w-10"
        >
          <Plus className="w-2 h-2 lg:w-4 lg:h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
