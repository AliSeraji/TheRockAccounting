import type { InvoiceDataType } from '~/store/types';

export interface Props {
  data: InvoiceDataType;
}

export const ReceiptType = {
  Sales: 'sales',
  Delivery: 'delivery',
  Request: 'request',
} as const;

export type ReceiptType = (typeof ReceiptType)[keyof typeof ReceiptType] | null;
