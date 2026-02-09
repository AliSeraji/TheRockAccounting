import type React from 'react';
import { convertToPersianDigits } from '~/lib/utils';

interface Props {
  buyer: string;
  invoiceType: string;
  invoiceNumber: string;
  invoiceDate: string;
}

export default function SalesReceiptHeader({
  buyer,
  invoiceType,
  invoiceNumber,
  invoiceDate,
}: Props): React.ReactNode {
  return (
    <div className="flex justify-between items-start mb-2">
      <div className="border-2 border-black px-6 py-4 text-base font-bold">
        Logo
      </div>

      <div className="text-center flex-1 mx-4">
        <h1 className="text-base font-bold text-black">شرکت {buyer}</h1>
        <h2 className="text-sm font-bold mt-2 text-black">
          {invoiceType || 'فاکتور فروش'}
        </h2>
      </div>

      <div className="text-left space-y-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-black">شماره:</span>
          <span className="px-1 text-slate-700">
            {convertToPersianDigits(invoiceNumber)}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <span className="text-black">تاریخ:</span>
          <span className="px-1 text-slate-700">
            {convertToPersianDigits(invoiceDate)}
          </span>
        </div>
      </div>
    </div>
  );
}
