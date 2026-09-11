import type React from 'react';
import type { ReceiptProps } from '~/components/invoice/common';
import type { ServiceItem } from '~/store/types';
import SalesInfoBox from './InfoBox';
import SalesReceiptHeader from './ReceiptHeader';
import SalesTable from './Table';

import SalesNote from './Note';
import SalesSignature from './Signature';
import PriceBox from './PriceBox';
import { convertToPersianDigits } from '~/lib/utils';
import { AdditionalNote } from './AdditionalNote';
import SalesServicesTable from './ServicesTable';

interface SalesReceiptPageProps extends ReceiptProps {
  services: ServiceItem[];
  serviceStartIndex: number;
  showItemsFooter: boolean;
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
}: SalesReceiptPageProps): React.ReactNode {
  return (
    <div
      className="receipt-page receipt-page-a4 bg-white mx-auto shadow-2xl print:shadow-none"
      style={{ width: '210mm', minHeight: '297mm', padding: '10mm' }}
      dir="rtl"
    >
      <SalesReceiptHeader
        invoiceType={data.invoiceType}
        invoiceNumber={data.invoiceNumber}
        invoiceDate={data.invoiceDate}
        companyName={companyName}
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
        <SalesServicesTable
          services={services}
          startIndex={serviceStartIndex}
          isLastPage={isLastPage}
          totalServicesAmount={data.totals.totalServicesAmount}
        />
      )}

      <AdditionalNote additionalNote={data.additionalNote} />

      <SalesNote
        discount={data.discount}
        tax={data.tax}
        received={data.received}
      />

      <PriceBox total={data.totals.totalPaymentAmount} />

      <SalesSignature />

      <div className="text-center text-xs text-gray-500 mt-4">
        صفحه {convertToPersianDigits(pageNumber)} از{' '}
        {convertToPersianDigits(totalPages)}
      </div>
    </div>
  );
}
