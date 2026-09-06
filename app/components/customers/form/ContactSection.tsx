import { memo, useMemo, type ReactNode } from 'react';
import { MapPin } from 'lucide-react';
import { DigitsField, SelectField, TextField } from '../fields';
import { PROVINCES, PROVINCE_NAMES, SALE_RATE_OPTIONS } from '../constants';
import { SectionTitle, sectionGrid, type SectionProps } from './common';
import { Field, FieldLabel } from '~/components/ui/field';
import { Textarea } from '~/components/ui/textarea';

const ContactSection = memo(function ContactSection({
  customer,
  errors,
  onChange,
}: SectionProps): ReactNode {
  const cities = useMemo(
    () => PROVINCES[customer.province] ?? [],
    [customer.province]
  );

  return (
    <section>
      <SectionTitle
        icon={<MapPin className="w-4 h-4 text-teal-600" />}
        title="اطلاعات تماس و نشانی"
        description="راه‌های ارتباطی و نرخ فروش پیش‌فرض این شخص"
      />

      <div className={sectionGrid}>
        <SelectField
          label="نرخ پیشفرض فروش"
          value={customer.saleRate}
          onChange={(v) => onChange('saleRate', v)}
          options={SALE_RATE_OPTIONS}
          hint="سطح قیمتی که هنگام صدور فاکتور پیشنهاد می‌شود"
        />
        <DigitsField
          label="موبایل"
          value={customer.mobile}
          onChange={(v) => onChange('mobile', v)}
          maxLength={11}
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          error={errors.mobile}
        />
        <DigitsField
          label="شماره تماس"
          value={customer.phone}
          onChange={(v) => onChange('phone', v)}
          maxLength={11}
          placeholder="با کد استان"
          error={errors.phone}
        />

        <TextField
          label="ایمیل"
          value={customer.email}
          onChange={(v) => onChange('email', v)}
          dir="ltr"
          placeholder="name@example.com"
          error={errors.email}
        />
        <SelectField
          label="استان"
          value={customer.province}
          onChange={(v) => onChange('province', v)}
          options={PROVINCE_NAMES}
          placeholder="انتخاب استان"
        />
        <SelectField
          label="شهر"
          value={customer.city}
          onChange={(v) => onChange('city', v)}
          options={cities}
          placeholder={customer.province ? 'انتخاب شهر' : 'ابتدا استان'}
          disabled={!customer.province}
        />

        <DigitsField
          label="کد پستی"
          value={customer.postalCode}
          onChange={(v) => onChange('postalCode', v)}
          maxLength={10}
          placeholder="۱۰ رقم"
          error={errors.postalCode}
        />
        <div className="md:col-span-2">
          <Field>
            <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
              آدرس
            </FieldLabel>
            <Textarea
              value={customer.address}
              onChange={(e) => onChange('address', e.target.value)}
              placeholder="نشانی کامل پستی"
              className="min-h-10.5 rounded-lg border-slate-200 text-xs lg:text-sm resize-none focus-visible:ring-slate-400"
            />
          </Field>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
