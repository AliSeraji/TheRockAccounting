import InvoiceHeader from '~/components/invoice/header';
import InvoiceBody from '~/components/invoice';
import { Button } from '~/components/ui/button';
import { FileText, Truck } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { ReceiptType } from '~/components/receipts/types';
import ReceiptOutputDialog from '~/components/receipts/dialogs/receiptOutputDialog';

export const Invoice = (): ReactNode => {
  const [openReceipt, setOpenReceipt] = useState<ReceiptType>(null);

  return (
    <div className="h-full flex flex-col relative" dir="rtl">
      <InvoiceHeader />

      <div className="w-full flex flex-col items-center overflow-auto pt-16">
        <div className="w-full py-6">
          <InvoiceBody />

          <div className="font-vazirmatn flex flex-wrap items-center justify-center gap-4 mt-8 pb-8">
            <Button
              onClick={() => setOpenReceipt(ReceiptType.Sales)}
              className="gap-2 bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              نمایش فاکتور
            </Button>
            <Button
              onClick={() => setOpenReceipt(ReceiptType.Delivery)}
              className="gap-2 bg-linear-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <Truck className="w-4 h-4" />
              نمایش رسید تحویل بار
            </Button>
            {/* <Button
              onClick={() => setOpenReceipt(ReceiptType.Request)}
              className="gap-2 bg-linear-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <PackageSearch className="w-4 h-4" />
              درخواست سنگ
            </Button> */}
          </div>
        </div>
      </div>

      <ReceiptOutputDialog
        open={openReceipt}
        onChangeReceipt={setOpenReceipt}
      />
    </div>
  );
};

export default Invoice;
