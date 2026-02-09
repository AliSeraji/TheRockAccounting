import { create } from 'zustand';
import { convertToEnDigits } from './../lib/utils';
import type { InvoiceState, InvoiceTotals, StoneItem } from './types';
import { computeTotals } from './helper';

const initialItems: StoneItem[] = [
  {
    id: 1,
    stoneType: '-',
    thickness: '-',
    quantity: '-',
    width: '-',
    length: '-',
    area: '-',
    price: '-',
    total: '-',
  },
];

const initialTotals: InvoiceTotals = {
  totalQuantity: 0,
  totalArea: 0,
  totalAmount: 0,
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
  description: '',
  personalNote: '',
  discount: '0',
  tax: '0',
  received: '0',
  activeTab: 'invoice',
  items: initialItems,
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
  setDescription: (value) => set({ description: value }),
  setPersonalNote: (value) => set({ personalNote: value }),
  setActiveTab: (value) => set({ activeTab: value }),

  setDiscount: (value) => {
    const { tax, received, items } = get();
    set({
      discount: value,
      totals: computeTotals(items, value, tax, received),
    });
  },
  setTax: (value) => {
    const { discount, received, items } = get();
    set({
      tax: value,
      totals: computeTotals(items, discount, value, received),
    });
  },
  setReceived: (value) => {
    const { discount, tax, items } = get();
    set({
      received: value,
      totals: computeTotals(items, discount, tax, value),
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
    const { items, discount, tax, received } = get();
    if (items.length <= 1) return;
    const newItems = items.filter((item) => item.id !== id);
    set({
      items: newItems,
      totals: computeTotals(newItems, discount, tax, received),
    });
  },

  updateItem: (id, field, value) => {
    const { items, discount, tax, received } = get();
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
        updatedItem.area = area > 0 ? area.toString() : '0';
      }

      if (['width', 'length', 'quantity', 'area', 'price'].includes(field)) {
        const area = updatedItem.area || 0;
        const price = updatedItem.price || 0;

        const total =
          parseFloat(convertToEnDigits(area)) *
          parseFloat(convertToEnDigits(price));
        updatedItem.total = total > 0 ? total.toString() : '0';
      }

      return updatedItem;
    });
    set({
      items: newItems,
      totals: computeTotals(newItems, discount, tax, received),
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
      description: state.description,
      personalNote: state.personalNote,
      discount: state.discount,
      tax: state.tax,
      received: state.received,
      items: state.items,
      totals: state.totals,
    };
  },

  resetInvoice: () => set(initialState),
}));
