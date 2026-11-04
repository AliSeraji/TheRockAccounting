import type { InvoiceRowField } from '~/components/invoice/types';
import { INVOICE_ROW_FIELDS } from '~/components/invoice/types';
import { convertToEnDigits } from '~/lib/utils';
import type { StoneItem } from '~/store/types';
import {
  selectInvoiceStones,
  useWarehouseStore,
} from '~/store/warehouse/useWarehouse';

const normalize = (value: string) =>
  convertToEnDigits(value).trim().toLowerCase();

type StoneField =
  | typeof INVOICE_ROW_FIELDS.STONE_TYPE
  | typeof INVOICE_ROW_FIELDS.STONE_CODE;

// Links a stone invoice row to the main-warehouse stone whose name or code it
// holds. The desktop table row and the phone row card both edit rows through
// this, so stock linking has one rule.
export function useStoneStockLink(
  row: StoneItem,
  update: (id: number, field: InvoiceRowField, value: string) => void
) {
  const stones = useWarehouseStore(selectInvoiceStones);

  const updateStone = (field: StoneField, value: string) => {
    update(row.id, field, value);

    const isType = field === INVOICE_ROW_FIELDS.STONE_TYPE;
    const key = isType ? 'name' : 'code';
    const otherKey = isType ? 'code' : 'name';
    const otherField = isType
      ? INVOICE_ROW_FIELDS.STONE_CODE
      : INVOICE_ROW_FIELDS.STONE_TYPE;

    const match = stones.find(
      (stone) => normalize(stone[key]) === normalize(value)
    );
    // The row stays linked to a warehouse stone only while it matches one.
    update(row.id, INVOICE_ROW_FIELDS.STOCK_ID, match?.id ?? '');
    if (match) {
      update(row.id, otherField, match[otherKey]);
    } else if (
      row[otherField] &&
      stones.some((stone) => stone[otherKey] === row[otherField])
    ) {
      update(row.id, otherField, '');
    }
  };

  return { stones, updateStone };
}
