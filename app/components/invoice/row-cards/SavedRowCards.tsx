import type { ReactNode } from 'react';
import { isFilledBlock, isFilledStone } from '~/store/invoices/helpers';
import type { InvoiceSnapshot } from '~/store/types';
import {
  BLOCK_MEASURE_UNIT,
  BLOCK_PRICE_LABEL,
  BLOCK_SIZE_FIELDS,
  STONE_MEASURE_UNIT,
  STONE_PRICE_LABEL,
  STONE_SIZE_FIELDS,
} from './fields';
import NumberField from './NumberField';
import PriceStrip from './PriceStrip';
import RowCardList from './RowCardList';
import RowCardTotals from './RowCardTotals';
import {
  blockSummary,
  blockTotalStats,
  formatAmount,
  formatMeasure,
  stoneSummary,
  stoneTotalStats,
} from './summary';

// A saved invoice's items on a phone, in place of its details table. The
// cards are read-only: opening one shows the row's sizes and price.
export default function SavedRowCards({
  invoice,
}: {
  invoice: InvoiceSnapshot;
}): ReactNode {
  if (invoice.kind === 'stone') {
    const { items, totals } = invoice.data;
    return (
      <RowCardList
        items={items}
        isFilled={isFilledStone}
        summarize={stoneSummary}
        renderBody={(item) => (
          <>
            <div className="grid grid-cols-4 gap-2">
              {STONE_SIZE_FIELDS.map(({ label, field }) => (
                <NumberField key={field} label={label} value={item[field]} />
              ))}
            </div>
            <PriceStrip
              label={STONE_PRICE_LABEL}
              price={item.price}
              measure={formatMeasure(item.area, STONE_MEASURE_UNIT)}
              total={formatAmount(item.total)}
            />
          </>
        )}
        totals={
          <RowCardTotals
            rowCount={items.length}
            stats={stoneTotalStats(totals)}
          />
        }
      />
    );
  }

  const { items, totals } = invoice.data;
  return (
    <RowCardList
      items={items}
      isFilled={isFilledBlock}
      summarize={blockSummary}
      renderBody={(item) => (
        <>
          <div className="grid grid-cols-4 gap-2">
            {BLOCK_SIZE_FIELDS.map(({ label, field }) => (
              <NumberField key={field} label={label} value={item[field]} />
            ))}
          </div>
          <PriceStrip
            label={BLOCK_PRICE_LABEL}
            price={item.price}
            measure={formatMeasure(item.volume, BLOCK_MEASURE_UNIT)}
            total={formatAmount(item.total)}
          />
        </>
      )}
      totals={
        <RowCardTotals
          rowCount={items.length}
          stats={blockTotalStats(totals)}
        />
      }
    />
  );
}
