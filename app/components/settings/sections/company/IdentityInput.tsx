import { memo, useCallback, useMemo, type ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { DigitsField } from '~/components/customers/fields';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { cn, convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import type { CompanyData } from '~/store/settings/types';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import { useCompanyDataErrors } from '~/hooks/useCompanyDataErrors';

const IdentityInput = memo(function IdentityInput(): ReactNode {
  const {
    companyName,
    brandName,
    taxId,
    regNumber,
    postalCode,
    bankIban,
    bankAccountAddress,
    cardNum,
    ownerName,
  } = useSettingsStore(
    useShallow((s) => ({
      companyName: s.companyName,
      brandName: s.brandName,
      taxId: s.taxId,
      regNumber: s.regNumber,
      postalCode: s.postalCode,
      bankIban: s.bankIban,
      cardNum: s.cardNum,
      ownerName: s.ownerName,
      bankAccountAddress: s.bankAccountAddress,
    }))
  );

  const setField = useSettingsStore((s) => s.setField);

  const errors = useCompanyDataErrors();

  //just use for handling numeric fields
  const handleNumericFieldChange = useCallback(
    (value: string, fieldName: keyof CompanyData) => {
      const parsed = parseFloat(convertToEnDigits(value));
      setField(fieldName, Number.isNaN(parsed) ? '' : parsed.toString());
    },
    []
  );

  return (
    <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-x-4 gap-y-4 content-start">
      <div className="col-span-3 md:col-span-2">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            نام شرکت
          </FieldLabel>
          <Input
            value={companyName ?? ''}
            onChange={(e) => setField('companyName', e.target.value)}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
      <div className="col-span-3 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            مدیر عامل
          </FieldLabel>
          <Input
            value={brandName ?? ''}
            onChange={(e) => setField('brandName', e.target.value)}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
      <div className="col-span-3 md:col-span-1">
        <DigitsField
          label="شناسه ملی / اقتصادی"
          value={convertToPersianDigits(taxId ?? '')}
          onChange={(e) => handleNumericFieldChange(e, 'taxId')}
          maxLength={20}
          error={errors.taxId}
        />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            شماره ثبت
          </FieldLabel>
          <Input
            value={convertToPersianDigits(regNumber ?? '')}
            onChange={(e) =>
              handleNumericFieldChange(e.target.value, 'regNumber')
            }
            className="rounded-lg text-xs lg:text-sm"
            dir="ltr"
          />
        </Field>
      </div>
      <div className="col-span-3 md:col-span-1">
        <DigitsField
          label="کد پستی"
          value={convertToPersianDigits(postalCode ?? '')}
          onChange={(e) => handleNumericFieldChange(e, 'postalCode')}
          maxLength={20}
          error={errors.postalCode}
        />
      </div>
      <div className="col-span-3 md:col-span-1">
        <DigitsField
          label="شماره حساب"
          value={bankAccountAddress ?? ''}
          onChange={(e) => handleNumericFieldChange(e, 'bankAccountAddress')}
          maxLength={20}
          placeholder="شماره حساب بانکی"
          error={errors.bankAccountAddress}
        />
      </div>
      <div className="col-span-3 md:col-span-2">
        <DigitsField
          label="شماره شبا"
          value={bankIban ?? ''}
          onChange={(e) => handleNumericFieldChange(e, 'bankIban')}
          maxLength={24}
          prefix="IR"
          placeholder="۲۴ رقم"
          error={errors.bankIban}
        />
      </div>
      <div className="col-span-3 md:col-span-2">
        <DigitsField
          label="شماره کارت"
          value={cardNum ?? ''}
          onChange={(e) => handleNumericFieldChange(e, 'cardNum')}
          maxLength={16}
          grouped
          placeholder="۱۶ رقم"
          error={errors.cardNum}
        />
      </div>
    </div>
  );
});

export default IdentityInput;
