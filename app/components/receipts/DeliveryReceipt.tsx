import { Button } from '../ui/button';
import { Printer } from 'lucide-react';
import type { Props } from './types';

export const DeliveryReceiptPDF = ({ data }: Props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide everything on the page */
          body * {
            visibility: hidden;
          }

          /* Show only the receipt */
          #delivery-receipt,
          #delivery-receipt * {
            visibility: visible;
          }

          /* Position receipt at top-left */
          #delivery-receipt {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
          }

          /* A5 landscape page setup */
          @page {
            size: A5 landscape;
            margin: 8mm;
          }

          /* Each .receipt-page becomes its own printed page */
          .receipt-page {
            page-break-after: always;
            break-after: page;
            width: 100%;
            min-height: auto;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }

          /* Avoid unnecessary break on the last page */
          .receipt-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }

          /* Hide the print button and screen-only header */
          .no-print {
            display: none !important;
          }

          /* Ensure table rows don't split across pages */
          tr {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      <div className="space-y-4">
        {/* Screen-only header */}
        <div className="flex justify-between items-center mb-4 no-print">
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

        <div id="delivery-receipt" dir="rtl">
          <div
            className="receipt-page bg-white mx-auto shadow-2xl mb-8"
            style={{
              width: '210mm',
              minHeight: '148mm',
              padding: '8mm 10mm',
            }}
          >
            <div className="flex justify-end mb-2 no-print">
              <div className="border-2 border-gray-400 p-2 rounded">
                <Printer className="w-6 h-6 text-gray-600" />
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div className="border-2 border-gray-600 px-4 py-3 text-lg font-bold">
                Logo
              </div>

              <div className="text-center flex-1 mx-6">
                <h1 className="text-xl font-bold text-gray-900">شرکت man</h1>
                <h2 className="text-lg font-bold mt-1 text-gray-800">
                  رسید تحویل بار
                </h2>
              </div>

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

            <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 whitespace-nowrap">
                    نام شرکت/خانم/آقای:
                  </span>
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

            <table className="w-full border-collapse mb-4 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border-2 border-gray-500 p-1.5">ردیف</th>
                  <th className="border-2 border-gray-500 p-1.5">نوع سنگ</th>
                  <th className="border-2 border-gray-500 p-1.5">
                    ضخامت تقریبی
                  </th>
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
                  <td className="border-2 border-gray-500 p-1.5 text-center">
                    *
                  </td>
                </tr>
              </tfoot>
            </table>

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
      </div>
    </>
  );
};
