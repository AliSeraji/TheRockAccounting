import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from 'rock-fact';

export const DeleteConfirmation = () => (
  <Dialog open>
    <DialogContent dir="rtl">
      <DialogHeader>
        <DialogTitle className="pr-8">حذف مشتری</DialogTitle>
        <DialogDescription>
          آیا از حذف «سنگ‌بری آریا» مطمئن هستید؟ این عملیات قابل بازگشت نیست و سوابق فاکتورهای این مشتری حفظ می‌شود.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline">انصراف</Button>
        <Button variant="destructive">حذف مشتری</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const EditForm = () => (
  <Dialog open>
    <DialogContent dir="rtl">
      <DialogHeader>
        <DialogTitle className="pr-8">ویرایش نوع سنگ</DialogTitle>
        <DialogDescription>نام و ضخامت پیش‌فرض این سنگ را به‌روزرسانی کنید.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="stone-name">نام سنگ</Label>
          <Input id="stone-name" defaultValue="تراورتن کرم" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="stone-thickness">ضخامت (سانتی‌متر)</Label>
          <Input id="stone-thickness" defaultValue="۲" />
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline">انصراف</Button>
        <Button>ذخیره تغییرات</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
