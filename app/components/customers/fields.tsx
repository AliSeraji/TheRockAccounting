import { memo, type ReactNode } from 'react';
import { Field, FieldDescription, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Switch } from '../ui/switch';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { digitsOnly } from '~/lib/validation';

const labelClass = 'text-slate-700 pr-2 text-xs lg:text-sm';
const controlClass =
  'rounded-lg text-xs lg:text-sm border-slate-200 focus-visible:ring-slate-400';

function FieldShell({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string | null;
  hint?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <Field data-invalid={!!error}>
      <FieldLabel className={labelClass}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      {children}
      {error ? (
        <FieldError className="pr-2 text-[11px]">{error}</FieldError>
      ) : hint ? (
        <FieldDescription className="pr-2 text-right text-[11px] text-slate-400">
          {hint}
        </FieldDescription>
      ) : null}
    </Field>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  hint?: string;
  dir?: 'rtl' | 'ltr';
}

export const TextField = memo(function TextField({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  hint,
  dir,
}: TextFieldProps): ReactNode {
  return (
    <FieldShell label={label} required={required} error={error} hint={hint}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        dir={dir}
        className={cn(controlClass, error && 'border-red-300')}
      />
    </FieldShell>
  );
});

interface DigitsFieldProps extends Omit<TextFieldProps, 'dir'> {
  /** حداکثر تعداد ارقام مجاز */
  maxLength?: number;
  /** پیشوند ثابت و غیرقابل ویرایش، مانند IR در شماره شبا */
  prefix?: string;
  /** فاصله‌گذاری هر ۴ رقم، برای شماره کارت */
  grouped?: boolean;
}

/**
 * ورودی عددی: مقدار با ارقام انگلیسی نگه‌داری و با ارقام فارسی نمایش داده می‌شود.
 */
export const DigitsField = memo(function DigitsField({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  hint,
  maxLength,
  prefix,
  grouped,
}: DigitsFieldProps): ReactNode {
  const handleChange = (raw: string) => {
    const digits = digitsOnly(raw);
    onChange(maxLength ? digits.slice(0, maxLength) : digits);
  };

  const display = grouped
    ? convertToPersianDigits(value).replace(/(.{4})(?=.)/g, '$1-')
    : convertToPersianDigits(value);

  return (
    <FieldShell label={label} required={required} error={error} hint={hint}>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
            {prefix}
          </span>
        )}
        <Input
          value={display}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          inputMode="numeric"
          dir="ltr"
          className={cn(
            controlClass,
            'text-left',
            prefix && 'pl-9',
            error && 'border-red-300'
          )}
        />
      </div>
    </FieldShell>
  );
});

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  hint?: string;
  disabled?: boolean;
}

export const SelectField = memo(function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
  hint,
  disabled,
}: SelectFieldProps): ReactNode {
  return (
    <FieldShell label={label} required={required} error={error} hint={hint}>
      <Select value={value || undefined} onValueChange={onChange}>
        <SelectTrigger
          dir="rtl"
          disabled={disabled}
          className={cn(
            controlClass,
            'bg-white text-slate-700 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus:border-slate-400',
            error && 'border-red-300'
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent dir="rtl" className="max-h-72">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="hover:cursor-pointer text-xs lg:text-sm"
              >
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FieldShell>
  );
});

export const ToggleField = memo(function ToggleField({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}): ReactNode {
  return (
    <label
      className={cn(
        'flex items-start gap-3 rounded-lg border p-3 transition-colors hover:cursor-pointer',
        checked ? 'border-teal-200 bg-teal-50/60' : 'border-slate-200 bg-white'
      )}
    >
      <Switch
        checked={checked}
        onCheckedChange={onChange}
        className="mt-0.5 data-[state=checked]:bg-teal-600 hover:cursor-pointer"
      />
      <span className="flex flex-col gap-0.5">
        <span className="text-xs lg:text-sm font-medium text-slate-700">
          {label}
        </span>
        <span className="text-[11px] text-slate-400">{description}</span>
      </span>
    </label>
  );
});
