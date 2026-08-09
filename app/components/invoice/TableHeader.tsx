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
            title={item.label}
            className={`flex flex-row w-full h-full justify-center items-center border p-2.5 lg:p-3 border-slate-300 text-xs overflow-hidden text-ellipsis whitespace-nowrap ${item.width}`}
          >
            <span className="block w-full text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {item.label}
            </span>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
