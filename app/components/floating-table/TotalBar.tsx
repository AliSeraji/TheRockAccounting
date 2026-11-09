import type { ReactNode } from 'react';
import { Card } from '../ui/card';
import type { TotalStat } from '../invoice/row-cards/RowCardTotals';
import { cn } from '~/lib/utils';

// The totals under a floating table: one slim dark bar, from the same stats
// as the phone totals box. The title opens it, the plain stats follow, and
// the highlighted stat (the amount) closes it at the left end in RTL.
export default function TotalBar({
  title = 'جمع فاکتور',
  stats,
}: {
  title?: string;
  stats: TotalStat[];
}): ReactNode {
  const amount = stats.find((stat) => stat.highlight);
  const rest = stats.filter((stat) => !stat.highlight);

  return (
    <Card className="mt-1 flex min-h-12 flex-row items-center gap-6 rounded-xl border-transparent bg-slate-800 px-5 py-2 shadow-none">
      <span className="text-[13px] font-bold text-brand-300">{title}</span>
      <dl className="m-0 flex flex-1 items-center">
        {rest.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              'flex items-baseline gap-1.5',
              index > 0 && 'ms-5 border-s border-slate-600 ps-5'
            )}
          >
            <dt className="text-xs text-brand-300">{stat.label}</dt>
            <dd className="m-0 text-sm font-medium text-white">{stat.value}</dd>
          </div>
        ))}
        {amount && (
          <div className="ms-auto flex items-baseline">
            <dt className="sr-only">{amount.label}</dt>
            <dd className="m-0 text-[17px] font-bold text-white">
              {amount.value}{' '}
              <span className="text-xs font-normal text-brand-300">ریال</span>
            </dd>
          </div>
        )}
      </dl>
    </Card>
  );
}
