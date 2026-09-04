import { memo, type ReactNode } from 'react';
import { Landmark } from 'lucide-react';
import { DigitsField } from '../fields';
import { SectionTitle, sectionGrid, type SectionProps } from './common';

const BankSection = memo(function BankSection({
  customer,
  errors,
  onChange,
}: SectionProps): ReactNode {
  return (
    <section>
      <SectionTitle
        icon={<Landmark className="w-4 h-4 text-teal-600" />}
        title="اطلاعات بانکی"
        description="برای ثبت دریافت و پرداخت‌های این شخص"
      />

      <div className={sectionGrid}>
        <DigitsField
          label="شماره حساب"
          value={customer.bankAccount}
          onChange={(v) => onChange('bankAccount', v)}
          maxLength={20}
          placeholder="شماره حساب بانکی"
        />
        <DigitsField
          label="شماره شبا"
          value={customer.iban}
          onChange={(v) => onChange('iban', v)}
          maxLength={24}
          prefix="IR"
          placeholder="۲۴ رقم"
          error={errors.iban}
        />
        <DigitsField
          label="شماره کارت"
          value={customer.cardNumber}
          onChange={(v) => onChange('cardNumber', v)}
          maxLength={16}
          grouped
          placeholder="۱۶ رقم"
          error={errors.cardNumber}
        />
      </div>
    </section>
  );
});

export default BankSection;
