import type { ReactNode } from 'react';
import { Label } from '../ui/label';
import { CustomerTypeBadge } from '../invoices/common';
import SuggestInput from './SuggestInput';
import { infoLabelClass } from './common';
import { convertToPersianDigits } from '~/lib/utils';
import { findCustomerByName, normalizeName } from '~/store/customers/helpers';
import type { Customer } from '~/store/customers/types';
import { useCustomersStore } from '~/store/customers/useCustomers';
import { useInvoiceForm } from '~/store/useInvoiceForm';

const inputClass =
  'border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs md:placeholder:text-sm';

const matches = (customer: Customer, query: string): boolean =>
  !query ||
  [
    customer.businessName,
    `${customer.firstName} ${customer.lastName}`,
    customer.code,
    customer.mobile,
    customer.phone,
  ].some((text) => normalizeName(text).includes(query));

// The invoice buyer. Picking a customer from the dropdown, or typing the exact
// name of one active customer, makes a regular (ثابت) buyer; any other name is
// a walk-in (گذری).
export default function BuyerInput(): ReactNode {
  const customerType = useInvoiceForm((state) => state.customerType);
  const customerId = useInvoiceForm((state) => state.customerId);
  const pickCustomer = useInvoiceForm((state) => state.pickCustomer);
  const buyer = useInvoiceForm((state) => state.buyer);
  const setBuyer = useInvoiceForm((state) => state.setBuyer);
  const customers = useCustomersStore((state) => state.customers);

  const query = normalizeName(buyer);
  const options = customers.filter(
    (customer) => customer.isActive && matches(customer, query)
  );

  // Checked on leaving the field rather than per keystroke, so a name typed
  // on the way to a longer one doesn't link and unlink.
  const linkByName = () => {
    if (customerId) return;
    const match = findCustomerByName(customers, buyer);
    if (match) pickCustomer(match, { keepTyped: true });
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Label className={infoLabelClass}>نام شخص حقیقی / حقوقی:</Label>
        <CustomerTypeBadge type={customerType} />
      </div>
      <SuggestInput
        value={convertToPersianDigits(buyer)}
        onChange={setBuyer}
        onBlur={linkByName}
        autoHighlight={false}
        options={options}
        getKey={(customer) => customer.id}
        isSelected={(customer) => customer.id === customerId}
        onSelect={(customer) => pickCustomer(customer)}
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
        placeholder="نام خریدار یا جستجو در مشتریان"
        className={inputClass}
      />
    </div>
  );
}
