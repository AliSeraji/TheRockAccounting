import { Printer } from 'lucide-react';
import { Button } from '~/components/ui/button';

export default function SalesInvoice(): React.ReactNode {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="font-vazirmatn w-full space-y-4">
      <div className="flex max-w-7xl justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش فاکتور فروش (A4)
        </h2>
        <Button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 gap-2"
        >
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>
    </div>
  );
}
