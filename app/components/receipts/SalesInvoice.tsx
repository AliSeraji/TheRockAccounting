import { Button } from '../ui/button';
import { Printer } from 'lucide-react';
import type { Props } from './types';

export const SalesInvoicePDF = ({ data }: Props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="font-vazirmatn w-full space-y-4">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش فاکتور فروش (A4)
        </h2>
        <Button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 gap-2"
        >
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>

      <div
        className="bg-white mx-auto shadow-2xl print:shadow-none"
        style={{ width: '210mm', minHeight: '297mm', padding: '15mm' }}
        dir="rtl"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="border-2 border-black px-6 py-4 text-xl font-bold">
            Logo
          </div>

          <div className="text-center flex-1 mx-8">
            <h1 className="text-2xl font-bold text-black">شرکت man</h1>
            <h2 className="text-xl font-bold mt-2 text-black">
              {data.invoiceType || 'فاکتور فروش'}
            </h2>
          </div>

          <div className="text-left space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-black">شماره:</span>
              <span className="font-bold px-4 text-[red]">
                {data.invoiceNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">تاریخ:</span>
              <span className="font-bold  px-4 text-[green]">
                {data.invoiceDate}
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-black">نام شرکت/خانم/آقای:</span>
              <span className="font-semibold flex-1 border-b border-black pb-1">
                {data.buyer || 'خریدار'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">تلفن:</span>
              <span className="font-semibold flex-1 border-b border-black pb-1">
                {data.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">پروژه:</span>
              <span className="font-semibold flex-1 border-b border-black pb-1">
                {data.project}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">آدرس:</span>
              <span className="font-semibold flex-1 border-b border-black pb-1">
                {data.address}
              </span>
            </div>
          </div>
        </div>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border-2 border-black p-2 text-sm">ردیف</th>
              <th className="border-2 border-black p-2 text-sm">نوع سنگ</th>
              <th className="border-2 border-black p-2 text-sm">
                ضخامت تقریبی
              </th>
              <th className="border-2 border-black p-2 text-sm">تعداد</th>
              <th className="border-2 border-black p-2 text-sm">عرض</th>
              <th className="border-2 border-black p-2 text-sm">طول</th>
              <th className="border-2 border-black p-2 text-sm">
                متراژ (مترمربع)
              </th>
              <th className="border-2 border-black p-2 text-sm">بهاء</th>
              <th className="border-2 border-black p-2 text-sm">
                مبلغ کل (ریال)
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => {
              const item = data.items[num - 1];
              return (
                <tr key={num} className="hover:bg-gray-50">
                  <td className="border-2 border-black p-2 text-center">
                    {num}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.stoneType || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.thickness || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.quantity || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.width || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.length || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.area || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.price || ''}
                  </td>
                  <td className="border-2 border-black p-2 text-center">
                    {item?.total || ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <td colSpan={3} className="border-2 border-black p-2 text-center">
                جمع فاکتور
              </td>
              <td className="border-2 border-black p-2 text-center">
                {data.totals.totalQuantity || '۱۲'}
              </td>
              <td colSpan={2} className="border-2 border-black p-2"></td>
              <td className="border-2 border-black p-2 text-center">
                {data.totals.totalArea || '۱۲۳۴'}
              </td>
              <td className="border-2 border-black p-2"></td>
              <td className="border-2 border-black p-2 text-center">
                {data.totals.totalAmount || '۱۲۳,۴۵۰,۰۰۰'}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="border-2 border-black p-4 mb-6 bg-gray-50">
          <div className="flex gap-8">
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-bold text-black">توضیحات: </span>
                {data.description ||
                  'سنگ های فوق طبق متراژ سفارش دهنده و خریدار بارگیری و تا تسویه حساب کامل نزد فریدار امانت می باشد. لازم به ذکر است فرستنده و کارخانه هیچ تعهدی در قبال پرداخت کرایه و تخلیه نداشته و به عهده گیرنده می باشد.'}
              </p>
            </div>
            <div className="space-y-2 text-left min-w-[120px]">
              <div className="flex justify-between">
                <span className="text-black">تخفیف</span>
                <span className="font-semibold">
                  {data.discount || '۶,۰۰۰'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">مالیات</span>
                <span className="font-semibold">*</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">دریافتی</span>
                <span className="font-semibold">*</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-black">مبلغ قابل پرداخت</span>
            </div>
            <div className="text-center">
              <span className="text-sm text-black">
                یکصد و بیست و سه میلیون و چهارصد و پنجاه هزار ریال
              </span>
            </div>
            <div className="text-xl font-bold text-black">۱۲۳,۴۵۰,۰۰۰</div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8">
          <div className="text-center">
            <div className="w-32 border-b-2 border-black mb-2"></div>
            <span className="text-black">امضاء فروشنده</span>
          </div>
          <div className="text-center">
            <div className="w-32 border-b-2 border-black mb-2"></div>
            <span className="text-black">امضاء خریدار</span>
          </div>
        </div>
      </div>
    </div>
  );
};
