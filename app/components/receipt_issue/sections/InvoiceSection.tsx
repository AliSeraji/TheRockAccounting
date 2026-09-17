import { FileText, Truck } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import InvoiceBody from '~/components/invoice';
import { Button } from '~/components/ui/button';
import { ReceiptType } from '~/components/receipts/types';
import ReceiptOutputDialog from '~/components/receipts/dialogs/receiptOutputDialog';

export default function InvoiceSection(): ReactNode {
  const [openReceipt, setOpenReceipt] = useState<ReceiptType>(null);

  return (
    <div className="w-full flex flex-col items-center px-2 md:px-0">
      <div className="w-full py-2">
        <InvoiceBody />

        <div className="font-vazirmatn flex flex-wrap items-center justify-center gap-4 mt-8 pb-8">
          <Button
            onClick={() => setOpenReceipt(ReceiptType.Sales)}
            className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            نمایش فاکتور
          </Button>
          <Button
            onClick={() => setOpenReceipt(ReceiptType.Delivery)}
            className="gap-2 bg-linear-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
          >
            <Truck className="w-4 h-4" />
            نمایش رسید تحویل بار
          </Button>
        </div>
      </div>

      <ReceiptOutputDialog open={openReceipt} onChangeReceipt={setOpenReceipt} />
    </div>
  );
}
