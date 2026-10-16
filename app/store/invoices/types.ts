import type { InvoiceKind, InvoiceSnapshot } from '../types';

export type SavedInvoice = InvoiceSnapshot & {
  id: number;
  // ISO timestamps
  createdAt: string;
  updatedAt: string;
};

// What the invoice list tab shows: the list, one invoice, or one invoice
// being edited.
export type InvoiceListView =
  | { mode: 'list' }
  | { mode: 'view'; id: number }
  | { mode: 'edit'; id: number };

export interface InvoiceFilters {
  search: string;
  // An invoice type, or 'all'
  type: string;
  kind: InvoiceKind | 'all';
}

export type SaveResult =
  | { ok: true; id: number; invoiceNumber: string }
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
  saveInvoice: (invoice: InvoiceSnapshot, id?: number) => SaveResult;
  openList: () => void;
  openInvoice: (id: number) => void;
  // Loads the invoice into its kind's editor store. Sales invoices are locked.
  startEditing: (id: number) => void;
  setFilters: (filters: Partial<InvoiceFilters>) => void;
  setPage: (page: number) => void;
}
