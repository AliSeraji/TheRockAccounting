import type { ReactNode } from 'react';
import RequestReceiptHeader from './ReceiptHeader';
import type { ReceiptProps } from '~/components/invoice/common';
import CustomerInfoBox from './CustomerInfoBox';
import UpperTable from './UpperTable/Table';
import LowerTable from './LowerTable/Table';
import { convertToPersianDigits } from '~/lib/utils';

export default function RequestReceiptPage({
  data,
  items,
  startIndex,
  isLastPage,
  pageNumber,
  totalPages,
}: ReceiptProps): ReactNode {
  return (
    <div
      className="bg-white mx-auto shadow-2xl print:shadow-none mb-4"
      style={{
        width: '138mm',
        minHeight: '200mm',
        padding: '8mm 5mm',
      }}
      dir="rtl"
    >
      <RequestReceiptHeader data={data} />
      <CustomerInfoBox
        buyer={data.buyer}
        phone={data.phone}
        project={data.project}
        address={data.address}
      />

      <UpperTable items={items} startIndex={startIndex} />
      <LowerTable items={items} startIdx={startIndex} />

      <div className="text-center text-[10px] text-gray-500 mt-2">
        صفحه {convertToPersianDigits(pageNumber)} از{' '}
        {convertToPersianDigits(totalPages)}
      </div>
    </div>
  );
}
