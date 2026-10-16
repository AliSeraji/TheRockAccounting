import { create } from 'zustand';
import type {
  BlockInvoiceData,
  BlockInvoiceItem,
  BlockInvoiceState,
  BlockInvoiceTotals,
} from './types';
import { computeBlockTotals } from './helper';
import {
  createInvoiceFormSlice,
  initialFormState,
  selectFormData,
  withServiceRow,
} from './invoiceFormSlice';
import { calcBlockVolume } from './warehouse/helpers';

const emptyItem = (id: number): BlockInvoiceItem => ({
  id,
  blockCode: '',
  blockType: '',
  length: '',
  width: '',
  height: '',
  weight: '',
  volume: '',
  price: '',
  total: '',
});

const initialTotals: BlockInvoiceTotals = {
  totalWeight: 0,
  totalVolume: 0,
  totalAmount: 0,
  totalServicesAmount: 0,
  totalPaymentAmount: 0,
};

const initialState = {
  ...initialFormState,
  items: [emptyItem(1)],
  totals: initialTotals,
};

const VOLUME_FIELDS: (keyof BlockInvoiceItem)[] = ['length', 'width', 'height'];

const createBlockInvoiceStore = () =>
  create<BlockInvoiceState>((set, get, store) => ({
    ...createInvoiceFormSlice(({ services, discount, tax, received }) =>
      computeBlockTotals(get().items, services, discount, tax, received)
    )(set, get, store),
    items: initialState.items,
    totals: initialState.totals,

    addItem: () =>
      set((state) => {
        const newId =
          state.items.length > 0
            ? Math.max(...state.items.map((i) => i.id)) + 1
            : 1;
        return { items: [...state.items, emptyItem(newId)] };
      }),

    removeItem: (id) => {
      const { items, services, discount, tax, received } = get();
      if (items.length <= 1) return;
      const newItems = items.filter((item) => item.id !== id);
      set({
        items: newItems,
        totals: computeBlockTotals(newItems, services, discount, tax, received),
      });
    },

    // The price is per cubic meter, so the total is volume × price.
    updateItem: (id, field, value) => {
      const { items, services, discount, tax, received } = get();
      const newItems = items.map((item) => {
        if (item.id !== id) return item;
        const updatedItem = { ...item, [field]: value };

        if (VOLUME_FIELDS.includes(field)) {
          updatedItem.volume = calcBlockVolume(updatedItem);
        }

        if (VOLUME_FIELDS.includes(field) || field === 'price') {
          const total =
            parseFloat(updatedItem.volume) * parseFloat(updatedItem.price);
          updatedItem.total = total > 0 ? total.toFixed(0) : '0';
        }

        return updatedItem;
      });
      set({
        items: newItems,
        totals: computeBlockTotals(newItems, services, discount, tax, received),
      });
    },

    getInvoiceData: () => selectBlockInvoiceData(get()),

    loadInvoice: (data) =>
      set({ ...data, services: withServiceRow(data.services) }),

    resetInvoice: () => set(initialState),
  }));

// The block invoice being written on the creation tab.
export const useBlockInvoiceStore = createBlockInvoiceStore();

// A saved block invoice opened for editing from the invoice list.
export const blockInvoiceEditor = createBlockInvoiceStore();

export function selectBlockInvoiceData(
  state: BlockInvoiceState
): BlockInvoiceData {
  return {
    ...selectFormData(state),
    items: state.items,
    totals: state.totals,
  };
}
