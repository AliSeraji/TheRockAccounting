import type { ReactNode } from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import DataTable from '../data-table/DataTable';
import ListHeader from '../data-table/ListHeader';
import type { ListFilter } from '../data-table/types';
import { convertToEnDigits } from '~/lib/utils';
import { INVOICE_TYPES } from '~/store/invoices/helpers';
import type { InvoiceFilters, SavedInvoice } from '~/store/invoices/types';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import { invoiceColumns } from './columns';
import { INVOICE_KIND_LABELS } from './common';

const PAGE_SIZE = 20;

const TYPE_OPTIONS = [
  { value: 'all', label: 'همه انواع' },
  { value: INVOICE_TYPES.PRE, label: INVOICE_TYPES.PRE },
  { value: INVOICE_TYPES.SALES, label: INVOICE_TYPES.SALES },
];

const KIND_OPTIONS: { value: InvoiceFilters['kind']; label: string }[] = [
  { value: 'all', label: 'همه دسته‌ها' },
  { value: 'stone', label: INVOICE_KIND_LABELS.stone },
  { value: 'block', label: INVOICE_KIND_LABELS.block },
];

const normalize = (text: string): string =>
  convertToEnDigits(text).trim().toLowerCase();

const matches = (
  invoice: SavedInvoice,
  { search, type, kind }: InvoiceFilters
): boolean => {
  const query = normalize(search);
  const { invoiceNumber, buyer, phone, project } = invoice.data;
  return (
    (type === 'all' || invoice.data.invoiceType === type) &&
    (kind === 'all' || invoice.kind === kind) &&
    (!query ||
      [invoiceNumber, buyer, phone, project].some((text) =>
        normalize(text).includes(query)
      ))
  );
};

export default function InvoicesList(): ReactNode {
  const invoices = useInvoicesStore((state) => state.invoices);
  const filters = useInvoicesStore((state) => state.filters);
  const page = useInvoicesStore((state) => state.page);
  const setFilters = useInvoicesStore((state) => state.setFilters);
  const setPage = useInvoicesStore((state) => state.setPage);
  const openInvoice = useInvoicesStore((state) => state.openInvoice);

  const filtered = invoices.filter((invoice) => matches(invoice, filters));
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const listFilters: ListFilter[] = [
    {
      key: 'type',
      label: 'نوع فاکتور',
      value: filters.type,
      options: TYPE_OPTIONS,
      onChange: (type) => setFilters({ type }),
    },
    {
      key: 'kind',
      label: 'دسته',
      value: filters.kind,
      options: KIND_OPTIONS,
      onChange: (kind) => setFilters({ kind: kind as InvoiceFilters['kind'] }),
    },
  ];

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur">
      <ListHeader
        title="لیست فاکتورها"
        noun="فاکتور"
        shown={filtered.length}
        total={invoices.length}
        search={filters.search}
        onSearchChange={(search) => setFilters({ search })}
        searchPlaceholder="شماره، خریدار، تلفن یا پروژه..."
        filters={listFilters}
      />

      <CardContent className="p-0">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3 px-6 text-center">
            <FileText className="w-12 h-12 opacity-30" />
            {invoices.length === 0 ? (
              <>
                <p className="text-sm">هنوز فاکتوری ثبت نشده است</p>
                <p className="text-xs">
                  فاکتورها پس از «ثبت فاکتور» در تب‌های صدور فاکتور اینجا نمایش
                  داده می‌شوند.
                </p>
              </>
            ) : (
              <p className="text-sm">فاکتوری با این مشخصات یافت نشد</p>
            )}
          </div>
        ) : (
          <DataTable
            columns={invoiceColumns}
            items={visible}
            firstRowNumber={(page - 1) * PAGE_SIZE + 1}
            onSelect={(invoice) => openInvoice(invoice.id)}
            currentPage={page}
            totalPages={totalPages}
            setCurrentPage={setPage}
          />
        )}
      </CardContent>
    </Card>
  );
}
