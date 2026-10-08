import { memo, useEffect, useRef, useState, type ReactNode } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  convertToEnDigits,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import { FieldTypes } from './constants';

interface FormFieldProps<K extends string> {
  label: string;
  fieldKey: K;
  value: string;
  type?: FieldTypes;
  placeholder?: string;
  required?: boolean;
  // Lets NUMBER fields accept values below zero.
  allowNegative?: boolean;
  onChange: (field: K, value: string) => void;
}

function FormField<K extends string>({
  label,
  fieldKey,
  value,
  type,
  placeholder,
  required,
  allowNegative = false,
  onChange,
}: FormFieldProps<K>): ReactNode {
  const [localValue, setLocalValue] = useState<string | null>(
    convertToPersianDigits(value)
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Keep a lone minus sign while a negative number is still being typed.
    if (value === '' && localValue === '-') return;
    if (type === FieldTypes.PRICE) {
      setLocalValue(formatRialAmount(convertToPersianDigits(value)));
    } else if (type === FieldTypes.TEXT) {
      setLocalValue(value);
    } else setLocalValue(convertToPersianDigits(value));
  }, [value, type]);

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
        if (allowNegative && normalize(e.target.value.trim()) === '-') {
          setLocalValue('-');
          onChange(fieldKey, '');
          break;
        }
        const num = processNumber(e.target.value.trim(), allowNegative);
        setLocalValue(convertToPersianDigits(num));
        onChange(fieldKey, num);
        break;
      case FieldTypes.PRICE:
        const price = processNumber(e.target.value.trim(), false);
        setLocalValue(formatRialAmount(convertToPersianDigits(price)));
        onChange(fieldKey, price);
        break;
      case FieldTypes.TEXT:
        setLocalValue(e.target.value);
        onChange(fieldKey, e.target.value);
        break;
      default:
        const text = e.target.value.trim();
        setLocalValue(convertToPersianDigits(text));
        onChange(fieldKey, text);
        break;
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label className="text-slate-700 pr-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        readOnly={type === FieldTypes.CALCULATED}
        ref={inputRef}
        value={localValue ?? ''}
        onChange={handleChange}
        placeholder={placeholder}
        dir={
          type === FieldTypes.NUMBER || type === FieldTypes.CALCULATED
            ? 'ltr'
            : undefined
        }
        className="border-slate-200 rounded-lg focus:ring-slate-400 text-right"
      />
    </div>
  );
}

// memo drops the generic signature, so cast it back.
export default memo(FormField) as typeof FormField;
