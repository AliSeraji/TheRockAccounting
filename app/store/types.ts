import type { Customer } from './customers/types';

export interface StoneItem {
  id: number;
  // Id of the main-warehouse stone this row was picked from; '' when typed
  // in freely. Codes can be edited or reused, so stock is linked by id.
  stockId: string;
  stoneType: string;
  stoneCode: string;
  thickness: string;
  quantity: string;
  width: string;
  length: string;
  area: string;
  price: string;
  total: string;
}

export interface ServiceItem {
  id: number;
  serviceType: string;
  quantity: string;
  unitPrice: string;
  total: string;
  description: string;
}

// A quarried block on a block invoice. Blocks are sold by volume.
export interface BlockInvoiceItem {
  id: number;
  // Id of the warehouse block this row was picked from; '' when typed in.
  stockId: string;
  blockCode: string;
  blockType: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  volume: string;
  price: string;
  total: string;
}

// Totals every invoice has: its items, its services and what is left to pay.
export interface PaymentTotals {
  totalAmount: number;
  totalServicesAmount: number;
  totalPaymentAmount: number;
}

export interface InvoiceTotals extends PaymentTotals {
  totalQuantity: number;
  totalArea: number;
}

export interface BlockInvoiceTotals extends PaymentTotals {
  totalWeight: number;
  totalVolume: number;
}

// A regular (ثابت) buyer is picked from the customers list; a walk-in (گذری)
// buyer is typed in and has no customer record.
export type CustomerType = 'regular' | 'walkIn';

// Everything an invoice has besides its items: header, notes, services and
// payment. The shared invoice cards and the receipt pages read only these.
export interface InvoiceFormData {
  invoiceType: string;
  customerType: CustomerType;
  // Id of the customer a regular buyer was picked from; '' for a walk-in or
  // while no customer is picked. The buyer fields keep a copy of their details.
  customerId: string;
  buyer: string;
  nationalId: string;
  project: string;
  address: string;
  phone: string;
  invoiceNumber: string;
  invoiceDate: string;
  secondAdditionalNote: string;
  additionalNote: string;
  discount: string;
  tax: string;
  received: string;
  totals: PaymentTotals;
  services: ServiceItem[];
}

export interface InvoiceDataType extends InvoiceFormData {
  items: StoneItem[];
  totals: InvoiceTotals;
}

export interface BlockInvoiceData extends InvoiceFormData {
  items: BlockInvoiceItem[];
  totals: BlockInvoiceTotals;
}

export type InvoiceKind = 'stone' | 'block';

// One invoice of either kind, as the invoice list keeps it and the receipts
// render it.
export type InvoiceSnapshot =
  | { kind: 'stone'; data: InvoiceDataType }
  | { kind: 'block'; data: BlockInvoiceData };

export interface InvoiceFormState extends InvoiceFormData {
  setInvoiceType: (value: string) => void;
  // Switching type unlinks the customer and keeps the typed buyer fields.
  setCustomerType: (value: CustomerType) => void;
  // Links a regular customer and copies their details into the buyer fields.
  pickCustomer: (customer: Customer) => void;
  // Editing the name unlinks the customer.
  setBuyer: (value: string) => void;
  setNationalId: (value: string) => void;
  setProject: (value: string) => void;
  setAddress: (value: string) => void;
  setPhone: (value: string) => void;
  setInvoiceNumber: (value: string) => void;
  setInvoiceDate: (value: string) => void;
  setSecondAdditionalNote: (value: string) => void;
  setAdditionalNote: (value: string) => void;
  setDiscount: (value: string) => void;
  setTax: (value: string) => void;
  setReceived: (value: string) => void;
  addService: () => void;
  removeService: (id: number) => void;
  updateService: (id: number, field: keyof ServiceItem, value: string) => void;
}

export interface InvoiceState extends InvoiceFormState {
  activeTab: string;
  totals: InvoiceTotals;
  items: StoneItem[];

  setActiveTab: (value: string) => void;
  addItem: () => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, field: keyof StoneItem, value: string) => void;

  getInvoiceData: () => InvoiceDataType;
  loadInvoice: (data: InvoiceDataType) => void;

  resetInvoice: () => void;
}

export interface BlockInvoiceState extends InvoiceFormState {
  totals: BlockInvoiceTotals;
  items: BlockInvoiceItem[];

  addItem: () => void;
  removeItem: (id: number) => void;
  updateItem: (
    id: number,
    field: keyof BlockInvoiceItem,
    value: string
  ) => void;

  getInvoiceData: () => BlockInvoiceData;
  loadInvoice: (data: BlockInvoiceData) => void;

  resetInvoice: () => void;
}
