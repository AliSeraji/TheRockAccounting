import { convertToEnDigits } from '~/lib/utils';
import type { InvoiceFormData } from '../types';
import type { Customer } from './types';

const digitsOnly = (value: string): string =>
  convertToEnDigits(value).replace(/[^0-9]/g, '');

// The invoice buyer fields filled from a customer. `businessName` is the name
// printed on invoices.
export const buyerFromCustomer = (
  customer: Customer
): Pick<InvoiceFormData, 'buyer' | 'nationalId' | 'phone' | 'address'> => ({
  buyer: customer.businessName,
  nationalId: digitsOnly(customer.nationalId || customer.economicCode).slice(
    0,
    12
  ),
  phone: digitsOnly(customer.mobile || customer.phone),
  address: convertToEnDigits(customer.address),
});
