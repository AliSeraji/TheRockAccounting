import { convertToEnDigits } from '~/lib/utils';
import type { InvoiceFormData } from '../types';
import type { Customer } from './types';

const digitsOnly = (value: string): string =>
  convertToEnDigits(value).replace(/[^0-9]/g, '');

// Zero-width non-joiner: the half-space in «سنگ‌بری».
const ZWNJ = String.fromCharCode(0x200c);

// Folds the ways one name gets typed: Arabic ي/ى/ك for Persian ی/ک, a ZWNJ
// for a space, repeated spaces, case and digit script.
export const normalizeName = (text: string): string =>
  convertToEnDigits(text)
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replaceAll(ZWNJ, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

// The one active customer whose printed name is `name`. Nothing when no
// customer or several share it.
export const findCustomerByName = (
  customers: Customer[],
  name: string
): Customer | undefined => {
  const target = normalizeName(name);
  if (!target) return undefined;
  const found = customers.filter(
    (customer) =>
      customer.isActive && normalizeName(customer.businessName) === target
  );
  return found.length === 1 ? found[0] : undefined;
};

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
