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
    <div className="flex flex-col relative">
      <div className="flex flex-row w-full absolute top-0 left-0 h-full justify-content">
        <div className="text-center flex-1 mx-4">
          <h2 className="text-sm font-bold mt-2 text-black">
            {invoiceType || 'فاکتور فروش'}
          </h2>
          <h1 className="text-base font-bold text-black">{companyName}</h1>
        </div>
      </div>
      <div className="flex justify-between items-start mb-2">
        <div className=" text-base font-bold">
          <img
            src={logo || undefined}
            className="h-20 w-auto max-w-50 object-contain"
          />
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
    </div>
  );
}
