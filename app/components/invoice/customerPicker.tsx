import type { ReactNode } from 'react';
import { convertToPersianDigits } from '~/lib/utils';
import type { Customer } from '~/store/customers/types';
import { useCustomersStore } from '~/store/customers/useCustomers';

// Shared by the buyer fields that suggest customers (BuyerInput,
// NationalIdInput).

export const buyerInputClass =
  'border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs md:placeholder:text-sm';

// The customers an invoice can be written for; inactive ones are hidden.
export function useActiveCustomers(): Customer[] {
  const customers = useCustomersStore((state) => state.customers);
  return customers.filter((customer) => customer.isActive);
}

// One dropdown row: the customer's name, then their code and `detail` (the
// mobile in the name field, the ID in the national ID field).
export function CustomerOption({
  customer,
  detail,
}: {
  customer: Customer;
  detail: string;
}): ReactNode {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="truncate">
        {convertToPersianDigits(customer.businessName)}
      </span>
      <span className="text-xs text-slate-400 whitespace-nowrap">
        {convertToPersianDigits(
          [customer.code, detail].filter(Boolean).join(' · ')
        )}
      </span>
    </div>
  );
}
