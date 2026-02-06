import { FileText, Plus, Trash2 } from 'lucide-react';
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
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import { convertToPersianDigits, persianNumberToText } from '~/lib/utils';
import InvoiceTable from './Table';
import { useState, useEffect, lazy, Suspense } from 'react';

type DayValue =
  | {
      year: number;
      month: number;
      day: number;
    }
  | null
  | undefined;

const PersianDatePicker = lazy(() => import('./PersianDatePicker.client'));

export default function InvoiceBody() {
  const {
    invoiceType,
    buyer,
    project,
    address,
    phone,
    invoiceNumber,
    invoiceDate,
    description,
    personalNote,
    discount,
    tax,
    received,
    setInvoiceType,
    setBuyer,
    setProject,
    setAddress,
    setPhone,
    setInvoiceNumber,
    setInvoiceDate,
    setDescription,
    setPersonalNote,
    setDiscount,
    setTax,
    setReceived,
    addItem,
    getTotals,
  } = useInvoiceStore();

  const totals = getTotals();

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
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="w-full lg:col-span-2 space-y-6">
        <div className="w-full grid grid-cols-1 items-center lg:grid-cols-3 gap-6">
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
                    <SelectTrigger className="border-slate-200 focus:ring-slate-400">
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
                  <Label className="text-slate-700">
                    خریدار شرکت/خانم/آقای
                  </Label>
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

          <Card className="border-slate-200 bg-white/90 backdrop-blur col-span-1">
            <CardHeader className="p-5 bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
              <CardTitle className="text-slate-800">خلاصه مالی</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-700">تخفیف</Label>
                <Input
                  value={convertToPersianDigits(discount)}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="border-slate-200 rounded-lg focus:ring-slate-400"
                  placeholder="مبلغ تخفیف"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700">مالیات</Label>
                <Input
                  value={convertToPersianDigits(tax)}
                  onChange={(e) => setTax(e.target.value)}
                  className="border-slate-200 rounded-lg focus:ring-slate-400"
                  placeholder="مبلغ مالیات"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700">دریافتی</Label>
                <Input
                  value={convertToPersianDigits(received)}
                  onChange={(e) => setReceived(e.target.value)}
                  className="border-slate-200 rounded-lg focus:ring-slate-400"
                  placeholder="مبلغ دریافتی"
                />
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-slate-800">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-green-600">
                    {convertToPersianDigits(totals.totalPaymentAmount)}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  {persianNumberToText(
                    convertToPersianDigits(totals.totalPaymentAmount)
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200 bg-white/90 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
            <div className="flex items-center justify-between">
              <CardTitle className="text-slate-800">اقلام فاکتور</CardTitle>
              <Button
                onClick={addItem}
                size="sm"
                className="bg-slate-700 hover:bg-slate-800 gap-1 hover:cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                افزودن ردیف
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <InvoiceTable />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white/90 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
            <CardTitle className="text-slate-800">توضیحات</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-700">
                توضیحات فاکتور (نمایش در رسید تحویل)
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-slate-200 focus:ring-slate-400 focus-visible:ring-offset-0 min-h-20"
                placeholder="توضیحات"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">
                توضیحات اختصاصی (فقط در فاکتور)
              </Label>
              <Textarea
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                className="border-slate-200 focus:ring-slate-400 focus-visible:ring-offset-0 min-h-20"
                placeholder="توضیحات"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
