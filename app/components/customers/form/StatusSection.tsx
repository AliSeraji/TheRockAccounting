import { memo, type ReactNode } from 'react';
import { ToggleRight } from 'lucide-react';
import { ToggleField } from '../fields';
import { SectionTitle, sectionGrid, type SectionProps } from './common';

const StatusSection = memo(function StatusSection({
  customer,
  onChange,
}: SectionProps): ReactNode {
  return (
    <section>
      <SectionTitle
        icon={<ToggleRight className="w-4 h-4 text-teal-600" />}
        title="وضعیت حساب"
        description="تعیین می‌کند این شخص در کدام فرم‌ها قابل انتخاب باشد"
      />

      <div className={sectionGrid}>
        <ToggleField
          label="استفاده در دریافت"
          description="در فرم دریافت وجه قابل انتخاب باشد"
          checked={customer.useInReceive}
          onChange={(v) => onChange('useInReceive', v)}
        />
        <ToggleField
          label="استفاده در پرداخت"
          description="در فرم پرداخت وجه قابل انتخاب باشد"
          checked={customer.useInPayment}
          onChange={(v) => onChange('useInPayment', v)}
        />
        <ToggleField
          label="حساب فعال"
          description="حساب غیرفعال در فاکتور جدید نمایش داده نمی‌شود"
          checked={customer.isActive}
          onChange={(v) => onChange('isActive', v)}
        />
      </div>
    </section>
  );
});

export default StatusSection;
