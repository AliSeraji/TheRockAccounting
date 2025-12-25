import { TableHead, TableHeader, TableRow } from '../ui/table';
import { invoiceTableItems } from './common';

export function InvoiceTableHeader(): React.ReactNode {
  return (
    <TableHeader className="w-full">
      <TableRow className="w-full flex flex-row overflow-x-auto bg-slate-100 text-slate-800 border border-slate-300 text-sm">
        <RowItems />
      </TableRow>
    </TableHeader>
  );
}

function RowItem({
  title,
  width,
}: {
  title: string;
  width?: string;
}): React.ReactNode {
  return (
    <TableHead
      className={`flex flex-row justify-center border border-slate-300 p-2 text-center text-sm ${width}`}
    >
      {title}
    </TableHead>
  );
}

function RowItems(): React.ReactNode {
  return (
    <>
      {invoiceTableItems.map((item, index) => {
        return <RowItem key={index} title={item.label} width={item.width} />;
      })}
    </>
  );
}
