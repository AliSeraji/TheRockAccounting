import { create } from 'zustand';
import { newId } from '~/lib/id';
import { useCustomersStore } from '../customers/useCustomers';
import { useSettingsStore } from '../settings/useSettingStore';
import { loadInvoice } from '../useInvoiceForm';
import { useWarehouseStore } from '../warehouse/useWarehouse';
import type { InvoicesStore, SavedInvoice } from './types';
import {
  canEditInvoice,
  finalizeInvoice,
  invoiceProblems,
  isSalesInvoice,
  nextInvoiceNumber,
  resolveBuyer,
  stockSales,
} from './helpers';

export const useInvoicesStore = create<InvoicesStore>((set, get) => ({
  invoices: [],
  view: { mode: 'list' },
  filters: {
    search: '',
    type: 'all',
    kind: 'all',
    date: 'all',
    dateFrom: '',
    dateTo: '',
  },
  page: 1,

  saveInvoice: (invoice, id) => {
    const { invoices } = get();
    const existing = invoices.find((saved) => saved.id === id);
    if (existing && !canEditInvoice(existing)) {
      return { ok: false, problems: ['اجازه ویرایش این فاکتور را ندارید'] };
    }

    const problems = invoiceProblems(invoice, invoices, id);
    if (problems.length > 0) return { ok: false, problems };

    // Checked before anything below is written, so a refused save leaves no
    // customer or used invoice number behind. With a backend this is one
    // call that writes the customer, the invoice and its stock movements in
    // one transaction.
    const customersStore = useCustomersStore.getState();
    const buyer = resolveBuyer(invoice.data, customersStore.customers);
    if (!buyer.ok) return buyer;
    const { customerId, newCustomer } = buyer;

    let invoiceNumber = invoice.data.invoiceNumber;
    if (!invoiceNumber) {
      const settings = useSettingsStore.getState();
      const next = nextInvoiceNumber(invoices, settings.nextNumber);
      settings.setNumberingField('nextNumber', String(next + 1));
      invoiceNumber = String(next);
    }

    if (newCustomer) customersStore.addCustomer(newCustomer);

    const now = new Date().toISOString();
    const saved: SavedInvoice = {
      ...finalizeInvoice(invoice, invoiceNumber, customerId),
      id: existing?.id ?? newId(),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    set({
      invoices: existing
        ? invoices.map((other) => (other.id === saved.id ? saved : other))
        : [saved, ...invoices],
    });

    // The warehouse follows the saved invoice: a sales invoice holds its
    // rows' stock, a pre-invoice none. An edit returns what the invoice held
    // and takes its rows again.
    const sales = isSalesInvoice(saved) ? stockSales(saved) : [];
    useWarehouseStore.getState().setInvoiceStock(saved.id, sales);

    return { ok: true, id: saved.id, invoiceNumber, newCustomer };
  },

  openList: () => set({ view: { mode: 'list' } }),

  openInvoice: (id) => set({ view: { mode: 'view', id } }),

  startEditing: (id) => {
    const invoice = get().invoices.find((saved) => saved.id === id);
    if (!invoice || !canEditInvoice(invoice)) return;
    loadInvoice('edit', invoice);
    set({ view: { mode: 'edit', id } });
  },

  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters }, page: 1 })),
  

  setPage: (page) => set({ page }),
}));

// The invoice open in the detail or edit view, if any.
export const selectOpenInvoice = ({
  view,
  invoices,
}: InvoicesStore): SavedInvoice | undefined => {
  if (view.mode === 'list') return undefined;
  const { id } = view;
  return invoices.find((saved) => saved.id === id);
};
