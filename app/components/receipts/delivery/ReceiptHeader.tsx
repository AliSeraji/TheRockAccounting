import { Printer } from 'lucide-react';

export default function ReceiptHeader({
  date,
  invoiceNumber,
}: {
  date: string;
  invoiceNumber: string;
}): React.ReactNode {
  return (
    <>
      <div className="flex justify-end mb-2 no-print">
        <div className="border-2 border-gray-400 p-2 rounded">
          <Printer className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div className="border-2 border-gray-600 px-4 py-3 text-lg font-bold">
          Logo
        </div>

        <div className="text-center flex-1 mx-6">
          <h1 className="text-xl font-bold text-gray-900">شرکت man</h1>
          <h2 className="text-lg font-bold mt-1 text-gray-800">
            رسید تحویل بار
          </h2>
        </div>

        <div className="text-left space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">شماره:</span>
            <span className="font-bold border-b border-gray-400 px-3">
              {invoiceNumber}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">تاریخ:</span>
            <span className="font-bold border-b border-gray-400 px-3">
              {date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
