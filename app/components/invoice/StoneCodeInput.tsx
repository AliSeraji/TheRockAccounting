import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { StoneSuggestion } from './types';
import { Popover, PopoverTrigger } from '../ui/popover';
import { Input } from '../ui/input';
import { menuItemClass, menuSurfaceClass } from '../ui/select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn, matchesQuery, searchKey } from '~/lib/utils';

interface StoneCodeInputProps {
  value: string;
  suggestions: StoneSuggestion[];
  onChange: (value: string) => void;
  ref?: React.Ref<HTMLInputElement>;
}

export default function StoneCodeInput({
  value,
  suggestions,
  onChange,
  ref,
}: StoneCodeInputProps): ReactNode {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const query = value.trim();

  const options = useMemo(
    () =>
      query
        ? suggestions.filter((stone) => matchesQuery(stone.code, query))
        : suggestions,
    [suggestions, query]
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
    onChange(option);
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
      select(options[highlighted].code);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <PopoverTrigger>
      <Input
        ref={(el) => {
          inputRef.current = el;
          if (typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
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
        className="rounded-none border-0 text-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-3 text-sm h-8 cursor-text"
      />
      <Popover
        triggerRef={inputRef}
        isOpen={open && options.length > 0}
        onOpenChange={setOpen}
        isNonModal
        className={cn(
          'w-45 gap-0 overflow-hidden p-0 ring-0 duration-200 motion-reduce:animate-none',
          menuSurfaceClass
        )}
      >
        <div className="relative flex min-h-0 flex-col">
          <div
            ref={listRef}
            onScroll={updateScrollHints}
            className="flex max-h-60 min-h-0 flex-col gap-0.5 overflow-y-auto p-1.5"
          >
            {options.map((stone, idx) => (
              <button
                key={stone.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => select(stone.code)}
                onMouseEnter={() => setHighlighted(idx)}
                className={cn(
                  'w-full shrink-0 py-2 text-right',
                  menuItemClass,
                  idx === highlighted && 'bg-slate-100 text-slate-900',
                  searchKey(value) === searchKey(stone.code) &&
                    'bg-brand-100 font-medium text-brand-900'
                )}
              >
                {stone.code}
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
