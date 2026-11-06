import { jalaliKey } from '~/lib/jalali';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import type { SavedInvoice } from '~/store/invoices/types';
import { EMPTY } from '../data-table/constants';
import type { DataTableColumn } from '../data-table/types';
import { INVOICE_KIND_LABELS, InvoiceTypeBadge } from './common';

// `todayKey` (a `jalaliKey`) marks today's invoices in the date column.
export const invoiceColumns = (
  todayKey: number
): DataTableColumn<SavedInvoice>[] => [
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
    render: (invoice) => convertToPersianDigits(invoice.data.buyer),
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
    render: ({ data: { invoiceDate } }) =>
      invoiceDate ? (
        <span className="inline-flex items-center gap-1.5">
          {convertToPersianDigits(invoiceDate)}
          {jalaliKey(invoiceDate) === todayKey && (
            <span className="rounded-full bg-brand-100 px-1.5 text-[11px] leading-5 font-medium text-brand-900">
              امروز
            </span>
          )}
        </span>
      ) : (
        EMPTY
      ),
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
