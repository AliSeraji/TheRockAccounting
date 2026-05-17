import * as React from 'react';
import { Building2, Phone, Upload, Trash2 } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '~/components/ui/field';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const CompanySection = (): React.ReactNode => {
  const {
    companyName,
    brandName,
    taxId,
    regNumber,
    postalCode,
    phone,
    mobile,
    email,
    website,
    address,
    logo,
    logoError,
  } = useSettingsStore(
    useShallow((s) => ({
      companyName: s.companyName,
      brandName: s.brandName,
      taxId: s.taxId,
      regNumber: s.regNumber,
      postalCode: s.postalCode,
      phone: s.phone,
      mobile: s.mobile,
      email: s.email,
      website: s.website,
      address: s.address,
      logo: s.logo,
      logoError: s.logoError,
    }))
  );
  const setField = useSettingsStore((s) => s.setField);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 300 * 1024) {
      setField('logoError', 'حجم فایل نباید بیشتر از ۳۰۰ کیلوبایت باشد');
      e.target.value = '';
      return;
    }
    const r = new FileReader();
    r.onload = (): void => {
      setField('logo', r.result as string);
      setField('logoError', null);
    };
    r.readAsDataURL(f);
  };

  return (
    <div className="flex flex-col gap-5">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Building2 className="w-5 h-5 text-teal-600" />
            هویت شرکت
          </CardTitle>
          <CardDescription
            className="text-slate-500 text-xs pr-7 flex items-center"
            dir="rtl"
          >
            این اطلاعات روی فاکتورها و رسیدها چاپ می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex flex-row gap-4">
            {/* Logo uploader */}
            <div>
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  لوگوی شرکت
                </FieldLabel>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={onUpload}
                />
                <div
                  onClick={(): void => fileRef.current?.click()}
                  className="group relative w-full aspect-square max-w-50 rounded-xl border-2 border-dashed border-slate-200 bg-linear-to-br from-white to-slate-50/50 hover:border-slate-300 hover:from-slate-50 transition cursor-pointer flex flex-col items-center justify-center overflow-hidden"
                >
                  {logo ? (
                    <>
                      <div className="absolute inset-0 checker" />
                      <img
                        src={logo}
                        alt="لوگوی شرکت"
                        className="relative max-w-[80%] max-h-[80%] object-contain"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex flex-col items-center gap-1 text-white">
                          <Upload className="w-5 h-5" />
                          <span className="text-xs font-medium">
                            تغییر لوگو
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-2">
                        <Upload className="w-5 h-5 text-slate-500" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">
                        انتخاب لوگو
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        یا فایل را بکشید
                      </span>
                    </>
                  )}
                </div>
                {logo && (
                  <button
                    type="button"
                    onClick={(e): void => {
                      e.stopPropagation();
                      setField('logo', null);
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    حذف لوگو
                  </button>
                )}
                {logoError ? (
                  <FieldError>{logoError}</FieldError>
                ) : (
                  <FieldDescription className="text-slate-400 text-xs">
                    PNG / JPG — حداکثر ۳۰۰ کیلوبایت
                  </FieldDescription>
                )}
              </Field>
            </div>

            {/* Identity fields */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-x-4 gap-y-4 content-start">
              <div className="col-span-2">
                <Field>
                  <FieldLabel className="text-slate-700 pr-2">
                    نام شرکت
                  </FieldLabel>
                  <Input
                    value={companyName ?? ''}
                    onChange={(e) => setField('companyName', e.target.value)}
                    className="rounded-lg"
                  />
                </Field>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Field>
                  <FieldLabel className="text-slate-700 pr-2">
                    نام تجاری / مدیر عامل
                  </FieldLabel>
                  <Input
                    value={brandName ?? ''}
                    onChange={(e) => setField('brandName', e.target.value)}
                    className="rounded-lg"
                  />
                </Field>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Field>
                  <FieldLabel className="text-slate-700 pr-2">
                    شناسه ملی / اقتصادی
                  </FieldLabel>
                  <Input
                    value={taxId ?? ''}
                    onChange={(e) => setField('taxId', e.target.value)}
                    className="rounded-lg"
                  />
                </Field>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Field>
                  <FieldLabel className="text-slate-700 pr-2">
                    شماره ثبت
                  </FieldLabel>
                  <Input
                    value={regNumber ?? ''}
                    onChange={(e) => setField('regNumber', e.target.value)}
                    className="rounded-lg"
                  />
                </Field>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Field>
                  <FieldLabel className="text-slate-700 pr-2">
                    کد پستی
                  </FieldLabel>
                  <Input
                    value={postalCode ?? ''}
                    onChange={(e) => setField('postalCode', e.target.value)}
                    className="rounded-lg"
                  />
                </Field>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Contact ── */}
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Phone className="w-5 h-5 text-teal-600" />
            اطلاعات تماس
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs pr-7">
            در فاکتورها، رسیدها و گزارش‌ها استفاده می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  شماره تلفن
                </FieldLabel>
                <Input
                  value={phone ?? ''}
                  onChange={(e) => setField('phone', e.target.value)}
                  className="rounded-lg"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  شماره همراه
                </FieldLabel>
                <Input
                  value={mobile ?? ''}
                  onChange={(e) => setField('mobile', e.target.value)}
                  className="rounded-lg"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">ایمیل</FieldLabel>
                <Input
                  value={email ?? ''}
                  onChange={(e) => setField('email', e.target.value)}
                  dir="ltr"
                  className="rounded-lg"
                />
              </Field>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">وبسایت</FieldLabel>
                <Input
                  value={website ?? ''}
                  onChange={(e) => setField('website', e.target.value)}
                  dir="ltr"
                  className="rounded-lg"
                />
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <FieldLabel className="text-slate-700 pr-2">
                  آدرس کامل
                </FieldLabel>
                <Textarea
                  value={address ?? ''}
                  onChange={(e) => setField('address', e.target.value)}
                  rows={2}
                  className="rounded-lg"
                />
                <FieldDescription className="text-slate-400 text-xs">
                  در فوتر فاکتورها چاپ خواهد شد
                </FieldDescription>
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySection;
