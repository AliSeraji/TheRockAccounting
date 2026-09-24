import { FileText, Printer } from 'lucide-react';
import { useCallback, type ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { BulletTextarea } from '~/components/ui/BulletTextarea';
import { ToggleRow } from '../../common';
import StampUploader from './StampUploader';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export default function InvoiceSection(): ReactNode {
  const {
    showLogo,
    showSignature,
    showSeal,
    showPageNumbers,
    signature,
    signatureError,
    seal,
    sealError,
    defaultNote,
  } = useSettingsStore(
    useShallow((s) => ({
      showLogo: s.showLogo,
      showSignature: s.showSignature,
      showSeal: s.showSeal,
      showPageNumbers: s.showPageNumbers,
      signature: s.signature,
      signatureError: s.signatureError,
      seal: s.seal,
      sealError: s.sealError,
      defaultNote: s.defaultNote,
    }))
  );

  const setInvoiceField = useSettingsStore((s) => s.setInvoiceField);

  const updateNote = useCallback(
    (value: string) => {
      setInvoiceField('defaultNote', value);
    },
    [setInvoiceField]
  );

  return (
    <div className="flex flex-col gap-5 w-full lg:min-w-157.5 px-2">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs lg:text-sm whitespace-nowrap flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600" />
            پیش‌فرض‌های فاکتور
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            مقادیری که هنگام صدور فاکتور جدید پر می‌شوند
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <Field className="col-span-2">
              <FieldLabel className="text-slate-700 text-xs lg:text-sm">
                یادداشت پیش‌فرض
              </FieldLabel>
              <BulletTextarea
                value={defaultNote}
                onValueChange={updateNote}
                rows={3}
              />
            </Field>

            <div className="col-span-2 md:col-span-1">
              <StampUploader
                label="امضاء"
                value={signature}
                error={signatureError}
                onChange={(dataUrl) => setInvoiceField('signature', dataUrl)}
                onError={(message) =>
                  setInvoiceField('signatureError', message)
                }
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <StampUploader
                label="مهر"
                value={seal}
                error={sealError}
                onChange={(dataUrl) => setInvoiceField('seal', dataUrl)}
                onError={(message) => setInvoiceField('sealError', message)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Print / Layout ── */}
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-xs lg:text-sm flex items-center gap-2">
            <Printer className="w-5 h-5 text-brand-600" />
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
                onCheckedChange={(checked) =>
                  setInvoiceField('showLogo', checked)
                }
              />
              <ToggleRow
                label="نمایش امضاء در رسید"
                hint="تصویر امضاء روی جای امضاء فروشنده چاپ شود"
                checked={showSignature}
                onCheckedChange={(checked) =>
                  setInvoiceField('showSignature', checked)
                }
              />
              <ToggleRow
                label="نمایش مهر در رسید"
                hint="تصویر مهر شرکت کنار امضاء فروشنده چاپ شود"
                checked={showSeal}
                onCheckedChange={(checked) =>
                  setInvoiceField('showSeal', checked)
                }
              />
              <ToggleRow
                label="چاپ شماره صفحه برای فاکتورهای چندصفحه‌ای"
                checked={showPageNumbers}
                onCheckedChange={(checked) =>
                  setInvoiceField('showPageNumbers', checked)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
