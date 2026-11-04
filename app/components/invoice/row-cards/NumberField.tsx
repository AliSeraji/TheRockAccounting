import type { ReactNode } from 'react';
import { Label } from '../../ui/label';
import PersianNumericInput from '../PersianNumericInput';
import { cn } from '~/lib/utils';
import { CARD_INPUT, CARD_LABEL, CARD_VALUE } from './styles';
import { formatValue } from './summary';

// A labelled number of a row card. Without `onChange` it only shows the value,
// as in a saved invoice.
export default function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}): ReactNode {
  const caption = (
    <span className={cn('truncate text-center', CARD_LABEL)}>{label}</span>
  );

  if (!onChange) {
    return (
      <div className="flex min-w-0 flex-col gap-1">
        {caption}
        <span className={CARD_VALUE}>{formatValue(value) || '—'}</span>
      </div>
    );
  }

  // The label wraps the input because PersianNumericInput takes no id.
  return (
    <Label className="flex min-w-0 flex-col gap-1 font-normal">
      {caption}
      <PersianNumericInput
        value={value}
        onChange={onChange}
        readOnly={false}
        isPrice={false}
        className={CARD_INPUT}
      />
    </Label>
  );
}
