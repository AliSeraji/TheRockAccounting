import type { ReactNode } from 'react';
import { useBlockStockLink } from '~/hooks/useBlockStockLink';
import type { BlockInvoiceItem } from '~/store/types';
import { BLOCK_ROW_FIELDS, type BlockRowField } from '../block/types';
import {
  BLOCK_MEASURE_UNIT,
  BLOCK_PRICE_LABEL,
  BLOCK_SIZE_FIELDS,
} from './fields';
import IdentityField from './IdentityField';
import NumberField from './NumberField';
import PriceStrip from './PriceStrip';
import { formatAmount, formatMeasure } from './summary';

// The form of an open block row card.
export default function BlockCardBody({
  item,
  update,
  addItem,
  autoFocus,
}: {
  item: BlockInvoiceItem;
  update: (id: number, field: BlockRowField, value: string) => void;
  addItem: () => void;
  autoFocus: boolean;
}): ReactNode {
  const { blocks, blockTypes, updateCode } = useBlockStockLink(item, update);

  return (
    <>
      <IdentityField
        typeLabel="نوع کوپ سنگ"
        typeValue={item.blockType}
        onTypeChange={(value) =>
          update(item.id, BLOCK_ROW_FIELDS.BLOCK_TYPE, value)
        }
        typeSuggestions={blockTypes}
        codeLabel="کد کوپ"
        codeValue={item.blockCode}
        onCodeChange={updateCode}
        codeSuggestions={blocks}
        autoFocus={autoFocus ? 'code' : undefined}
      />
      <div className="grid grid-cols-4 gap-2">
        {BLOCK_SIZE_FIELDS.map(({ label, field }) => (
          <NumberField
            key={field}
            label={label}
            value={item[field]}
            onChange={(value) => update(item.id, field, value)}
          />
        ))}
      </div>
      <PriceStrip
        label={BLOCK_PRICE_LABEL}
        price={item.price}
        onPriceChange={(value) =>
          update(item.id, BLOCK_ROW_FIELDS.PRICE, value)
        }
        addItem={addItem}
        measure={formatMeasure(item.volume, BLOCK_MEASURE_UNIT)}
        total={formatAmount(item.total)}
      />
    </>
  );
}
