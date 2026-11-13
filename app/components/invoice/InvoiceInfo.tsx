import type React from 'react';
import { FileText, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { SegmentedControl } from '../ui/segmented-control';
import { Input } from '../ui/input';
import { lazy, memo, Suspense, useContext, useEffect, useState } from 'react';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { INVOICE_TYPES, PROJECT_LABEL } from '~/store/invoices/helpers';
import { InvoiceStoreContext, useInvoiceForm } from '~/store/useInvoiceForm';
import BuyerInput from './BuyerInput';
import NationalIdInput from './NationalIdInput';

type DayValue =
  | {
      year: number;
      month: number;
      day: number;
    }
  | null
  | undefined;

const PersianDatePicker = lazy(() => import('./PersianDatePicker.client'));

const INVOICE_TYPE_OPTIONS = [
  { value: INVOICE_TYPES.PRE, label: INVOICE_TYPES.PRE },
  { value: INVOICE_TYPES.SALES, label: INVOICE_TYPES.SALES },
];

const FIELD_CLASS = 'placeholder:text-xs lg:placeholder:text-sm';

const InvoiceInfo = memo(function InvoiceInfo(): React.ReactNode {
  const { kind } = useContext(InvoiceStoreContext);
  const invoiceType = useInvoiceForm((state) => state.invoiceType);
  const setInvoiceType = useInvoiceForm((state) => state.setInvoiceType);
  const invoiceNumber = useInvoiceForm((state) => state.invoiceNumber);
  const setInvoiceNumber = useInvoiceForm((state) => state.setInvoiceNumber);
  const invoiceDate = useInvoiceForm((state) => state.invoiceDate);
  const setInvoiceDate = useInvoiceForm((state) => state.setInvoiceDate);
  const project = useInvoiceForm((state) => state.project);
  const setProject = useInvoiceForm((state) => state.setProject);
  const phone = useInvoiceForm((state) => state.phone);
  const setPhone = useInvoiceForm((state) => state.setPhone);
  const address = useInvoiceForm((state) => state.address);
  const setAddress = useInvoiceForm((state) => state.setAddress);

  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (day: DayValue): string => {
    if (!day) return '';
    return `${day.year}/${day.month}/${day.day}`;
  };

  const handleDateChange = (value: DayValue) => {
    setSelectedDay(value);
    setInvoiceDate(formatDate(value));
  };

  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur relative z-9">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800 flex items-center gap-2 text-sm lg:text-lg">
          <FileText className="w-5 h-5" />
          اطلاعات فاکتور
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4 text-xs lg:text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">عنوان</Label>
            <SegmentedControl
              value={invoiceType}
              onChange={setInvoiceType}
              options={INVOICE_TYPE_OPTIONS}
              label="عنوان"
              fullWidth
            />
            <p className="flex items-center gap-1.5 pr-1 text-xs text-slate-600">
              <Info className="size-3.5 text-brand-600" aria-hidden="true" />
              {invoiceType === INVOICE_TYPES.SALES
                ? 'اقلام از موجودی انبار کم می‌شود'
                : 'موجودی انبار تغییر نمی‌کند'}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">شماره فاکتور</Label>
            <Input
              value={convertToPersianDigits(invoiceNumber)}
              onChange={(e) => {
                const val = convertToEnDigits(e.target.value.trim()).replace(
                  /[^0-9]/g,
                  ''
                );
                setInvoiceNumber(val);
              }}
              className={FIELD_CLASS}
            />
          </div>
          <BuyerInput />
          <NationalIdInput />
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">تاریخ</Label>
            {isClient ? (
              <Suspense
                fallback={
                  <Input
                    value={convertToPersianDigits(invoiceDate)}
                    readOnly
                    className={`${FIELD_CLASS} cursor-pointer`}
                  />
                }
              >
                <PersianDatePicker
                  value={selectedDay}
                  onChange={handleDateChange}
                  displayValue={invoiceDate}
                />
              </Suspense>
            ) : (
              <Input
                value={convertToPersianDigits(invoiceDate)}
                readOnly
                className={`${FIELD_CLASS} cursor-pointer`}
              />
            )}
          </div>
          <div className="flex flex-col space-y-2 ">
            <Label className="text-slate-700 pr-1">{PROJECT_LABEL[kind]}</Label>
            <Input
              value={convertToPersianDigits(project)}
              onChange={(e) => setProject(convertToEnDigits(e.target.value))}
              className={FIELD_CLASS}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">تلفن</Label>
            <Input
              value={convertToPersianDigits(phone)}
              onChange={(e) => {
                const value = convertToEnDigits(e.target.value.trim()).replace(
                  /[^0-9]/g,
                  ''
                );
                setPhone(value);
              }}
              className={FIELD_CLASS}
            />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <Label className="text-slate-700 pr-1">آدرس</Label>
            <Input
              value={convertToPersianDigits(address)}
              onChange={(e) => setAddress(convertToEnDigits(e.target.value))}
              className={FIELD_CLASS}
              placeholder="محل تحویل بار "
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default InvoiceInfo;
