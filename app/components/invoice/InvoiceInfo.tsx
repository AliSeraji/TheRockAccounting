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
import { lazy, Suspense, useEffect, useState } from 'react';
import { convertToPersianDigits } from '~/lib/utils';
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

export default function InvoiceInfo(): React.ReactNode {
  const {
    invoiceType,
    setInvoiceType,
    invoiceNumber,
    setInvoiceNumber,
    buyer,
    setBuyer,
    invoiceDate,
    setInvoiceDate,
    project,
    setProject,
    phone,
    setPhone,
    address,
    setAddress,
  } = useInvoiceStore();

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
              onChange={(e) => setInvoiceNumber(e.target.value)}
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
              onChange={(e) => setProject(e.target.value)}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder=" درج شود"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">تلفن</Label>
            <Input
              value={convertToPersianDigits(phone)}
              onChange={(e) => setPhone(e.target.value)}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="شماره تلفن"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className="text-slate-700">آدرس</Label>
            <Input
              value={convertToPersianDigits(address)}
              onChange={(e) => setAddress(e.target.value)}
              className="border-slate-200 rounded-lg focus:ring-slate-400"
              placeholder="دستی درج شود"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
