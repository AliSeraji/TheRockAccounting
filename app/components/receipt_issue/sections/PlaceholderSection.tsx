import type { ReactNode } from 'react';
import { Construction } from 'lucide-react';
import { cn } from '~/lib/utils';
import { ACCENT, ICONS_BY_NAME } from '../common';

interface PlaceholderSectionProps {
  title: string;
  desc: string;
  iconName: string;
}

export default function PlaceholderSection({
  title,
  desc,
  iconName,
}: PlaceholderSectionProps): ReactNode {
  const Icn = ICONS_BY_NAME[iconName] ?? Construction;
  return (
    <div className="flex flex-col gap-5 w-full lg:min-w-157.5 px-2">
      <div
        className={cn(
          'rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-md overflow-hidden',
          'shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-200/70 bg-linear-to-l from-slate-50 to-white">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`,
            }}
          >
            <Icn className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-800">{title}</h3>
            <p className="text-xs text-slate-500">{desc}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`,
            }}
          >
            <Construction className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-slate-700">
            این بخش به‌زودی در دسترس قرار می‌گیرد
          </p>
          <p className="text-xs text-slate-500 max-w-sm">
            محتوای این تب هنوز آماده نشده است. پس از تکمیل، در همین جا نمایش
            داده خواهد شد.
          </p>
        </div>
      </div>
    </div>
  );
}
