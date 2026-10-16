import { create } from 'zustand';
import { convertToEnDigits } from './../lib/utils';
import type {
  InvoiceDataType,
  InvoiceState,
  InvoiceTotals,
  StoneItem,
} from './types';
import { computeTotals } from './helper';
import {
  createInvoiceFormSlice,
  initialFormState,
  selectFormData,
  withServiceRow,
} from './invoiceFormSlice';

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

const initialTotals: InvoiceTotals = {
  totalQuantity: 0,
  totalArea: 0,
  totalAmount: 0,
  totalServicesAmount: 0,
  totalPaymentAmount: 0,
};

const initialState = {
  ...initialFormState,
  activeTab: 'invoice',
  items: initialItems,
  totals: initialTotals,
};

const createStoneInvoiceStore = () =>
  create<InvoiceState>((set, get, store) => ({
    ...createInvoiceFormSlice(({ services, discount, tax, received }) =>
      computeTotals(get().items, services, discount, tax, received)
    )(set, get, store),
    activeTab: initialState.activeTab,
    items: initialState.items,
    totals: initialState.totals,

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
              stoneCode: '',
              thickness: '',
              quantity: '',
              width: '',
              length: '',
              area: '',
              price: '',
              total: '',
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

    getInvoiceData: () => selectInvoiceData(get()),

    loadInvoice: (data) =>
      set({ ...data, services: withServiceRow(data.services) }),

    resetInvoice: () => set(initialState),
  }));

// The stone invoice being written on the creation tab.
export const useInvoiceStore = createStoneInvoiceStore();

// A saved stone invoice opened for editing from the invoice list.
export const stoneInvoiceEditor = createStoneInvoiceStore();

// Use with useShallow so components re-render when invoice fields change.
export function selectInvoiceData(state: InvoiceState): InvoiceDataType {
  return {
    ...selectFormData(state),
    items: state.items,
    totals: state.totals,
  };
}
