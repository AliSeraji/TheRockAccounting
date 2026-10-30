import { createElement, useState } from 'react';
import DatePicker, {
  Calendar,
  type CalendarProps,
  type DayValue,
} from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Input } from '../ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { convertToPersianDigits } from '~/lib/utils';
import { useIsMobile } from '~/hooks/use-mobile';

interface PersianDatePickerProps {
  value: DayValue;
  onChange: (value: DayValue | null | undefined) => void;
  displayValue: string;
  placeholder?: string;
}

const INPUT_CLASS =
  'border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 cursor-pointer placeholder:text-xs lg:placeholder:text-sm';

// Calendar keeps its defaults (renderFooter, colors, animation duration) in
// defaultProps, which React 19's JSX runtime ignores on function components.
// createElement still applies them, as the library's own DatePicker relies
// on, so the calendar is built with it rather than JSX.
const SingleCalendar = Calendar as (
  props: CalendarProps<DayValue>
) => React.ReactElement;

export default function PersianDatePicker({
  value,
  onChange,
  displayValue,
  placeholder = '',
}: PersianDatePickerProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  // On phones the inline popper is cramped and hangs off the card, so the
  // calendar opens centered in a dialog and closes once a day is picked.
  if (isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Input
            value={convertToPersianDigits(displayValue)}
            readOnly
            className={INPUT_CLASS}
            placeholder={placeholder}
          />
        </DialogTrigger>
        <DialogContent
          dir="rtl"
          className="w-fit gap-3 p-4 font-vazirmatn"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="pr-10">
            <DialogTitle className="text-slate-800">انتخاب تاریخ</DialogTitle>
          </DialogHeader>
          {createElement(SingleCalendar, {
            value,
            onChange: (day) => {
              onChange(day);
              setOpen(false);
            },
            locale: 'fa',
            shouldHighlightWeekends: true,
            calendarClassName: 'shadow-none!',
          })}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      locale="fa"
      inputPlaceholder={placeholder}
      shouldHighlightWeekends
      calendarPopperPosition="bottom"
      wrapperClassName="date-picker-wrapper"
      renderInput={({ ref }) => (
        <Input
          ref={ref as React.Ref<HTMLInputElement>}
          value={convertToPersianDigits(displayValue)}
          readOnly
          className={INPUT_CLASS}
          placeholder={placeholder}
        />
      )}
    />
  );
}
