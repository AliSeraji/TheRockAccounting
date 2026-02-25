import { memo, type ReactNode } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import type { WarehouseItem } from '~/store/warehouse/types';

interface FormFieldProps {
  label: string;
  fieldKey: keyof WarehouseItem;
  value: string;
  type?: string;
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
  return (
    <div className="flex flex-col space-y-2">
      <Label className="text-slate-700 pr-1">{label}</Label>
      <Input
        type={type ?? 'text'}
        value={value}
        onChange={(e) => onChange(fieldKey, e.target.value)}
        placeholder={placeholder}
        className="border-slate-200 rounded-lg focus:ring-slate-400"
      />
    </div>
  );
});

export default FormField;
