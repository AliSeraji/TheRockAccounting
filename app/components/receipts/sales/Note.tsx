import type React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BadgePercent,
  HandCoins,
  Landmark,
  NotepadText,
  Receipt,
  Wallet,
} from 'lucide-react';
import {
  convertToPersianDigits,
  formatRialAmount,
  persianNumberToText,
} from '~/lib/utils';
import { NoteList } from '~/components/receipts/NoteList';
import { DEFAULT_INVOICE_NOTE } from '~/store/settings/sections/invoiceState';

interface Props {
  discount: string;
  grossAmount: number;
  tax: string;
  received: string;
  total: number;
  note?: string;
  additionalNote?: string;
}

const rial = (amount: number | string): string =>
  formatRialAmount(convertToPersianDigits(amount));

function TotalRow({
  icon: Icon,
  label,
  amount,
  className = '',
  highlighted = false,
}: {
  icon: LucideIcon;
  label: string;
  amount: number | string;
  className?: string;
  highlighted?: boolean;
}): React.ReactNode {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 ${className}`}>
      <Icon
        className={`size-3.5 shrink-0 ${highlighted ? 'text-white' : 'text-brand-600'}`}
      />
      <span
        className={`w-24  ${highlighted ? 'text-white font-normal' : 'text-slate-900 font-bold'}`}
      >
        {label}:
      </span>
      <span className="flex-1 text-left" dir="ltr">
        {rial(amount)}
      </span>
      <span className={highlighted ? 'text-white' : 'text-slate-700'}>
        ریال
      </span>
    </div>
  );
}

export default function SalesNote({
  discount,
  grossAmount,
  tax,
  received,
  total,
  note,
  additionalNote,
}: Props): React.ReactNode {
  const noteContent = note !== undefined ? note : DEFAULT_INVOICE_NOTE;
  const discountAmount = parseFloat(discount || '0') || 0;
  const taxAmount = Math.round(
    ((parseFloat(tax || '0') || 0) * grossAmount) / 100
  );
  const receivedAmount = parseFloat(received || '0') || 0;
  

  return (
    <div className="mb-2 grid grid-cols-[1fr_38%] items-start gap-4 text-2xs text-slate-900 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <div className="flex flex-col rounded-md border border-slate-200 px-3">
        <div className="flex items-center gap-1.5 border-b border-slate-200 py-2 font-bold">
          <NotepadText className="size-3.5 text-brand-600" />
          توضیحات
        </div>
        <NoteList
          text={additionalNote}
          className="py-2 leading-relaxed text-slate-900"
        />
        <NoteList
          text={noteContent}
          className="py-2 leading-relaxed text-slate-700 border-b border-slate-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="overflow-hidden rounded-md border border-slate-200 divide-y divide-slate-200">
          <TotalRow icon={Receipt} label="جمع فاکتور" amount={grossAmount} />
          <TotalRow icon={BadgePercent} label="تخفیف" amount={discountAmount} />
          <TotalRow icon={Landmark} label="مالیات" amount={taxAmount} />
          <TotalRow icon={HandCoins} label="پرداختی" amount={receivedAmount} />
          <TotalRow
            icon={Wallet}
            label="مبلغ قابل پرداخت"
            amount={total}
            className="bg-brand-700 py-2 font-bold text-white"
            highlighted
          />
        </div>
      </div>
    </div>
  );
}
