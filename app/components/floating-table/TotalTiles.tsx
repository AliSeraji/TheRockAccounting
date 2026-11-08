import type { ReactNode } from 'react';
import { Card } from '../ui/card';
import type { TotalStat } from '../invoice/row-cards/RowCardTotals';

// The totals under a floating table, from the same stats as the phone totals
// box. The highlighted stat (the amount) is the dark tile. It always takes
// the last column, the left end in RTL, so a lone total sits there too.
export default function TotalTiles({
  title = 'جمع فاکتور',
  stats,
}: {
  title?: string;
  stats: TotalStat[];
}): ReactNode {
  return (
    <dl className="m-0 mt-2 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-3">
      {stats.map((stat) =>
        stat.highlight ? (
          <Card
            key={stat.label}
            className="col-start-3 flex flex-row items-center justify-between gap-4 rounded-xl border-transparent bg-slate-800 px-5 py-3.5 shadow-none"
          >
            <dt className="text-sm font-medium text-brand-300">{title}</dt>
            <dd className="m-0 text-2xl font-bold text-white">
              {stat.value}{' '}
              <span className="text-sm font-normal text-brand-300">ریال</span>
            </dd>
          </Card>
        ) : (
          <Card
            key={stat.label}
            className="flex flex-col gap-1 rounded-xl border-slate-200 bg-white px-4 py-3.5 shadow-none"
          >
            <dt className="text-xs text-slate-600">{stat.label}</dt>
            <dd className="m-0 text-xl font-bold text-slate-800">
              {stat.value}
            </dd>
          </Card>
        )
      )}
    </dl>
  );
}
