import { Calendar, Hash } from 'lucide-react';
import { useCallback, type ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Field, FieldDescription, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import type { CalendarKind, NumberingData } from '~/store/settings/types';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { Months, Years } from './common';

const NumberingSection = (): ReactNode => {
  const { invoicePrefix, nextNumber, fiscalYear, fiscalStart, calendar } =
    useSettingsStore(
      useShallow((s) => ({
        invoicePrefix: s.invoicePrefix,
        nextNumber: s.nextNumber,
        fiscalYear: s.fiscalYear,
        fiscalStart: s.fiscalStart,
        calendar: s.calendar,
      }))
    );
  const setField = useSettingsStore((s) => s.setNumberingField);

  const preview =
    `${invoicePrefix || 'INV'}-${fiscalYear || '1404'}-` +
    String(Number(nextNumber) || 1).padStart(4, '0');

  const handleNumericFieldChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      fieldName: keyof NumberingData
    ) => {
      const parsed = parseFloat(convertToEnDigits(e.target.value));
      setField(fieldName, Number.isNaN(parsed) ? '' : parsed.toString());
    },
    []
  );

  return (
    <div className="flex flex-col gap-5 px-2 lg:px-0" dir="rtl">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
            <Hash className="w-5 h-5 text-indigo-600" />
            شماره‌گذاری فاکتورها
          </CardTitle>
          <CardDescription className="text-slate-500 text-[10px] md:text-xs pr-7 flex items-center">
            قالب شماره‌ای که روی هر فاکتور جدید درج می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                  پیشوند شماره فاکتور
                </FieldLabel>
                <Input
                  value={invoicePrefix}
                  onChange={(e) => setField('invoicePrefix', e.target.value)}
                  placeholder="INV"
                  className="rounded-lg text-xs lg:text-sm"
                />
                <FieldDescription className="text-slate-400 text-xs">
                  مثلاً INV یا فاک
                </FieldDescription>
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                  شماره شروع فاکتور بعدی
                </FieldLabel>
                <Input
                  value={convertToPersianDigits(nextNumber)}
                  onChange={(e) => handleNumericFieldChange(e, 'nextNumber')}
                  placeholder={convertToPersianDigits('147')}
                  className="rounded-lg text-xs lg:text-sm"
                />
              </Field>
            </div>
            <div className="col-span-2">
              <div className="rounded-xl border border-slate-200 bg-linear-to-l from-slate-50 to-white px-4 py-3 flex items-center justify-between gap-3">
                <div className="text-[10px] md:text-xs text-slate-500">
                  پیش‌نمایش شماره فاکتور بعدی
                </div>
                <code className="font-mono text-xs md:text-base font-bold text-slate-800 px-3 py-1 rounded-md bg-white border border-slate-200">
                  {preview}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
            <Calendar className="w-5 h-5 text-indigo-600" />
            سال مالی و تقویم
          </CardTitle>
          <CardDescription className="text-slate-500 text-[10px] md:text-xs pr-7 flex items-center">
            دوره مالی فعال و تقویم پیش‌فرض گزارش‌ها
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                  سال مالی جاری
                </FieldLabel>
                <Select
                  value={fiscalYear}
                  onValueChange={(v) => setField('fiscalYear', v)}
                >
                  <SelectTrigger className="rounded-lg text-xs lg:text-sm focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Years.map((year) => (
                      <SelectItem
                        key={year.value}
                        value={year.value}
                        className="text-xs lg:text-sm hover:cursor-pointer"
                      >
                        {year.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                  ماه آغاز سال مالی
                </FieldLabel>
                <Select
                  value={fiscalStart}
                  onValueChange={(v) => setField('fiscalStart', v)}
                >
                  <SelectTrigger className="rounded-lg text-xs lg:text-sm focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Months.map((month) => (
                      <SelectItem
                        key={month.value}
                        value={month.value}
                        className="text-xs lg:text-sm hover:cursor-pointer"
                      >
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                  تقویم گزارش‌ها
                </FieldLabel>
                <Select
                  value={calendar}
                  onValueChange={(v) => setField('calendar', v as CalendarKind)}
                >
                  <SelectTrigger className="rounded-lg text-xs lg:text-sm focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jalali">هجری شمسی</SelectItem>
                    <SelectItem value="hijri">هجری قمری</SelectItem>
                    <SelectItem value="gregorian">میلادی</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NumberingSection;
