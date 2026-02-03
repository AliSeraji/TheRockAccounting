import type { InvoiceData } from '../types';
import InfoBox from './InfoBox';
import { Note } from './Note';
import ReceiptHeader from './ReceiptHeader';
import { Signature } from './Signature';
import ReceiptTable from './Table';

interface ReceiptPageProps {
  data: InvoiceData;
  items: InvoiceData['items'];
  startIndex: number;
  isLastPage: boolean;
  pageNumber: number;
  totalPages: number;
}

export default function ReceiptPage({
  data,
  items,
  startIndex,
  isLastPage,
  pageNumber,
  totalPages,
}: ReceiptPageProps): React.ReactNode {
  return (
    <div
      className="receipt-page bg-white mx-auto shadow-2xl mb-8"
      style={{
        width: '200mm',
        minHeight: '138mm',
        padding: '5mm 8mm',
      }}
    >
      <ReceiptHeader
        date={data.invoiceDate}
        invoiceNumber={data.invoiceNumber}
        companyName={data?.buyer}
      />

      <InfoBox
        buyer={data.buyer}
        project={data.project}
        address={data.address}
      />

      <ReceiptTable
        items={items}
        startIndex={startIndex}
        isLastPage={isLastPage}
        totalArea={data.totals.totalArea}
      />

      <Note />
      <Signature />

      <div className="text-center text-xs text-gray-500 mt-4">
        صفحه {pageNumber} از {totalPages}
      </div>
    </div>
  );
}
