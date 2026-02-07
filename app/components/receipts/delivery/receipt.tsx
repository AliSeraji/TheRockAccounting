import InfoBox from './InfoBox';
import { Note } from './Note';
import ReceiptHeader from './ReceiptHeader';
import { Signature } from './Signature';
import ReceiptTable from './Table';
import { type ReceiptProps } from './../../invoice/common';
import { convertToPersianDigits } from '~/lib/utils';

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
      className="receipt-page receipt-page-a5 bg-white mx-auto shadow-2xl mb-2"
      style={{
        width: '138mm',
        minHeight: '200mm',
        padding: '8mm 5mm',
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

      <div className="text-center text-[10px] text-gray-500 mt-2">
        صفحه {convertToPersianDigits(pageNumber)} از{' '}
        {convertToPersianDigits(totalPages)}
      </div>
    </div>
  );
}
