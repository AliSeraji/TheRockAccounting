import type { ReactNode } from 'react';
import { Plus, Search, X } from 'lucide-react';
import { CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { IconTitle, SegmentedControl } from '../ui/segmented-control';
import { cn, convertToPersianDigits } from '~/lib/utils';
import FilterSheet from './FilterSheet';
import { clearFilters, isFilterActive, resetFilter } from './filters';
import type { ListFilter } from './types';

interface ListHeaderProps {
  title: string;
  // Singular noun for the items, used in the count.
  noun: string;
  shown: number;
  total: number;
  search: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
  filters?: ListFilter[];
  // Extra desktop controls after the filters, e.g. a quick toggle.
  actions?: ReactNode;
  // Shows a "+ new" button when both are given.
  addLabel?: string;
  onAdd?: () => void;
}

// A dropdown filter sits on a cream track like a segmented control, and
// turns white with a gold border while it filters. Also used by custom
// desktop filters (`ListFilter.desktop`).
export const filterTriggerClass =
  'flex h-10 w-auto min-w-40 shrink-0 items-center justify-start gap-2 rounded-xl border border-transparent bg-slate-200/70 px-3 text-sm font-medium text-slate-900 transition-[background-color,border-color,box-shadow,color] duration-200 hover:cursor-pointer hover:border-transparent hover:bg-slate-200 focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-400/25 focus-visible:outline-none aria-expanded:border-brand-500 aria-expanded:ring-4 aria-expanded:ring-brand-400/25 motion-reduce:transition-none [&>svg:last-child]:ms-auto';
export const filterTriggerActiveClass =
  'border-brand-400 bg-white text-brand-900 shadow-[0_1px_3px_rgb(64_55_45/0.1)] hover:border-brand-400 hover:bg-white';

// Header of a list card: title and count, then search, filters and an
// optional add button. Phones get the filters in a bottom sheet, chips for
// the active ones and an icon-only add button. From md up the filters are
// inline: segmented controls or dropdowns, each titled by its icon. Only CSS
// breakpoints decide this, so SSR markup matches.
export default function ListHeader({
  title,
  noun,
  shown,
  total,
  search,
  onSearchChange,
  searchPlaceholder,
  filters = [],
  actions,
  addLabel,
  onAdd,
}: ListHeaderProps): ReactNode {
  const active = filters.filter(isFilterActive);
  const count =
    shown === total
      ? `${convertToPersianDigits(total)} ${noun}`
      : `${convertToPersianDigits(shown)} از ${convertToPersianDigits(total)}`;

  return (
    <CardHeader className="gap-3 space-y-0 rounded-t-lg border-b border-slate-200 bg-linear-to-r from-slate-100 to-slate-50 p-4 md:p-6">
      <div className="flex w-full flex-col gap-3">
        <div className="flex min-w-0 items-center justify-between gap-2 md:justify-start">
          <CardTitle className="text-xs leading-normal font-semibold text-slate-800 md:text-base lg:text-lg">
            {title}
          </CardTitle>
          <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-slate-600">
            {count}
          </span>
        </div>

        <div className="flex items-center gap-2 md:flex-wrap">
          {addLabel && onAdd && (
            // Icon-only at the end of the row on phones, full button first
            // from md up.
            <Button
              onClick={onAdd}
              aria-label={addLabel}
              className="order-last w-10 shrink-0 gap-2 rounded-lg bg-brand-700 px-0 text-white hover:bg-brand-800 hover:cursor-pointer md:order-first md:w-auto md:px-4"
            >
              <Plus className="size-4" />
              <span className="hidden md:inline">{addLabel}</span>
            </Button>
          )}
          <div className="relative min-w-0 flex-1 md:w-64 md:flex-none">
            <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-400" />
            {/* iOS Safari zooms in when an input under 16px gets focus. */}
            <Input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label="جستجو"
              enterKeyHint="search"
              className={cn('pr-9 text-xs md:text-sm', search && 'pl-9')}
            />
            {search && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="پاک کردن جستجو"
                className="absolute top-1/2 left-1.5 grid size-7 -translate-y-1/2 place-items-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 hover:cursor-pointer"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
          {filters.length > 0 && (
            <FilterSheet
              filters={filters}
              shown={shown}
              noun={noun}
              className="md:hidden"
            />
          )}
          {filters.map((filter) => {
            if (filter.desktop) {
              return (
                <div key={filter.key} className="hidden md:flex">
                  {filter.desktop}
                </div>
              );
            }
            if (filter.variant === 'segmented') {
              return (
                <SegmentedControl
                  key={filter.key}
                  value={filter.value}
                  onChange={filter.onChange}
                  options={filter.options}
                  label={filter.label}
                  icon={filter.icon}
                  className="hidden md:flex"
                />
              );
            }
            const active = isFilterActive(filter);
            return (
              <Select
                key={filter.key}
                value={filter.value}
                onValueChange={filter.onChange}
              >
                <SelectTrigger
                  dir="rtl"
                  aria-label={filter.label}
                  className={cn(
                    filterTriggerClass,
                    active && filterTriggerActiveClass,
                    'hidden md:flex'
                  )}
                >
                  {filter.icon && (
                    <IconTitle
                      icon={filter.icon}
                      label={filter.label}
                      className={active ? 'text-brand-600' : undefined}
                    />
                  )}
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    {filter.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            );
          })}
          {actions && (
            <div className="hidden md:flex md:items-center md:gap-2">
              {actions}
            </div>
          )}
        </div>
      </div>

      {active.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 md:hidden">
          {active.map((filter) => {
            const label =
              filter.valueLabel ??
              filter.options.find((option) => option.value === filter.value)
                ?.label ??
              filter.value;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => resetFilter(filter)}
                aria-label={`حذف فیلتر ${label}`}
                className="inline-flex h-7 items-center gap-1 rounded-full border border-brand-200 bg-brand-100 pr-2.5 pl-1.5 text-xs font-medium text-brand-800 duration-200 animate-in fade-in-0 zoom-in-95 hover:cursor-pointer motion-reduce:animate-none"
              >
                {label}
                <X className="size-3.5" />
              </button>
            );
          })}
          {active.length > 1 && (
            <button
              type="button"
              onClick={() => clearFilters(filters)}
              className="px-1.5 py-1 text-xs text-slate-500 underline underline-offset-3 hover:text-slate-700 hover:cursor-pointer"
            >
              پاک کردن همه
            </button>
          )}
        </div>
      )}
    </CardHeader>
  );
}
