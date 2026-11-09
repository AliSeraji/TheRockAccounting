import type { ReactNode } from 'react';
import { TableCell } from '../ui/table';
import PersianNumericInput from '../invoice/PersianNumericInput';
import { cn } from '~/lib/utils';
import type { FloatingColumn } from './columns';
import { CELL, FIELD_INPUT, RESULT_INPUT } from './styles';

// A numeric cell of an editable row. A 'field' is typed into; a 'result' or
// the row's 'total' is computed and reads as text, the total in bold.
export default function NumberCell({
  column,
  look = 'field',
  value,
  onChange,
  isPrice = false,
  addItem,
  removeItem,
  placeholder,
}: {
  column: FloatingColumn;
  look?: 'field' | 'result' | 'total';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isPrice?: boolean;
  addItem?: () => void;
  removeItem?: () => void;
}): ReactNode {
  const readOnly = look !== 'field';
  return (
    <TableCell className={cn(CELL, column.width)}>
      <PersianNumericInput
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        isPrice={isPrice}
        addItem={addItem}
        removeItem={removeItem}
        placeholder={readOnly ? undefined : placeholder}
        className={cn(
          readOnly ? RESULT_INPUT : FIELD_INPUT,
          look === 'total' && 'font-bold text-slate-900'
        )}
      />
    </TableCell>
  );
}
