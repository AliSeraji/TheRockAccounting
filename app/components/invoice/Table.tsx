import type React from 'react';
import { Table } from '../ui/table';
import { InvoiceTableHeader } from './TableHeader';
import { useInvoiceStore } from '~/store/useInvoiceStore';

export default function InvoiceTable(): React.ReactNode {
  const { items, updateItem, removeItem } = useInvoiceStore();
  
  

  return (
    <Table className="w-full">
      <InvoiceTableHeader />
    </Table>
  );
}
