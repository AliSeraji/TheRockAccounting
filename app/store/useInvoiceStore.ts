import { create } from 'zustand';
import { convertToEnDigits } from './../lib/utils';
import type {
  InvoiceState,
  InvoiceTotals,
  ServiceItem,
  StoneItem,
} from './types';
import { computeTotals } from './helper';

const initialItems: StoneItem[] = [
  {
    id: 1,
    stoneType: '',
    stoneCode: '',
    thickness: '',
    quantity: '',
    width: '',
    length: '',
    area: '',
    price: '',
    total: '',
  },
];

const initialServices: ServiceItem[] = [
  {
    id: 1,
    serviceType: '',
    quantity: '',
    unitPrice: '',
    total: '',
    description: '',
  },
];

const initialTotals: InvoiceTotals = {
  totalQuantity: 0,
  totalArea: 0,
  totalAmount: 0,
  totalServicesAmount: 0,
  totalPaymentAmount: 0,
};

const initialState = {
  invoiceType: 'پیش فاکتور',
  buyer: '',
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
  activeTab: 'invoice',
  items: initialItems,
  services: initialServices,
  totals: initialTotals,
};

export const useInvoiceStore = create<InvoiceState>((set, get) => ({
  ...initialState,

  setInvoiceType: (value) => set({ invoiceType: value }),
  setBuyer: (value) => set({ buyer: value }),
  setProject: (value) => set({ project: value }),
  setAddress: (value) => set({ address: value }),
  setPhone: (value) => set({ phone: value }),
  setInvoiceNumber: (value) => set({ invoiceNumber: value }),
  setInvoiceDate: (value) => set({ invoiceDate: value }),
  setSecondAdditionalNote: (value) => set({ secondAdditionalNote: value }),
  setAdditionalNote: (value) => set({ additionalNote: value }),
  setActiveTab: (value) => set({ activeTab: value }),

  setDiscount: (value) => {
    const { tax, received, items, services } = get();
    set({
      discount: value,
      totals: computeTotals(items, services, value, tax, received),
    });
  },
  setTax: (value) => {
    const { discount, received, items, services } = get();
    set({
      tax: value,
      totals: computeTotals(items, services, discount, value, received),
    });
  },
  setReceived: (value) => {
    const { discount, tax, items, services } = get();
    set({
      received: value,
      totals: computeTotals(items, services, discount, tax, value),
    });
  },

  addItem: () =>
    set((state) => {
      const newId =
        state.items.length > 0
          ? Math.max(...state.items.map((i) => i.id)) + 1
          : 1;
      return {
        items: [
          ...state.items,
          {
            id: newId,
            stoneType: '',
            stoneCode: '',
            thickness: '-',
            quantity: '-',
            width: '-',
            length: '-',
            area: '-',
            price: '-',
            total: '-',
          },
        ],
      };
    }),

  removeItem: (id) => {
    const { items, services, discount, tax, received } = get();
    if (items.length <= 1) return;
    const newItems = items.filter((item) => item.id !== id);
    set({
      items: newItems,
      totals: computeTotals(newItems, services, discount, tax, received),
    });
  },

  updateItem: (id, field, value) => {
    const { items, services, discount, tax, received } = get();
    const newItems = items.map((item) => {
      if (item.id !== id) return item;
      let updatedItem = { ...item, [field]: value };

      if (['width', 'length', 'quantity'].includes(field)) {
        const width = updatedItem.width || '0';
        const length = updatedItem.length || '0';
        const quantity = updatedItem.quantity || '0';

        const area =
          parseFloat(convertToEnDigits(width)) *
          parseFloat(convertToEnDigits(length)) *
          parseFloat(convertToEnDigits(quantity));
        updatedItem.area = area > 0 ? area.toFixed(2).toString() : '0';
      }

      if (['width', 'length', 'quantity', 'area', 'price'].includes(field)) {
        const area = updatedItem.area || 0;
        const price = updatedItem.price || 0;

        const total =
          parseFloat(convertToEnDigits(area)) *
          parseFloat(convertToEnDigits(price));
        updatedItem.total = total > 0 ? total.toFixed(0).toString() : '0';
      }

      return updatedItem;
    });
    set({
      items: newItems,
      totals: computeTotals(newItems, services, discount, tax, received),
    });
  },

  addService: () =>
    set((state) => {
      const newId =
        state.services.length > 0
          ? Math.max(...state.services.map((s) => s.id)) + 1
          : 1;
      return {
        services: [
          ...state.services,
          {
            id: newId,
            serviceType: '',
            quantity: '-',
            unitPrice: '-',
            total: '-',
            description: '',
          },
        ],
      };
    }),

  removeService: (id) => {
    const { items, services, discount, tax, received } = get();
    if (services.length <= 1) return;
    const newServices = services.filter((service) => service.id !== id);
    set({
      services: newServices,
      totals: computeTotals(items, newServices, discount, tax, received),
    });
  },

  updateService: (id, field, value) => {
    const { items, services, discount, tax, received } = get();
    const newServices = services.map((service) => {
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
      totals: computeTotals(items, newServices, discount, tax, received),
    });
  },

  getInvoiceData: () => {
    const state = get();
    return {
      invoiceType: state.invoiceType,
      buyer: state.buyer,
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
      items: state.items,
      services: state.services,
      totals: state.totals,
    };
  },

  resetInvoice: () => set(initialState),
}));
