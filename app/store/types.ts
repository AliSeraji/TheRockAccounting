export interface StoneItem {
  id: number;
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

export interface InvoiceTotals {
  totalQuantity: number;
  totalArea: number;
  totalAmount: number;
  totalServicesAmount: number;
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
  secondAdditionalNote: string;
  additionalNote: string;
  discount: string;
  tax: string;
  received: string;
  items: StoneItem[];
  services: ServiceItem[];
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
  secondAdditionalNote: string;
  additionalNote: string;
  discount: string;
  tax: string;
  received: string;
  activeTab: string;
  totals: InvoiceTotals;
  items: StoneItem[];
  services: ServiceItem[];

  setInvoiceType: (value: string) => void;
  setBuyer: (value: string) => void;
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
  setActiveTab: (value: string) => void;
  addItem: () => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, field: keyof StoneItem, value: string) => void;
  addService: () => void;
  removeService: (id: number) => void;
  updateService: (id: number, field: keyof ServiceItem, value: string) => void;

  getInvoiceData: () => InvoiceDataType;

  resetInvoice: () => void;
}
