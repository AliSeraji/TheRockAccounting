import type React from 'react';
import { TableCell, TableRow } from '../ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import type { StoneItem } from '~/store/types';
import PersianNumericInput from './PersianNumericInput';
import { INVOICE_ROW_FIELDS, type InvoiceRowField } from './types';
import { memo } from 'react';
import { Input } from '../ui/input';

const Row = memo(function Row({
  rowItem,
  index,
  update,
  remove,
  addItem,
}: {
  rowItem: StoneItem;
  index: number;
  update: (id: number, field: InvoiceRowField, value: string) => void;
  remove: (id: number) => void;
  addItem: () => void;
}): React.ReactNode {
  const numericCell = (
    field: InvoiceRowField,
    readOnly: boolean = false,
    isPrice: boolean = false
  ) => (
    <PersianNumericInput
      value={String(rowItem[field])}
      onChange={(v) => update(rowItem.id, field, v)}
      className={`border-0 text-center focus-visible:ring-offset-3 text-sm h-8 ${readOnly ? 'cursor-default' : 'cursor-text'}`}
      readOnly={readOnly}
      isPrice={isPrice}
      addItem={isPrice ? addItem : undefined}
      removeItem={isPrice ? () => remove(rowItem.id) : undefined}
    />
  );

  return (
    <TableRow className="w-full flex flex-row hover:bg-slate-50 transition-colors">
      <TableCell className="w-[5%] border-x-[0.5px] border-r-2 border-slate-200 p-2 text-center text-slate-700 font-medium">
        {convertToPersianDigits(index + 1)}
      </TableCell>
      <TableCell className="w-[15%] border-x-[0.5px] border-slate-200 p-1">
        <Input
          value={convertToPersianDigits(
            String(rowItem[INVOICE_ROW_FIELDS.STONE_TYPE])
          )}
          onChange={(v) =>
            update(rowItem.id, INVOICE_ROW_FIELDS.STONE_TYPE, v.target.value)
          }
          className={`border-0 text-center focus-visible:ring-offset-3 text-sm h-8 cursor-text}`}
        />
      </TableCell>
      <TableCell className="w-[10%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.THICKNESS)}
      </TableCell>
      <TableCell className="w-[5%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.QUANTITY)}
      </TableCell>
      <TableCell className="w-[8%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.WIDTH)}
      </TableCell>
      <TableCell className="w-[8%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.LENGTH)}
      </TableCell>
      <TableCell className="w-[12%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.AREA, true)}
      </TableCell>
      <TableCell className="w-[12%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.PRICE, false, true)}
      </TableCell>
      <TableCell className="w-[20%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.TOTAL, true, true)}
      </TableCell>
      <TableCell className="w-[5%] border-x-[0.5px] border-l-2 border-slate-200 p-1 text-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => remove(rowItem.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 hover:cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
});

export default Row;
