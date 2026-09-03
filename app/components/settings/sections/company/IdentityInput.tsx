import { memo, useCallback, type ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Field, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import type { CompanyData } from '~/store/settings/types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const IdentityInput = memo(function IdentityInput(): ReactNode {
  const { companyName, brandName, taxId, regNumber, postalCode } =
    useSettingsStore(
      useShallow((s) => ({
        companyName: s.companyName,
        brandName: s.brandName,
        taxId: s.taxId,
        regNumber: s.regNumber,
        postalCode: s.postalCode,
      }))
    );

  const setField = useSettingsStore((s) => s.setField);

  //just use for handling numeric fields
  const handleNumericFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof CompanyData) => {
      const parsed = parseFloat(convertToEnDigits(e.target.value));
      setField(fieldName, Number.isNaN(parsed) ? '' : parsed.toString());
    },
    []
  );

  return (
    <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-x-4 gap-y-4 content-start">
      <div className="col-span-2">
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
      <div className="col-span-2 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            نام تجاری / مدیر عامل
          </FieldLabel>
          <Input
            value={brandName ?? ''}
            onChange={(e) => setField('brandName', e.target.value)}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            شناسه ملی / اقتصادی
          </FieldLabel>
          <Input
            value={convertToPersianDigits(taxId ?? '')}
            onChange={(e) => handleNumericFieldChange(e, 'taxId')}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            شماره ثبت
          </FieldLabel>
          <Input
            value={convertToPersianDigits(regNumber ?? '')}
            onChange={(e) => handleNumericFieldChange(e, 'regNumber')}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Field>
          <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
            کد پستی
          </FieldLabel>
          <Input
            value={convertToPersianDigits(postalCode ?? '')}
            onChange={(e) => handleNumericFieldChange(e, 'postalCode')}
            className="rounded-lg text-xs lg:text-sm"
          />
        </Field>
      </div>
    </div>
  );
});

export default IdentityInput;
