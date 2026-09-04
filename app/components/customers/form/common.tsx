import type { ReactNode } from 'react';
import type { Customer, CustomerField } from '~/store/customers/types';
import type { CustomerErrors } from '../validate';

export interface SectionProps {
  customer: Customer;
  errors: CustomerErrors;
  onChange: (field: CustomerField, value: string | boolean) => void;
}

export const sectionGrid =
  'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4';

export function SectionTitle({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description?: string;
}): ReactNode {
  return (
    <div className="flex flex-wrap items-center gap-2 pb-4">
      {icon}
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      {description && (
        <span className="text-[11px] text-slate-400">{description}</span>
      )}
    </div>
  );
}
