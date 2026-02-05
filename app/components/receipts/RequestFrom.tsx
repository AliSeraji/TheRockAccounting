import { Button } from '../ui/button';
import { Printer } from 'lucide-react';
import type { Props } from './types';

export const RequestFormPDF = ({ data }: Props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="font-vazirmatn space-y-4">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-bold text-gray-800">
          پیش‌نمایش درخواست سنگ (A5)
        </h2>
        <Button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 gap-2"
        >
          <Printer className="w-4 h-4" />
          چاپ
        </Button>
      </div>

      {/* A5 Request Form Preview */}
      <div
        className="bg-white mx-auto shadow-2xl print:shadow-none"
        style={{ width: '210mm', minHeight: '148mm', padding: '10mm' }}
        dir="rtl"
      >
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
              درخواست سنگ
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
              <span className="text-gray-600">شماره موبایل:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">پروژه:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.project}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">آدرس:</span>
              <span className="font-semibold flex-1 border-b border-gray-300 pb-1">
                {data.address}
              </span>
            </div>
          </div>
        </div>

        {/* Stone Request Table */}
        <table className="w-full border-collapse mb-4 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-500 p-1.5">ردیف</th>
              <th className="border-2 border-gray-500 p-1.5">شرح</th>
              <th className="border-2 border-gray-500 p-1.5">طول</th>
              <th className="border-2 border-gray-500 p-1.5">عرض</th>
              <th className="border-2 border-gray-500 p-1.5">ضخامت</th>
              <th className="border-2 border-gray-500 p-1.5">تعداد</th>
              <th className="border-2 border-gray-500 p-1.5">متراژ</th>
              <th className="border-2 border-gray-500 p-1.5">واحد</th>
              <th className="border-2 border-gray-500 p-1.5">توضیحات</th>
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
                    {item?.length || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.width || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.thickness || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.quantity || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center">
                    {item?.area || ''}
                  </td>
                  <td className="border-2 border-gray-400 p-1.5 text-center"></td>
                  <td className="border-2 border-gray-400 p-1.5 text-center"></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Services Table */}
        <table className="w-full border-collapse mb-4 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-500 p-1.5">ردیف</th>
              <th className="border-2 border-gray-500 p-1.5">شرح خدمات</th>
              <th className="border-2 border-gray-500 p-1.5">متراژ</th>
              <th className="border-2 border-gray-500 p-1.5">واحد</th>
              <th className="border-2 border-gray-500 p-1.5">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => (
              <tr key={num} className="hover:bg-gray-50">
                <td className="border-2 border-gray-400 p-1.5 text-center">
                  {num}
                </td>
                <td className="border-2 border-gray-400 p-1.5 text-center"></td>
                <td className="border-2 border-gray-400 p-1.5 text-center"></td>
                <td className="border-2 border-gray-400 p-1.5 text-center"></td>
                <td className="border-2 border-gray-400 p-1.5 text-center"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
