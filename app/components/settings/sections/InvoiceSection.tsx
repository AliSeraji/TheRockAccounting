import { FileText, Printer } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Field } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select } from '~/components/ui/select';
import { Switch } from '~/components/ui/switch';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/lib/utils';

export default function InvoiceSection(): ReactNode {
  const [showLogo, setShowLogo] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [showPageNumbers, setShowPageNumbers] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-full lg:min-w-157.5">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
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
              <Field>
                <Input
                  className="rounded-xl"
                  value={''}
                  onChange={() => {}}
                  placeholder="۹"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <Input
                  className="rounded-xl"
                  value={''}
                  onChange={() => {}}
                  placeholder="۰"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <Select
                  value={''}
                  onValueChange={() => {}}
                  //   options={[
                  //     { value: '0', label: 'نقدی — همان روز' },
                  //     { value: '7', label: '۷ روز' },
                  //     { value: '15', label: '۱۵ روز' },
                  //     { value: '30', label: '۳۰ روز' },
                  //     { value: '60', label: '۶۰ روز' },
                  //   ]}
                />
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <Textarea value={''} onChange={() => {}} rows={3} />
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Print / Layout ── */}
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
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

            <div className="col-span-2 flex flex-col gap-3">
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

interface ToggleRowProps {
  label: string;
  hint?: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
}

function ToggleRow({
  label,
  hint,
  checked,
  onCheckedChange,
}: ToggleRowProps): ReactNode {
  const id = useId();
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-slate-200/70 bg-white/60 p-3 hover:bg-white transition">
      <div className="flex-1">
        <Label
          htmlFor={id}
          className="text-sm font-medium text-slate-800 cursor-pointer"
        >
          {label}
        </Label>
        {hint && <p className="text-xs text-slate-500 mt-0.5">{hint}</p>}
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          'data-[state=checked]:bg-emerald-600 data-[state=unchecked]:bg-slate-300 cursor-pointer'
        )}
        dir="ltr"
      />
    </div>
  );
}
