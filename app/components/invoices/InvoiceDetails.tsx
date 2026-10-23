import { useState, type ReactNode } from 'react';
import { FileText, Lock, Pencil } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import ReceiptOutputDialog from '../receipts/dialogs/receiptOutputDialog';
import { ReceiptType, type ReceiptPreview } from '../receipts/types';
import { NoteList } from '../receipts/NoteList';
import { EMPTY } from '../data-table/constants';
import {
  cn,
  convertToPersianDigits,
  formatRialAmount,
  persianNumberToText,
} from '~/lib/utils';
import { isLocked } from '~/store/invoices/helpers';
import type { SavedInvoice } from '~/store/invoices/types';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import type { InvoiceFormData } from '~/store/types';
import { useCustomersStore } from '~/store/customers/useCustomers';
import { CUSTOMER_TYPE_LABELS } from './common';
import InvoiceViewHeader from './InvoiceViewHeader';
import DetailsTable from './details/DetailsTable';
import {
  blockItemColumns,
  serviceColumns,
  stoneItemColumns,
} from './details/columns';

const rial = (value: number | string): string =>
  `${formatRialAmount(convertToPersianDigits(value))} ریال`;

function DetailCard({
  title,
  className,
  contentClassName = 'p-1 lg:p-4',
  children,
}: {
  title: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <Card
      className={cn('border-slate-200 bg-white/90 backdrop-blur', className)}
    >
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800 text-sm lg:text-lg">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

function Field({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}): ReactNode {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-800 wrap-break-word">
        {value ? convertToPersianDigits(value) : EMPTY}
      </span>
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}): ReactNode {
  return (
    <div className="flex justify-between items-center gap-4 text-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
}

function PaymentSummary({ data }: { data: InvoiceFormData }): ReactNode {
  const { totals } = data;
  const grossAmount = totals.totalAmount + totals.totalServicesAmount;
  const taxPercent = parseFloat(data.tax || '0') || 0;
  const taxAmount = Math.round((taxPercent * grossAmount) / 100);

  return (
    <DetailCard title="خلاصه مالی" contentClassName="p-6 space-y-3">
      <SummaryRow label="جمع اقلام" value={rial(totals.totalAmount)} />
      <SummaryRow label="جمع خدمات" value={rial(totals.totalServicesAmount)} />
      <SummaryRow label="تخفیف" value={rial(data.discount || '0')} />
      <SummaryRow
        label={`مالیات (${convertToPersianDigits(taxPercent)}٪)`}
        value={rial(taxAmount)}
      />
      <SummaryRow label="دریافتی" value={rial(data.received || '0')} />
      <div className="border-t border-slate-200 pt-4">
        <div className="flex justify-between items-center text-base lg:text-lg font-bold text-slate-800">
          <span>مبلغ قابل پرداخت:</span>
          <span className="text-brand-800">
            {formatRialAmount(
              convertToPersianDigits(totals.totalPaymentAmount)
            )}
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          {persianNumberToText(
            convertToPersianDigits(totals.totalPaymentAmount)
          )}
        </p>
      </div>
    </DetailCard>
  );
}

export default function InvoiceDetails({
  invoice,
}: {
  invoice: SavedInvoice;
}): ReactNode {
  const openList = useInvoicesStore((state) => state.openList);
  const startEditing = useInvoicesStore((state) => state.startEditing);
  const [preview, setPreview] = useState<ReceiptPreview | null>(null);
  const { data } = invoice;
  const customer = useCustomersStore((state) =>
    state.customers.find((c) => c.id === data.customerId)
  );

  return (
    <div className="w-full space-y-6">
      <InvoiceViewHeader
        invoice={invoice}
        title={`فاکتور ${convertToPersianDigits(data.invoiceNumber)}`}
        onBack={openList}
      >
        <Button
          variant="outline"
          onClick={() => setPreview({ invoice, receipt: ReceiptType.Sales })}
          className="gap-2 border-brand-300 text-brand-900 hover:bg-brand-50 hover:cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          نمایش رسیدها
        </Button>
        {isLocked(invoice) ? (
          <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">
            <Lock className="w-3.5 h-3.5" />
            فاکتور فروش قابل ویرایش نیست
          </span>
        ) : (
          <Button
            onClick={() => startEditing(invoice.id)}
            className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
            ویرایش
          </Button>
        )}
      </InvoiceViewHeader>

      <DetailCard title="اطلاعات فاکتور" contentClassName="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field label="عنوان" value={data.invoiceType} />
          <Field label="شماره فاکتور" value={data.invoiceNumber} />
          <Field
            label="نوع مشتری"
            value={
              customer
                ? `${CUSTOMER_TYPE_LABELS[data.customerType]} (کد ${customer.code})`
                : CUSTOMER_TYPE_LABELS[data.customerType]
            }
          />
          <Field label="نام شخص حقیقی / حقوقی" value={data.buyer} />
          <Field label="شناسه ملی / کد اقتصادی" value={data.nationalId} />
          <Field label="تاریخ" value={data.invoiceDate} />
          <Field label="پروژه" value={data.project} />
          <Field label="تلفن" value={data.phone} />
          <Field
            label="آدرس"
            value={data.address}
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </DetailCard>

      <DetailCard title="اقلام فاکتور">
        {invoice.kind === 'stone' ? (
          <DetailsTable
            columns={stoneItemColumns(invoice.data.totals)}
            rows={invoice.data.items}
            footerLabel="جمع فاکتور"
            footerSpan={4}
          />
        ) : (
          <DetailsTable
            columns={blockItemColumns(invoice.data.totals)}
            rows={invoice.data.items}
            footerLabel="جمع فاکتور"
            footerSpan={6}
          />
        )}
      </DetailCard>

      {data.services.length > 0 && (
        <DetailCard title="خدمات">
          <DetailsTable
            columns={serviceColumns(data.totals.totalServicesAmount)}
            rows={data.services}
            footerLabel="جمع خدمات"
            footerSpan={5}
          />
        </DetailCard>
      )}

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <DetailCard
          title="توضیحات"
          className="lg:col-span-2"
          contentClassName="p-6 space-y-4 text-sm"
        >
          <div className="space-y-2">
            <p className="text-xs text-slate-500">توضیحات (فقط در فاکتور)</p>
            {data.additionalNote ? (
              <NoteList text={data.additionalNote} className="text-slate-800" />
            ) : (
              <p className="text-slate-400">{EMPTY}</p>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-500">
              توضیحات (نمایش در رسید تحویل)
            </p>
            {data.secondAdditionalNote ? (
              <NoteList
                text={data.secondAdditionalNote}
                className="text-slate-800"
              />
            ) : (
              <p className="text-slate-400">{EMPTY}</p>
            )}
          </div>
        </DetailCard>
        <PaymentSummary data={data} />
      </div>

      <ReceiptOutputDialog preview={preview} onPreviewChange={setPreview} />
    </div>
  );
}
