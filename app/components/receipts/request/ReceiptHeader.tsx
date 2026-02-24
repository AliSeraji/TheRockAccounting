import type { ReactNode } from 'react';
import type { Props } from '../types';
import { convertToPersianDigits } from '~/lib/utils';
import type { InvoiceDataType } from '~/store/types';

export default function RequestReceiptHeader({
  companyName,
  data,
  logo,
}: {
  companyName: string;
  data: InvoiceDataType;
  logo: string | null;
}): ReactNode {
  return (
    <div className="flex justify-between items-start mb-2">
      <div className=" px-1 py-1 text-xs font-bold">
        <img src={logo || undefined} className="w-10 h-10 object-fit" />
      </div>

      <div className="text-center flex-1 mx-6">
        <h1 className="text-xs font-bold text-gray-900">شرکت {companyName}</h1>
        <h2 className="text-xs font-bold mt-1 text-gray-800">درخواست سنگ</h2>
      </div>

      <div className="text-left space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">شماره:</span>
          <span className="font-bold  px-3">
            {convertToPersianDigits(data.invoiceNumber) || ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">تاریخ:</span>
          <span className="font-bold px-3">
            {convertToPersianDigits(data.invoiceDate) || ''}
          </span>
        </div>
      </div>
    </div>
  );
}
