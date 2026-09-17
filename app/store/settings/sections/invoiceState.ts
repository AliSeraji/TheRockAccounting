import type { StateCreator } from 'zustand';
import type { InvoiceData, InvoiceInfoState, SettingStore } from '../types';

export const DEFAULT_INVOICE_NOTE =
  'سنگ های فوق طبق متراژ سفارش دهنده و خریدار بارگیری و تا تسویه حساب کامل نزد خریدار امانت می باشد. لازم به ذکر است فرستنده و کارخانه هیچ تعهدی در قبال پرداخت کرایه و تخلیه نداشته و به عهده گیرنده نمی باشد.';

const initialInvoice: InvoiceData = {
  taxRate: 0,
  discountRate: 0,
  defaultDueDays: 0,
  defaultNote: DEFAULT_INVOICE_NOTE,
  showLogo: true,
  showSignature: true,
  showPageNumbers: true,
};

export const createInvoiceSection: StateCreator<
  SettingStore,
  [],
  [],
  InvoiceInfoState
> = (set) => ({
  ...initialInvoice,
  setInvoiceField: (key, value) =>
    set({ [key]: value } as Partial<InvoiceData>),
});
