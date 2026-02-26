import { memo, useCallback, useRef, useState, type ReactNode } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import type { WarehouseItem } from '~/store/warehouse/types';
import {
  convertToEnDigits,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import { FieldTypes } from './constants';

interface FormFieldProps {
  label: string;
  fieldKey: keyof WarehouseItem;
  value: string;
  type?: FieldTypes;
  placeholder?: string;
  onChange: (field: keyof WarehouseItem, value: string) => void;
}

const FormField = memo(function FormField({
  label,
  fieldKey,
  value,
  type,
  placeholder,
  onChange,
}: FormFieldProps): ReactNode {
  const [localValue, setLocalValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalize = (str: string): string =>
    convertToEnDigits(str).replace(/\//g, '.').replace(/[,٬]/g, '');

  const processNumber = (num: string, allowNegative: boolean): string => {
    let raw = normalize(num);

    if (raw === '' || raw === '-') {
      setLocalValue(null);
      onChange(fieldKey, '-');
      return '';
    }

    if (raw === '.') raw = '0.';
    if (raw === '-.') raw = '-0.';
    if (!allowNegative && raw.startsWith('-', 0)) raw = raw.replace(/^-/, '');
    const pattern = allowNegative ? /^-?\d*\.?\d*$/ : /^\d*\.?\d*$/;
    if (!pattern.test(raw)) return '';

    raw = raw.replace(/^(-?)0+(\d)/, (_, sign, digit) =>
      digit === '.' ? `${sign}0${digit}` : `${sign}${digit}`
    );
    return raw;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case FieldTypes.NUMBER:
        const num = processNumber(e.target.value.trim(), false);
        setLocalValue(convertToPersianDigits(num));
        onChange(fieldKey, num);
        break;
      case FieldTypes.PRICE:
        const price = processNumber(e.target.value.trim(), false);
        setLocalValue(formatRialAmount(convertToPersianDigits(price)));
        onChange(fieldKey, price);
        break;
      case FieldTypes.TEXT:
      default:
        const text = e.target.value.trim();
        setLocalValue(convertToPersianDigits(text));
        onChange(fieldKey, text);
        break;
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label className="text-slate-700 pr-1">{label}</Label>
      <Input
        ref={inputRef}
        value={localValue ?? ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="border-slate-200 rounded-lg focus:ring-slate-400"
      />
    </div>
  );
});

export default FormField;
