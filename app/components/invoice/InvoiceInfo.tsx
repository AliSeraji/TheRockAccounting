import type React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { lazy, memo, Suspense, useEffect, useState } from 'react';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { useInvoiceStore } from '~/store/useInvoiceStore';

type DayValue =
  | {
      year: number;
      month: number;
      day: number;
    }
  | null
  | undefined;

const PersianDatePicker = lazy(() => import('./PersianDatePicker.client'));

const InvoiceInfo = memo(function InvoiceInfo(): React.ReactNode {
  const invoiceType = useInvoiceStore((state) => state.invoiceType);
  const setInvoiceType = useInvoiceStore((state) => state.setInvoiceType);
  const invoiceNumber = useInvoiceStore((state) => state.invoiceNumber);
  const setInvoiceNumber = useInvoiceStore((state) => state.setInvoiceNumber);
  const buyer = useInvoiceStore((state) => state.buyer);
  const setBuyer = useInvoiceStore((state) => state.setBuyer);
  const invoiceDate = useInvoiceStore((state) => state.invoiceDate);
  const setInvoiceDate = useInvoiceStore((state) => state.setInvoiceDate);
  const project = useInvoiceStore((state) => state.project);
  const setProject = useInvoiceStore((state) => state.setProject);
  const phone = useInvoiceStore((state) => state.phone);
  const setPhone = useInvoiceStore((state) => state.setPhone);
  const address = useInvoiceStore((state) => state.address);
  const setAddress = useInvoiceStore((state) => state.setAddress);

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
    <Card className="border-slate-200 bg-white/90 backdrop-blur col-span-2 relative z-9">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          اطلاعات فاکتور
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-700">عنوان</Label>
            <Select value={invoiceType} onValueChange={setInvoiceType}>
              <SelectTrigger className="border-slate-200 focus:ring-slate-400 focus:ring-offset-0">
                <SelectValue placeholder="انتخاب نوع فاکتور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="پیش فاکتور">پیش فاکتور</SelectItem>
                <SelectItem value="فاکتور فروش">فاکتور فروش</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">شماره</Label>
            <Input
              value={convertToPersianDigits(invoiceNumber)}
              onChange={(e) => { 
                const val = convertToEnDigits(e.target.value.trim()).replace(/[^0-9]/g, '');
                console.log(val);
                setInvoiceNumber(val);
              }}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="شماره فاکتور"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">خریدار شرکت/خانم/آقای</Label>
            <Input
              value={convertToPersianDigits(buyer)}
              onChange={(e) => setBuyer(e.target.value)}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="درج شود"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700">تاریخ</Label>
            {isClient ? (
              <Suspense
                fallback={
                  <Input
                    value={convertToPersianDigits(invoiceDate)}
                    readOnly
                    className="border-slate-200 rounded-lg focus:ring-slate-400 cursor-pointer"
                    placeholder="تاریخ روز"
                  />
                }
              >
                <PersianDatePicker
                  value={selectedDay}
                  onChange={handleDateChange}
                  displayValue={invoiceDate}
                  placeholder="تاریخ روز"
                />
              </Suspense>
            ) : (
              <Input
                value={convertToPersianDigits(invoiceDate)}
                readOnly
                className="border-slate-200 rounded-lg focus:ring-slate-400 cursor-pointer"
                placeholder="تاریخ روز"
              />
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">پروژه</Label>
            <Input
              value={convertToPersianDigits(project)}
              onChange={(e) =>
                setProject(convertToEnDigits(e.target.value.trim()))
              }
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder=" درج شود"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">تلفن</Label>
            <Input
              value={convertToPersianDigits(phone)}
              onChange={(e) => {
                const value = convertToEnDigits(e.target.value.trim()).replace(
                  /[^0-9]/g,
                  ''
                );
                setPhone(value);
              }}
              maxLength={11}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="شماره تلفن"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className="text-slate-700">آدرس</Label>
            <Input
              value={convertToPersianDigits(address)}
              onChange={(e) =>
                setAddress(convertToEnDigits(e.target.value.trim()))
              }
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="دستی درج شود"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default InvoiceInfo;
