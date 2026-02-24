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
      <TableRow className="w-full flex flex-row overflow-x-auto bg-slate-100 text-slate-800">
        {items.map((item) => (
          <TableHead
            key={item.label}
            className={`flex flex-row w-full h-full justify-center border p-3 border-slate-300 text-xs ${item.width}`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
