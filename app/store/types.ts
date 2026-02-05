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
  totalPaymentAmount: number;
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

export interface InvoiceState {
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
