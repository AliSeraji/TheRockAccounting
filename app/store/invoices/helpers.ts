import { printableServices } from '~/helper/helper';
import { convertToPersianDigits } from '~/lib/utils';
import type { BlockInvoiceItem, InvoiceSnapshot, StoneItem } from '../types';
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
  id?: number
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

// The invoice as the list keeps it: numbered and without blank rows.
export function finalizeInvoice(
  invoice: InvoiceSnapshot,
  invoiceNumber: string
): InvoiceSnapshot {
  const services = printableServices(invoice.data.services);
  return invoice.kind === 'stone'
    ? {
        kind: 'stone',
        data: {
          ...invoice.data,
          invoiceNumber,
          services,
          items: invoice.data.items.filter(isFilledStone),
        },
      }
    : {
        kind: 'block',
        data: {
          ...invoice.data,
          invoiceNumber,
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
