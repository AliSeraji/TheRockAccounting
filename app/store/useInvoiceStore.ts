import { create } from 'zustand';
import { convertToEnDigits } from './../lib/utils';

export interface StoneItem {
  id: number;
  stoneType: string;
  thickness: string;
  quantity: string;
  width: string;
  length: string;
  area: string;
  price: string;
  total: string;
}

export interface InvoiceTotals {
  totalQuantity: number;
  totalArea: number;
  totalAmount: number;
}

export interface InvoiceDataType {
  invoiceType: string;
  buyer: string;
  project: string;
  address: string;
  phone: string;
  invoiceNumber: string;
  invoiceDate: string;
  description: string;
  personalNote: string;
  discount: string;
  tax: string;
  received: string;
  items: StoneItem[];
  totals: InvoiceTotals;
}

interface InvoiceState {
  invoiceType: string;
  buyer: string;
  project: string;
  address: string;
  phone: string;
  invoiceNumber: string;
  invoiceDate: string;
  description: string;
  personalNote: string;
  discount: string;
  tax: string;
  received: string;
  activeTab: string;

  items: StoneItem[];

  setInvoiceType: (value: string) => void;
  setBuyer: (value: string) => void;
  setProject: (value: string) => void;
  setAddress: (value: string) => void;
  setPhone: (value: string) => void;
  setInvoiceNumber: (value: string) => void;
  setInvoiceDate: (value: string) => void;
  setDescription: (value: string) => void;
  setPersonalNote: (value: string) => void;
  setDiscount: (value: string) => void;
  setTax: (value: string) => void;
  setReceived: (value: string) => void;
  setActiveTab: (value: string) => void;

  addItem: () => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, field: keyof StoneItem, value: string) => void;

  getTotals: () => InvoiceTotals;
  getInvoiceData: () => InvoiceDataType;

  resetInvoice: () => void;
}

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
  invoiceNumber: '۱۲۳۴',
  invoiceDate: '۱۴۰۴/۰۱/۰۱',
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
            thickness: '0',
            quantity: '0',
            width: '0',
            length: '0',
            area: '0',
            price: '0',
            total: '0',
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
    const { items } = get();
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
    return { totalQuantity, totalArea, totalAmount };
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
