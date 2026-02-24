import { useState, useMemo } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addMonths,
  subMonths,
  isToday,
  isSameMonth,
  isSameDay,
} from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';
import { convertToPersianDigits } from '~/lib/utils';

export const PersianCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');
  const [animKey, setAnimKey] = useState(0);

  const persianDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  const currentMonth = format(currentDate, 'MMMM', { locale: faIR });
  const currentYear = format(currentDate, 'yyyy', { locale: faIR });

  const gregorianMonthYear = useMemo(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const startGregorian = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(start);
    const endGregorian = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(end);

    if (startGregorian === endGregorian) {
      return startGregorian;
    }
    const startMonth = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(start);
    const endMonth = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(end);
    return `${startMonth} - ${endMonth}`;
  }, [currentDate]);

  // Generate calendar data
  const calendarData = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const startDayOfWeek = getDay(monthStart);

    const weeks: (Date | null)[][] = [];
    let currentWeek: (Date | null)[] = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    days.forEach((day) => {
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);

    return weeks;
  }, [currentDate]);

  const today = new Date();
  const todayPersianDay = convertToPersianDigits(
    format(today, 'd', { locale: faIR })
  );
  const todayPersianMonth = format(today, 'MMMM', { locale: faIR });
  const todayPersianWeekday = format(today, 'EEEE', { locale: faIR });

  const goToPreviousMonth = () => {
    setSlideDir('right');
    setAnimKey((k) => k + 1);
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const goToNextMonth = () => {
    setSlideDir('left');
    setAnimKey((k) => k + 1);
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      dir="rtl"
    >
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={goToNextMonth}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors hover:cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <h3 className="font-semibold">تقویم شمسی</h3>
          </div>
          <button
            onClick={goToPreviousMonth}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors hover:cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">
            {currentMonth} {convertToPersianDigits(currentYear)}
          </div>
          <div className="text-sm opacity-90" dir="ltr">
            {gregorianMonthYear}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div
          key={animKey}
          className={
            slideDir === 'left'
              ? 'animate-slide-from-left'
              : 'animate-slide-from-right'
          }
        >
          <div className="grid grid-cols-7 gap-1 mb-2">
            {persianDays.map((day, index) => (
              <div
                key={index}
                className="text-center text-sm font-semibold text-gray-600 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {calendarData.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="aspect-square flex items-center justify-center"
                  >
                    {day && (
                      <button
                        onClick={() => handleDayClick(day)}
                        className={`
                        w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200
                        ${
                          isToday(day)
                            ? 'bg-linear-to-br from-teal-500 to-blue-500 text-white shadow-md'
                            : selectedDate && isSameDay(day, selectedDate)
                              ? 'bg-teal-100 text-teal-700 ring-2 ring-teal-500'
                              : !isSameMonth(day, currentDate)
                                ? 'text-gray-400'
                                : 'text-gray-700 hover:bg-gray-100'
                        }
                        ${isToday(day) ? 'hover:cursor-default' : 'hover:cursor-pointer'}
                      `}
                      >
                        {convertToPersianDigits(
                          format(day, 'd', { locale: faIR })
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={goToToday}
            className="w-full text-center hover:bg-gray-50 rounded-lg py-2 transition-colors"
          >
            <div className="text-sm text-gray-600">امروز</div>
            <div className="font-semibold text-gray-800">
              {todayPersianDay} {todayPersianMonth}
            </div>
            <div className="text-xs text-gray-500">{todayPersianWeekday}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersianCalendar;
