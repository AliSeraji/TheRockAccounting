import type React from 'react';
import { useRef, useState } from 'react';
import { Input } from '../../ui/input';
import { Popover } from '../../ui/popover';
import { cn } from '~/lib/utils';
import { SERVICE_OPTIONS } from './types';

interface ServiceTypeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ServiceTypeInput({
  value,
  onChange,
}: ServiceTypeInputProps): React.ReactNode {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const query = value.trim();
  const options =
    !query || SERVICE_OPTIONS.includes(query)
      ? SERVICE_OPTIONS
      : SERVICE_OPTIONS.filter((option) => option.includes(query));

  const select = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || options.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((i) => (i + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      select(options[highlighted]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <>
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setHighlighted(0);
          setOpen(true);
        }}
        onFocus={() => {
          setHighlighted(0);
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        placeholder="انتخاب یا نوشتن خدمت"
        className="border-0 text-center focus-visible:ring-offset-3 text-sm h-8 cursor-text"
      />
      <Popover
        triggerRef={inputRef}
        isOpen={open && options.length > 0}
        onOpenChange={setOpen}
        isNonModal
        className="w-(--trigger-width) gap-0 p-1"
      >
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => select(option)}
            onMouseEnter={() => setHighlighted(index)}
            className={cn(
              'w-full rounded-sm px-2 py-1.5 text-sm text-right text-slate-700 hover:cursor-pointer',
              index === highlighted && 'bg-slate-100 text-slate-900',
              value === option && 'font-semibold'
            )}
          >
            {option}
          </button>
        ))}
      </Popover>
    </>
  );
}
