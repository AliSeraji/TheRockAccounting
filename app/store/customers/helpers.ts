import { newId } from '~/lib/id';
import { convertToEnDigits } from '~/lib/utils';
import type { InvoiceFormData } from '../types';
import type { Customer } from './types';
import { emptyCustomer, nextCustomerCode } from './useCustomers';
import { formatErrors, requiredErrors } from './validate';

// The buyer fields of an invoice that describe the customer.
type BuyerFields = Pick<
  InvoiceFormData,
  'buyer' | 'nationalId' | 'phone' | 'address'
>;

const digitsOnly = (value: string): string =>
  convertToEnDigits(value).replace(/[^0-9]/g, '');

// A customer's national ID and economic code, whichever they have.
const idsOf = (customer: Customer): string[] =>
  [digitsOnly(customer.nationalId), digitsOnly(customer.economicCode)].filter(
    Boolean
  );

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

// The date stamped on a customer record when it is saved.
export const customerTimestamp = (): string =>
  new Date().toLocaleString('fa-IR').slice(0, 9);

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

// The one active customer whose national ID or economic code is `id`.
// Nothing when no customer or several have it.
export const findCustomerByNationalId = (
  customers: Customer[],
  id: string
): Customer | undefined => {
  const target = digitsOnly(id);
  if (!target) return undefined;
  const found = customers.filter(
    (customer) => customer.isActive && idsOf(customer).includes(target)
  );
  return found.length === 1 ? found[0] : undefined;
};

export type BuyerMatch =
  | { kind: 'found'; customer: Customer }
  | { kind: 'ambiguous'; by: 'id' | 'name' }
  | { kind: 'none' };

// Which existing customer an unlinked invoice buyer is, so saving the invoice
// doesn't create them twice. Inactive customers count too. A typed ID decides
// first; otherwise the exact name does, skipping customers whose own ID
// differs from the typed one.
export const findCustomerForBuyer = (
  customers: Customer[],
  buyer: Pick<BuyerFields, 'buyer' | 'nationalId'>
): BuyerMatch => {
  const id = digitsOnly(buyer.nationalId);
  if (id) {
    const byId = customers.filter((customer) => idsOf(customer).includes(id));
    if (byId.length === 1) return { kind: 'found', customer: byId[0] };
    if (byId.length > 1) return { kind: 'ambiguous', by: 'id' };
  }

  const name = normalizeName(buyer.buyer);
  if (!name) return { kind: 'none' };
  // No customer has the typed ID (checked above), so a customer with any ID
  // is someone else.
  const byName = customers.filter(
    (customer) =>
      normalizeName(customer.businessName) === name &&
      !(id && idsOf(customer).length > 0)
  );
  if (byName.length === 1) return { kind: 'found', customer: byName[0] };
  if (byName.length > 1) return { kind: 'ambiguous', by: 'name' };
  return { kind: 'none' };
};

// The invoice buyer fields filled from a customer. `businessName` is the name
// printed on invoices.
export const buyerFromCustomer = (customer: Customer): BuyerFields => ({
  buyer: customer.businessName,
  nationalId: digitsOnly(customer.nationalId || customer.economicCode).slice(
    0,
    12
  ),
  phone: digitsOnly(customer.mobile || customer.phone),
  address: convertToEnDigits(customer.address),
});

// A new customer record for an invoice buyer who isn't a customer yet. The
// ID's length gives the person type: 10 digits is a person's national code,
// 11 a company's national ID, 12 an economic code.
export const customerFromBuyer = (
  buyer: BuyerFields,
  customers: Customer[]
): Customer => {
  const id = digitsOnly(buyer.nationalId);
  const phone = digitsOnly(buyer.phone);
  const isMobile = phone.startsWith('09');
  return {
    ...emptyCustomer,
    id: newId(),
    code: nextCustomerCode(customers),
    personType: id.length === 11 || id.length === 12 ? 'حقوقی' : 'حقیقی',
    businessName: buyer.buyer.trim(),
    nationalId: id.length === 12 ? '' : id,
    economicCode: id.length === 12 ? id : '',
    mobile: isMobile ? phone : '',
    phone: isMobile ? '' : phone,
    address: buyer.address.trim(),
    date: customerTimestamp(),
  };
};

// What stops a customer built from an invoice buyer from being saved: the
// customer form's rules, worded for the invoice's error dialog.
export const newCustomerProblems = (customer: Customer): string[] => {
  const errors = { ...requiredErrors(customer), ...formatErrors(customer) };
  // The invoice has one field for both IDs, so the message names both.
  if (!customer.nationalId && !customer.economicCode) {
    errors.nationalId = 'شناسه ملی یا کد اقتصادی وارد نشده است';
  }
  return Object.values(errors).map((message) => `خریدار: ${message}`);
};
