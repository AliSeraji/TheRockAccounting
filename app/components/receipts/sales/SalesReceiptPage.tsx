import type { ReceiptProps } from '~/components/invoice/common';
import SalesInfoBox from './InfoBox';
import SalesReceiptHeader from './ReceiptHeader';
import SalesTable from './Table';

import SalesNote from './Note';
import SalesSignature from './Signature';
import PriceBox from './FInalBox';

export default function SalesReceiptsPage({
  data,
  items,
  startIndex,
  isLastPage,
  pageNumber,
  totalPages,
}: ReceiptProps): React.ReactNode {
  return (
    <div
      className="receipt-page receipt-page-a4 bg-white mx-auto shadow-2xl print:shadow-none"
      style={{ width: '210mm', minHeight: '297mm', padding: '15mm' }}
      dir="rtl"
    >
      <SalesReceiptHeader
        buyer={data.buyer}
        invoiceType={data.invoiceType}
        invoiceNumber={data.invoiceNumber}
        invoiceDate={data.invoiceDate}
      />

      <SalesInfoBox
        buyer={data.buyer}
        phone={data.phone}
        project={data.project}
        address={data.address}
      />

      <SalesTable
        items={items}
        startIndex={startIndex}
        isLastPage={isLastPage}
        totals={data.totals}
      />

      <SalesNote
        description={data.description}
        discount={data.discount}
        tax={data.tax}
        received={data.received}
      />

      <PriceBox total={data.totals.totalPaymentAmount} />

      <SalesSignature />

      <div className="text-center text-xs text-gray-500 mt-4">
        صفحه {pageNumber} از {totalPages}
      </div>
    </div>
  );
}
