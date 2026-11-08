import type React from 'react';
import { memo } from 'react';
import { TableCell } from '../ui/table';
import { cn, convertToPersianDigits } from '~/lib/utils';
import type { StoneItem } from '~/store/types';
import { isFilledStone } from '~/store/invoices/helpers';
import { useStoneStockLink } from '~/hooks/useStoneStockLink';
import FloatingRow from '../floating-table/FloatingRow';
import NumberCell from '../floating-table/NumberCell';
import DeleteCell from '../floating-table/DeleteCell';
import { CELL, CODE_INPUT, TEXT_INPUT } from '../floating-table/styles';
import { STONE_COLUMNS } from './common';
import { INVOICE_ROW_FIELDS, type InvoiceRowField } from './types';
import StoneTypeInput from './StoneTypeInput';
import StoneCodeInput from './StoneCodeInput';

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
  const { stones, updateStone } = useStoneStockLink(rowItem, update);

  const field = (name: InvoiceRowField) => ({
    value: String(rowItem[name]),
    onChange: (value: string) => update(rowItem.id, name, value),
  });
  const removeRow = () => remove(rowItem.id);

  return (
    <FloatingRow
      number={index + 1}
      blank={!isFilledStone(rowItem)}
      className="min-h-13.5"
    >
      <TableCell className={cn(CELL, STONE_COLUMNS.code.width)}>
        <StoneCodeInput
          suggestions={stones}
          value={convertToPersianDigits(rowItem.stoneCode)}
          onChange={(value) =>
            updateStone(INVOICE_ROW_FIELDS.STONE_CODE, value)
          }
          className={CODE_INPUT}
        />
      </TableCell>
      <TableCell className={cn(CELL, STONE_COLUMNS.type.width)}>
        <StoneTypeInput
          suggestions={stones}
          value={convertToPersianDigits(rowItem.stoneType)}
          onChange={(value) =>
            updateStone(INVOICE_ROW_FIELDS.STONE_TYPE, value)
          }
          className={TEXT_INPUT}
        />
      </TableCell>
      <NumberCell
        column={STONE_COLUMNS.thickness}
        {...field(INVOICE_ROW_FIELDS.THICKNESS)}
      />
      <NumberCell
        column={STONE_COLUMNS.quantity}
        {...field(INVOICE_ROW_FIELDS.QUANTITY)}
      />
      <NumberCell
        column={STONE_COLUMNS.width}
        {...field(INVOICE_ROW_FIELDS.WIDTH)}
      />
      <NumberCell
        column={STONE_COLUMNS.length}
        {...field(INVOICE_ROW_FIELDS.LENGTH)}
      />
      <NumberCell
        column={STONE_COLUMNS.area}
        look="result"
        {...field(INVOICE_ROW_FIELDS.AREA)}
      />
      <NumberCell
        column={STONE_COLUMNS.price}
        isPrice
        addItem={addItem}
        removeItem={removeRow}
        {...field(INVOICE_ROW_FIELDS.PRICE)}
      />
      <NumberCell
        column={STONE_COLUMNS.total}
        look="total"
        isPrice
        addItem={addItem}
        removeItem={removeRow}
        {...field(INVOICE_ROW_FIELDS.TOTAL)}
      />
      <DeleteCell onRemove={removeRow} />
    </FloatingRow>
  );
});

export default Row;
