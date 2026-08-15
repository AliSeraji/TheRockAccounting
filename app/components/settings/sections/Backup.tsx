import {
  AlertCircle,
  Clock,
  Database,
  Download,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '~/components/ui/select';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import { ToggleRow } from '../common';
import { Field, FieldLabel } from '~/components/ui/field';
import type { BackupFreq } from '~/store/settings/types';

export const BackupSection = (): ReactNode => {
  const { autoBackup, backupFreq } = useSettingsStore(
    useShallow((s) => ({
      autoBackup: s.autoBackup,
      backupFreq: s.backupFreq,
    }))
  );

  const setField = useSettingsStore((s) => s.setBackupField);

  return (
    <div className="flex flex-col gap-5">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600" />
            پشتیبان‌گیری
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            یک نسخه کامل از داده‌های برنامه تهیه کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Manual download */}
            <div className="col-span-3 md:col-span-2 rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-800">
                    دانلود فایل پشتیبان
                  </div>
                  <div className="text-xs text-slate-500">
                    شامل فاکتورها، انبار، مشتریان و تنظیمات
                  </div>
                </div>
                <Button className="gap-2 bg-linear-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer">
                  <Download className="w-4 h-4" />
                  دریافت پشتیبان
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-200">
                <Clock className="w-3.5 h-3.5" />
                آخرین پشتیبان‌گیری:
                <span className="font-medium text-slate-700">
                  ۱۴۰۴/۰۲/۲۶ — ساعت ۰۹:۴۲
                </span>
              </div>
            </div>

            <div className="col-span-3 md:col-span-1 rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                پشتیبان‌گیری خودکار
              </div>
              <ToggleRow
                label={autoBackup ? 'فعال' : 'غیر فعال'}
                checked={autoBackup}
                onCheckedChange={(v: boolean) => setField('autoBackup', v)}
              />

              <Field>
                <FieldLabel className="text-xs text-slate-500 mt-3 leading-6">
                  هر {autoBackup ? 'هفته' : '—'} یک نسخه ذخیره می‌شود.
                </FieldLabel>
                <Select
                  value={backupFreq}
                  onValueChange={(v) => setField('backupFreq', v as BackupFreq)}
                >
                  <SelectTrigger className="hover:cursor-pointer rounded-lg focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">روزانه</SelectItem>
                    <SelectItem value="weekly">هفتگی</SelectItem>
                    <SelectItem value="monthly">ماهانه</SelectItem>
                    <SelectItem value="yearly">سالانه</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Upload className="w-5 h-5 text-emerald-600" />
            بازیابی از فایل
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            فایل JSON پشتیبان قبلی را بارگذاری کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/40 hover:bg-slate-50 transition p-6 flex flex-col items-center text-center cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3">
              <Upload className="w-5 h-5 text-slate-500" />
            </div>
            <div className="text-sm font-medium text-slate-700">
              فایل را بکشید و رها کنید
            </div>
            <div className="text-xs text-slate-500 mt-1">
              یا برای انتخاب از سیستم کلیک کنید — فرمت .json
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-800 leading-6">
              بازیابی، تمام داده‌های فعلی برنامه را جایگزین می‌کند. توصیه می‌شود
              ابتدا یک پشتیبان از وضعیت کنونی تهیه کنید.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
