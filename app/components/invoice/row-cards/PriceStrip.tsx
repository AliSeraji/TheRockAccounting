import type { ReactNode } from 'react';
import { Label } from '../../ui/label';
import PersianNumericInput from '../PersianNumericInput';
import { cn } from '~/lib/utils';
import { CARD_FIELD_LABEL, CARD_INPUT, CARD_LABEL, CARD_VALUE } from './styles';
import { formatAmount } from './summary';

// The foot of an open row card: the price beside what the row comes to.
// `measure` and `total` arrive formatted, '' while the row can't work them out;
// a service has no measure and leaves it out. Without `onPriceChange` the
// price is only shown, as in a saved invoice.
export default function PriceStrip({
  label,
  price,
  onPriceChange,
  addItem,
  measure,
  total,
}: {
  label: string;
  price: string;
  onPriceChange?: (value: string) => void;
  // Enter in the price adds a row, as in the desktop table.
  addItem?: () => void;
  measure?: string;
  total: string;
}): ReactNode {
  return (
    <div className="grid grid-cols-2 items-end gap-2.5 rounded-xl bg-slate-50 p-2.5">
      {onPriceChange ? (
        <Label className="flex min-w-0 flex-col gap-1 font-normal">
          <span className={CARD_FIELD_LABEL}>{label}</span>
          <PersianNumericInput
            value={price}
            onChange={onPriceChange}
            readOnly={false}
            isPrice
            addItem={addItem}
            className={CARD_INPUT}
          />
        </Label>
      ) : (
        <div className="flex min-w-0 flex-col gap-1">
          <span className={CARD_FIELD_LABEL}>{label}</span>
          <span className={cn(CARD_VALUE, 'bg-white')}>
            {formatAmount(price) || '—'}
          </span>
        </div>
      )}
      <div className="flex min-w-0 flex-col items-end gap-0.5">
        {measure !== undefined && (
          <span className="mb-1 text-xs text-slate-600">
            متراژ{' '}
            <span className="font-semibold text-slate-800">
              {measure || '—'}
            </span>
          </span>
        )}
        <span className={CARD_LABEL}>مبلغ کل (ریال)</span>
        <span className="text-lg leading-snug font-bold text-brand-900">
          {total || '—'}
        </span>
      </div>
    </div>
  );
}
