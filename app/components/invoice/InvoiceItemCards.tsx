import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import InvoiceTable from './Table';

// `table` defaults to the stone items table. It is not a default parameter
// because the React Compiler skips components with JSX in their parameters.
export default function InvoiceItemsCard({
  table,
}: {
  table?: ReactNode;
}): React.ReactNode {
  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 text-sm lg:text-lg">
            اقلام فاکتور
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-1 lg:p-4">
        <div className="overflow-x-auto w-full">
          {table ?? <InvoiceTable />}
        </div>
      </CardContent>
    </Card>
  );
}
