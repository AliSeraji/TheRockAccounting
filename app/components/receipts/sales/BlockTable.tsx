import type React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '~/components/ui/table';
import type { InvoiceTableItem } from '~/components/invoice/common';
import {
  cleanTrailingZeros,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import type { BlockInvoiceItem, BlockInvoiceTotals } from '~/store/types';
import SalesTableHeader from './TableHeader';

const blockSalesTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'کد کوپ', width: 'w-[9%]' },
  { label: 'نوع کوپ سنگ', width: 'w-[15%]' },
  { label: 'طول', width: 'w-[7%]' },
  { label: 'عرض', width: 'w-[7%]' },
  { label: 'ارتفاع', width: 'w-[7%]' },
  { label: 'وزن (تن)', width: 'w-[8%]' },
  { label: 'متراژ (مترمکعب)', width: 'w-[10%]' },
  { label: 'بهاء (ریال)', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[20%]' },
];

const cellClass =
  'border-s border-slate-200 first:border-s-0 p-2 text-2xs text-center text-slate-900';

const footerCellClass =
  'border-t border-s border-slate-300 first:border-s-0 p-2 text-center text-slate-900';

interface BlockSalesTableProps {
  items: BlockInvoiceItem[];
  startIndex: number;
  isLastPage: boolean;
  totals: BlockInvoiceTotals;
}

export default function BlockSalesTable({
  items,
  startIndex,
  isLastPage,
  totals,
}: BlockSalesTableProps): React.ReactNode {
  return (
    <div className="mb-2 overflow-hidden rounded-md border border-slate-300 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <Table className="w-full border-spacing-0 text-[10px]">
        <SalesTableHeader items={blockSalesTableItems} />
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.id} className="border-0 even:bg-slate-50">
              <TableCell className={cellClass}>
                {convertToPersianDigits(startIndex + index + 1)}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.blockCode)}
              </TableCell>
              <TableCell
                className={`whitespace-normal wrap-break-word ${cellClass}`}
              >
                {item.blockType}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.length)}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.width)}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.height)}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.weight)}
              </TableCell>
              <TableCell className={cellClass}>
                {convertToPersianDigits(item.volume)}
              </TableCell>
              <TableCell className={cellClass}>
                {formatRialAmount(convertToPersianDigits(item.price))}
              </TableCell>
              <TableCell className={cellClass}>
                {formatRialAmount(convertToPersianDigits(item.total))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {isLastPage && (
          <TableFooter className="border-0 bg-white text-2xs">
            <TableRow className="border-0 font-bold">
              <TableCell colSpan={6} className={footerCellClass}>
                جمع فاکتور
              </TableCell>
              <TableCell className={footerCellClass}>
                {totals.totalWeight
                  ? convertToPersianDigits(totals.totalWeight)
                  : ''}
              </TableCell>
              <TableCell className={footerCellClass}>
                {totals.totalVolume
                  ? convertToPersianDigits(
                      cleanTrailingZeros(totals.totalVolume.toFixed(2))
                    )
                  : ''}
              </TableCell>
              <TableCell className={footerCellClass}></TableCell>
              <TableCell
                className={`${footerCellClass} bg-brand-100 text-2xs text-brand-950`}
              >
                {formatRialAmount(convertToPersianDigits(totals.totalAmount))}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
