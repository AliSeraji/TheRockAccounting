import { createElement, useState, type ReactNode } from 'react';
import {
  Calendar,
  type CalendarProps,
  type Day,
  type DayRange,
} from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';

interface DateRangePickerProps {
  // The applied range, Jalali 'y/m/d'; '' when not set.
  from: string;
  to: string;
  onApply: (from: string, to: string) => void;
}

// As in PersianDatePicker: built with createElement so the Calendar's
// defaultProps still apply under React 19.
const RangeCalendar = Calendar as (
  props: CalendarProps<DayRange>
) => React.ReactElement;

const toDay = (date: string): Day | null => {
  const [year, month, day] = convertToEnDigits(date).split('/').map(Number);
  return year && month && day ? { year, month, day } : null;
};

const fromDay = ({ year, month, day }: Day): string =>
  `${year}/${month}/${day}`;

// A custom date range: the picked ends, a range calendar and «اعمال». The
// range is applied only once both ends are picked.
export default function DateRangePicker({
  from,
  to,
  onApply,
}: DateRangePickerProps): ReactNode {
  const [range, setRange] = useState<DayRange>({
    from: toDay(from),
    to: toDay(to),
  });
  const { from: start, to: end } = range;

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
        <Input
          readOnly
          aria-label="از تاریخ"
          placeholder="از"
          value={start ? convertToPersianDigits(fromDay(start)) : ''}
          className="h-9 cursor-default text-center text-xs md:text-sm"
        />
        <Input
          readOnly
          aria-label="تا تاریخ"
          placeholder="تا"
          value={end ? convertToPersianDigits(fromDay(end)) : ''}
          className="h-9 cursor-default text-center text-xs md:text-sm"
        />
        <Button
          type="button"
          disabled={!start || !end}
          onClick={() => start && end && onApply(fromDay(start), fromDay(end))}
          className="h-9 rounded-[10px] bg-brand-900 px-4 text-white hover:cursor-pointer hover:bg-brand-950"
        >
          اعمال
        </Button>
      </div>
      {createElement(RangeCalendar, {
        value: range,
        onChange: setRange,
        locale: 'fa',
        shouldHighlightWeekends: true,
        colorPrimary: '#a8823f',
        colorPrimaryLight: '#f9f2e6',
        calendarClassName: 'shadow-none! mx-auto font-vazirmatn',
      })}
    </div>
  );
}
