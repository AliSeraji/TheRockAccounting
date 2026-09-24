import type React from 'react';
import type { LucideIcon } from 'lucide-react';
import { CalendarDays, FileText } from 'lucide-react';
import { cn, convertToPersianDigits } from '~/lib/utils';

interface Props {
  date?: string;
  invoiceNumber?: string;
  companyName?: string;
  logo: string | null;
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}): React.ReactNode {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <span className="w-10 text-2xs font-bold text-slate-900">{label}:</span>
      <span className="w-14 text-2xs text-slate-900">
        {convertToPersianDigits(value)}
      </span>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-brand-50">
        <Icon className="size-2.5" />
      </span>
    </div>
  );
}

function Divider({ className }: { className?: string }): React.ReactNode {
  return (
    <div className={cn('flex w-full items-center gap-0.75', className)}>
      <div className="flex flex-1 flex-row items-center">
        <span className="h-px flex-1 bg-brand-400" />
        <span className="size-1.5 rotate-45 bg-brand-600" />
      </div>
      <div className="flex flex-1 flex-row items-center">
        <span className="size-1.5 rotate-45 bg-brand-600" />
        <span className="h-px flex-1 bg-brand-400" />
      </div>
    </div>
  );
}

export default function ReceiptHeader({
  date,
  invoiceNumber,
  companyName,
  logo,
}: Props): React.ReactNode {
  return (
    <div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-2 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <div className="flex flex-col gap-1.5 self-start pt-1">
        <h1 className="text-xs font-bold text-slate-900">شرکت {companyName}</h1>
        <span className="w-fit rounded-sm bg-brand-100 px-2 py-1 text-2xs font-bold text-brand-950">
          رسید تحویل بار
        </span>
      </div>

      <div className="row-span-2 flex justify-center">
        {logo && (
          <img
            src={logo}
            alt={companyName}
            className="h-16 w-auto max-w-32 object-contain"
          />
        )}
      </div>

      <div className="flex flex-col items-end self-start">
        <div className="flex flex-col gap-2">
          <MetaRow icon={FileText} label="شماره" value={invoiceNumber || ''} />
          <MetaRow icon={CalendarDays} label="تاریخ" value={date || ''} />
        </div>
      </div>

      <Divider className="col-start-1 row-start-2" />
      <Divider className="col-start-3 row-start-2" />
    </div>
  );
}
