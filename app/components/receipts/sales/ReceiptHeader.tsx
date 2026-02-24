import type React from 'react';
import { convertToPersianDigits } from '~/lib/utils';

interface Props {
  companyName: string;
  invoiceType: string;
  invoiceNumber: string;
  invoiceDate: string;
  logo: string | null;
}

export default function SalesReceiptHeader({
  invoiceType,
  invoiceNumber,
  invoiceDate,
  logo,
  companyName,
}: Props): React.ReactNode {
  return (
    <div className="flex justify-between items-start mb-2">
      <div className=" text-base font-bold">
        <img src={logo || undefined} className="w-10 h-10 object-fit" />
      </div>

      <div className="text-center flex-1 mx-4">
        <h1 className="text-base font-bold text-black">شرکت {companyName}</h1>
        <h2 className="text-sm font-bold mt-2 text-black">
          {invoiceType || 'فاکتور فروش'}
        </h2>
      </div>

      <div className="text-left space-y-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-black text-xs">شماره:</span>
          <span className="px-1 text-slate-700">
            {convertToPersianDigits(invoiceNumber)}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <span className="text-black text-xs">تاریخ:</span>
          <span className="px-1 text-slate-700">
            {convertToPersianDigits(invoiceDate)}
          </span>
        </div>
      </div>
    </div>
  );
}
