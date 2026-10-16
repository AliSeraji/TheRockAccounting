import type { InvoiceDataType, InvoiceSnapshot } from '~/store/types';

export interface Props {
  data: InvoiceDataType;
}

export const ReceiptType = {
  Sales: 'sales',
  Delivery: 'delivery',
  Request: 'request',
} as const;

export type ReceiptType = (typeof ReceiptType)[keyof typeof ReceiptType] | null;

export type ReceiptKind = NonNullable<ReceiptType>;

// What the receipt dialog shows: an invoice and one of its receipts.
export interface ReceiptPreview {
  invoice: InvoiceSnapshot;
  receipt: ReceiptKind;
}
