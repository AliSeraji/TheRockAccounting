import DatePicker, {
  type DayValue,
} from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Input } from '../ui/input';
import { convertToPersianDigits } from '~/lib/utils';

interface PersianDatePickerProps {
  value: DayValue;
  onChange: (value: DayValue | null | undefined) => void;
  displayValue: string;
  placeholder?: string;
}

export default function PersianDatePicker({
  value,
  onChange,
  displayValue,
  placeholder = 'تاریخ روز',
}: PersianDatePickerProps) {
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
          className="border-slate-200 rounded-lg focus:ring-slate-400 cursor-pointer"
          placeholder={placeholder}
        />
      )}
    />
  );
}
