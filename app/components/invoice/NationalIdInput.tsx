import type { ReactNode } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import SuggestInput from './SuggestInput';
import {
  buyerInputClass,
  CustomerOption,
  useActiveCustomers,
} from './customerPicker';
import { cn, convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { findCustomerByNationalId } from '~/store/customers/helpers';
import type { Customer } from '~/store/customers/types';
import { useInvoiceForm } from '~/store/useInvoiceForm';

const placeholder = 'شناسه ملی یا کد اقتصادی خریدار';

const idsOf = (customer: Customer): string[] =>
  [customer.nationalId, customer.economicCode]
    .map((id) => convertToEnDigits(id))
    .filter(Boolean);

// The buyer's national ID or economic code. Typed digits suggest customers
// with a matching ID; picking one, or typing the exact ID of one active
// customer, links them. A linked customer's ID comes from their record, so
// it is read-only here.
export default function NationalIdInput(): ReactNode {
  const customerId = useInvoiceForm((state) => state.customerId);
  const pickCustomer = useInvoiceForm((state) => state.pickCustomer);
  const nationalId = useInvoiceForm((state) => state.nationalId);
  const setNationalId = useInvoiceForm((state) => state.setNationalId);
  const customers = useActiveCustomers();

  // Nothing is suggested until a digit is typed.
  const options = nationalId
    ? customers.filter((customer) =>
        idsOf(customer).some((id) => id.includes(nationalId))
      )
    : [];

  // On leaving the field, like the name field.
  const linkById = () => {
    if (customerId) return;
    const match = findCustomerByNationalId(customers, nationalId);
    if (match) pickCustomer(match, { keepTyped: true });
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label className="text-slate-700 pr-1">شناسه ملی / کد اقتصادی</Label>
      {customerId ? (
        <Input
          value={convertToPersianDigits(nationalId)}
          readOnly
          inputMode="numeric"
          placeholder={placeholder}
          className={cn(
            buyerInputClass,
            'bg-slate-50 text-slate-500 cursor-default'
          )}
        />
      ) : (
        <SuggestInput
          value={convertToPersianDigits(nationalId)}
          onChange={(value) =>
            setNationalId(
              convertToEnDigits(value.trim())
                .replace(/[^0-9]/g, '')
                .slice(0, 12)
            )
          }
          onBlur={linkById}
          autoHighlight={false}
          inputMode="numeric"
          options={options}
          getKey={(customer) => customer.id}
          onSelect={(customer) => pickCustomer(customer)}
          renderOption={(customer) => (
            <CustomerOption
              customer={customer}
              detail={idsOf(customer).join(' / ')}
            />
          )}
          placeholder={placeholder}
          className={buyerInputClass}
        />
      )}
    </div>
  );
}
