import type React from 'react';
import { convertToPersianDigits, formatRialAmount } from '~/lib/utils';
import { DEFAULT_INVOICE_NOTE } from '~/store/settings/sections/invoiceState';

interface Props {
  discount: string;
  tax: string;
  received: string;
  note?: string;
}

export default function SalesNote({
  discount,
  tax,
  received,
  note,
}: Props): React.ReactNode {
  const noteContent = note !== undefined ? note : DEFAULT_INVOICE_NOTE;

  return (
    <div className="border-2 border-gray-400 rounded-lg p-4 mb-2 bg-gray-50">
      <div className="flex gap-8">
        <div className="flex-1">
          {noteContent ? (
            <p className="text-xs leading-relaxed text-gray-700">
              <span className="font-bold text-black">توضیحات: </span>
              {noteContent}
            </p>
          ) : null}
        </div>
        <div className="space-y-2 text-left min-w-30 text-xs">
          <div className="flex justify-between">
            <span className="text-black">تخفیف</span>
            <span className="font-semibold">
              {'% ' + convertToPersianDigits(discount || '*')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">مالیات</span>
            <span className="font-semibold">
              {'% ' + convertToPersianDigits(tax || '*')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">دریافتی</span>
            <span className="font-semibold">
              {'ریال ' +
                formatRialAmount(convertToPersianDigits(received || '*'))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
