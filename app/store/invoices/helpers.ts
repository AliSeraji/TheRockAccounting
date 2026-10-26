import { printableServices } from '~/helper/helper';
import { convertToPersianDigits } from '~/lib/utils';
import {
  customerFromBuyer,
  findCustomerForBuyer,
  newCustomerProblems,
} from '../customers/helpers';
import type { Customer } from '../customers/types';
import type {
  BlockInvoiceItem,
  InvoiceFormData,
  InvoiceSnapshot,
  StoneItem,
} from '../types';
import type { SavedInvoice } from './types';

export const INVOICE_TYPES = {
  PRE: 'پیش فاکتور',
  SALES: 'فاکتور فروش',
} as const;

// Sales invoices are final and can no longer be edited.
export const isLocked = (invoice: InvoiceSnapshot): boolean =>
  invoice.data.invoiceType === INVOICE_TYPES.SALES;

// Cleared numeric inputs hold '-'.
const isBlank = (value: string): boolean =>
  value.trim() === '' || value.trim() === '-';

const STONE_INPUTS = [
  'stoneType',
  'stoneCode',
  'thickness',
  'quantity',
  'width',
  'length',
  'price',
] as const satisfies readonly (keyof StoneItem)[];

const BLOCK_INPUTS = [
  'blockCode',
  'blockType',
  'length',
  'width',
  'height',
  'weight',
  'price',
] as const satisfies readonly (keyof BlockInvoiceItem)[];

// A row counts once any of its inputs has a value; untouched rows are dropped.
const isFilledStone = (item: StoneItem): boolean =>
  STONE_INPUTS.some((field) => !isBlank(item[field]));

const isFilledBlock = (item: BlockInvoiceItem): boolean =>
  BLOCK_INPUTS.some((field) => !isBlank(item[field]));

const itemRows = (invoice: InvoiceSnapshot) =>
  invoice.kind === 'stone'
    ? invoice.data.items.map((item) => ({
        filled: isFilledStone(item),
        type: item.stoneType,
        total: item.total,
      }))
    : invoice.data.items.map((item) => ({
        filled: isFilledBlock(item),
        type: item.blockType,
        total: item.total,
      }));

// What stops `invoice` from being saved. `id` is the invoice being edited,
// which may keep its own number.
export function invoiceProblems(
  invoice: InvoiceSnapshot,
  invoices: SavedInvoice[],
  id?: string
): string[] {
  const { data } = invoice;
  const problems: string[] = [];

  if (!data.buyer.trim()) problems.push('نام خریدار وارد نشده است');
  if (!data.invoiceDate) problems.push('تاریخ فاکتور انتخاب نشده است');

  // Row numbers match the table on screen, blank rows included.
  const rows = itemRows(invoice);
  if (!rows.some((row) => row.filled)) {
    problems.push('هیچ ردیفی در اقلام فاکتور وارد نشده است');
  }
  rows.forEach((row, index) => {
    if (row.filled && (!row.type.trim() || !(parseFloat(row.total) > 0))) {
      problems.push(
        `نوع یا مبلغ ردیف ${convertToPersianDigits(index + 1)} اقلام کامل نیست`
      );
    }
  });

  const number = data.invoiceNumber;
  const isTaken = invoices.some(
    (saved) => saved.id !== id && saved.data.invoiceNumber === number
  );
  if (number && isTaken) {
    problems.push(
      `شماره فاکتور ${convertToPersianDigits(number)} قبلاً ثبت شده است`
    );
  }

  return problems;
}

export type BuyerResolution =
  | { ok: true; customerId: string; newCustomer?: Customer }
  | { ok: false; problems: string[] };

// The customer an invoice is saved for. A linked customer stays. Otherwise
// an existing customer with the buyer's ID or exact name is linked, or a new
// one is built from the buyer fields, if they are valid. Nothing is written
// here; the caller adds `newCustomer`.
export function resolveBuyer(
  data: InvoiceFormData,
  customers: Customer[]
): BuyerResolution {
  const linked = customers.some((customer) => customer.id === data.customerId);
  if (data.customerId && linked) {
    return { ok: true, customerId: data.customerId };
  }

  const match = findCustomerForBuyer(customers, data);
  if (match.kind === 'found') {
    return { ok: true, customerId: match.customer.id };
  }
  if (match.kind === 'ambiguous') {
    const who =
      match.by === 'id'
        ? `شناسه «${convertToPersianDigits(data.nationalId)}»`
        : `نام «${data.buyer.trim()}»`;
    return {
      ok: false,
      problems: [
        `چند مشتری با ${who} ثبت شده است؛ خریدار را از لیست انتخاب کنید`,
      ],
    };
  }

  const customer = customerFromBuyer(data, customers);
  const problems = newCustomerProblems(customer);
  if (problems.length > 0) return { ok: false, problems };
  return { ok: true, customerId: customer.id, newCustomer: customer };
}

// The invoice as the list keeps it: numbered, linked to its customer and
// without blank rows.
export function finalizeInvoice(
  invoice: InvoiceSnapshot,
  invoiceNumber: string,
  customerId: string = invoice.data.customerId
): InvoiceSnapshot {
  const services = printableServices(invoice.data.services);
  return invoice.kind === 'stone'
    ? {
        kind: 'stone',
        data: {
          ...invoice.data,
          invoiceNumber,
          customerId,
          services,
          items: invoice.data.items.filter(isFilledStone),
        },
      }
    : {
        kind: 'block',
        data: {
          ...invoice.data,
          invoiceNumber,
          customerId,
          services,
          items: invoice.data.items.filter(isFilledBlock),
        },
      };
}

// The settings counter, skipping numbers already typed in by hand.
export function nextInvoiceNumber(
  invoices: SavedInvoice[],
  counter: string
): number {
  const used = new Set(invoices.map((saved) => saved.data.invoiceNumber));
  let next = Number(counter) || 1;
  while (used.has(String(next))) next += 1;
  return next;
}

// Whether saving `draft` would change `saved`. Blank rows don't count.
export const hasChanges = (
  draft: InvoiceSnapshot,
  saved: InvoiceSnapshot
): boolean =>
  JSON.stringify(finalizeInvoice(draft, draft.data.invoiceNumber).data) !==
  JSON.stringify(finalizeInvoice(saved, saved.data.invoiceNumber).data);
