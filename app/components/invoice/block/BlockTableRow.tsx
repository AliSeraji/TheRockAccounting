import type React from 'react';
import { memo } from 'react';
import { TableCell } from '../../ui/table';
import { cn, convertToPersianDigits } from '~/lib/utils';
import type { BlockInvoiceItem } from '~/store/types';
import { isFilledBlock } from '~/store/invoices/helpers';
import { useBlockStockLink } from '~/hooks/useBlockStockLink';
import FloatingRow from '../../floating-table/FloatingRow';
import NumberCell from '../../floating-table/NumberCell';
import DeleteCell from '../../floating-table/DeleteCell';
import { CELL, CODE_INPUT, TEXT_INPUT } from '../../floating-table/styles';
import StoneCodeInput from '../StoneCodeInput';
import StoneTypeInput from '../StoneTypeInput';
import { BLOCK_COLUMNS } from './common';
import { BLOCK_ROW_FIELDS, type BlockRowField } from './types';

const BlockRow = memo(function BlockRow({
  rowItem,
  index,
  update,
  remove,
  addItem,
}: {
  rowItem: BlockInvoiceItem;
  index: number;
  update: (id: number, field: BlockRowField, value: string) => void;
  remove: (id: number) => void;
  addItem: () => void;
}): React.ReactNode {
  const { blocks, blockTypes, updateCode } = useBlockStockLink(rowItem, update);

  const field = (name: BlockRowField) => ({
    value: String(rowItem[name]),
    onChange: (value: string) => update(rowItem.id, name, value),
  });

  return (
    <FloatingRow
      number={index + 1}
      blank={!isFilledBlock(rowItem)}
      className="min-h-13.5"
    >
      <TableCell className={cn(CELL, BLOCK_COLUMNS.code.width)}>
        <StoneCodeInput
          suggestions={blocks}
          value={convertToPersianDigits(rowItem.blockCode)}
          onChange={updateCode}
          className={CODE_INPUT}
        />
      </TableCell>
      <TableCell className={cn(CELL, BLOCK_COLUMNS.type.width)}>
        <StoneTypeInput
          suggestions={blockTypes}
          value={convertToPersianDigits(rowItem.blockType)}
          onChange={(value) =>
            update(rowItem.id, BLOCK_ROW_FIELDS.BLOCK_TYPE, value)
          }
          className={TEXT_INPUT}
        />
      </TableCell>
      <NumberCell
        column={BLOCK_COLUMNS.length}
        {...field(BLOCK_ROW_FIELDS.LENGTH)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.width}
        {...field(BLOCK_ROW_FIELDS.WIDTH)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.height}
        {...field(BLOCK_ROW_FIELDS.HEIGHT)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.weight}
        {...field(BLOCK_ROW_FIELDS.WEIGHT)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.volume}
        look="result"
        {...field(BLOCK_ROW_FIELDS.VOLUME)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.price}
        isPrice
        addItem={addItem}
        {...field(BLOCK_ROW_FIELDS.PRICE)}
      />
      <NumberCell
        column={BLOCK_COLUMNS.total}
        look="total"
        isPrice
        {...field(BLOCK_ROW_FIELDS.TOTAL)}
      />
      <DeleteCell onRemove={() => remove(rowItem.id)} />
    </FloatingRow>
  );
});

export default BlockRow;
