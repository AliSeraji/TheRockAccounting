import { Printer } from 'lucide-react';
import { convertToPersianDigits } from '~/lib/utils';

export default function ReceiptHeader({
  date,
  invoiceNumber,
  companyName,
}: {
  date?: string;
  invoiceNumber?: string;
  companyName?: string;
}): React.ReactNode {
  return (
    <>
      <div className="flex justify-between items-start mb-4">
        <div className="border-2 border-gray-600 px-4 py-3 text-sm font-bold">
          Logo
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
