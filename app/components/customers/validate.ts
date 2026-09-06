import type { Customer, CustomerField } from '~/store/customers/types';
import {
  isValidCardNumber,
  isValidEconomicCode,
  isValidEmail,
  isValidIban,
  isValidIdentityCode,
  isValidMobile,
  isValidPhone,
  isValidPostalCode,
} from '~/lib/validation';

export type CustomerErrors = Partial<Record<CustomerField, string>>;

export function formatErrors(customer: Customer): CustomerErrors {
  const errors: CustomerErrors = {};
  const isLegal = customer.personType === 'حقوقی';

  if (customer.nationalId && !isValidIdentityCode(customer.nationalId, isLegal))
    errors.nationalId = isLegal
      ? 'شناسه ملی باید ۱۱ رقم معتبر باشد'
      : 'کد ملی باید ۱۰ رقم معتبر باشد';

  if (customer.economicCode && !isValidEconomicCode(customer.economicCode))
    errors.economicCode = 'کد اقتصادی باید ۱۲ رقم باشد';

  if (customer.mobile && !isValidMobile(customer.mobile))
    errors.mobile = 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد';

  if (customer.phone && !isValidPhone(customer.phone))
    errors.phone = 'شماره تماس معتبر نیست';

  if (customer.email && !isValidEmail(customer.email))
    errors.email = 'ایمیل معتبر نیست';

  if (customer.postalCode && !isValidPostalCode(customer.postalCode))
    errors.postalCode = 'کد پستی باید ۱۰ رقم باشد';

  if (customer.iban && !isValidIban(customer.iban))
    errors.iban = 'شماره شبا معتبر نیست';

  if (customer.cardNumber && !isValidCardNumber(customer.cardNumber))
    errors.cardNumber = 'شماره کارت باید ۱۶ رقم معتبر باشد';

  return errors;
}

export function requiredErrors(customer: Customer): CustomerErrors {
  const errors: CustomerErrors = {};

  if (!customer.personType) errors.personType = 'نوع شخص را انتخاب کنید';
  if (!customer.accountRole) errors.accountRole = 'حساب شخص را انتخاب کنید';
  if (!customer.businessName.trim())
    errors.businessName = 'نام کسب و کار الزامی است';

  return errors;
}
