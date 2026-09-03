import { Phone } from 'lucide-react';
import { memo, useCallback, type ReactNode } from 'react';
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
import { Textarea } from '~/components/ui/textarea';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import type { CompanyData } from '~/store/settings/types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const ContactInfo = memo(function ContactInfo(): ReactNode {
  const { phone, mobile, email, website, address } = useSettingsStore(
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

  const handleNumericFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof CompanyData) => {
      const parsed = parseFloat(convertToEnDigits(e.target.value));
      setField(fieldName, Number.isNaN(parsed) ? '' : parsed.toString());
    },
    []
  );

  return (
    <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800 font-semibold text-xs lg:text-lg flex items-center gap-2 whitespace-nowrap">
          <Phone className="w-5 h-5 text-teal-600" />
          اطلاعات تماس
        </CardTitle>
        <CardDescription className="text-slate-500 text-xs pr-7 ">
          در فاکتورها، رسیدها و گزارش‌ها استفاده می‌شود
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="col-span-2 md:col-span-1">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                شماره تلفن
              </FieldLabel>
              <Input
                value={convertToPersianDigits(phone || '') ?? ''}
                onChange={(e) => handleNumericFieldChange(e, 'phone')}
                className="rounded-lg text-xs lg:text-sm"
              />
            </Field>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                شماره همراه
              </FieldLabel>
              <Input
                value={convertToPersianDigits(mobile || '') ?? ''}
                onChange={(e) => handleNumericFieldChange(e, 'mobile')}
                className="rounded-lg text-xs lg:text-sm"
              />
            </Field>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                ایمیل
              </FieldLabel>
              <Input
                value={email ?? ''}
                onChange={(e) => setField('email', e.target.value)}
                dir="ltr"
                className="rounded-lg text-xs lg:text-sm"
              />
            </Field>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                وبسایت
              </FieldLabel>
              <Input
                value={website ?? ''}
                onChange={(e) => setField('website', e.target.value)}
                dir="ltr"
                className="rounded-lg text-xs lg:text-sm"
              />
            </Field>
          </div>
          <div className="col-span-2">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                آدرس کامل
              </FieldLabel>
              <Textarea
                value={address ?? ''}
                onChange={(e) => setField('address', e.target.value)}
                rows={2}
                className="rounded-lg ring-0 text-xs lg:text-sm"
              />
              <FieldDescription className="flex flex-row text-slate-400 text-xs lg:text-sm justify-start">
                در فوتر فاکتورها چاپ خواهد شد
              </FieldDescription>
            </Field>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default ContactInfo;
