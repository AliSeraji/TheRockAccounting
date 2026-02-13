import type React from 'react';
import { convertToPersianDigits } from '~/lib/utils';

export default function ReceiptHeader({
  date,
  invoiceNumber,
  companyName,
  logo,
}: {
  date?: string;
  invoiceNumber?: string;
  companyName?: string;
  logo: string | null;
}): React.ReactNode {
  return (
    <>
      <div className="flex justify-between items-start mb-4">
        <div className=" text-sm font-bold">
          <img src={logo || undefined} className="w-10 h-10 object-fit" />
        </div>

        <div className="text-center flex-1 mx-6">
          <h1 className="text-sm font-bold text-gray-900">
            شرکت {companyName}
          </h1>
          <h2 className="text-sm font-bold mt-1 text-gray-800">
            رسید تحویل بار
          </h2>
        </div>

        <div className="text-left space-y-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-gray-600">شماره:</span>
            <span className="border-gray-400 px-0.5">
              {convertToPersianDigits(invoiceNumber || '')}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600">تاریخ:</span>
            <span className="border-gray-400 px-0.5">
              {convertToPersianDigits(date || '')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
