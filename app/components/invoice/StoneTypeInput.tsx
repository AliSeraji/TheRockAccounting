import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Popover, PopoverTrigger } from '../ui/popover';
import { Input } from '../ui/input';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { InvoiceRowField } from './types';
import { cn } from '~/lib/utils';

interface StoneTypeInputProps {
  value: string;
  id: number;
  field: InvoiceRowField;
  onChange: (id: number, field: InvoiceRowField, value: string) => void;
}

export default function StoneTypeInput({
  value,
  id,
  field,
  onChange,
}: StoneTypeInputProps): React.ReactNode {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stones = useWarehouseStore((state) => state.items);

  const query = value.trim();

  const options = useMemo(
    () =>
      query
        ? stones.filter((stone) =>
            stone.name.toLowerCase().includes(query.toLowerCase())
          )
        : stones,
    [stones, query]
  );

  const updateScrollHints = () => {
    const list = listRef.current;
    if (!list) return;
    setCanScrollUp(list.scrollTop > 0);
    setCanScrollDown(
      list.scrollTop + list.clientHeight < list.scrollHeight - 1
    );
  };

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: 0 });
    updateScrollHints();
  }, [open, options]);

  const select = (option: string) => {
    onChange(id, field, option);
    setOpen(false);
  };

  const moveHighlight = (next: number) => {
    setHighlighted(next);
    itemRefs.current[next]?.scrollIntoView({ block: 'nearest' });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || options.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveHighlight((highlighted + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveHighlight((highlighted - 1 + options.length) % options.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      select(options[highlighted].name);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <PopoverTrigger>
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          onChange(id, field, e.target.value);
          setHighlighted(0);
          setOpen(true);
        }}
        onFocus={() => {
          setHighlighted(0);
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        className="border-0 text-center focus-visible:ring-offset-3 text-sm h-8 cursor-text"
      />
      <Popover
        triggerRef={inputRef}
        isOpen={open && options.length > 0}
        onOpenChange={setOpen}
        isNonModal
        className="w-45 p-0 overflow-hidden border-gray-400 border-2"
      >
        <div className="relative flex min-h-0 flex-col">
          <div
            ref={listRef}
            onScroll={updateScrollHints}
            className="flex max-h-60 min-h-0 flex-col gap-2 overflow-y-auto p-1"
          >
            {options.map((stone, idx) => (
              <button
                key={stone.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => select(stone.name)}
                onMouseEnter={() => setHighlighted(idx)}
                className={cn(
                  'w-full shrink-0 rounded-sm px-2 py-1.5 text-sm text-right text-slate-700 hover:cursor-pointer',
                  idx === highlighted && 'bg-slate-100 text-slate-900',
                  value === stone.name && 'font-semibold'
                )}
              >
                {stone.name}
              </button>
            ))}
          </div>
          {canScrollUp && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex h-7 items-start justify-center bg-linear-to-b from-popover to-transparent">
              <ChevronUp className="size-4 text-slate-500" />
            </div>
          )}
          {canScrollDown && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-7 items-end justify-center bg-linear-to-t from-popover to-transparent">
              <ChevronDown className="size-4 text-slate-500" />
            </div>
          )}
        </div>
      </Popover>
    </PopoverTrigger>
  );
}