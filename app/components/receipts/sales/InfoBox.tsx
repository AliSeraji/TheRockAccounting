import type React from 'react';
import { convertToPersianDigits } from '~/lib/utils';

interface Props {
  buyer: string;
  phone: string;
  project: string;
  address: string;
  nationalId?: string;
}

function InfoRow({
  label,
  value,
  className = '',
}: {
  label: string;
  value?: string;
  className?: string;
}): React.ReactNode {
  return (
    <div className={`flex flex-row w-full justify-between gap-2 ${className}`}>
      <span className="whitespace-nowrap font-bold text-slate-900">
        {label}:
      </span>
      <span className="flex-1 wrap-break-word overflow-hidden text-slate-700">
        {convertToPersianDigits(value || '')}
      </span>
    </div>
  );
}

export default function SalesInfoBox({
  buyer,
  phone,
  project,
  address,
  nationalId,
}: Props): React.ReactNode {
  return (
    <div className="mb-4 grid grid-cols-[3fr_1.5fr] gap-x-8 gap-y-2.5 px-1 text-2xs">
      <InfoRow label="نام شخص/مشتری" value={buyer} />
      <InfoRow label="شناسه ملی / کد اقتصادی" value={nationalId} />
      <InfoRow label="پروژه" value={project} />
      <InfoRow label="شماره تماس" value={phone} />
      <InfoRow label="آدرس" value={address} className="col-span-2" />
    </div>
  );
}
