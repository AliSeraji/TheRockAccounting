import {
  isValidBankAccount,
  isValidCardNumber,
  isValidIban,
  isValidLegalId,
  isValidPostalCode,
} from '~/lib/validation';
import type { CompanyData, CompanyDataField } from '~/store/settings/types';

export type CompanyDataErrors = Partial<Record<CompanyDataField, string>>;

export function formatDataErrors(companyData: CompanyData): CompanyDataErrors {
  const errors: CompanyDataErrors = {};

  if (companyData.postalCode && !isValidPostalCode(companyData.postalCode)) {
    errors.postalCode;
  }
  if (
    companyData.bankAccountAddress &&
    !isValidBankAccount(companyData.bankAccountAddress)
  ) {
    errors.bankAccountAddress = 'شماره حساب معتبر نمی باشد.';
  }
  if (companyData.bankIban && !isValidIban(companyData.bankIban)) {
    errors.bankIban = 'شماره شبا معتبر نمی باشد.';
  }
  if (companyData.cardNum && !isValidCardNumber(companyData.cardNum)) {
    errors.cardNum = 'شماره کارت معتبر نمی باشد.';
  }
  if (companyData.regNumber && !isValidLegalId(companyData.regNumber)) {
    errors.regNumber = 'شناسه اقتصادی باید 12 رقم باشد.';
  }
  return errors;
}
