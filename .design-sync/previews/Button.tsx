import { Button } from 'rock-fact';
import { Plus, Printer, Trash2 } from 'lucide-react';

export const Variants = () => (
  <div dir="rtl" className="flex flex-wrap items-center gap-2">
    <Button>ثبت فاکتور</Button>
    <Button variant="secondary">پیش‌نمایش</Button>
    <Button variant="outline">انصراف</Button>
    <Button variant="ghost">ویرایش</Button>
    <Button variant="destructive">حذف</Button>
    <Button variant="link">مشاهده جزئیات</Button>
  </div>
);

export const Sizes = () => (
  <div dir="rtl" className="flex flex-wrap items-center gap-2">
    <Button size="sm">کوچک</Button>
    <Button>پیش‌فرض</Button>
    <Button size="lg">بزرگ</Button>
    <Button size="icon" variant="outline" aria-label="افزودن ردیف">
      <Plus />
    </Button>
  </div>
);

export const WithIcon = () => (
  <div dir="rtl" className="flex flex-wrap items-center gap-2">
    <Button size="sm" className="bg-gray-800 hover:bg-gray-900 gap-1.5 h-7 px-2.5 text-xs">
      <Printer className="w-3.5 h-3.5" />
      چاپ
    </Button>
    <Button variant="outline" size="sm">
      <Plus />
      افزودن ردیف
    </Button>
    <Button variant="destructive" size="sm">
      <Trash2 />
      حذف همه داده‌ها
    </Button>
  </div>
);

export const Disabled = () => (
  <div dir="rtl" className="flex flex-wrap items-center gap-2">
    <Button disabled>ثبت فاکتور</Button>
    <Button variant="outline" disabled>
      انصراف
    </Button>
  </div>
);
