import type { Customer } from '../customers/types';
import type { InvoiceKind, InvoiceSnapshot } from '../types';

export type SavedInvoice = InvoiceSnapshot & {
  // A UUID (`newId` in ~/lib/id)
  id: string;
  // ISO timestamps
  createdAt: string;
  updatedAt: string;
};

// What the invoice list tab shows: the list, one invoice, or one invoice
// being edited.
export type InvoiceListView =
  | { mode: 'list' }
  | { mode: 'view'; id: string }
  | { mode: 'edit'; id: string };

export interface InvoiceFilters {
  search: string;
  // An invoice type, or 'all'
  type: string;
  kind: InvoiceKind | 'all';
}

export type SaveResult =
  // `newCustomer`: the customer created for a buyer who wasn't one yet.
  | { ok: true; id: string; invoiceNumber: string; newCustomer?: Customer }
  | { ok: false; problems: string[] };

export interface InvoicesStore {
  // Newest first
  invoices: SavedInvoice[];
  view: InvoiceListView;
  // Kept in the store so they survive opening an invoice and coming back.
  filters: InvoiceFilters;
  page: number;

  // Adds `invoice` to the list, or replaces the invoice `id` when editing.
  // A blank invoice number takes the next one from the numbering settings.
  // An unlinked buyer is linked to the matching customer, or added to the
  // customers as a new one.
  saveInvoice: (invoice: InvoiceSnapshot, id?: string) => SaveResult;
  openList: () => void;
  openInvoice: (id: string) => void;
  // Loads the invoice into its kind's editor store. Sales invoices are locked.
  startEditing: (id: string) => void;
  setFilters: (filters: Partial<InvoiceFilters>) => void;
  setPage: (page: number) => void;
}
