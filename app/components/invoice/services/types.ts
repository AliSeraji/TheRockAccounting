import type { ServiceItem } from '~/store/types';

export const SERVICE_ROW_FIELDS = {
  SERVICE_TYPE: 'serviceType',
  QUANTITY: 'quantity',
  UNIT_PRICE: 'unitPrice',
  TOTAL: 'total',
  DESCRIPTION: 'description',
} as const satisfies Record<string, keyof ServiceItem>;

export type ServiceRowField =
  (typeof SERVICE_ROW_FIELDS)[keyof typeof SERVICE_ROW_FIELDS];

export const SERVICE_OPTIONS = ['برش سنگ', 'فرآوری سنگ', 'بارگیری سنگ'];
