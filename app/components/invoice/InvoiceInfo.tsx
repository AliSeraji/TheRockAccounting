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
        <CardTitle className="text-slate-800 flex items-center gap-2 text-sm lg:text-lg">
          <FileText className="w-5 h-5" />
          اطلاعات فاکتور
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4 text-xs lg:text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">عنوان</Label>
            <Select
              value={invoiceType}
              onValueChange={setInvoiceType}
              dir="rtl"
            >
              <SelectTrigger className="border-slate-200 focus:ring-slate-400 focus:ring-offset-0 text-xs lg:text-sm">
                <SelectValue placeholder="انتخاب نوع فاکتور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="پیش فاکتور">پیش فاکتور</SelectItem>
                <SelectItem value="فاکتور فروش">فاکتور فروش</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">شماره</Label>
            <Input
              value={convertToPersianDigits(invoiceNumber)}
              onChange={(e) => {
                const val = convertToEnDigits(e.target.value.trim()).replace(
                  /[^0-9]/g,
                  ''
                );
                console.log(val);
                setInvoiceNumber(val);
              }}
              className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs md:placeholder:text-sm"
              placeholder="شماره فاکتور"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">
              نام شخص حقیقی / حقوقی:
            </Label>
            <Input
              value={convertToPersianDigits(buyer)}
              onChange={(e) => setBuyer(e.target.value)}
              className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs md:placeholder:text-sm"
              placeholder="درج شود"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">تاریخ</Label>
            {isClient ? (
              <Suspense
                fallback={
                  <Input
                    value={convertToPersianDigits(invoiceDate)}
                    readOnly
                    className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 cursor-pointer placeholder:text-xs lg:placeholder:text-sm"
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
                className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 cursor-pointer placeholder:text-xs lg:placeholder:text-sm"
                placeholder="تاریخ روز"
              />
            )}
          </div>
          <div className="flex flex-col space-y-2 ">
            <Label className="text-slate-700 pr-1">پروژه</Label>
            <Input
              value={convertToPersianDigits(project)}
              onChange={(e) =>
                setProject(convertToEnDigits(e.target.value.trim()))
              }
              className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs lg:placeholder:text-sm"
              placeholder=" درج شود"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">تلفن</Label>
            <Input
              value={convertToPersianDigits(phone)}
              onChange={(e) => {
                const value = convertToEnDigits(e.target.value.trim()).replace(
                  /[^0-9]-/g,
                  ''
                );
                setPhone(value);
              }}
              className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs lg:placeholder:text-sm"
              placeholder="شماره تلفن"
            />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <Label className="text-slate-700 pr-1">آدرس</Label>
            <Input
              value={convertToPersianDigits(address)}
              onChange={(e) =>
                setAddress(convertToEnDigits(e.target.value.trim()))
              }
              className="border-slate-200 rounded-sm lg:rounded-lg focus:ring-slate-400 placeholder:text-xs lg:placeholder:text-sm"
              placeholder="دستی درج شود"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default InvoiceInfo;
