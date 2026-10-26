import { useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { Alert } from '~/components/warehouse/Alert';
import { convertToPersianDigits } from '~/lib/utils';
import { isLocked } from '~/store/invoices/helpers';
import type { SaveResult } from '~/store/invoices/types';
import { useInvoicesStore } from '~/store/invoices/useInvoicesStore';
import { readInvoice, type InvoiceStoreKey } from '~/store/useInvoiceForm';

type Saved = Extract<SaveResult, { ok: true }>;

// Saves the invoice behind `key` to the invoice list, over the invoice `id`
// when editing. A sales invoice can't be edited afterwards, so saving one
// asks first. A buyer added to the customers on the way gets their own toast.
// Render the returned `dialogs` once.
export function useInvoiceSaver(
  key: InvoiceStoreKey,
  id: string | undefined,
  onSaved: (saved: Saved) => void
): { save: () => void; dialogs: ReactNode } {
  const saveInvoice = useInvoicesStore((state) => state.saveInvoice);
  const [problems, setProblems] = useState<string[]>([]);
  const [confirmLock, setConfirmLock] = useState(false);

  const commit = () => {
    const result = saveInvoice(readInvoice(key), id);
    if (!result.ok) {
      setProblems(result.problems);
      return;
    }
    onSaved(result);
    const { newCustomer } = result;
    if (newCustomer) {
      toast.success(
        `«${convertToPersianDigits(newCustomer.businessName)}» با کد ${convertToPersianDigits(newCustomer.code)} به مشتریان اضافه شد.`
      );
    }
  };

  const save = () => {
    if (isLocked(readInvoice(key))) setConfirmLock(true);
    else commit();
  };

  const dialogs = (
    <>
      <Alert
        open={problems.length > 0}
        set={() => setProblems([])}
        title="ثبت فاکتور ممکن نیست"
        description={problems.join('؛ ')}
        variant="error"
      />
      <Alert
        open={confirmLock}
        set={setConfirmLock}
        title="ثبت فاکتور فروش"
        description="فاکتور فروش پس از ثبت دیگر قابل ویرایش نیست. ثبت شود؟"
        variant="warning"
        cancelText="انصراف"
        confirmText="ثبت"
        onConfirm={commit}
      />
    </>
  );

  return { save, dialogs };
}
