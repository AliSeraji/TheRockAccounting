import type React from 'react';
import { convertToPersianDigits, persianNumberToText } from '~/lib/utils';

export default function PriceBox({
  total,
}: {
  total: number;
}): React.ReactNode {
  return (
    <div className="border-2 border-gray-400 rounded-lg p-2 mb-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-gray-800 text-xs">
            مبلغ قابل پرداخت
          </span>
        </div>
        <div className="text-center">
          <span className="text-xs text-gray-800">
            {persianNumberToText(convertToPersianDigits(total))}
          </span>
        </div>
        <div className="text-xs font-bold text-gray-800">
          {convertToPersianDigits(total)}
        </div>
      </div>
    </div>
  );
}
