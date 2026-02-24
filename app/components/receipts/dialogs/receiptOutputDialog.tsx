import type { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { ReceiptType } from '../types';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import SalesInvoice from '../sales';
import Delivery from '../delivery';
import RequestProduct from '../request';
import { Button } from '~/components/ui/button';
import { Printer } from 'lucide-react';

export default function ReceiptOutputDialog({
  open,
  onChangeReceipt,
}: {
  open: ReceiptType;
  onChangeReceipt: (open: ReceiptType) => void;
}): ReactNode {
  const getInvoiceData = useInvoiceStore((state) => state.getInvoiceData);
  const invoiceData = getInvoiceData(); 

  const handlePrint = () => {
    let pageCss = '';
    switch (open) {
      case ReceiptType.Sales:
        pageCss =
          '@page { size: A4; margin: 0; } html, body { width: 100% !important; height: 297mm !important; }';
        break;
      case ReceiptType.Delivery:
      case ReceiptType.Request:
        pageCss =
          '@page { size: 148mm 210mm; margin: 5mm; } html, body { width: 148mm !important; height: auto !important; }';
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
      open={open !== null}
      onOpenChange={(open) => !open && onChangeReceipt(null)}
    >
      <DialogContent
        className="sm:max-w-6xl h-[90vh] flex flex-col p-0"
        dir="rtl"
      >
        <DialogHeader className="flex flex-row justify-between px-6 pt-4 pb-2 border-b border-slate-200 shrink-0 gap-4">
          <DialogTitle className="text-base font-bold text-slate-800 pr-8">
            {open === ReceiptType.Sales && 'پیش‌نمایش فاکتور فروش'}
            {open === ReceiptType.Delivery && 'پیش‌نمایش رسید تحویل بار'}
            {open === ReceiptType.Request && 'پیش‌نمایش درخواست سنگ'}
          </DialogTitle>
          <Button
            onClick={handlePrint}
            size="sm"
            className="bg-gray-800 hover:bg-gray-900 gap-1.5 hover:cursor-pointer h-7 px-2.5 text-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            چاپ
          </Button>
        </DialogHeader>
        <div className="flex-1 overflow-auto px-6 py-4">
          {open === ReceiptType.Sales && <SalesInvoice data={invoiceData} />}
          {open === ReceiptType.Delivery && <Delivery data={invoiceData} />}
          {open === ReceiptType.Request && (
            <RequestProduct data={invoiceData} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
