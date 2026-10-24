import type { ReactNode } from 'react';
import { FileText, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import DataTable from '../data-table/DataTable';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { INVOICE_TYPES } from '~/store/invoices/helpers';
import type { InvoiceFilters, SavedInvoice } from '~/store/invoices/types';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import { invoiceColumns } from './columns';
import { CUSTOMER_TYPE_LABELS, INVOICE_KIND_LABELS } from './common';

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

const CUSTOMER_TYPE_OPTIONS: {
  value: InvoiceFilters['customerType'];
  label: string;
}[] = [
  { value: 'all', label: 'همه مشتریان' },
  { value: 'regular', label: CUSTOMER_TYPE_LABELS.regular },
  { value: 'walkIn', label: CUSTOMER_TYPE_LABELS.walkIn },
];

const selectTriggerClass =
  'flex flex-row max-w-41 border border-slate-200 rounded-lg text-sm px-3 py-1.5 bg-white text-slate-700 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus:border-slate-400 focus:border-2';

const normalize = (text: string): string =>
  convertToEnDigits(text).trim().toLowerCase();

const matches = (
  invoice: SavedInvoice,
  { search, type, kind, customerType }: InvoiceFilters
): boolean => {
  const query = normalize(search);
  const { invoiceNumber, buyer, phone, project } = invoice.data;
  return (
    (type === 'all' || invoice.data.invoiceType === type) &&
    (kind === 'all' || invoice.kind === kind) &&
    (customerType === 'all' || invoice.data.customerType === customerType) &&
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

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-col md:flex-row w-full items-stretch md:items-center justify-between gap-3">
          <CardTitle className="text-slate-800 font-semibold text-sm lg:text-lg whitespace-nowrap">
            لیست فاکتورها
            <span className="mr-2 text-sm font-normal text-slate-400">
              ({convertToPersianDigits(filtered.length)} از{' '}
              {convertToPersianDigits(invoices.length)} فاکتور)
            </span>
          </CardTitle>

          <div className="w-full flex flex-row flex-wrap justify-end gap-2">
            <div className="relative min-w-0 flex-1 md:flex-none md:w-64">
              <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={filters.search}
                onChange={(e) => setFilters({ search: e.target.value })}
                placeholder="شماره، خریدار، تلفن یا پروژه..."
                className="pr-9 border-slate-200 rounded-lg text-sm bg-white"
              />
            </div>
            <Select
              value={filters.type}
              onValueChange={(type) => setFilters({ type })}
            >
              <SelectTrigger dir="rtl" className={selectTriggerClass}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {TYPE_OPTIONS.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="hover:cursor-pointer"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={filters.kind}
              onValueChange={(kind) =>
                setFilters({ kind: kind as InvoiceFilters['kind'] })
              }
            >
              <SelectTrigger dir="rtl" className={selectTriggerClass}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {KIND_OPTIONS.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="hover:cursor-pointer"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={filters.customerType}
              onValueChange={(customerType) =>
                setFilters({
                  customerType: customerType as InvoiceFilters['customerType'],
                })
              }
            >
              <SelectTrigger dir="rtl" className={selectTriggerClass}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {CUSTOMER_TYPE_OPTIONS.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="hover:cursor-pointer"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

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
