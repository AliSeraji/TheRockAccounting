import { useState, type ReactNode } from 'react';
import { Save, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import InvoiceBody from '../invoice';
import BlockTable from '../invoice/block/BlockTable';
import { Alert } from '../warehouse/Alert';
import { convertToPersianDigits } from '~/lib/utils';
import { hasChanges } from '~/store/invoices/helpers';
import type { SavedInvoice } from '~/store/invoices/types';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import {
  InvoiceStoreContext,
  readInvoice,
  type InvoiceStoreKey,
} from '~/store/useInvoiceForm';
import InvoiceViewHeader from './InvoiceViewHeader';
import { useInvoiceSaver } from './useInvoiceSaver';

// Edits a saved invoice with the same cards as the creation tabs, in its
// kind's editor store (loaded by startEditing).
export default function InvoiceEditor({
  invoice,
}: {
  invoice: SavedInvoice;
}): ReactNode {
  const openInvoice = useInvoicesStore((state) => state.openInvoice);
  const [confirmDiscard, setConfirmDiscard] = useState(false);
  const key: InvoiceStoreKey = { kind: invoice.kind, mode: 'edit' };

  const { save, dialogs } = useInvoiceSaver(
    key,
    invoice.id,
    ({ invoiceNumber }) => {
      toast.success(
        `فاکتور شماره ${convertToPersianDigits(invoiceNumber)} ویرایش شد.`
      );
      openInvoice(invoice.id);
    }
  );

  const cancel = () => {
    if (hasChanges(readInvoice(key), invoice)) setConfirmDiscard(true);
    else openInvoice(invoice.id);
  };

  const actions = (
    <>
      <Button
        onClick={save}
        className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
      >
        <Save className="w-4 h-4" />
        ذخیره تغییرات
      </Button>
      <Button
        variant="outline"
        onClick={cancel}
        className="gap-2 hover:cursor-pointer"
      >
        <X className="w-4 h-4" />
        انصراف
      </Button>
    </>
  );

  return (
    <InvoiceStoreContext value={key}>
      <div className="w-full space-y-6">
        <InvoiceViewHeader
          invoice={invoice}
          title={`ویرایش فاکتور ${convertToPersianDigits(invoice.data.invoiceNumber)}`}
          onBack={cancel}
        >
          {actions}
        </InvoiceViewHeader>
        <InvoiceBody
          itemsTable={invoice.kind === 'block' ? <BlockTable /> : undefined}
        />
        <div className="font-vazirmatn flex flex-wrap items-center justify-center gap-4 pt-2">
          {actions}
        </div>
      </div>

      {dialogs}
      <Alert
        open={confirmDiscard}
        set={setConfirmDiscard}
        title="انصراف از ویرایش"
        description="تغییرات ذخیره نشده از بین می‌رود. ادامه می‌دهید؟"
        variant="warning"
        cancelText="ادامه ویرایش"
        confirmText="انصراف از تغییرات"
        onConfirm={() => openInvoice(invoice.id)}
      />
    </InvoiceStoreContext>
  );
}
