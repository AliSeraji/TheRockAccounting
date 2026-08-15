import { Calendar, Hash } from 'lucide-react';
import type { ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import type { CalendarKind } from '~/store/settings/types';

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

  return (
    <div className="flex flex-col gap-5" dir="rtl">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Hash className="w-5 h-5 text-indigo-600" />
            شماره‌گذاری فاکتورها
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            قالب شماره‌ای که روی هر فاکتور جدید درج می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  پیشوند شماره فاکتور
                </FieldLabel>
                <Input
                  value={invoicePrefix}
                  onChange={(e) => setField('invoicePrefix', e.target.value)}
                  placeholder="INV"
                  className="rounded-lg"
                />
                <FieldDescription className="text-slate-400 text-xs">
                  مثلاً INV یا فاک
                </FieldDescription>
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  شماره شروع فاکتور بعدی
                </FieldLabel>
                <Input
                  value={nextNumber}
                  onChange={(e) => setField('nextNumber', e.target.value)}
                  placeholder="۱"
                  className="rounded-lg"
                />
              </Field>
            </div>
            <div className="col-span-2">
              <div className="rounded-xl border border-slate-200 bg-linear-to-l from-slate-50 to-white px-4 py-3 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  پیش‌نمایش شماره فاکتور بعدی
                </div>
                <code className="font-mono text-base font-bold text-slate-800 px-3 py-1 rounded-md bg-white border border-slate-200">
                  {preview}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            سال مالی و تقویم
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            دوره مالی فعال و تقویم پیش‌فرض گزارش‌ها
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  سال مالی جاری
                </FieldLabel>
                <Select
                  value={fiscalYear}
                  onValueChange={(v) => setField('fiscalYear', v)}
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1403">۱۴۰۳</SelectItem>
                    <SelectItem value="1404">۱۴۰۴</SelectItem>
                    <SelectItem value="1405">۱۴۰۵</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  ماه آغاز سال مالی
                </FieldLabel>
                <Select
                  value={fiscalStart}
                  onValueChange={(v) => setField('fiscalStart', v)}
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">فروردین</SelectItem>
                    <SelectItem value="7">مهر</SelectItem>
                    <SelectItem value="10">دی</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  تقویم گزارش‌ها
                </FieldLabel>
                <Select
                  value={calendar}
                  onValueChange={(v) => setField('calendar', v as CalendarKind)}
                >
                  <SelectTrigger className="rounded-lg">
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
