import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Package, Plus, Save, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function NewItemCard({}:{
    
}): ReactNode {
  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-slate-800 font-semibold text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-teal-600" />
            {selectedId !== null ? 'ویرایش محصول' : 'ایجاد محصول جدید'}
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
              disabled={selectedId === null}
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
            <div key={key} className="flex flex-col space-y-2">
              <Label className="text-slate-700 pr-1">{label}</Label>
              <Input
                type={type ?? 'text'}
                value={form[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                placeholder={placeholder}
                className="border-slate-200 rounded-lg focus:ring-slate-400"
              />
            </div>
          ))}

          <div className="flex flex-col space-y-2">
            <Label className="text-slate-700 pr-1">زمان ثبت/ویرایش</Label>
            <Input
              readOnly
              value={selectedItem?.timestamp ?? '—'}
              className="border-slate-200 rounded-lg bg-slate-50 text-slate-400 cursor-default"
            />
          </div>

          <div className="flex flex-col space-y-2 md:col-span-2 xl:col-span-4">
            <Label className="text-slate-700 pr-1">توضیحات</Label>
            <Textarea
              value={form.notes}
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
