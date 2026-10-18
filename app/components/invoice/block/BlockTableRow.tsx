import type React from 'react';
import { memo, useEffect, useRef } from 'react';
import { Trash2 } from 'lucide-react';
import { TableCell, TableRow } from '../../ui/table';
import { Button } from '../../ui/button';
import PersianNumericInput from '../PersianNumericInput';
import StoneCodeInput from '../StoneCodeInput';
import StoneTypeInput from '../StoneTypeInput';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import type { BlockInvoiceItem } from '~/store/types';
import {
  selectInvoiceBlocks,
  useWarehouseStore,
} from '~/store/warehouse/useWarehouse';
import { BLOCK_ROW_FIELDS, type BlockRowField } from './types';

const normalize = (value: string) =>
  convertToEnDigits(value).trim().toLowerCase();

// Row fields filled in from the warehouse block whose code is entered.
const BLOCK_DETAILS = [
  [BLOCK_ROW_FIELDS.BLOCK_TYPE, 'name'],
  [BLOCK_ROW_FIELDS.LENGTH, 'length'],
  [BLOCK_ROW_FIELDS.WIDTH, 'width'],
  [BLOCK_ROW_FIELDS.HEIGHT, 'height'],
  [BLOCK_ROW_FIELDS.WEIGHT, 'weight'],
] as const;

const BlockRow = memo(function BlockRow({
  rowItem,
  index,
  update,
  remove,
  addItem,
  isNewRow = false,
}: {
  rowItem: BlockInvoiceItem;
  index: number;
  update: (id: number, field: BlockRowField, value: string) => void;
  remove: (id: number) => void;
  addItem: () => void;
  isNewRow?: boolean;
}): React.ReactNode {
  const blocks = useWarehouseStore(selectInvoiceBlocks);
  const inputRef = useRef<HTMLInputElement>(null);

  // Many blocks share a stone type, so suggest each type once.
  const blockTypes = blocks.filter(
    (block, i) => blocks.findIndex((other) => other.name === block.name) === i
  );

  const findBlock = (code: string) => {
    const key = normalize(code);
    return key
      ? blocks.find((block) => normalize(block.code) === key)
      : undefined;
  };

  // A code matching a warehouse block fills in its details. Moving off that
  // code clears the details that still hold the block's values.
  const updateCode = (value: string) => {
    update(rowItem.id, BLOCK_ROW_FIELDS.BLOCK_CODE, value);

    const match = findBlock(value);
    update(rowItem.id, BLOCK_ROW_FIELDS.STOCK_ID, match?.id ?? '');
    const previous = findBlock(rowItem.blockCode);
    if (match === previous) return;

    for (const [field, key] of BLOCK_DETAILS) {
      if (match) {
        update(rowItem.id, field, match[key]);
      } else if (previous && rowItem[field] === previous[key]) {
        update(rowItem.id, field, '');
      }
    }
  };

  const numericCell = (
    field: BlockRowField,
    readOnly: boolean = false,
    isPrice: boolean = false
  ) => (
    <PersianNumericInput
      value={String(rowItem[field])}
      onChange={(v) => update(rowItem.id, field, v)}
      className={`border-0 text-center focus-visible:ring-offset-3 text-sm h-8 ${readOnly ? 'cursor-default' : 'cursor-text'}`}
      readOnly={readOnly}
      isPrice={isPrice}
      addItem={isPrice && !readOnly ? addItem : undefined}
    />
  );

  useEffect(() => {
    if (isNewRow && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNewRow]);

  return (
    <TableRow className="w-full flex flex-row border-b-0 transition-colors [&>td:not(:last-child)]:border-b [&:hover>td:not(:last-child)]:bg-slate-50">
      <TableCell className="w-[3%] border-x-[0.5px] border-r border-slate-200 p-2 text-center text-slate-700 font-medium">
        {convertToPersianDigits(index + 1)}
      </TableCell>
      <TableCell className="w-[9%] border-x-[0.5px] border-slate-200 p-1">
        <StoneCodeInput
          ref={inputRef}
          suggestions={blocks}
          value={convertToPersianDigits(rowItem.blockCode)}
          onChange={updateCode}
        />
      </TableCell>
      <TableCell className="w-[15%] border-x-[0.5px] border-slate-200 p-1">
        <StoneTypeInput
          suggestions={blockTypes}
          value={convertToPersianDigits(rowItem.blockType)}
          onChange={(value) =>
            update(rowItem.id, BLOCK_ROW_FIELDS.BLOCK_TYPE, value)
          }
        />
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.LENGTH)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.WIDTH)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.HEIGHT)}
      </TableCell>
      <TableCell className="w-[7%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.WEIGHT)}
      </TableCell>
      <TableCell className="w-[10%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.VOLUME, true)}
      </TableCell>
      <TableCell className="w-[12%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.PRICE, false, true)}
      </TableCell>
      <TableCell className="w-[18%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(BLOCK_ROW_FIELDS.TOTAL, true, true)}
      </TableCell>
      <TableCell className="w-[5%] border-0 p-1 text-center">
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

export default BlockRow;
