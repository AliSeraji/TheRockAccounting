import type { ReactNode } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import SuggestInput from './SuggestInput';
import { infoLabelClass } from './common';
import { cn, convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import type { Customer } from '~/store/customers/types';
import { useCustomersStore } from '~/store/customers/useCustomers';
import type { CustomerType } from '~/store/types';
import { useInvoiceForm } from '~/store/useInvoiceForm';

const TYPE_OPTIONS: { value: CustomerType; label: string }[] = [
  { value: 'regular', label: 'ثابت' },
  { value: 'walkIn', label: 'گذری' },
];

const inputClass =
  'border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs md:placeholder:text-sm';

const normalize = (text: string): string =>
  convertToEnDigits(text).trim().toLowerCase();

const matches = (customer: Customer, query: string): boolean =>
  !query ||
  [
    customer.businessName,
    `${customer.firstName} ${customer.lastName}`,
    customer.code,
    customer.mobile,
    customer.phone,
  ].some((text) => normalize(text).includes(query));

// The invoice buyer: picked from the active customers for a regular (ثابت)
// buyer, typed in freely for a walk-in (گذری).
export default function BuyerInput(): ReactNode {
  const customerType = useInvoiceForm((state) => state.customerType);
  const setCustomerType = useInvoiceForm((state) => state.setCustomerType);
  const customerId = useInvoiceForm((state) => state.customerId);
  const pickCustomer = useInvoiceForm((state) => state.pickCustomer);
  const buyer = useInvoiceForm((state) => state.buyer);
  const setBuyer = useInvoiceForm((state) => state.setBuyer);
  const customers = useCustomersStore((state) => state.customers);

  const query = normalize(buyer);
  const options = customers.filter(
    (customer) => customer.isActive && matches(customer, query)
  );

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Label className={infoLabelClass}>نام شخص حقیقی / حقوقی:</Label>
        {/* h-7, the label height: any taller and this input drops below the
            inputs beside it. */}
        <div
          role="radiogroup"
          aria-label="نوع مشتری"
          dir="rtl"
          className="relative grid h-7 grid-cols-2 rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs"
        >
          {/* Slides under the active option. */}
          <span
            aria-hidden
            className={cn(
              'absolute inset-y-0.5 right-0.5 w-[calc(50%-2px)] rounded-md bg-slate-700 shadow-sm transition-transform duration-300 ease-out',
              customerType === 'walkIn' && '-translate-x-full'
            )}
          />
          {TYPE_OPTIONS.map((option) => {
            const active = customerType === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => !active && setCustomerType(option.value)}
                className={cn(
                  'relative px-3 rounded-md hover:cursor-pointer transition-colors duration-300',
                  active ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {customerType === 'regular' ? (
        <SuggestInput
          value={convertToPersianDigits(buyer)}
          onChange={setBuyer}
          options={options}
          getKey={(customer) => customer.id}
          isSelected={(customer) => customer.id === customerId}
          onSelect={pickCustomer}
          renderOption={(customer) => (
            <div className="flex items-center justify-between gap-2">
              <span className="truncate">
                {convertToPersianDigits(customer.businessName)}
              </span>
              <span className="text-xs text-slate-400 whitespace-nowrap">
                {convertToPersianDigits(
                  [customer.code, customer.mobile].filter(Boolean).join(' · ')
                )}
              </span>
            </div>
          )}
          placeholder="جستجوی نام، کد یا تلفن مشتری"
          className={inputClass}
        />
      ) : (
        <Input
          value={convertToPersianDigits(buyer)}
          onChange={(e) => setBuyer(e.target.value)}
          className={inputClass}
        />
      )}
    </div>
  );
}
