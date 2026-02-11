import type { ReactNode } from 'react';
import { convertToPersianDigits } from '~/lib/utils';

interface CustomerInfoBoxProps {
  buyer: string;
  phone: string;
  project: string;
  address: string;
}

export default function CustomerInfoBox({
  buyer,
  phone,
  project,
  address,
}: CustomerInfoBoxProps): ReactNode {
  return (
    <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50 text-sm">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">نام شرکت/خانم/آقای:</span>
          <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
            {buyer || 'خریدار'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">شماره موبایل:</span>
          <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
            {convertToPersianDigits(phone)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">پروژه:</span>
          <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
            {project}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">آدرس:</span>
          <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
            {convertToPersianDigits(address)}
          </span>
        </div>
      </div>
    </div>
  );
}
