import { memo, type ReactNode } from 'react';
import { UserRound } from 'lucide-react';
import { DigitsField, SelectField, TextField } from '../fields';
import {
  ACCOUNT_NATURE_OPTIONS,
  ACCOUNT_ROLE_OPTIONS,
  PERSON_TYPE_OPTIONS,
} from '../constants';
import { SectionTitle, sectionGrid, type SectionProps } from './common';

const IdentitySection = memo(function IdentitySection({
  customer,
  errors,
  onChange,
}: SectionProps): ReactNode {
  const isLegal = customer.personType === 'حقوقی';

  return (
    <section>
      <SectionTitle
        icon={<UserRound className="w-4 h-4 text-teal-600" />}
        title="هویت و طبقه‌بندی"
        description="نوع شخص، نقش او در حساب‌ها و شناسه‌های قانونی"
      />

      <div className={sectionGrid}>
        <SelectField
          label="نوع شخص"
          required
          value={customer.personType}
          onChange={(v) => onChange('personType', v)}
          options={PERSON_TYPE_OPTIONS}
          error={errors.personType}
          hint="حقیقی: فرد — حقوقی: شرکت یا سازمان"
        />
        <SelectField
          label="حساب شخص"
          required
          value={customer.accountRole}
          onChange={(v) => onChange('accountRole', v)}
          options={ACCOUNT_ROLE_OPTIONS}
          error={errors.accountRole}
          hint="نقشی که این شخص در معاملات دارد"
        />
        <SelectField
          label="نوع فعالیت"
          value={customer.accountNature}
          onChange={(v) => onChange('accountNature', v)}
          options={ACCOUNT_NATURE_OPTIONS}
          hint="تجاری: خرید و فروش — غیرتجاری: سایر طرف حساب‌ها"
        />

        {!isLegal && (
          <>
            <TextField
              label="نام"
              value={customer.firstName}
              onChange={(v) => onChange('firstName', v)}
              placeholder="نام شخص"
            />
            <TextField
              label="نام خانوادگی"
              value={customer.lastName}
              onChange={(v) => onChange('lastName', v)}
              placeholder="نام خانوادگی شخص"
            />
          </>
        )}

        <TextField
          label="نام کسب و کار"
          required
          value={customer.businessName}
          onChange={(v) => onChange('businessName', v)}
          placeholder={isLegal ? 'نام رسمی شرکت' : 'نام فروشگاه یا کارگاه'}
          error={errors.businessName}
          hint="نامی که در فاکتورها چاپ می‌شود"
        />
        <DigitsField
          label={isLegal ? 'شناسه ملی' : 'کد ملی'}
          value={customer.nationalId}
          onChange={(v) => onChange('nationalId', v)}
          maxLength={isLegal ? 11 : 10}
          placeholder={isLegal ? '۱۱ رقم' : '۱۰ رقم'}
          error={errors.nationalId}
        />
        {isLegal && (
          <DigitsField
            label="کد اقتصادی"
            value={customer.economicCode}
            onChange={(v) => onChange('economicCode', v)}
            maxLength={12}
            placeholder="۱۲ رقم"
            error={errors.economicCode}
            hint="برای فاکتور رسمی و سامانه مودیان"
          />
        )}
      </div>
    </section>
  );
});

export default IdentitySection;
