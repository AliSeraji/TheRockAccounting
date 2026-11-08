import type { ReactNode } from 'react';
import SuggestInput from './SuggestInput';
import type { StoneSuggestion } from './types';
import { matchesQuery, searchKey } from '~/lib/utils';

interface StoneCodeInputProps {
  value: string;
  suggestions: StoneSuggestion[];
  onChange: (value: string) => void;
  className?: string;
}

// A stone or block code with suggestions from the warehouse.
export default function StoneCodeInput({
  value,
  suggestions,
  onChange,
  className,
}: StoneCodeInputProps): ReactNode {
  return (
    <SuggestInput
      value={value}
      onChange={onChange}
      options={suggestions.filter((stone) => matchesQuery(stone.code, value))}
      getKey={(stone) => stone.id}
      renderOption={(stone) => stone.code}
      onSelect={(stone) => onChange(stone.code)}
      isSelected={(stone) => searchKey(stone.code) === searchKey(value)}
      className={className}
      popoverClassName="w-45"
    />
  );
}
