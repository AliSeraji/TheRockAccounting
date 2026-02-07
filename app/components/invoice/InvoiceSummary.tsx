import { convertToPersianDigits, persianNumberToText } from '~/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useInvoiceStore } from '~/store/useInvoiceStore';

export default function InvoiceSummary(): React.ReactNode {
  const {
    discount,
    setDiscount,
    tax,
    setTax,
    received,
    setReceived,
    getTotals,
  } = useInvoiceStore();
  const totals = getTotals();
  return (
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
  );
}
