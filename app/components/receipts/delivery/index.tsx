import { Printer } from 'lucide-react';
import { Button } from '~/components/ui/button';
import ReceiptPage from './receipt';
import type { Props } from '../types';

export default function DeliveryReceipt({ data }: Props): React.ReactNode {
  return (
    <div className="space-y-4">
      <div className="flex flex-row mx-70 justify-between items-center mb-4 no-print">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش رسید تحویل بار (A5)
        </h2>
        <Button className="bg-gray-800 hover:bg-gray-900 gap-2">
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>
      <ReceiptPage data={data} />
    </div>
  );
}
