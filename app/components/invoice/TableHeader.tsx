import { TableHead, TableHeader, TableRow } from '../ui/table';
import { invoiceTableItems } from './common';

interface InvoiceTableHeaderProps {
  items?: typeof invoiceTableItems;
}

export function InvoiceTableHeader({
  items = invoiceTableItems,
}: InvoiceTableHeaderProps): React.ReactNode {
  return (
    <TableHeader className="w-full [&_tr]:border-b-0">
      <TableRow className="w-full flex flex-row overflow-x-auto text-slate-800">
        {items.map((item, index) => (
          <TableHead
            key={item.label || index}
            title={item.label}
            className={`flex flex-row w-full h-full justify-center items-center p-2.5 lg:p-3 text-xs overflow-hidden text-ellipsis whitespace-nowrap border border-slate-300 bg-slate-100 ${item.width}`}
          >
            <span className="block w-full text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {item.label?.trim() ? item.label : '\u00A0'}
            </span>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
