import { Printer } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import type { Props } from '../types';

export default function RequestProduct({data}:Props): ReactNode {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش درخواست سنگ (A5)
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
