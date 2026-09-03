import { FileText, Printer } from 'lucide-react';
import { useCallback, useId, useState, type ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Field, FieldError, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';
import { ToggleRow } from '../../common';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';

export default function InvoiceSection(): ReactNode {
  const [showLogo, setShowLogo] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [showPageNumbers, setShowPageNumbers] = useState(false);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [defaultDueDays, setDefaultDueDays] = useState<number>(0);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [note, setNote] = useState<string>('');

  const updateTaxRate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseFloat(convertToEnDigits(e.target.value));
      setTaxRate(Number.isNaN(parsed) ? 0 : parsed);
    },
    [setTaxRate]
  );

  const updateDefaultDueDays = useCallback((value: string) => {
    const parsed = parseInt(value, 10);
    setDefaultDueDays(Number.isNaN(parsed) ? 0 : parsed);
  }, []);

  const updateDiscountRate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseFloat(convertToEnDigits(e.target.value));
      setDiscountRate(Number.isNaN(parsed) ? 0 : parsed);
    },
    [setDiscountRate]
  );

  const updateNote = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote(e.target.value || '');
    },
    [setNote]
  );

  const taxRateError =
    taxRate > 100
      ? 'مالیات نمی‌تواند بیشتر از ۱۰۰ درصد باشد'
      : taxRate < 0
        ? 'مالیات نمی‌تواند منفی باشد'
        : null;

  return (
    <div className="flex flex-col gap-5 w-full lg:min-w-157.5 px-2">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs lg:text-sm whitespace-nowrap flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            پیش‌فرض‌های فاکتور
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            مقادیری که هنگام صدور فاکتور جدید پر می‌شوند
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="col-span-2 md:col-span-1 ">
              <Field data-invalid={taxRateError ? true : undefined}>
                <FieldLabel className="text-slate-700 text-xs lg:text-sm">
                  مالیات بر ارزش افزوده (%)
                </FieldLabel>
                <Input
                  className="rounded-xl"
                  value={convertToPersianDigits(taxRate)}
                  onChange={updateTaxRate}
                  aria-invalid={taxRateError ? true : undefined}
                />
                <FieldError>{taxRateError}</FieldError>
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 text-xs lg:text-sm">
                  تخفیف پیش‌فرض (%)
                </FieldLabel>
                <Input
                  className="rounded-xl"
                  value={convertToPersianDigits(discountRate)}
                  onChange={updateDiscountRate}
                  placeholder="۰"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 text-xs lg:text-sm">
                  مهلت پرداخت پیش‌فرض (روز)
                </FieldLabel>
                <Select
                  value={String(defaultDueDays)}
                  onValueChange={updateDefaultDueDays}
                  dir="rtl"
                >
                  <SelectTrigger className="border-slate-200 focus:ring-slate-400 focus:ring-offset-0 text-xs lg:text-sm">
                    <SelectValue placeholder="انتخاب مهلت پرداخت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">همان روز</SelectItem>
                    <SelectItem value="7">یک هفته</SelectItem>
                    <SelectItem value="15">یک ماه</SelectItem>
                    <SelectItem value="30">دو ماه</SelectItem>
                    <SelectItem value="60">سه ماه</SelectItem>
                    <SelectItem value="90">چهار ماه</SelectItem>
                    <SelectItem value="180">شش ماه</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <FieldLabel className="text-slate-700 text-xs lg:text-sm">
                  یادداشت پیش‌فرض
                </FieldLabel>
                <Textarea value={note} onChange={updateNote} rows={3} />
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Print / Layout ── */}
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs lg:text-sm flex items-center gap-2">
            <Printer className="w-5 h-5 text-blue-600" />
            چاپ و قالب رسید
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            اندازه کاغذ، فوتر و تنظیمات نمایش
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <Select
                  value={''}
                  onValueChange={() => {}}
                  //   options={[
                  //     { value: 'vazirmatn', label: 'وزیر متن (Vazirmatn)' },
                  //     { value: 'samim', label: 'سمیم (Samim)' },
                  //     { value: 'irsans', label: 'ایران سنس (IRANSans)' },
                  //   ]}
                />
              </Field>
            </div>

            <div className="col-span-2 flex flex-col gap-3 text-xs lg:text-sm">
              <ToggleRow
                label="نمایش لوگو در رسید"
                hint="لوگوی شرکت در سربرگ هر فاکتور چاپی نمایش داده شود"
                checked={showLogo}
                onCheckedChange={setShowLogo}
              />
              <ToggleRow
                label="نمایش امضاء و مهر"
                hint="جای امضا و مهر در پایین فاکتور رزرو شود"
                checked={showSignature}
                onCheckedChange={setShowSignature}
              />
              <ToggleRow
                label="چاپ شماره صفحه برای فاکتورهای چندصفحه‌ای"
                checked={showPageNumbers}
                onCheckedChange={setShowPageNumbers}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
