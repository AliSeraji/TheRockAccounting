export interface InvoiceData {
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
  items: Array<{
    id: number;
    stoneType: string;
    thickness: string;
    quantity: string;
    width: string;
    length: string;
    area: string;
    price: string;
    total: string;
  }>;
  totals: {
    totalQuantity: number;
    totalArea: number;
    totalAmount: number;
  };
}

export interface Props {
  data: InvoiceData;
}
