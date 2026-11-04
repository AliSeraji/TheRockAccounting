import { useEffect, useRef, type ReactNode } from 'react';
import { Label } from '../../ui/label';
import SuggestInput from '../SuggestInput';
import type { StoneSuggestion } from '../types';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';

type IdentityPart = 'type' | 'code';

interface IdentityFieldProps {
  typeLabel: string;
  typeValue: string;
  onTypeChange: (value: string) => void;
  typeSuggestions: StoneSuggestion[];
  codeLabel: string;
  codeValue: string;
  onCodeChange: (value: string) => void;
  codeSuggestions: StoneSuggestion[];
  // The part to focus when the card opens on a row just added.
  autoFocus?: IdentityPart;
}

// Persian and English digits match each other, so a typed code finds stock.
const matches = (text: string, query: string): boolean =>
  convertToEnDigits(text)
    .toLowerCase()
    .includes(convertToEnDigits(query).trim().toLowerCase());

const INPUT =
  'h-11 rounded-none border-0 bg-transparent text-base text-slate-900 focus-visible:ring-0';

// A row card's stone type and code, side by side in one field, each with
// suggestions from the warehouse.
export default function IdentityField({
  typeLabel,
  typeValue,
  onTypeChange,
  typeSuggestions,
  codeLabel,
  codeValue,
  onCodeChange,
  codeSuggestions,
  autoFocus,
}: IdentityFieldProps): ReactNode {
  const fieldRef = useRef<HTMLDivElement>(null);

  // SuggestInput takes no ref, so the inputs are found in the field: type
  // first, then code.
  useEffect(() => {
    if (!autoFocus) return;
    const inputs = fieldRef.current?.querySelectorAll('input');
    inputs?.[autoFocus === 'type' ? 0 : 1]?.focus();
  }, [autoFocus]);

  return (
    <div
      ref={fieldRef}
      className="flex h-[46px] overflow-hidden rounded-[10px] border border-slate-200 bg-white transition-[border-color,box-shadow] focus-within:border-brand-400 focus-within:ring-3 focus-within:ring-brand-400/35"
    >
      <Label className="flex min-w-0 flex-1 font-normal">
        <span className="sr-only">{typeLabel}</span>
        <SuggestInput
          value={convertToPersianDigits(typeValue)}
          onChange={onTypeChange}
          options={typeSuggestions.filter((s) => matches(s.name, typeValue))}
          getKey={(s) => s.id}
          renderOption={(s) => s.name}
          onSelect={(s) => onTypeChange(s.name)}
          isSelected={(s) => s.name === typeValue}
          placeholder={typeLabel}
          className={`${INPUT} px-3 font-semibold`}
        />
      </Label>
      {/* ltr keeps a code like TRV-024 in reading order. */}
      <Label
        dir="ltr"
        className="flex w-24 shrink-0 border-r border-slate-200 bg-slate-50 font-normal"
      >
        <span className="sr-only">{codeLabel}</span>
        <SuggestInput
          value={convertToPersianDigits(codeValue)}
          onChange={onCodeChange}
          options={codeSuggestions.filter((s) => matches(s.code, codeValue))}
          getKey={(s) => s.id}
          renderOption={(s) => s.code}
          onSelect={(s) => onCodeChange(s.code)}
          isSelected={(s) => s.code === codeValue}
          placeholder={codeLabel}
          className={`${INPUT} px-2 text-center text-slate-700`}
          popoverClassName="w-44"
        />
      </Label>
    </div>
  );
}
