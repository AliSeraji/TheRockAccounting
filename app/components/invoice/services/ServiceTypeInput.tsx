import type { ReactNode } from 'react';
import SuggestInput from '../SuggestInput';
import { serviceOptions } from './types';

interface ServiceTypeInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

// A service, picked from SERVICE_OPTIONS or typed freely.
export default function ServiceTypeInput({
  value,
  onChange,
  className,
}: ServiceTypeInputProps): ReactNode {
  return (
    <SuggestInput
      value={value}
      onChange={onChange}
      options={serviceOptions(value)}
      getKey={(option) => option}
      renderOption={(option) => option}
      onSelect={onChange}
      isSelected={(option) => option === value}
      placeholder="انتخاب یا نوشتن خدمت"
      className={className}
    />
  );
}
