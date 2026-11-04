import type { ReactNode } from 'react';
import { Card } from '../../ui/card';
import { cn, convertToPersianDigits } from '~/lib/utils';

export interface TotalStat {
  label: string;
  value: string;
  highlight?: boolean;
}

// The totals under the row cards, in place of the table's footer row.
export default function RowCardTotals({
  title = 'جمع فاکتور',
  rowCount,
  stats,
}: {
  title?: string;
  rowCount: number;
  stats: TotalStat[];
}): ReactNode {
  return (
    <Card className="flex flex-col gap-2 rounded-xl border-slate-300 bg-slate-100 p-3 shadow-none">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-slate-800">
          {title}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 text-xs text-slate-600">
          {convertToPersianDigits(rowCount)} ردیف
        </span>
      </div>
      {/* With three stats the amount column is wider: it holds the longest
          number. A lone stat (services) takes the whole row. */}
      <dl
        className={cn(
          'm-0 grid gap-2',
          stats.length > 1
            ? 'grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)]'
            : 'grid-cols-1'
        )}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex min-w-0 flex-col gap-0.5">
            <dt className="text-[11.5px] text-slate-600">{stat.label}</dt>
            <dd
              className={cn(
                'm-0 text-[15px] font-bold',
                stat.highlight ? 'text-brand-900' : 'text-slate-800'
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
