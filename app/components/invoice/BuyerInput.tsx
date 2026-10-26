import type { ReactNode } from 'react';
import { Label } from '../ui/label';
import SuggestInput from './SuggestInput';
import {
  buyerInputClass,
  CustomerOption,
  useActiveCustomers,
} from './customerPicker';
import { convertToPersianDigits } from '~/lib/utils';
import { findCustomerByName, normalizeName } from '~/store/customers/helpers';
import type { Customer } from '~/store/customers/types';
import { useInvoiceForm } from '~/store/useInvoiceForm';

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
// name of one active customer, links that customer.
export default function BuyerInput(): ReactNode {
  const customerId = useInvoiceForm((state) => state.customerId);
  const pickCustomer = useInvoiceForm((state) => state.pickCustomer);
  const buyer = useInvoiceForm((state) => state.buyer);
  const setBuyer = useInvoiceForm((state) => state.setBuyer);
  const customers = useActiveCustomers();

  const query = normalizeName(buyer);
  const options = customers.filter((customer) => matches(customer, query));

  // Checked on leaving the field rather than per keystroke, so a name typed
  // on the way to a longer one doesn't link and unlink.
  const linkByName = () => {
    if (customerId) return;
    const match = findCustomerByName(customers, buyer);
    if (match) pickCustomer(match, { keepTyped: true });
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label className="text-slate-700 pr-1">نام شخص حقیقی / حقوقی:</Label>
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
          <CustomerOption customer={customer} detail={customer.mobile} />
        )}
        placeholder="نام خریدار یا جستجو در مشتریان"
        className={buyerInputClass}
      />
    </div>
  );
}
