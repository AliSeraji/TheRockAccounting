import type React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '~/components/ui/table';
import type { InvoiceTableItem } from '~/components/invoice/common';
import { cleanTrailingZeros, convertToPersianDigits } from '~/lib/utils';
import type { BlockInvoiceItem, BlockInvoiceTotals } from '~/store/types';
import { DeliveryTableHeader } from './Header';

const blockDeliveryTableItems: InvoiceTableItem[] = [
  { label: 'ردیف', width: 'w-[6%]' },
  { label: 'کد کوپ', width: 'w-[12%]' },
  { label: 'نوع کوپ سنگ', width: 'w-[22%]' },
  { label: 'طول', width: 'w-[10%]' },
  { label: 'عرض', width: 'w-[10%]' },
  { label: 'ارتفاع', width: 'w-[10%]' },
  { label: 'وزن (تن)', width: 'w-[14%]' },
  { label: 'متراژ (مترمکعب)', width: 'w-[16%]' },
];

const cellClass =
  'border-s border-slate-200 first:border-s-0 p-2 text-2xs text-center text-slate-900';

const footerCellClass =
  'border-t border-s border-slate-300 first:border-s-0 p-2 text-center text-slate-900';

interface BlockDeliveryTableProps {
  items: BlockInvoiceItem[];
  startIndex: number;
  isLastPage: boolean;
  totals: BlockInvoiceTotals;
}

export default function BlockDeliveryTable({
  items,
  startIndex,
  isLastPage,
  totals,
}: BlockDeliveryTableProps): React.ReactNode {
  return (
    <div className="mb-2 overflow-hidden rounded-md border border-slate-300 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <Table className="w-full border-spacing-0 text-[10px]">
        <DeliveryTableHeader items={blockDeliveryTableItems} />
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
            </TableRow>
          ))}
        </TableBody>
        {isLastPage && (
          <TableFooter className="border-0 bg-white text-2xs">
            <TableRow className="border-0 font-bold">
              <TableCell colSpan={6} className={footerCellClass}>
                جمع
              </TableCell>
              <TableCell className={footerCellClass}>
                {totals.totalWeight
                  ? convertToPersianDigits(totals.totalWeight)
                  : ''}
              </TableCell>
              <TableCell
                className={`${footerCellClass} bg-brand-100 text-brand-950`}
              >
                {totals.totalVolume
                  ? convertToPersianDigits(
                      cleanTrailingZeros(totals.totalVolume.toFixed(2))
                    )
                  : ''}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
