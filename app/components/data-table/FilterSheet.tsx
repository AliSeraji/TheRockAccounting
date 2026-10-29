import { useState, type ReactNode } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { clearFilters, isFilterActive } from './filters';
import type { ListFilter } from './types';

interface FilterSheetProps {
  filters: ListFilter[];
  // Items left by the current filters, shown on the close button.
  shown: number;
  noun: string;
  className?: string;
}

// The phone version of a list's filters: a button with the number of active
// filters, opening a bottom sheet where each option is a pill. Picks apply
// straight away.
export default function FilterSheet({
  filters,
  shown,
  noun,
  className,
}: FilterSheetProps): ReactNode {
  const [open, setOpen] = useState(false);
  const activeCount = filters.filter(isFilterActive).length;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="فیلترها"
          className={cn(
            'relative grid size-10 shrink-0 place-items-center rounded-lg border hover:cursor-pointer',
            activeCount > 0
              ? 'border-brand-400 bg-brand-50 text-brand-800'
              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50',
            className
          )}
        >
          <SlidersHorizontal className="size-4.5" />
          {activeCount > 0 && (
            <span className="absolute -top-1.5 -left-1.5 h-4.5 min-w-4.5 rounded-full bg-brand-700 px-1 text-center text-[11px] leading-4.5 font-semibold text-white">
              {convertToPersianDigits(activeCount)}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        dir="rtl"
        showCloseButton={false}
        aria-describedby={undefined}
        className="max-h-[85vh] gap-4 rounded-t-2xl border-slate-200 bg-white px-4 pt-2 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-slate-800 animate-sheet-up motion-reduce:animate-none"
      >
        <span
          aria-hidden="true"
          className="mx-auto h-1 w-10 shrink-0 rounded-full bg-slate-300"
        />
        <div className="flex items-center justify-between">
          <SheetTitle className="text-base font-semibold text-slate-800">
            فیلترها
          </SheetTitle>
          <SheetClose asChild>
            <button
              type="button"
              aria-label="بستن"
              className="grid size-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:cursor-pointer"
            >
              <X className="size-4.5" />
            </button>
          </SheetClose>
        </div>

        <div className="flex min-h-0 flex-col gap-5 overflow-y-auto">
          {filters.map((filter) => (
            <div key={filter.key} className="flex flex-col gap-2">
              <span className="text-xs text-slate-500">{filter.label}</span>
              <div
                role="group"
                aria-label={filter.label}
                className="flex flex-wrap gap-2"
              >
                {filter.options.map((option, idx) => {
                  const selected = option.value === filter.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => filter.onChange(option.value)}
                      className={cn(
                        'h-8.5 rounded-full px-3.5 text-[13px] font-medium whitespace-nowrap ring-1 ring-inset transition-colors hover:cursor-pointer',
                        selected
                          ? 'bg-brand-100 text-brand-800 ring-brand-400'
                          : 'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50'
                      )}
                    >
                      {/* The group label already names what "all" covers. */}
                      {idx === 0 ? 'همه' : option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2 pt-1">
          <SheetClose asChild>
            <Button className="h-11 rounded-lg bg-linear-to-r from-brand-700 to-brand-900 text-white shadow-md hover:from-brand-800 hover:to-brand-950 hover:cursor-pointer">
              نمایش {convertToPersianDigits(shown)} {noun}
            </Button>
          </SheetClose>
          <Button
            variant="outline"
            onClick={() => clearFilters(filters)}
            className="h-11 rounded-lg border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-700 hover:cursor-pointer"
          >
            پاک کردن
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
