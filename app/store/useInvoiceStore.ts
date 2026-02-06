import { create } from 'zustand';
import { convertToEnDigits } from './../lib/utils';
import type { InvoiceState, StoneItem } from './types';

const initialItems: StoneItem[] = [
  {
    id: 1,
    stoneType: '',
    thickness: '0',
    quantity: '0',
    width: '0',
    length: '0',
    area: '0',
    price: '0',
    total: '0',
  },
];

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
  discount: '',
  tax: '',
  received: '',
  activeTab: 'invoice',
  items: initialItems,
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
  setDiscount: (value) => set({ discount: value }),
  setTax: (value) => set({ tax: value }),
  setReceived: (value) => set({ received: value }),
  setActiveTab: (value) => set({ activeTab: value }),

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

  removeItem: (id) =>
    set((state) => {
      if (state.items.length > 1) {
        return { items: state.items.filter((item) => item.id !== id) };
      }
      return state;
    }),

  updateItem: (id, field, value) =>
    set((state) => ({
      items: state.items.map((item) => {
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
          updatedItem.area = area > 0 ? area.toFixed(2) : '0';
        }

        if (['width', 'length', 'quantity', 'area', 'price'].includes(field)) {
          const area = updatedItem.area || 0;
          const price = updatedItem.price || 0;

          const total =
            parseFloat(convertToEnDigits(area)) *
            parseFloat(convertToEnDigits(price));
          updatedItem.total = total > 0 ? total.toFixed(2) : '0';
        }

        return updatedItem;
      }),
    })),

  getTotals: () => {
    const { items, discount, tax, received } = get();
    const totalQuantity = items.reduce(
      (sum, item) => sum + (parseFloat(convertToEnDigits(item.quantity)) || 0),
      0
    );
    const totalArea = items.reduce(
      (sum, item) => sum + (parseFloat(convertToEnDigits(item.area)) || 0),
      0
    );
    const totalAmount = items.reduce(
      (sum, item) => sum + (parseFloat(convertToEnDigits(item.total)) || 0),
      0
    );

    const discountAmount =
      (parseFloat(convertToEnDigits(discount)) * totalAmount) / 100;

    const totalPaymentAmount =
      totalAmount -
        discountAmount +
        parseFloat(convertToEnDigits(tax)) -
        parseFloat(received) || 0;

    return { totalQuantity, totalArea, totalAmount, totalPaymentAmount };
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
      totals: state.getTotals(),
    };
  },

  resetInvoice: () => set(initialState),
}));
