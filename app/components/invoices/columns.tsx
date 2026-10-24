import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import type { SavedInvoice } from '~/store/invoices/types';
import { EMPTY } from '../data-table/constants';
import type { DataTableColumn } from '../data-table/types';
import {
  CustomerTypeBadge,
  INVOICE_KIND_LABELS,
  InvoiceTypeBadge,
} from './common';

export const invoiceColumns: DataTableColumn<SavedInvoice>[] = [
  {
    key: 'number',
    label: 'شماره',
    width: 'w-[10%]',
    className:
      'text-slate-700 font-vazirmatn text-md whitespace-nowrap items-center',
    mobile: 'code',
    render: (invoice) => convertToPersianDigits(invoice.data.invoiceNumber),
  },
  {
    key: 'type',
    label: 'نوع فاکتور',
    width: 'w-[14%]',
    mobile: 'badge',
    render: (invoice) => <InvoiceTypeBadge type={invoice.data.invoiceType} />,
  },
  {
    key: 'buyer',
    label: 'خریدار',
    width: 'w-[25%]',
    className: 'font-medium text-slate-800',
    mobile: 'title',
    render: (invoice) => (
      <span className="inline-flex flex-wrap items-center gap-2">
        {convertToPersianDigits(invoice.data.buyer)}
        <CustomerTypeBadge type={invoice.data.customerType} />
      </span>
    ),
  },
  {
    key: 'kind',
    label: 'دسته',
    width: 'w-[12%]',
    mobile: 'meta',
    render: (invoice) => INVOICE_KIND_LABELS[invoice.kind],
  },
  {
    key: 'date',
    label: 'تاریخ',
    width: 'w-[14%]',
    mobile: 'meta',
    render: (invoice) =>
      invoice.data.invoiceDate
        ? convertToPersianDigits(invoice.data.invoiceDate)
        : EMPTY,
  },
  {
    key: 'total',
    label: 'قابل پرداخت (ریال)',
    width: 'w-[20%]',
    className: 'font-semibold text-slate-800',
    mobile: 'highlight',
    render: (invoice) =>
      formatRialAmount(
        convertToPersianDigits(invoice.data.totals.totalPaymentAmount)
      ),
  },
];
