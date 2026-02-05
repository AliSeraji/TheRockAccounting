import InfoBox from './InfoBox';
import { Note } from './Note';
import ReceiptHeader from './ReceiptHeader';
import { Signature } from './Signature';
import ReceiptTable from './Table';
import { type ReceiptProps } from './../../invoice/common';

export default function ReceiptPage({
  data,
  items,
  startIndex,
  isLastPage,
  pageNumber,
  totalPages,
}: ReceiptProps): React.ReactNode {
  return (
    <div
      className="receipt-page receipt-page-a5 bg-white mx-auto shadow-2xl mb-8"
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
