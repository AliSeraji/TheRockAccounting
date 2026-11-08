import type { ReactNode } from 'react';
import {
  cleanTrailingZeros,
  convertToPersianDigits,
  formatRialAmount,
} from '~/lib/utils';
import type { BlockInvoiceItem, ServiceItem, StoneItem } from '~/store/types';
import { EMPTY } from '~/components/data-table/constants';
import { Badge } from '~/components/ui/badge';
import { CODE_CHIP } from '~/components/floating-table/styles';
import { STONE_COLUMNS } from '~/components/invoice/common';
import { BLOCK_COLUMNS } from '~/components/invoice/block/common';
import { SERVICE_COLUMNS } from '~/components/invoice/services/common';
import type { DetailColumn } from './DetailsTable';

// Cleared numeric inputs hold '-'.
const hasValue = (value: string): boolean =>
  value.trim() !== '' && value.trim() !== '-';

const text = (value: string): string =>
  hasValue(value) ? convertToPersianDigits(value) : EMPTY;

const amount = (value: string | number): string =>
  hasValue(String(value))
    ? formatRialAmount(convertToPersianDigits(String(value)))
    : EMPTY;

const code = (value: string): ReactNode =>
  hasValue(value) ? (
    <Badge variant="secondary" className={CODE_CHIP}>
      {convertToPersianDigits(value)}
    </Badge>
  ) : (
    EMPTY
  );

// The editable tables' columns, read-only. A saved invoice has no delete
// button, so its total also takes the delete column's 5%. Tailwind only
// builds classes written out in full, so the widths are literal.
const ITEM_TOTAL_WIDTH = 'w-[23%]';
const SERVICE_TOTAL_WIDTH = 'w-[25%]';

export const stoneItemColumns: DetailColumn<StoneItem>[] = [
  { ...STONE_COLUMNS.code, render: (item) => code(item.stoneCode) },
  { ...STONE_COLUMNS.type, render: (item) => text(item.stoneType) },
  { ...STONE_COLUMNS.thickness, render: (item) => text(item.thickness) },
  { ...STONE_COLUMNS.quantity, render: (item) => text(item.quantity) },
  { ...STONE_COLUMNS.width, render: (item) => text(item.width) },
  { ...STONE_COLUMNS.length, render: (item) => text(item.length) },
  {
    ...STONE_COLUMNS.area,
    render: (item) => text(cleanTrailingZeros(item.area)),
  },
  { ...STONE_COLUMNS.price, render: (item) => amount(item.price) },
  {
    ...STONE_COLUMNS.total,
    width: ITEM_TOTAL_WIDTH,
    strong: true,
    render: (item) => amount(item.total),
  },
];

export const blockItemColumns: DetailColumn<BlockInvoiceItem>[] = [
  { ...BLOCK_COLUMNS.code, render: (item) => code(item.blockCode) },
  { ...BLOCK_COLUMNS.type, render: (item) => text(item.blockType) },
  { ...BLOCK_COLUMNS.length, render: (item) => text(item.length) },
  { ...BLOCK_COLUMNS.width, render: (item) => text(item.width) },
  { ...BLOCK_COLUMNS.height, render: (item) => text(item.height) },
  { ...BLOCK_COLUMNS.weight, render: (item) => text(item.weight) },
  {
    ...BLOCK_COLUMNS.volume,
    render: (item) => text(cleanTrailingZeros(item.volume)),
  },
  { ...BLOCK_COLUMNS.price, render: (item) => amount(item.price) },
  {
    ...BLOCK_COLUMNS.total,
    width: ITEM_TOTAL_WIDTH,
    strong: true,
    render: (item) => amount(item.total),
  },
];

export const serviceColumns: DetailColumn<ServiceItem>[] = [
  {
    ...SERVICE_COLUMNS.service,
    render: (service) => text(service.serviceType),
  },
  {
    ...SERVICE_COLUMNS.description,
    render: (service) => text(service.description),
  },
  {
    ...SERVICE_COLUMNS.quantity,
    render: (service) => text(service.quantity),
  },
  {
    ...SERVICE_COLUMNS.unitPrice,
    render: (service) => amount(service.unitPrice),
  },
  {
    ...SERVICE_COLUMNS.total,
    width: SERVICE_TOTAL_WIDTH,
    strong: true,
    render: (service) => amount(service.total),
  },
];
