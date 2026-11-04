import {
  BLOCK_ROW_FIELDS,
  type BlockRowField,
} from '~/components/invoice/block/types';
import { convertToEnDigits } from '~/lib/utils';
import type { BlockInvoiceItem } from '~/store/types';
import {
  selectInvoiceBlocks,
  useWarehouseStore,
} from '~/store/warehouse/useWarehouse';

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

// Links a block invoice row to the warehouse block whose code it holds. The
// desktop table row and the phone row card both edit rows through this, so
// stock linking has one rule.
export function useBlockStockLink(
  row: BlockInvoiceItem,
  update: (id: number, field: BlockRowField, value: string) => void
) {
  const blocks = useWarehouseStore(selectInvoiceBlocks);

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
    update(row.id, BLOCK_ROW_FIELDS.BLOCK_CODE, value);

    const match = findBlock(value);
    update(row.id, BLOCK_ROW_FIELDS.STOCK_ID, match?.id ?? '');
    const previous = findBlock(row.blockCode);
    if (match === previous) return;

    for (const [field, key] of BLOCK_DETAILS) {
      if (match) {
        update(row.id, field, match[key]);
      } else if (previous && row[field] === previous[key]) {
        update(row.id, field, '');
      }
    }
  };

  return { blocks, blockTypes, updateCode };
}
