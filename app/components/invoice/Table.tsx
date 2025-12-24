import type React from 'react';
import { Table } from '../ui/table';
import { InvoiceTableHeader } from './TableHeader';

export default function InvoiceTable(): React.ReactNode {
  return (
    <Table className="w-full">
      <InvoiceTableHeader />
    </Table>
  );
}
