import type { ReactNode } from 'react';
import { Badge } from '../ui/badge';
import { convertToPersianDigits } from '~/lib/utils';

// The row count beside a table card's title, on desktop only. Phones show
// the count in their totals box.
export default function RowCountBadge({ count }: { count: number }): ReactNode {
  return (
    <Badge className="hidden bg-brand-100 px-2.5 text-brand-900 md:inline-flex">
      {convertToPersianDigits(count)} ردیف
    </Badge>
  );
}
