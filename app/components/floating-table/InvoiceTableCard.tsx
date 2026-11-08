import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import AddRowFooter from '../invoice/AddRowFooter';
import RowCountBadge from './RowCountBadge';
import { CREAM_BODY } from './styles';

// The card around an invoice's items or services. On desktop its body is
// cream and the title shows the row count; below md it is the plain card the
// phone cards sit in. Without `onAdd` (a saved invoice) it has no add-row
// footer.
export default function InvoiceTableCard({
  title,
  count,
  onAdd,
  children,
}: {
  title: string;
  count: number;
  onAdd?: () => void;
  children: ReactNode;
}): ReactNode {
  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <CardTitle className="text-slate-800 text-sm lg:text-lg">
            {title}
          </CardTitle>
          <RowCountBadge count={count} />
        </div>
      </CardHeader>
      <CardContent className={CREAM_BODY}>{children}</CardContent>
      {onAdd && <AddRowFooter label="افزودن ردیف" onAdd={onAdd} />}
    </Card>
  );
}
