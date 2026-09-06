import { convertToEnDigits } from './utils';

export const digitsOnly = (value: string): string =>
  convertToEnDigits(value).replace(/[^\d]/g, '');

export function isValidNationalId(value: string): boolean {
  const id = digitsOnly(value);
  if (id.length !== 10) return false;
  if (/^(\d)\1{9}$/.test(id)) return false;

  const check = Number(id[9]);
  const sum = id
    .slice(0, 9)
    .split('')
    .reduce((acc, digit, index) => acc + Number(digit) * (10 - index), 0);
  const remainder = sum % 11;

  return remainder < 2 ? check === remainder : check === 11 - remainder;
}

export function isValidLegalId(value: string): boolean {
  const id = digitsOnly(value);
  if (id.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(id)) return false;

  const coefficients = [29, 27, 23, 19, 17, 29, 27, 23, 19, 17];
  const control = Number(id[10]);
  const base = Number(id[9]) + 2;

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += (Number(id[i]) + base) * coefficients[i];
  }

  const remainder = sum % 11;
  return control === (remainder === 10 ? 0 : remainder);
}

export function isValidIdentityCode(
  value: string,
  isLegalPerson: boolean
): boolean {
  return isLegalPerson ? isValidLegalId(value) : isValidNationalId(value);
}

export function isValidEconomicCode(value: string): boolean {
  return digitsOnly(value).length === 12;
}

export function isValidMobile(value: string): boolean {
  return /^09\d{9}$/.test(digitsOnly(value));
}

export function isValidPhone(value: string): boolean {
  const phone = digitsOnly(value);
  return phone.length >= 8 && phone.length <= 11;
}

export function isValidPostalCode(value: string): boolean {
  return /^\d{10}$/.test(digitsOnly(value));
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidIban(value: string): boolean {
  const body = digitsOnly(value);
  if (body.length !== 24) return false;

  const rearranged = `${body.slice(2)}1827${body.slice(0, 2)}`;

  let remainder = 0;
  for (const digit of rearranged) {
    remainder = (remainder * 10 + Number(digit)) % 97;
  }

  return remainder === 1;
}

export function isValidCardNumber(value: string): boolean {
  const card = digitsOnly(value);
  if (card.length !== 16) return false;

  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let digit = Number(card[i]);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}

export function isValidBankAccount(value: string): boolean {
  return digitsOnly(value).length >= 4;
}
