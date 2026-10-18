import { create } from 'zustand';
import { newId } from '~/lib/id';
import { useSettingsStore } from '../settings/useSettingStore';
import { loadInvoice } from '../useInvoiceForm';
import type { InvoicesStore, SavedInvoice } from './types';
import {
  finalizeInvoice,
  invoiceProblems,
  isLocked,
  nextInvoiceNumber,
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

    let invoiceNumber = invoice.data.invoiceNumber;
    if (!invoiceNumber) {
      const settings = useSettingsStore.getState();
      const next = nextInvoiceNumber(invoices, settings.nextNumber);
      settings.setNumberingField('nextNumber', String(next + 1));
      invoiceNumber = String(next);
    }

    const now = new Date().toISOString();
    const finalized = finalizeInvoice(invoice, invoiceNumber);

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
      return { ok: true, id: existing.id, invoiceNumber };
    }

    const added: SavedInvoice = {
      ...finalized,
      id: newId(),
      createdAt: now,
      updatedAt: now,
    };
    set({ invoices: [added, ...invoices] });
    return { ok: true, id: added.id, invoiceNumber };
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
