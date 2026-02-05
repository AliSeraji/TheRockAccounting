interface Props {
  buyer: string;
  invoiceType: string;
  invoiceNumber: string;
  invoiceDate: string;
}

export default function SalesReceiptHeader({
  buyer,
  invoiceType,
  invoiceNumber,
  invoiceDate,
}: Props): React.ReactNode {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="border-2 border-black px-6 py-4 text-xl font-bold">
        Logo
      </div>

      <div className="text-center flex-1 mx-8">
        <h1 className="text-2xl font-bold text-black">شرکت {buyer}</h1>
        <h2 className="text-xl font-bold mt-2 text-black">
          {invoiceType || 'فاکتور فروش'}
        </h2>
      </div>

      <div className="text-left space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-black">شماره:</span>
          <span className="font-bold px-4 text-[red]">{invoiceNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black">تاریخ:</span>
          <span className="font-bold  px-4 text-[green]">{invoiceDate}</span>
        </div>
      </div>
    </div>
  );
}
