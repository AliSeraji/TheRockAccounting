import type React from 'react';
import { convertToPersianDigits } from '~/lib/utils';

interface Props {
  buyer: string;
  phone: string;
  project: string;
  address: string;
}

export default function SalesInfoBox({
  buyer,
  phone,
  project,
  address,
}: Props): React.ReactNode {
  return (
    <div className="border-2 border-gray-400 rounded-lg p-2 pb-1 mb-4 bg-gray-50 text-xs">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row w-full ">
          <div className="flex flex-row min-w-4/6 w-auto items-start gap-1">
            <span className="text-gray-800">نام شخص حقیقی / حقوقی:</span>
            <span className=" flex-1 pb-1">
              {convertToPersianDigits(buyer || '')}
            </span>
          </div>
          <div className="flex flex-row w-auto items-start gap-1">
            <span className="text-gray-800">تلفن:</span>
            <span className=" flex-1 pb-1">
              {convertToPersianDigits(phone)}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <span className="text-gray-800">پروژه:</span>
          <span className=" flex-1 pb-1">
            {convertToPersianDigits(project || '')}
          </span>
        </div>
        <div className="flex items-start gap-1">
          <span className="text-gray-800">آدرس:</span>
          <span className=" flex-1 text-start wrap-break-word overflow-hidden">
            {convertToPersianDigits(address || '')}
          </span>
        </div>
      </div>
    </div>
  );
}
