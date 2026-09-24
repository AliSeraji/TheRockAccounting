import type React from 'react';
import type { ReceiptProps } from '~/components/invoice/common';
import type { ServiceItem } from '~/store/types';
import SalesInfoBox from './InfoBox';
import SalesReceiptHeader from './ReceiptHeader';
import SalesTable from './Table';

import SalesNote from './Note';
import SalesSignature from './Signature';
import { convertToPersianDigits, persianNumberToText } from '~/lib/utils';
import SalesServicesTable from './ServicesTable';

interface SalesReceiptPageProps extends ReceiptProps {
  services: ServiceItem[];
  serviceStartIndex: number;
  showItemsFooter: boolean;
  defaultNote?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyMobile?: string;
  signature?: string | null;
  seal?: string | null;
  showPageNumbers?: boolean;
}

export default function SalesReceiptsPage({
  data,
  items,
  startIndex,
  isLastPage,
  services,
  serviceStartIndex,
  showItemsFooter,
  pageNumber,
  totalPages,
  logo,
  companyName,
  defaultNote,
  companyAddress,
  companyPhone,
  companyMobile,
  signature,
  seal,
  showPageNumbers = true,
}: SalesReceiptPageProps): React.ReactNode {
  const totalInWords = persianNumberToText(
    convertToPersianDigits(data.totals.totalPaymentAmount)
  );
  return (
    <div
      className="receipt-page receipt-page-a4 bg-white mx-auto shadow-2xl print:shadow-none flex flex-col overflow-hidden *:shrink-0"
      style={{ width: '210mm', height: '297mm', padding: '10mm' }}
      dir="rtl"
    >
      <SalesReceiptHeader
        invoiceType={data.invoiceType}
        invoiceNumber={data.invoiceNumber}
        invoiceDate={data.invoiceDate}
        companyName={companyName}
        companyAddress={companyAddress}
        companyPhone={companyPhone}
        companyMobile={companyMobile}
        logo={logo}
      />

      <SalesInfoBox
        buyer={data.buyer}
        phone={data.phone}
        project={data.project}
        address={data.address}
      />

      {items.length > 0 && (
        <SalesTable
          items={items}
          startIndex={startIndex}
          isLastPage={showItemsFooter}
          totals={data.totals}
        />
      )}

      {services.length > 0 && (
        <>
          <div className="my-3 flex items-center gap-4">
            <span className="h-px flex-1 bg-brand-400" />
            <span className="text-2xs font-bold text-slate-900">خدمات سنگ</span>
            <span className="h-px flex-1 bg-brand-400" />
          </div>
          <SalesServicesTable
            services={services}
            startIndex={serviceStartIndex}
            isLastPage={isLastPage}
            totalServicesAmount={data.totals.totalServicesAmount}
          />
        </>
      )}

      <SalesNote
        discount={data.discount}
        grossAmount={data.totals.totalAmount + data.totals.totalServicesAmount}
        tax={data.tax}
        received={data.received}
        total={data.totals.totalPaymentAmount}
        note={defaultNote}
        additionalNote={data.additionalNote}
      />

      <div className="flex flex-row w-full justify-center text-2xs">
        <p className="py-2 rounded-sm bg-brand-100 mb-1 mt-1 p-2">
          <span className="font-bold">مبلغ قابل پرداخت: </span>
          <span className="text-slate-700">{totalInWords}</span>
        </p>
      </div>

      <div className="mt-auto">
        <SalesSignature signature={signature} seal={seal} />

        {showPageNumbers && (
          <div className="text-center text-2xs text-gray-500 mt-4">
            صفحه {convertToPersianDigits(pageNumber)} از{' '}
            {convertToPersianDigits(totalPages)}
          </div>
        )}
      </div>
    </div>
  );
}
