import type { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ReceiptType, type ReceiptKind, type ReceiptPreview } from '../types';
import SalesInvoice from '../sales';
import Delivery from '../delivery';
import RequestProduct from '../request';
import { Button } from '~/components/ui/button';
import { Printer } from 'lucide-react';
import { cn, convertToPersianDigits } from '~/lib/utils';

const switchTriggerClass = cn(
  'rounded-[8px] px-3 py-1 text-xs font-medium text-[#6b6459] hover:cursor-pointer',
  'data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-[#a4854a] data-[state=active]:shadow-sm'
);

function previewTitle({ invoice, receipt }: ReceiptPreview): string {
  const number = invoice.data.invoiceNumber
    ? ` ${convertToPersianDigits(invoice.data.invoiceNumber)}`
    : '';
  switch (receipt) {
    case ReceiptType.Sales:
      return `پیش‌نمایش ${invoice.data.invoiceType}${number}`;
    case ReceiptType.Delivery:
      return `پیش‌نمایش رسید تحویل بار${number}`;
    case ReceiptType.Request:
      return 'پیش‌نمایش درخواست سنگ';
  }
}

export default function ReceiptOutputDialog({
  preview,
  onPreviewChange,
}: {
  // null keeps the dialog closed.
  preview: ReceiptPreview | null;
  onPreviewChange: (preview: ReceiptPreview | null) => void;
}): ReactNode {
  const handlePrint = () => {
    let pageCss = '';
    switch (preview?.receipt) {
      case ReceiptType.Sales:
        pageCss =
          '@page { size: A4; margin: 0; } html, body { width: 100% !important; height: 297mm !important; }';
        break;
      case ReceiptType.Delivery:
      case ReceiptType.Request:
        pageCss =
          '@page { size: A5 portrait; margin: 5mm; } html, body { width: 148mm !important; height: auto !important; }';
        break;
      default:
        return;
    }

    const receipt = document.querySelector('.print-receipt');
    if (!receipt) return;

    const clone = receipt.cloneNode(true) as HTMLElement;
    clone.classList.add('print-clone');
    document.body.appendChild(clone);

    const style = document.createElement('style');
    style.id = 'print-page-size';
    style.textContent = `@media print {
      ${pageCss}
      body > *:not(.print-clone) { display: none !important; }
      .print-clone {
        display: block !important;
        visibility: visible !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        font-family: 'Vazirmatn Variable', sans-serif !important;
      }
      .print-clone * { visibility: visible !important; }
    }`;
    document.head.appendChild(style);
    window.print();
    style.remove();
    clone.remove();
  };

  return (
    <Dialog
      open={preview !== null}
      onOpenChange={(open) => !open && onPreviewChange(null)}
    >
      <DialogContent
        className="sm:max-w-6xl h-[90vh] flex flex-col p-0"
        dir="rtl"
      >
        <DialogHeader className="flex flex-row flex-wrap items-center justify-between px-6 pt-4 pb-2 border-b border-slate-200 gap-4">
          <DialogTitle className="text-base font-bold text-slate-800 pr-8">
            {preview && previewTitle(preview)}
          </DialogTitle>
          <div className="flex flex-row items-center gap-3 ml-8">
            {preview && preview.receipt !== ReceiptType.Request && (
              <Tabs
                value={preview.receipt}
                onValueChange={(receipt) =>
                  onPreviewChange({
                    ...preview,
                    receipt: receipt as ReceiptKind,
                  })
                }
                dir="rtl"
              >
                <TabsList className="h-auto gap-1 rounded-[10px] bg-[#f6f1e7] p-1">
                  <TabsTrigger
                    value={ReceiptType.Sales}
                    className={switchTriggerClass}
                  >
                    فاکتور
                  </TabsTrigger>
                  <TabsTrigger
                    value={ReceiptType.Delivery}
                    className={switchTriggerClass}
                  >
                    رسید تحویل بار
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            )}
            <Button
              onClick={handlePrint}
              size="sm"
              className="bg-gray-800 hover:bg-gray-900 gap-1.5 hover:cursor-pointer h-7 px-2.5 text-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              چاپ
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-auto px-6 py-4">
          {preview?.receipt === ReceiptType.Sales && (
            <SalesInvoice invoice={preview.invoice} />
          )}
          {preview?.receipt === ReceiptType.Delivery && (
            <Delivery invoice={preview.invoice} />
          )}
          {preview?.receipt === ReceiptType.Request &&
            preview.invoice.kind === 'stone' && (
              <RequestProduct data={preview.invoice.data} />
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
