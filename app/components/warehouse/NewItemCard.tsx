import { memo, useCallback, type ReactNode, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Package, Plus, Save, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { formFields } from './constants';
import type { WarehouseItem } from '~/store/warehouse/types';
import FormField from './FormField';
import { emptyItem, useWarehouseStore } from '~/store/warehouse/useWarehouse';

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

  const getCurrentTimestamp = () =>
    new Date().toLocaleString('fa-IR').slice(0, 9);

  const handleSave = () => {
    if (!selectedItem) return;
    for (let [key, value] of Object.entries(selectedItem)) {
      if (key === 'date' || key === 'id') continue;
      if (!value) {
        console.log('Missing field:', key);
        alert('لطفاً تمام فیلدها را پر کنید');
        return;
      }
    }
    if (selectedItem?.id !== null) {
      updateItem(selectedItem?.id, {
        ...selectedItem,
        date: getCurrentTimestamp(),
      });
    } else {
      const newId =
        items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
      addItem({ ...selectedItem, id: newId, date: getCurrentTimestamp() });
    }

    setSelectedItem(emptyItem);
  };

  const handleDelete = () => {
    if (!selectedItem) return;
    removeItem(selectedItem?.id);
    setSelectedItem(emptyItem);
  };

  const handleNew = () => {
    setSelectedItem(emptyItem);
  };

  const handleChange = useCallback(
    (field: keyof WarehouseItem, value: string) => {
      updateSelectedItem(field, value);
    },
    [updateSelectedItem]
  );

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-teal-600" />
            {selectedItem?.id !== null ? 'ویرایش محصول' : 'ایجاد محصول جدید'}
          </CardTitle>

          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleNew}
              className="gap-2 bg-linear-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              ایجاد محصول جدید
            </Button>
            <Button
              onClick={handleSave}
              className="gap-2 bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all hover:cursor-pointer"
            >
              <Save className="w-4 h-4" />
              ذخیره
            </Button>
            <Button
              onClick={handleDelete}
              disabled={selectedItem?.id === null}
              variant="destructive"
              className="gap-2 hover:cursor-pointer disabled:opacity-40"
            >
              <Trash2 className="w-4 h-4" />
              حذف
            </Button>
          </div>
        </div>
      </CardHeader>
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
    </Card>
  );
}

export default NewItemCard;
