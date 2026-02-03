import { TableHead, TableHeader, TableRow } from '../ui/table';
import { invoiceTableItems } from './common';

interface InvoiceTableHeaderProps {
  items?: typeof invoiceTableItems;
}

export function InvoiceTableHeader({
  items = invoiceTableItems,
}: InvoiceTableHeaderProps): React.ReactNode {
  return (
    <TableHeader className="w-full">
      <TableRow className="w-full flex flex-row overflow-x-auto bg-slate-100 text-slate-800 text-sm">
        {items.map((item) => (
          <TableHead
            key={item.label}
            className={`flex flex-row justify-center border border-slate-300 p-2 text-center text-sm ${item.width}`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
