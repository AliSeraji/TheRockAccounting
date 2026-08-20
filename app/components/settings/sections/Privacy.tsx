import { AlertTriangle, Download, LogOut, Trash2 } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';

const RESET_PHRASE = 'حذف می‌کنم';

export const DangerSection = (): ReactNode => {
  const [confirm, setConfirm] = useState<string>('');
  const canReset: boolean = confirm.trim() === RESET_PHRASE;

  const handleReset = (): void => {};

  return (
    <div className="flex flex-col gap-5 px-2 lg:px-0" dir="rtl">
      <Card className="w-full bg-white/90 backdrop-blur border-amber-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-amber-50 to-amber-50/40 rounded-t-lg border-b border-amber-200">
          <CardTitle className="text-amber-900 font-semibold text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            بازنشانی برنامه
          </CardTitle>
          <CardDescription className="text-amber-500 text-[10px] md:text-xs pr-7 flex items-center">
            تمام داده‌های ذخیره‌شده پاک می‌شوند — این عملیات بازگشت‌ناپذیر است
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex-1 text-xs lg:text-sm text-amber-900 leading-7">
                  با ادامه دادن، تمام فاکتورها، رسیدها، اطلاعات انبار، مشتریان و
                  تنظیمات حذف خواهند شد. در صورت تردید، ابتدا یک نسخه پشتیبان
                  تهیه کنید.
                </div>
              </div>
            </div>

            <Field>
              <FieldLabel className="text-xs text-amber-500">{`برای تأیید، عبارت « ${RESET_PHRASE} » را تایپ کنید`}</FieldLabel>
              <Input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder={RESET_PHRASE}
                className="text-xs lg:text-sm"
              />
            </Field>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="text-[10px] md:text-xs text-slate-500">
                این عمل قابل بازگشت نیست. آخرین پشتیبان‌گیری: ۱۴۰۴/۰۲/۲۶
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                  <Download className="w-4 h-4" />
                  دانلود پشتیبان آخر
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={!canReset}
                  onClick={handleReset}
                  className="gap-2 hover:cursor-pointer disabled:opacity-40 text-xs lg:text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  بازنشانی برنامه
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-white/90 backdrop-blur border-amber-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-amber-50 to-amber-50/40 rounded-t-lg border-b border-amber-200">
          <CardTitle className="text-amber-900 font-semibold text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
            <LogOut className="w-5 h-5 text-amber-600" />
            خروج از همه دستگاه‌ها
          </CardTitle>
          <CardDescription className="text-amber-500 text-[10px] md:text-xs pr-7 flex items-center">
            جلسات فعال در سایر مرورگرها بسته خواهند شد
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs lg:text-sm text-slate-600">۲ جلسه فعال دیگر</div>
            <Button variant="destructive" size="sm" className="text-xs lg:text-sm">
              <LogOut className="w-4 h-4" />
              خروج از همه
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
