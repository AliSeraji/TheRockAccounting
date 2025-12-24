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
import { convertToPersianDigits } from '~/lib/utils';
import InvoiceTable from './Table';

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
    items,
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
    setActiveTab,
    addItem,
    removeItem,
    updateItem,
    getTotals,
  } = useInvoiceStore();

  const totals = getTotals();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="w-full lg:col-span-2 space-y-6">
        <div className="w-full grid grid-cols-1 items-center lg:grid-cols-3 gap-6">
          <Card className="border-slate-200 bg-white/90 backdrop-blur col-span-2">
            <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
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
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="اتوماتیک تولید شود"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">
                    خریدار شرکت/خانم/آقای
                  </Label>
                  <Input
                    value={convertToPersianDigits(buyer)}
                    onChange={(e) => setBuyer(e.target.value)}
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="انتخاب از دیتا ثبت شده"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">تاریخ</Label>
                  <Input
                    value={convertToPersianDigits(invoiceDate)}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="تاریخ روز"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">پروژه</Label>
                  <Input
                    value={convertToPersianDigits(project)}
                    onChange={(e) => setProject(e.target.value)}
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="دستی درج شود"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">تلفن</Label>
                  <Input
                    value={convertToPersianDigits(phone)}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="شماره تلفن"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-slate-700">آدرس</Label>
                  <Input
                    value={convertToPersianDigits(address)}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border-slate-200 focus:ring-slate-400"
                    placeholder="دستی درج شود"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90 backdrop-blur col-span-1">
            <CardHeader className="p-5 bg-gradient-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
              <CardTitle className="text-slate-800">خلاصه مالی</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-700">تخفیف</Label>
                <Input
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="border-slate-200 focus:ring-slate-400"
                  placeholder="مبلغ تخفیف"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700">مالیات</Label>
                <Input
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
                  className="border-slate-200 focus:ring-slate-400"
                  placeholder="مبلغ مالیات"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700">دریافتی</Label>
                <Input
                  value={received}
                  onChange={(e) => setReceived(e.target.value)}
                  className="border-slate-200 focus:ring-slate-400"
                  placeholder="مبلغ دریافتی"
                />
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-slate-800">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-green-600">۱۲۳,۴۵۰,۰۰۰</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  یکصد و بیست و سه میلیون و چهارصد و پنجاه هزار ریال
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
                className="bg-slate-700 hover:bg-slate-800 gap-1"
              >
                <Plus className="w-4 h-4" />
                افزودن ردیف
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              {/* <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-300 p-2 text-sm">
                      ردیف
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      نوع سنگ
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      ضخامت تقریبی
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      تعداد
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">عرض</th>
                    <th className="border border-slate-300 p-2 text-sm">طول</th>
                    <th className="border border-slate-300 p-2 text-sm">
                      متراژ (مترمربع)
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      بهاء
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      مبلغ کل (ریال)
                    </th>
                    <th className="border border-slate-300 p-2 text-sm">
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item: any, index: any) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="border border-slate-200 p-2 text-center text-slate-700 font-medium">
                        {index + 1}
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={item.stoneType}
                          onChange={(e) =>
                            updateItem(item.id, 'stoneType', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                          placeholder="انتخاب"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.thickness)}
                          onChange={(e) =>
                            updateItem(item.id, 'thickness', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.quantity)}
                          onChange={(e) =>
                            updateItem(item.id, 'quantity', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.width)}
                          onChange={(e) =>
                            updateItem(item.id, 'width', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.length)}
                          onChange={(e) =>
                            updateItem(item.id, 'length', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.area)}
                          onChange={(e) =>
                            updateItem(item.id, 'area', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.price)}
                          onChange={(e) =>
                            updateItem(item.id, 'price', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1">
                        <Input
                          value={convertToPersianDigits(item.total)}
                          onChange={(e) =>
                            updateItem(item.id, 'total', e.target.value)
                          }
                          className="border-0 text-center text-sm h-8"
                        />
                      </td>
                      <td className="border border-slate-200 p-1 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-100 font-semibold text-slate-800">
                    <td
                      colSpan={3}
                      className="border border-slate-300 p-2 text-center"
                    >
                      جمع فاکتور
                    </td>
                    <td className="border border-slate-300 p-2 text-center">
                      {convertToPersianDigits(totals.totalQuantity) || '-'}
                    </td>
                    <td
                      colSpan={2}
                      className="border border-slate-300 p-2"
                    ></td>
                    <td className="border border-slate-300 p-2 text-center">
                      {totals.totalArea || '-'}
                    </td>
                    <td className="border border-slate-300 p-2"></td>
                    <td className="border border-slate-300 p-2 text-center">
                      {totals.totalAmount || '-'}
                    </td>
                    <td className="border border-slate-300 p-2"></td>
                  </tr>
                </tfoot>
              </table> */}
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
                className="border-slate-200 focus:ring-slate-400 min-h-[80px]"
                placeholder="توضیحاتی که در قسمت فاکتور نشان می دهد اینجا درج شود که در قسمت رسید تحویل نشان داده شود"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">
                توضیحات اختصاصی (فقط در فاکتور)
              </Label>
              <Textarea
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                className="border-slate-200 focus:ring-slate-400 min-h-[80px]"
                placeholder="توضیحات دوم (مثل شماره حساب یا کارت و هرچیز دیگه ای که هرکسی برای خودش شخصی سازی کنه) فقط در فاکتور رویت شود"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
