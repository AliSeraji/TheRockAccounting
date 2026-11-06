import { lazy, Suspense, useRef, useState, type ReactNode } from 'react';
import { Dialog } from 'react-aria-components';
import {
  CalendarCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Popover } from '../ui/popover';
import { menuItemClass, menuSurfaceClass } from '../ui/select';
import { IconTitle } from '../ui/segmented-control';
import {
  filterTriggerActiveClass,
  filterTriggerClass,
} from '../data-table/ListHeader';
import { dayLabel, presetRange } from '~/lib/jalali';
import { cn, convertToPersianDigits } from '~/lib/utils';
import type { InvoiceDateFilter } from '~/store/invoices/types';

const DateRangePicker = lazy(() => import('./DateRangePicker.client'));

export const DATE_OPTIONS: { value: InvoiceDateFilter; label: string }[] = [
  { value: 'all', label: 'همه تاریخ‌ها' },
  { value: 'today', label: 'امروز' },
  { value: 'yesterday', label: 'دیروز' },
  { value: 'week', label: 'این هفته' },
  { value: 'month', label: 'این ماه' },
  { value: 'range', label: 'بازه دلخواه' },
];

interface DateRangePanelProps {
  from: string;
  to: string;
  onApply: (from: string, to: string) => void;
}

// The custom-range picker, loaded on first use: the calendar is client-only.
export function DateRangePanel(props: DateRangePanelProps): ReactNode {
  return (
    <Suspense fallback={<div className="h-80" />}>
      <DateRangePicker {...props} />
    </Suspense>
  );
}

interface DateFilterPopoverProps {
  value: InvoiceDateFilter;
  // The applied custom range's label, when there is one.
  rangeText?: string;
  from: string;
  to: string;
  today: Date;
  onPick: (value: InvoiceDateFilter) => void;
  onApplyRange: (from: string, to: string) => void;
}

// The desktop date filter: a trigger like the other dropdown filters, opening
// the presets, with a custom range calendar that slides in beside them.
export function DateFilterPopover({
  value,
  rangeText,
  from,
  to,
  today,
  onPick,
  onApplyRange,
}: DateFilterPopoverProps): ReactNode {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [showRange, setShowRange] = useState(false);
  const active = value !== 'all';

  const openWith = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) setShowRange(value === 'range');
  };

  const pick = (next: InvoiceDateFilter) => {
    onPick(next);
    setOpen(false);
  };

  const presetDesc = (preset: InvoiceDateFilter): string => {
    if (preset === 'all' || preset === 'range') return '';
    const range = presetRange(preset, today);
    return range.from === range.to
      ? dayLabel(range.to)
      : `از ${dayLabel(range.from)}`;
  };

  const triggerText =
    value === 'range'
      ? (rangeText ?? 'بازه دلخواه')
      : DATE_OPTIONS.find((option) => option.value === value)?.label;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="تاریخ"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => openWith(!open)}
        className={cn(filterTriggerClass, active && filterTriggerActiveClass)}
      >
        <IconTitle
          icon={CalendarDays}
          label="تاریخ"
          className={active ? 'text-brand-600' : undefined}
        />
        <span>{triggerText}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'size-4 text-slate-500 transition-transform duration-200 motion-reduce:transition-none',
            open && 'rotate-180'
          )}
        />
      </button>
      <Popover
        triggerRef={triggerRef}
        isOpen={open}
        onOpenChange={openWith}
        placement="bottom start"
        offset={6}
        className={cn(
          'w-auto gap-0 p-0 ring-0 duration-200 motion-reduce:animate-none',
          menuSurfaceClass
        )}
      >
        <Dialog
          aria-label="تاریخ فاکتور"
          dir="rtl"
          className="flex items-start gap-1.5 p-1.5 outline-none"
        >
          <div className="flex w-52 flex-col gap-0.5">
            {DATE_OPTIONS.map((option) => {
              const isRange = option.value === 'range';
              const selected = value === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    isRange ? setShowRange(!showRange) : pick(option.value)
                  }
                  className={cn(
                    'flex items-center gap-2 py-2 text-right hover:bg-slate-100 hover:text-slate-900',
                    menuItemClass,
                    selected && 'bg-brand-100 font-medium text-brand-900',
                    isRange && showRange && !selected && 'bg-slate-100'
                  )}
                >
                  <span className="flex-1">{option.label}</span>
                  <span className="text-xs font-normal text-slate-500">
                    {isRange && selected ? rangeText : presetDesc(option.value)}
                  </span>
                  {isRange ? (
                    <ChevronLeft
                      aria-hidden="true"
                      className="size-4 text-slate-500"
                    />
                  ) : (
                    <Check
                      aria-hidden="true"
                      className={cn(
                        'size-4 text-brand-600',
                        !selected && 'invisible'
                      )}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {showRange && (
            <div className="w-84 border-r border-slate-200 pr-1.5 duration-200 animate-in fade-in-0 slide-in-from-top-1 motion-reduce:animate-none">
              <DateRangePanel
                from={from}
                to={to}
                onApply={(start, end) => {
                  onApplyRange(start, end);
                  setOpen(false);
                }}
              />
            </div>
          )}
        </Dialog>
      </Popover>
    </>
  );
}

interface TodayButtonProps {
  on: boolean;
  count: number;
  onToggle: () => void;
}

// A one-click "today's invoices" switch beside the filters, with how many
// invoices are dated today.
export function TodayButton({
  on,
  count,
  onToggle,
}: TodayButtonProps): ReactNode {
  return (
    <Button
      type="button"
      variant="outline"
      aria-pressed={on}
      aria-label="فقط فاکتورهای امروز"
      onClick={onToggle}
      className={cn(
        'h-10 gap-2 rounded-xl border-brand-400 bg-white ps-3.5 pe-2 text-brand-900 transition-[background-color,border-color,color] duration-200 hover:cursor-pointer hover:bg-brand-50 hover:text-brand-900 focus-visible:ring-4 focus-visible:ring-brand-400/25 focus-visible:ring-offset-0 motion-reduce:transition-none',
        on &&
          'border-brand-900 bg-brand-900 text-white hover:bg-brand-950 hover:text-white'
      )}
    >
      <CalendarCheck
        aria-hidden="true"
        className={on ? 'text-brand-100' : 'text-brand-600'}
      />
      امروز
      <span
        className={cn(
          'grid h-5.5 min-w-5.5 place-items-center rounded-full px-1.5 text-xs font-bold transition-colors duration-200',
          on ? 'bg-white text-brand-900' : 'bg-brand-100 text-brand-900'
        )}
      >
        {convertToPersianDigits(count)}
      </span>
    </Button>
  );
}
