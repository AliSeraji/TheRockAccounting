import type React from 'react';
import type { LucideIcon } from 'lucide-react';
import { CalendarDays, FileText, MapPin, Phone, Tag } from 'lucide-react';
import { convertToPersianDigits } from '~/lib/utils';

interface Props {
  companyName: string;
  companyAddress?: string;
  companyPhone?: string;
  companyMobile?: string;
  invoiceType: string;
  invoiceNumber: string;
  invoiceDate: string;
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
    <div className="flex flex-row justify-between items-center gap-2">
      <span className="w-18 font-bold text-2xs text-slate-900">{label}:</span>
      <span className="w-14 text-2xs text-slate-900">
        {convertToPersianDigits(value)}
      </span>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-brand-50">
        <Icon className="size-3" />
      </span>
    </div>
  );
}

export default function SalesReceiptHeader({
  companyName,
  companyAddress,
  companyPhone,
  companyMobile,
  invoiceType,
  invoiceNumber,
  invoiceDate,
  logo,
}: Props): React.ReactNode {
  const phones = [companyMobile, companyPhone].filter(Boolean).join(' - ');

  return (
    <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      {/* Company info (right) */}
      <div className="flex flex-col gap-3 self-start pt-2">
        <h1 className="text-xs font-bold text-slate-900">{companyName}</h1>
        {companyAddress && (
          <div className="flex items-start gap-2 text-2xs text-slate-700">
            <MapPin className="size-4 shrink-0 text-brand-600" />
            <span>{convertToPersianDigits(companyAddress)}</span>
          </div>
        )}
        {phones && (
          <div className="flex items-center gap-2 text-2xs text-slate-700">
            <Phone className="size-4 shrink-0 text-brand-600" />
            <span dir="ltr">{convertToPersianDigits(phones)}</span>
          </div>
        )}
      </div>

      {/* Logo (center) */}
      <div className="flex justify-center">
        {logo && (
          <img
            src={logo}
            alt={companyName}
            className="h-28 w-auto max-w-52 object-contain"
          />
        )}
      </div>

      {/* Invoice meta (left) */}
      <div className="flex flex-col items-end self-start">
        <div className="flex flex-col gap-2">
          <MetaRow icon={CalendarDays} label="تاریخ" value={invoiceDate} />
          <MetaRow icon={FileText} label="شماره فاکتور" value={invoiceNumber} />
          <MetaRow
            icon={Tag}
            label="نوع فاکتور"
            value={invoiceType || 'فاکتور فروش'}
          />
          <div className="mt-1 flex items-center gap-0.75">
            <div className="flex flex-row w-full items-center">
              <span className="h-px flex-1 bg-brand-400" />
              <span className="size-1.5 rotate-45 bg-brand-600" />
            </div>
            <div className="flex flex-row w-full items-center">
              <span className="size-1.5 rotate-45 bg-brand-600" />
              <span className="h-px flex-1 bg-brand-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
