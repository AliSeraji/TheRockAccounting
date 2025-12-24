import { TableHead, TableHeader, TableRow } from '../ui/table';

const items = [
  { label: 'ردیف', width: 'w-[5%]' },
  { label: 'نوع سنگ', width: 'w-[15%]' },
  { label: 'ضخامت تقریبی', width: 'w-[8%]' },
  { label: 'تعداد', width: 'w-[7%]' },
  { label: 'طول', width: 'w-[8%]' },
  { label: 'عرض', width: 'w-[8%]' },
  { label: 'متراژ (مترمربع)', width: 'w-[12%]' },
  { label: 'بهاء', width: 'w-[12%]' },
  { label: 'مبلغ کل (ریال)', width: 'w-[15%]' },
  { label: 'عملیات', width: 'w-[10%]' },
];

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
      {items.map((item, index) => {
        return <RowItem key={index} title={item.label} width={item.width} />;
      })}
    </>
  );
}
