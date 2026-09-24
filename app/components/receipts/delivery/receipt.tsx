import type React from 'react';
import InfoBox from './InfoBox';
import { Note } from './Note';
import ReceiptHeader from './ReceiptHeader';
import { Signature } from './Signature';
import ReceiptTable from './Table';
import { type ReceiptProps } from './../../invoice/common';
import { convertToPersianDigits } from '~/lib/utils';
import { AdditionalNote } from './AdditionalNote';

export default function ReceiptPage({
  data,
  items,
  startIndex,
  isLastPage,
  pageNumber,
  totalPages,
  logo,
  companyName,
}: ReceiptProps): React.ReactNode {
  return (
    <div
      className="receipt-page receipt-page-a5 bg-white mx-auto shadow-2xl print:shadow-none flex flex-col overflow-hidden *:shrink-0"
      style={{
        width: '138mm',
        height: '200mm',
        padding: '8mm 5mm',
      }}
      dir="rtl"
    >
      <ReceiptHeader
        date={data.invoiceDate}
        invoiceNumber={data.invoiceNumber}
        companyName={companyName}
        logo={logo}
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

      <AdditionalNote additionalNote={data.secondAdditionalNote} />

      <Note />

      <div className="mt-auto">
        <Signature />

        <div className="text-center text-2xs text-gray-500 mt-4">
          صفحه {convertToPersianDigits(pageNumber)} از{' '}
          {convertToPersianDigits(totalPages)}
        </div>
      </div>
    </div>
  );
}
