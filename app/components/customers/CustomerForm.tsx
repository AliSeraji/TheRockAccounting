import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { Pencil, Save, Trash2, UsersRound, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Field, FieldLabel } from '../ui/field';
import { Separator } from '../ui/separator';
import { Alert } from '../warehouse/Alert';
import { newId } from '~/lib/id';
import { cn } from '~/lib/utils';
import type { Customer, CustomerField } from '~/store/customers/types';
import {
  nextCustomerCode,
  useCustomersStore,
} from '~/store/customers/useCustomers';
import IdentitySection from './form/IdentitySection';
import ContactSection from './form/ContactSection';
import BankSection from './form/BankSection';
import StatusSection from './form/StatusSection';
import { formatErrors, requiredErrors } from './validate';

const getCurrentTimestamp = () =>
  new Date().toLocaleString('fa-IR').slice(0, 9);

export default function CustomerForm(): ReactNode {
  const customers = useCustomersStore((state) => state.customers);
  const selectedCustomer = useCustomersStore((state) => state.selectedCustomer);
  const dialogOpen = useCustomersStore((state) => state.dialogOpen);
  const closeDialog = useCustomersStore((state) => state.closeDialog);
  const updateSelectedCustomer = useCustomersStore(
    (state) => state.updateSelectedCustomer
  );
  const addCustomer = useCustomersStore((state) => state.addCustomer);
  const updateCustomer = useCustomersStore((state) => state.updateCustomer);
  const removeCustomer = useCustomersStore((state) => state.removeCustomer);

  const [submitted, setSubmitted] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);

  const isEditing = selectedCustomer.id !== '';

  const invalidFields = useMemo(
    () => formatErrors(selectedCustomer),
    [selectedCustomer]
  );
  const missingFields = useMemo(
    () => requiredErrors(selectedCustomer),
    [selectedCustomer]
  );
  const errors = submitted
    ? { ...invalidFields, ...missingFields }
    : invalidFields;

  const handleChange = useCallback(
    (field: CustomerField, value: string | boolean) => {
      updateSelectedCustomer(field, value);
    },
    [updateSelectedCustomer]
  );

  const handleClose = () => {
    closeDialog();
    setSubmitted(false);
  };

  const handleSave = () => {
    const allErrors = { ...invalidFields, ...missingFields };
    const firstError = Object.values(allErrors)[0];

    if (firstError) {
      setSubmitted(true);
      setAlertMessage(firstError);
      setAlert(true);
      return;
    }

    const name = selectedCustomer.businessName;
    const record: Customer = {
      ...selectedCustomer,
      date: getCurrentTimestamp(),
    };

    if (isEditing) {
      updateCustomer(selectedCustomer.id, record);
      toast.success(`اطلاعات «${name}» با موفقیت ویرایش شد.`);
    } else {
      addCustomer({
        ...record,
        id: newId(),
        code: record.code || nextCustomerCode(customers),
      });
      toast.success(`شخص «${name}» با موفقیت ثبت شد.`);
    }

    handleClose();
  };

  const handleDelete = () => {
    if (!isEditing) return;
    const name = selectedCustomer.businessName;
    removeCustomer(selectedCustomer.id);
    handleClose();
    toast.error(`شخص «${name}» حذف شد.`);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        dir="rtl"
        className="sm:max-w-5xl max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden font-vazirmatn"
      >
        <DialogHeader
          className={cn(
            'px-6 pt-5 pb-4 pr-12 border-b',
            isEditing
              ? 'bg-linear-to-r from-brand-200 to-slate-50 border-brand-300'
              : 'bg-linear-to-r from-brand-100 to-slate-50 border-brand-200'
          )}
        >
          <DialogTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            {isEditing ? (
              <>
                <Pencil className="w-5 h-5 text-brand-600" />
                ویرایش شخص
              </>
            ) : (
              <>
                <UsersRound className="w-5 h-5 text-brand-600" />
                ثبت شخص جدید
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-brand-900">
            {isEditing &&
              `${selectedCustomer.businessName} (${selectedCustomer.code})`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                کد شخص
              </FieldLabel>
              <Input
                readOnly
                value={selectedCustomer.code}
                dir="ltr"
                className="rounded-lg border-slate-200 bg-slate-50 text-slate-400 text-xs lg:text-sm text-left cursor-default"
              />
            </Field>
            <Field>
              <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
                زمان ثبت/ویرایش
              </FieldLabel>
              <Input
                readOnly
                value={getCurrentTimestamp()}
                className="rounded-lg border-slate-200 bg-slate-50 text-slate-400 text-xs lg:text-sm cursor-default"
              />
            </Field>
          </div>

          <Separator className="bg-slate-200" />

          <IdentitySection
            customer={selectedCustomer}
            errors={errors}
            onChange={handleChange}
          />

          <Separator className="bg-slate-200" />

          <Field>
            <FieldLabel className="text-slate-700 pr-2 text-xs lg:text-sm">
              توضیحات
            </FieldLabel>
            <Textarea
              value={selectedCustomer.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="یادداشت داخلی درباره این شخص..."
              className="min-h-24 rounded-lg border-slate-200 text-xs lg:text-sm resize-none focus-visible:ring-slate-400"
            />
          </Field>

          <Separator className="bg-slate-200" />

          <ContactSection
            customer={selectedCustomer}
            errors={errors}
            onChange={handleChange}
          />

          <Separator className="bg-slate-200" />

          <BankSection
            customer={selectedCustomer}
            errors={errors}
            onChange={handleChange}
          />

          <Separator className="bg-slate-200" />

          <StatusSection
            customer={selectedCustomer}
            errors={errors}
            onChange={handleChange}
          />
        </div>

        <DialogFooter className="m-0 px-6 py-4 flex-row flex-wrap sm:justify-start">
          <Button
            onClick={handleSave}
            className="gap-2 bg-linear-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
          >
            <Save className="w-4 h-4" />
            ذخیره
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="gap-2 border-slate-200 text-slate-600 hover:cursor-pointer"
          >
            <X className="w-4 h-4" />
            انصراف
          </Button>
          {isEditing && (
            <Button
              onClick={() => setConfirmDelete(true)}
              variant="destructive"
              className="gap-2 mr-auto hover:cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              حذف
            </Button>
          )}
        </DialogFooter>

        <Alert
          open={openAlert}
          set={setAlert}
          title="اطلاعات ناقص است"
          description={alertMessage}
          variant="error"
        />
        <Alert
          open={confirmDelete}
          set={setConfirmDelete}
          title="حذف شخص"
          description={`آیا از حذف «${selectedCustomer.businessName}» مطمئن هستید؟ این عملیات قابل بازگشت نیست.`}
          variant="warning"
          cancelText="انصراف"
          confirmText="حذف"
          onConfirm={handleDelete}
        />
      </DialogContent>
    </Dialog>
  );
}
