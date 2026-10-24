import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Popover, PopoverTrigger } from '../ui/popover';
import { Input } from '../ui/input';
import { cn } from '~/lib/utils';

interface SuggestInputProps<T> {
  value: string;
  onChange: (value: string) => void;
  // Already filtered by the caller.
  options: T[];
  getKey: (option: T) => string;
  renderOption: (option: T) => ReactNode;
  onSelect: (option: T) => void;
  isSelected?: (option: T) => boolean;
  onBlur?: () => void;
  // false: nothing is highlighted until an arrow key is pressed, so Enter
  // can't pick an option the user never moved to.
  autoHighlight?: boolean;
  placeholder?: string;
  className?: string;
  popoverClassName?: string;
}

// A text input with a dropdown of options to pick from, driven by the
// keyboard or the mouse. Typing stays free; picking calls `onSelect`.
export default function SuggestInput<T>({
  value,
  onChange,
  options,
  getKey,
  renderOption,
  onSelect,
  isSelected,
  onBlur,
  autoHighlight = true,
  placeholder,
  className,
  popoverClassName = 'w-(--trigger-width)',
}: SuggestInputProps<T>): ReactNode {
  const firstHighlight = autoHighlight ? 0 : -1;
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(firstHighlight);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
  }, [open, value, options.length]);

  const select = (option: T) => {
    onSelect(option);
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
      moveHighlight(highlighted <= 0 ? options.length - 1 : highlighted - 1);
    } else if (e.key === 'Enter') {
      const option = options[highlighted];
      if (option === undefined) return;
      e.preventDefault();
      select(option);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <PopoverTrigger>
      <Input
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setHighlighted(firstHighlight);
          setOpen(true);
        }}
        onFocus={() => {
          setHighlighted(firstHighlight);
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
          onBlur?.();
        }}
        onKeyDown={handleKeyDown}
        className={cn('cursor-text', className)}
      />
      <Popover
        triggerRef={inputRef}
        isOpen={open && options.length > 0}
        onOpenChange={setOpen}
        isNonModal
        className={cn(
          'p-0 overflow-hidden border-gray-400 border-2',
          popoverClassName
        )}
      >
        <div className="relative flex min-h-0 flex-col">
          <div
            ref={listRef}
            onScroll={updateScrollHints}
            className="flex max-h-60 min-h-0 flex-col gap-1 overflow-y-auto p-1"
          >
            {options.map((option, idx) => (
              <button
                key={getKey(option)}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => select(option)}
                onMouseEnter={() => setHighlighted(idx)}
                className={cn(
                  'w-full rounded-sm px-2 py-1.5 text-sm text-right text-slate-700 hover:cursor-pointer',
                  idx === highlighted && 'bg-slate-100 text-slate-900',
                  isSelected?.(option) && 'font-semibold'
                )}
              >
                {renderOption(option)}
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
