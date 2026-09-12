import type React from 'react';
import { TableCell, TableRow } from '../ui/table';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import type { StoneItem } from '~/store/types';
import PersianNumericInput from './PersianNumericInput';
import { INVOICE_ROW_FIELDS, type InvoiceRowField } from './types';
import { memo, useEffect, useRef } from 'react';
import StoneTypeInput from './StoneTypeInput';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import StoneCodeInput from './StoneCodeInput';

const normalize = (value: string) =>
  convertToEnDigits(value).trim().toLowerCase();

const Row = memo(function Row({
  rowItem,
  index,
  update,
  remove,
  addItem,
  isNewRow = false,
}: {
  rowItem: StoneItem;
  index: number;
  update: (id: number, field: InvoiceRowField, value: string) => void;
  remove: (id: number) => void;
  addItem: () => void;
  isNewRow?: boolean;
}): React.ReactNode {
  const stones = useWarehouseStore((state) => state.items);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateStone = (
    field:
      | typeof INVOICE_ROW_FIELDS.STONE_TYPE
      | typeof INVOICE_ROW_FIELDS.STONE_CODE,
    value: string
  ) => {
    update(rowItem.id, field, value);

    const isType = field === INVOICE_ROW_FIELDS.STONE_TYPE;
    const key = isType ? 'name' : 'code';
    const otherKey = isType ? 'code' : 'name';
    const otherField = isType
      ? INVOICE_ROW_FIELDS.STONE_CODE
      : INVOICE_ROW_FIELDS.STONE_TYPE;

    const match = stones.find(
      (stone) => normalize(stone[key]) === normalize(value)
    );
    if (match) {
      update(rowItem.id, otherField, match[otherKey]);
    } else if (
      rowItem[otherField] &&
      stones.some((stone) => stone[otherKey] === rowItem[otherField])
    ) {
      update(rowItem.id, otherField, '');
    }
  };

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

  useEffect(() => {
    if (isNewRow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNewRow]);

  return (
    <TableRow className="w-full flex flex-row hover:bg-slate-50 transition-colors">
      <TableCell className="w-[3%] border-x-[0.5px] border-r border-slate-200 p-2 text-center text-slate-700 font-medium">
        {convertToPersianDigits(index + 1)}
      </TableCell>
      <TableCell className="w-[9%] border-x-[0.5px] border-slate-200 p-1">
        <StoneCodeInput
          id={rowItem.id}
          field={INVOICE_ROW_FIELDS.STONE_CODE}
          value={convertToPersianDigits(
            String(rowItem[INVOICE_ROW_FIELDS.STONE_CODE])
          )}
          onChange={(_id, _field, value) =>
            updateStone(INVOICE_ROW_FIELDS.STONE_CODE, value)
          }
        />
      </TableCell>
      <TableCell className="w-[15%] border-x-[0.5px] border-slate-200 p-1">
        <StoneTypeInput
          ref={inputRef}
          value={convertToPersianDigits(
            String(rowItem[INVOICE_ROW_FIELDS.STONE_TYPE])
          )}
          id={rowItem.id}
          field={INVOICE_ROW_FIELDS.STONE_TYPE}
          onChange={(_id, _field, value) =>
            updateStone(INVOICE_ROW_FIELDS.STONE_TYPE, value)
          }
        />
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.THICKNESS)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.QUANTITY)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.WIDTH)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.LENGTH)}
      </TableCell>
      <TableCell className="w-[10%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.AREA, true)}
      </TableCell>
      <TableCell className="w-[12%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.PRICE, false, true)}
      </TableCell>
      <TableCell className="w-[18%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(INVOICE_ROW_FIELDS.TOTAL, true, true)}
      </TableCell>
      <TableCell className="w-[5%] border-x-[0.5px] border-l border-slate-200 p-1 text-center">
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
