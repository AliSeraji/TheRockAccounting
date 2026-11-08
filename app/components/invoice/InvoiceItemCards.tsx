import type { ReactNode } from 'react';
import { useAddInvoiceItem, useInvoiceItemCount } from '~/store/useInvoiceForm';
import InvoiceTableCard from '../floating-table/InvoiceTableCard';
import InvoiceTable from './Table';

// `table` defaults to the stone items table. It is not a default parameter
// because the React Compiler skips components with JSX in their parameters.
export default function InvoiceItemsCard({
  table,
}: {
  table?: ReactNode;
}): React.ReactNode {
  const addItem = useAddInvoiceItem();
  const count = useInvoiceItemCount();
  return (
    <InvoiceTableCard title="اقلام فاکتور" count={count} onAdd={addItem}>
      <div className="overflow-x-auto w-full">{table ?? <InvoiceTable />}</div>
    </InvoiceTableCard>
  );
}
