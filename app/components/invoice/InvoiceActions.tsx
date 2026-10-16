import { useContext, useState, type ReactNode } from 'react';
import { FileText, ListPlus, Truck } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import ReceiptOutputDialog from '../receipts/dialogs/receiptOutputDialog';
import {
  ReceiptType,
  type ReceiptKind,
  type ReceiptPreview,
} from '../receipts/types';
import { useInvoiceSaver } from '../invoices/useInvoiceSaver';
import { convertToPersianDigits } from '~/lib/utils';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import { useReceiptIssueStore } from '~/store/receipt_issue/useReceiptIssueStore';
import {
  InvoiceStoreContext,
  readInvoice,
  resetInvoice,
} from '~/store/useInvoiceForm';

const secondaryButton =
  'gap-2 border-brand-300 text-brand-900 hover:bg-brand-50 hover:cursor-pointer';

// Receipt previews and the submit button under an invoice being written.
export default function InvoiceActions(): ReactNode {
  const key = useContext(InvoiceStoreContext);
  const openInvoice = useInvoicesStore((state) => state.openInvoice);
  const setActiveSection = useReceiptIssueStore(
    (state) => state.setActiveSection
  );
  const [preview, setPreview] = useState<ReceiptPreview | null>(null);

  const { save, dialogs } = useInvoiceSaver(
    key,
    undefined,
    ({ id, invoiceNumber }) => {
      resetInvoice(key);
      toast.success(
        `فاکتور شماره ${convertToPersianDigits(invoiceNumber)} در لیست فاکتورها ثبت شد.`,
        {
          action: {
            label: 'مشاهده',
            onClick: () => {
              openInvoice(id);
              setActiveSection('list');
            },
          },
        }
      );
    }
  );

  const showReceipt = (receipt: ReceiptKind) =>
    setPreview({ invoice: readInvoice(key), receipt });

  return (
    <>
      <div className="font-vazirmatn flex flex-wrap items-center justify-center gap-4 mt-8 pb-8">
        <Button
          onClick={save}
          className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
        >
          <ListPlus className="w-4 h-4" />
          ثبت فاکتور
        </Button>
        <Button
          variant="outline"
          onClick={() => showReceipt(ReceiptType.Sales)}
          className={secondaryButton}
        >
          <FileText className="w-4 h-4" />
          نمایش فاکتور
        </Button>
        <Button
          variant="outline"
          onClick={() => showReceipt(ReceiptType.Delivery)}
          className={secondaryButton}
        >
          <Truck className="w-4 h-4" />
          نمایش رسید تحویل بار
        </Button>
      </div>

      <ReceiptOutputDialog preview={preview} onPreviewChange={setPreview} />
      {dialogs}
    </>
  );
}
