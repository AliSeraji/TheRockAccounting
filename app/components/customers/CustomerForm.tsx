import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Pencil,
  Plus,
  Save,
  Trash2,
  UserPlus,
  UsersRound,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Field, FieldLabel } from '../ui/field';
import { Separator } from '../ui/separator';
import { Alert } from '../warehouse/Alert';
import { cn } from '~/lib/utils';
import type { Customer, CustomerField } from '~/store/customers/types';
import {
  emptyCustomer,
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
  const setSelectedCustomer = useCustomersStore(
    (state) => state.setSelectedCustomer
  );
  const updateSelectedCustomer = useCustomersStore(
    (state) => state.updateSelectedCustomer
  );
  const addCustomer = useCustomersStore((state) => state.addCustomer);
  const updateCustomer = useCustomersStore((state) => state.updateCustomer);
  const removeCustomer = useCustomersStore((state) => state.removeCustomer);

  const [formActive, setFormActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const isEditing = selectedCustomer.id !== -1;
  const isFormVisible = isEditing || formActive;

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

  const resetForm = () => {
    setSelectedCustomer(emptyCustomer);
    setFormActive(false);
    setSubmitted(false);
  };

  const handleNew = () => {
    setSelectedCustomer({
      ...emptyCustomer,
      code: nextCustomerCode(customers),
    });
    setFormActive(true);
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
      const newId =
        customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
      addCustomer({
        ...record,
        id: newId,
        code: record.code || nextCustomerCode(customers),
      });
      toast.success(`شخص «${name}» با موفقیت ثبت شد.`);
    }

    resetForm();
  };

  const handleDelete = () => {
    if (!isEditing) return;
    const name = selectedCustomer.businessName;
    removeCustomer(selectedCustomer.id);
    resetForm();
    toast.error(`شخص «${name}» حذف شد.`);
  };

  return (
    <Card
      className={cn(
        'w-full bg-white/90 backdrop-blur transition-colors',
        isEditing
          ? 'border-teal-300'
          : formActive
            ? 'border-emerald-300'
            : 'border-slate-200'
      )}
    >
      <CardHeader
        className={cn(
          'rounded-t-lg border-b',
          isEditing
            ? 'bg-linear-to-r from-teal-50 to-slate-50 border-teal-200'
            : formActive
              ? 'bg-linear-to-r from-emerald-50 to-slate-50 border-emerald-200'
              : 'bg-linear-to-r from-slate-100 to-slate-50 border-slate-200'
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
              {isEditing ? (
                <>
                  <Pencil className="w-5 h-5 text-teal-600" />
                  ویرایش شخص
                </>
              ) : (
                <>
                  <UsersRound className="w-5 h-5 text-emerald-600" />
                  {formActive ? 'ثبت شخص جدید' : 'مدیریت اشخاص'}
                </>
              )}
            </CardTitle>
            {isEditing && (
              <span className="text-sm text-teal-700">
                {selectedCustomer.businessName} ({selectedCustomer.code})
              </span>
            )}
          </div>

          {isFormVisible && (
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleNew}
                className="gap-2 bg-linear-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                شخص جدید
              </Button>
              <Button
                onClick={handleSave}
                className="gap-2 bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
              >
                <Save className="w-4 h-4" />
                ذخیره
              </Button>
              <Button
                onClick={handleDelete}
                disabled={!isEditing}
                variant="destructive"
                className="gap-2 hover:cursor-pointer disabled:opacity-40"
              >
                <Trash2 className="w-4 h-4" />
                حذف
              </Button>
              <Button
                onClick={resetForm}
                variant="outline"
                className="gap-2 border-slate-200 text-slate-600 hover:cursor-pointer"
              >
                <X className="w-4 h-4" />
                انصراف
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      {isFormVisible ? (
        <CardContent className="p-6 flex flex-col gap-6">
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
        </CardContent>
      ) : (
        <CardContent className="p-12">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <UserPlus className="w-16 h-16 text-slate-300" />
            <div className="space-y-2">
              <p className="text-slate-500 text-lg font-medium">
                هیچ شخصی انتخاب نشده
              </p>
              <p className="text-slate-400 text-sm">
                یک شخص از جدول زیر انتخاب کنید یا شخص جدیدی ثبت کنید
              </p>
            </div>
            <Button
              onClick={handleNew}
              className="gap-2 mt-2 bg-linear-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              ثبت شخص جدید
            </Button>
          </div>
        </CardContent>
      )}

      <Alert
        open={openAlert}
        set={setAlert}
        title="اطلاعات ناقص است"
        description={alertMessage}
        variant="error"
      />
    </Card>
  );
}
