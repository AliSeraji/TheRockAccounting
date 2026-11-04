import type { ReactNode } from 'react';
import { useStoneStockLink } from '~/hooks/useStoneStockLink';
import type { StoneItem } from '~/store/types';
import { INVOICE_ROW_FIELDS, type InvoiceRowField } from '../types';
import {
  STONE_MEASURE_UNIT,
  STONE_PRICE_LABEL,
  STONE_SIZE_FIELDS,
} from './fields';
import IdentityField from './IdentityField';
import NumberField from './NumberField';
import PriceStrip from './PriceStrip';
import { formatAmount, formatMeasure } from './summary';

// The form of an open stone row card.
export default function StoneCardBody({
  item,
  update,
  addItem,
  autoFocus,
}: {
  item: StoneItem;
  update: (id: number, field: InvoiceRowField, value: string) => void;
  addItem: () => void;
  autoFocus: boolean;
}): ReactNode {
  const { stones, updateStone } = useStoneStockLink(item, update);

  return (
    <>
      <IdentityField
        typeLabel="نوع سنگ"
        typeValue={item.stoneType}
        onTypeChange={(value) =>
          updateStone(INVOICE_ROW_FIELDS.STONE_TYPE, value)
        }
        typeSuggestions={stones}
        codeLabel="کد"
        codeValue={item.stoneCode}
        onCodeChange={(value) =>
          updateStone(INVOICE_ROW_FIELDS.STONE_CODE, value)
        }
        codeSuggestions={stones}
        autoFocus={autoFocus ? 'type' : undefined}
      />
      <div className="grid grid-cols-4 gap-2">
        {STONE_SIZE_FIELDS.map(({ label, field }) => (
          <NumberField
            key={field}
            label={label}
            value={item[field]}
            onChange={(value) => update(item.id, field, value)}
          />
        ))}
      </div>
      <PriceStrip
        label={STONE_PRICE_LABEL}
        price={item.price}
        onPriceChange={(value) =>
          update(item.id, INVOICE_ROW_FIELDS.PRICE, value)
        }
        addItem={addItem}
        measure={formatMeasure(item.area, STONE_MEASURE_UNIT)}
        total={formatAmount(item.total)}
      />
    </>
  );
}
