import type { ReactNode } from 'react';
import SuggestInput from './SuggestInput';
import type { StoneSuggestion } from './types';
import { matchesQuery, searchKey } from '~/lib/utils';

interface StoneTypeInputProps {
  value: string;
  suggestions: StoneSuggestion[];
  onChange: (value: string) => void;
  className?: string;
}

// A stone or block type with suggestions from the warehouse.
export default function StoneTypeInput({
  value,
  suggestions,
  onChange,
  className,
}: StoneTypeInputProps): ReactNode {
  return (
    <SuggestInput
      value={value}
      onChange={onChange}
      options={suggestions.filter((stone) => matchesQuery(stone.name, value))}
      getKey={(stone) => stone.id}
      renderOption={(stone) => stone.name}
      onSelect={(stone) => onChange(stone.name)}
      isSelected={(stone) => searchKey(stone.name) === searchKey(value)}
      className={className}
      popoverClassName="w-45"
    />
  );
}
