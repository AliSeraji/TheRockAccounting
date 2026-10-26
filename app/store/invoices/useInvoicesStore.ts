import { create } from 'zustand';
import { newId } from '~/lib/id';
import { useCustomersStore } from '../customers/useCustomers';
import { useSettingsStore } from '../settings/useSettingStore';
import { loadInvoice } from '../useInvoiceForm';
import type { InvoicesStore, SavedInvoice } from './types';
import {
  finalizeInvoice,
  invoiceProblems,
  isLocked,
  nextInvoiceNumber,
  resolveBuyer,
} from './helpers';

export const useInvoicesStore = create<InvoicesStore>((set, get) => ({
  invoices: [],
  view: { mode: 'list' },
  filters: { search: '', type: 'all', kind: 'all' },
  page: 1,

  saveInvoice: (invoice, id) => {
    const { invoices } = get();
    const existing = invoices.find((saved) => saved.id === id);
    if (existing && isLocked(existing)) {
      return { ok: false, problems: ['فاکتور فروش قابل ویرایش نیست'] };
    }

    const problems = invoiceProblems(invoice, invoices, id);
    if (problems.length > 0) return { ok: false, problems };

    // Checked before anything below is written, so a refused save leaves no
    // customer or used invoice number behind. With a backend this is one
    // call that writes the customer and the invoice in one transaction.
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
    const finalized = finalizeInvoice(invoice, invoiceNumber, customerId);

    if (existing) {
      const updated: SavedInvoice = {
        ...finalized,
        id: existing.id,
        createdAt: existing.createdAt,
        updatedAt: now,
      };
      set({
        invoices: invoices.map((saved) =>
          saved.id === existing.id ? updated : saved
        ),
      });
      return { ok: true, id: existing.id, invoiceNumber, newCustomer };
    }

    const added: SavedInvoice = {
      ...finalized,
      id: newId(),
      createdAt: now,
      updatedAt: now,
    };
    set({ invoices: [added, ...invoices] });
    return { ok: true, id: added.id, invoiceNumber, newCustomer };
  },

  openList: () => set({ view: { mode: 'list' } }),

  openInvoice: (id) => set({ view: { mode: 'view', id } }),

  startEditing: (id) => {
    const invoice = get().invoices.find((saved) => saved.id === id);
    if (!invoice || isLocked(invoice)) return;
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
