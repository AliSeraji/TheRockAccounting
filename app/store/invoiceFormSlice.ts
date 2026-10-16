import type { StateCreator } from 'zustand';
import { convertToEnDigits } from '~/lib/utils';
import type {
  InvoiceFormData,
  InvoiceFormState,
  PaymentTotals,
  ServiceItem,
} from './types';

type PaymentInputs = Pick<
  InvoiceFormState,
  'services' | 'discount' | 'tax' | 'received'
>;

const emptyService = (id: number): ServiceItem => ({
  id,
  serviceType: '',
  quantity: '',
  unitPrice: '',
  total: '',
  description: '',
});

export const initialFormState = {
  invoiceType: 'پیش فاکتور',
  buyer: '',
  nationalId: '',
  project: '',
  address: '',
  phone: '',
  invoiceNumber: '',
  invoiceDate: '',
  secondAdditionalNote: '',
  additionalNote: '',
  discount: '0',
  tax: '0',
  received: '0',
  services: [emptyService(1)],
};

// The invoice fields of a store, without its items or actions.
export const selectFormData = (state: InvoiceFormData): InvoiceFormData => ({
  invoiceType: state.invoiceType,
  buyer: state.buyer,
  nationalId: state.nationalId,
  project: state.project,
  address: state.address,
  phone: state.phone,
  invoiceNumber: state.invoiceNumber,
  invoiceDate: state.invoiceDate,
  secondAdditionalNote: state.secondAdditionalNote,
  additionalNote: state.additionalNote,
  discount: state.discount,
  tax: state.tax,
  received: state.received,
  totals: state.totals,
  services: state.services,
});

// Saved invoices drop blank service rows, so a loaded invoice may have none.
// The services table needs one row to type into.
export const withServiceRow = (services: ServiceItem[]): ServiceItem[] =>
  services.length > 0 ? services : initialFormState.services;

// Header, notes, services and payment actions shared by every invoice store.
// `withTotals` recomputes the store's totals from its own items and the
// updated payment inputs.
export const createInvoiceFormSlice =
  (
    withTotals: (inputs: PaymentInputs) => PaymentTotals
  ): StateCreator<InvoiceFormState, [], [], Omit<InvoiceFormState, 'totals'>> =>
  (set, get) => ({
    ...initialFormState,

    setInvoiceType: (value) => set({ invoiceType: value }),
    setBuyer: (value) => set({ buyer: value }),
    setNationalId: (value) => set({ nationalId: value }),
    setProject: (value) => set({ project: value }),
    setAddress: (value) => set({ address: value }),
    setPhone: (value) => set({ phone: value }),
    setInvoiceNumber: (value) => set({ invoiceNumber: value }),
    setInvoiceDate: (value) => set({ invoiceDate: value }),
    setSecondAdditionalNote: (value) => set({ secondAdditionalNote: value }),
    setAdditionalNote: (value) => set({ additionalNote: value }),

    setDiscount: (value) =>
      set({
        discount: value,
        totals: withTotals({ ...get(), discount: value }),
      }),
    setTax: (value) =>
      set({
        tax: value,
        totals: withTotals({ ...get(), tax: value }),
      }),
    setReceived: (value) =>
      set({
        received: value,
        totals: withTotals({ ...get(), received: value }),
      }),

    addService: () =>
      set((state) => {
        const newId =
          state.services.length > 0
            ? Math.max(...state.services.map((s) => s.id)) + 1
            : 1;
        return { services: [...state.services, emptyService(newId)] };
      }),

    removeService: (id) => {
      const { services } = get();
      if (services.length <= 1) return;
      const newServices = services.filter((service) => service.id !== id);
      set({
        services: newServices,
        totals: withTotals({ ...get(), services: newServices }),
      });
    },

    updateService: (id, field, value) => {
      const newServices = get().services.map((service) => {
        if (service.id !== id) return service;
        const updatedService = { ...service, [field]: value };

        if (['quantity', 'unitPrice'].includes(field)) {
          const total =
            parseFloat(convertToEnDigits(updatedService.quantity || '0')) *
            parseFloat(convertToEnDigits(updatedService.unitPrice || '0'));
          updatedService.total = total > 0 ? total.toFixed(0).toString() : '0';
        }

        return updatedService;
      });
      set({
        services: newServices,
        totals: withTotals({ ...get(), services: newServices }),
      });
    },
  });
