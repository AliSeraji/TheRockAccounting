import type { ReactNode } from 'react';
import RequestReceiptHeader from './ReceiptHeader';
import type { ReceiptProps } from '~/components/invoice/common';
import CustomerInfoBox from './CustomerInfoBox';
import UpperTable from './UpperTable/Table';
import LowerTable from './LowerTable/Table';
import { convertToPersianDigits } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';

interface RequestReceiptPageProps extends ReceiptProps {
  services: ServiceItem[];
}

export default function RequestReceiptPage({
  data,
  items,
  services,
  startIndex,
  pageNumber,
  totalPages,
  logo,
  companyName,
}: RequestReceiptPageProps): ReactNode {
  return (
    <div
      className="receipt-page receipt-page-a5 bg-white mx-auto shadow-2xl print:shadow-none mb-4"
      style={{
        width: '138mm',
        minHeight: '200mm',
        padding: '8mm 5mm',
      }}
      dir="rtl"
    >
      <RequestReceiptHeader data={data} logo={logo} companyName={companyName} />
      <CustomerInfoBox
        buyer={data.buyer}
        phone={data.phone}
        project={data.project}
        address={data.address}
      />

      {items.length > 0 && <UpperTable items={items} startIndex={startIndex} />}
      {services.length > 0 && (
        <LowerTable services={services} startIdx={startIndex} />
      )}

      <div className="text-center text-[10px] text-gray-500 mt-2">
        صفحه {convertToPersianDigits(pageNumber)} از{' '}
        {convertToPersianDigits(totalPages)}
      </div>
    </div>
  );
}
