import { useCallback, type ReactNode, useState, Activity } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Package,
  PackageSearch,
  Pencil,
  Plus,
  Save,
  Trash2,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { formFields } from './constants';
import type { WarehouseItem } from '~/store/warehouse/types';
import FormField from './FormField';
import { emptyItem, useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { Alert } from './Alert';
import { cn } from '~/lib/utils';
import { toast } from 'sonner';

function NewItemCard(): ReactNode {
  const items = useWarehouseStore((state) => state.items);
  const addItem = useWarehouseStore((state) => state.addItem);
  const updateItem = useWarehouseStore((state) => state.updateItem);
  const removeItem = useWarehouseStore((state) => state.removeItem);
  const selectedItem = useWarehouseStore((state) => state.selectedItem);
  const setSelectedItem = useWarehouseStore((state) => state.setSelectedItem);
  const updateSelectedItem = useWarehouseStore(
    (state) => state.updateSelectedItem
  );
  const [openAlert, setAlert] = useState(false);
  const [formActive, setFormActive] = useState(false);

  const isEditing = selectedItem.id !== -1;
  const isFormVisible = isEditing || formActive;

  const getCurrentTimestamp = () =>
    new Date().toLocaleString('fa-IR').slice(0, 9);

  const handleSave = () => {
    if (!selectedItem) return;
    for (let [key, value] of Object.entries(selectedItem)) {
      if (key === 'date' || key === 'id') continue;
      if (!value) {
        console.log('Missing field:', key);
        setAlert(true);
        return;
      }
    }
    if (selectedItem.id !== -1) {
      updateItem(selectedItem.id, {
        ...selectedItem,
        date: getCurrentTimestamp(),
      });
      toast.success(`محصول «${selectedItem.name}» با موفقیت ویرایش شد.`);
    } else {
      const newId =
        items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
      addItem({ ...selectedItem, id: newId, date: getCurrentTimestamp() });
      toast.success(`محصول «${selectedItem.name}» با موفقیت اضافه شد.`);
    }

    setSelectedItem(emptyItem);
    setFormActive(false);
  };

  const handleDelete = () => {
    if (!selectedItem || selectedItem.id === -1) return;
    const name = selectedItem.name;
    removeItem(selectedItem.id);
    setSelectedItem(emptyItem);
    setFormActive(false);
    toast.error(`محصول «${name}» حذف شد.`);
  };

  const handleNew = () => {
    setSelectedItem(emptyItem);
    setFormActive(true);
  };

  const handleChange = useCallback(
    (field: keyof WarehouseItem, value: string) => {
      updateSelectedItem(field, value);
    },
    [updateSelectedItem]
  );

  return (
    <Card
      className={cn(
        'w-full bg-white/90 backdrop-blur transition-colors',
        isEditing
          ? 'border-brand-400'
          : formActive
            ? 'border-brand-300'
            : 'border-slate-200'
      )}
    >
      <CardHeader
        className={cn(
          'rounded-t-lg border-b',
          isEditing
            ? 'bg-linear-to-r from-brand-200 to-slate-50 border-brand-300'
            : formActive
              ? 'bg-linear-to-r from-brand-100 to-slate-50 border-brand-200'
              : 'bg-linear-to-r from-slate-100 to-slate-50 border-slate-200'
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
              {isEditing ? (
                <>
                  <Pencil className="w-5 h-5 text-brand-600" />
                  ویرایش محصول
                </>
              ) : (
                <>
                  <Package className="w-5 h-5 text-brand-600" />
                  {formActive ? 'ایجاد محصول جدید' : 'مدیریت محصولات'}
                </>
              )}
            </CardTitle>
            <Activity mode={isEditing ? 'visible' : 'hidden'}>
              <span className="text-sm text-brand-900">
                {selectedItem.name} ({selectedItem.code})
              </span>
            </Activity>
          </div>
          <Activity mode={isFormVisible ? 'visible' : 'hidden'}>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleNew}
                className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                ایجاد محصول جدید
              </Button>
              <Button
                onClick={handleSave}
                className="gap-2 bg-linear-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
              >
                <Save className="w-4 h-4" />
                ذخیره
              </Button>
              <Button
                onClick={handleDelete}
                disabled={selectedItem.id === -1}
                variant="destructive"
                className="gap-2 hover:cursor-pointer disabled:opacity-40"
              >
                <Trash2 className="w-4 h-4" />
                حذف
              </Button>
            </div>
          </Activity>
        </div>
      </CardHeader>
      {isFormVisible ? (
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {formFields.map(({ label, key, type, placeholder }) => (
              <FormField
                key={key}
                label={label}
                fieldKey={key}
                value={selectedItem[key] as string}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
              />
            ))}
            <div className="flex flex-col space-y-2">
              <Label className="text-slate-700 pr-1">زمان ثبت/ویرایش</Label>
              <Input
                readOnly
                onSelect={() => null}
                value={getCurrentTimestamp()}
                className="border-slate-200 rounded-lg bg-slate-50 text-slate-400 cursor-default"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2 xl:col-span-4">
              <Label className="text-slate-700 pr-1">توضیحات</Label>
              <Textarea
                value={selectedItem.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="توضیحات محصول را وارد کنید..."
                className="border-slate-200 rounded-lg focus:ring-slate-400 min-h-24 resize-none"
              />
            </div>
          </div>
        </CardContent>
      ) : (
        <CardContent className="p-12">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <PackageSearch className="w-16 h-16 text-slate-300" />
            <div className="space-y-2">
              <p className="text-slate-500 text-lg font-medium">
                هیچ محصولی انتخاب نشده
              </p>
              <p className="text-slate-400 text-sm">
                یک محصول از جدول زیر انتخاب کنید یا محصول جدید بسازید
              </p>
            </div>
            <Button
              onClick={handleNew}
              className="gap-2 mt-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              ایجاد محصول جدید
            </Button>
          </div>
        </CardContent>
      )}
      <Alert
        open={openAlert}
        set={setAlert}
        title="خطا"
        description="لطفاً تمام فیلدها را پر کنید."
      />
    </Card>
  );
}

export default NewItemCard;
