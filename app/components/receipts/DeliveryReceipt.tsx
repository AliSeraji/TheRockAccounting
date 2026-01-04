import { Button } from '../ui/button';
import { Printer } from 'lucide-react';
import type { Props } from './types';

export const DeliveryReceiptPDF = ({ data }: Props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش رسید تحویل بار (A5)
        </h2>
        <Button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 gap-2"
        >
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>

      {/* A5 Receipt Preview */}
      <div
        className="group bg-white mx-auto shadow-2xl"
        style={{ width: '210mm', minHeight: '148mm', padding: '10mm' }}
        dir="rtl"
      >
        {/* Print Icon */}
        <div className="flex justify-end mb-2">
          <div className="border-2 border-gray-400 p-2 rounded">
            <Printer className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          {/* Logo */}
          <div className="border-2 border-gray-600 px-4 py-3 text-lg font-bold">
            Logo
          </div>

          {/* Company Info */}
          <div className="text-center flex-1 mx-6">
            <h1 className="text-xl font-bold text-gray-900">شرکت man</h1>
            <h2 className="text-lg font-bold mt-1 text-gray-800">
              رسید تحویل بار
            </h2>
          </div>

          {/* Invoice Number & Date */}
          <div className="text-left space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">شماره:</span>
              <span className="font-bold border-b border-gray-400 px-3">
                {data.invoiceNumber || '۱۲۳۴'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">تاریخ:</span>
              <span className="font-bold border-b border-gray-400 px-3">
                {data.invoiceDate || '۱۴۰۴/۰۱/۰۱'}
              </span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">نام شرکت/خانم/آقای:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.buyer || 'خریدار'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">پروژه:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.project}
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <span className="text-gray-600">آدرس:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.address}
              </span>
            </div>
          </div>
        </div>

        {/* Items Table - Delivery specific (without price columns) */}
        <table className="w-full border-collapse mb-4 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-500 p-1.5">ردیف</th>
              <th className="border-2 border-gray-500 p-1.5">نوع سنگ</th>
              <th className="border-2 border-gray-500 p-1.5">ضخامت تقریبی</th>
              <th className="border-2 border-gray-500 p-1.5">طول (متر)</th>
              <th className="border-2 border-gray-500 p-1.5">
                عرض (سانتی متر)
              </th>
              <th className="border-2 border-gray-500 p-1.5">تعداد</th>
              <th className="border-2 border-gray-500 p-1.5">متراژ</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => {
              const item = data.items[num - 1];
              return (
                <tr key={num} className="hover:bg-gray-50">
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {num}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.stoneType || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.thickness || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.length || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.width || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.quantity || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.area || ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-bold">
              <td
                colSpan={6}
                className="border-2 border-gray-500 p-1.5 text-left"
              >
                متراژ کل
              </td>
              <td className="border-2 border-gray-500 p-1.5 text-center">*</td>
            </tr>
          </tfoot>
        </table>

        {/* Delivery Confirmation Text */}
        <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50 text-sm">
          <p className="leading-relaxed text-gray-700">
            کالای مشروحه فوق بدون عیب و نقص تحویل اینجانب:
            ................................ (الفته فوری شماره
            .................... گردید که در آدرس فوق تحویل خریدار نمایم.
          </p>
        </div>

        {/* Signature */}
        <div className="flex justify-center mt-6">
          <div className="text-center">
            <div className="w-40 border-b-2 border-gray-400 mb-2"></div>
            <span className="text-gray-600 text-sm">امضاء</span>
          </div>
        </div>
      </div>
    </div>
  );
};
