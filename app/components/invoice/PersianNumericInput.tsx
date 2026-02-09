import type React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Input } from '../ui/input';
import {
  convertToPersianDigits,
  convertToEnDigits,
  cleanTrailingZeros,
  formatRialAmount,
} from '~/lib/utils';

const normalize = (str: string): string =>
  convertToEnDigits(str).replace(/\//g, '.').replace(/[,٬]/g, '');

const toPersianDisplay = (str: string): string => convertToPersianDigits(str);

interface PersianNumericInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  allowNegative?: boolean;
  readOnly: boolean;
  isPrice: boolean;
}

export default function PersianNumericInput({
  value,
  onChange,
  className = '',
  placeholder,
  allowNegative = false,
  readOnly = false,
  isPrice = false,
}: PersianNumericInputProps) {
  const [localValue, setLocalValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let raw = normalize(e.target.value.trim());

      if (raw === '' || raw === '-') {
        setLocalValue(null);
        onChange('-');
        return;
      }

      if (raw === '.') raw = '0.';
      if (raw === '-.') raw = '-0.';
      if (!allowNegative && raw.startsWith('-', 0)) raw = raw.replace(/^-/, '');
      const pattern = allowNegative ? /^-?\d*\.?\d*$/ : /^\d*\.?\d*$/;
      if (!pattern.test(raw)) return;

      raw = raw.replace(/^(-?)0+(\d)/, (_, sign, digit) =>
        digit === '.' ? `${sign}0${digit}` : `${sign}${digit}`
      );

      setLocalValue(raw);
      onChange(raw);
    },
    [onChange, allowNegative]
  );

  const handleBlur = useCallback(() => {
    setLocalValue(null);
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setLocalValue(value);
      requestAnimationFrame(() => {
        e.target.select();
      });
    },
    [value]
  );
  const displayValue =
    localValue !== null
      ? isPrice
        ? formatRialAmount(toPersianDisplay(localValue))
        : toPersianDisplay(localValue)
      : isPrice
        ? formatRialAmount(
            toPersianDisplay(readOnly ? cleanTrailingZeros(value) : value)
          )
        : toPersianDisplay(readOnly ? cleanTrailingZeros(value) : value);

  return (
    <Input
      ref={inputRef}
      value={displayValue}
      onChange={handleChange}
      onFocus={readOnly ? undefined : handleFocus}
      onBlur={readOnly ? undefined : handleBlur}
      className={className}
      placeholder={placeholder}
      inputMode="decimal"
      dir="ltr"
      readOnly={readOnly}
      tabIndex={readOnly ? -1 : undefined}
    />
  );
}
