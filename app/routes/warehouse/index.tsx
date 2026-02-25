import { useState, type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home, Package, Plus, Save, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import stonesData from '~/dummy_data/stones.json';
import type { WarehouseItem } from '~/store/warehouse/types';

const emptyForm = {
  code: '',
  category: '',
  categoryName: '',
  name: '',
  diameter: '',
  length: '',
  width: '',
  area: '',
  purchasePrice: '',
  salePrice: '',
  notes: '',
};

const formFields: {
  label: string;
  key: keyof typeof emptyForm;
  type?: string;
  placeholder?: string;
}[] = [
  { label: 'کد', key: 'code', placeholder: 'کد محصول' },
  { label: 'نام محصول', key: 'name', placeholder: 'نوع سنگ' },
  { label: 'قطر', key: 'diameter', placeholder: 'به سانتی متر' },
  { label: 'طول', key: 'length', placeholder: 'به متر' },
  { label: 'عرض', key: 'width', placeholder: 'به متر' },
  { label: 'متراژ', key: 'area', placeholder: 'به متر' },
  {
    label: 'قیمت خرید',
    key: 'purchasePrice',
    type: 'number',
    placeholder: 'به ریال',
  },
  {
    label: 'قیمت فروش',
    key: 'salePrice',
    type: 'number',
    placeholder: 'به ریال',
  },
];

const categoryColors: Record<string, string> = {
  TRM: 'bg-amber-100 text-amber-800',
  TRV: 'bg-orange-100 text-orange-800',
  TNX: 'bg-yellow-100 text-yellow-800',
  CHN: 'bg-sky-100 text-sky-800',
  STN: 'bg-slate-100 text-slate-700',
  GRN: 'bg-emerald-100 text-emerald-800',
  LMS: 'bg-lime-100 text-lime-800',
  LMN: 'bg-teal-100 text-teal-800',
  MRM: 'bg-pink-100 text-pink-800',
  MRT: 'bg-purple-100 text-purple-800',
};

const initialItems: WarehouseItem[] = stonesData.map((stone, index) => ({
  ...stone,
  id: index + 1,
  timestamp: '',
}));

export default function Warehouse(): ReactNode {
  const [items, setItems] = useState<WarehouseItem[]>(initialItems);
  const [form, setForm] = useState(emptyForm);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const getCurrentTimestamp = () => new Date().toLocaleString('fa-IR');

  const handleChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!form.name.trim()) return;

    if (selectedId !== null) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === selectedId
            ? { ...item, ...form, timestamp: getCurrentTimestamp() }
            : item
        )
      );
    } else {
      setItems((prev) => [
        ...prev,
        { id: Date.now(), ...form, timestamp: getCurrentTimestamp() },
      ]);
    }

    setForm(emptyForm);
    setSelectedId(null);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setItems((prev) => prev.filter((item) => item.id !== selectedId));
    setForm(emptyForm);
    setSelectedId(null);
  };

  const handleNew = () => {
    setForm(emptyForm);
    setSelectedId(null);
  };

  const handleSelectItem = (item: WarehouseItem) => {
    setSelectedId(item.id);
    setForm({
      code: item.code,
      category: item.category,
      categoryName: item.categoryName,
      name: item.name,
      diameter: item.diameter,
      length: item.length,
      width: item.width,
      area: item.area,
      purchasePrice: item.purchasePrice,
      salePrice: item.salePrice,
      notes: item.notes,
    });
  };

  const selectedItem = items.find((i) => i.id === selectedId);

  const categories = Array.from(
    new Map(items.map((i) => [i.category, i.categoryName])).entries()
  );

  const filteredItems = items.filter((item) => {
    const matchSearch =
      !search ||
      item.name.includes(search) ||
      item.code.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !filterCategory || item.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div
      className="flex flex-col justify-center w-full h-full py-6 font-vazirmatn"
      dir="rtl"
    >
      <PageHeader
        lastPage="داشبورد اصلی"
        currentPage="انبار"
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />

      <div className="w-full flex flex-col items-center overflow-auto pt-16 gap-6 px-4">
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

        <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
          <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="text-slate-800 font-semibold text-lg">
                لیست محصولات انبار
                <span className="mr-2 text-sm font-normal text-slate-400">
                  ({filteredItems.length} از {items.length} محصول)
                </span>
              </CardTitle>

              <div className="flex flex-wrap gap-2 items-center">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجو..."
                  className="w-40 border-slate-200 rounded-lg text-sm"
                />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="border border-slate-200 rounded-lg text-sm px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
                >
                  <option value="">همه دسته‌ها</option>
                  {categories.map(([cat, catName]) => (
                    <option key={cat} value={cat}>
                      {cat} — {catName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
                <Package className="w-12 h-12 opacity-30" />
                <p className="text-sm">هیچ محصولی یافت نشد</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                      {[
                        'کد',
                        'دسته‌بندی',
                        'نام محصول',
                        'قطر',
                        'طول',
                        'عرض',
                        'متراژ',
                        'قیمت خرید',
                        'قیمت فروش',
                        'توضیحات',
                        'زمان ثبت/ویرایش',
                      ].map((col) => (
                        <th
                          key={col}
                          className="text-right px-4 py-3 font-medium whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item, idx) => (
                      <tr
                        key={item.id}
                        onClick={() => handleSelectItem(item)}
                        className={`border-b border-slate-100 hover:bg-teal-50 transition-colors cursor-pointer ${
                          selectedId === item.id
                            ? 'bg-teal-50 ring-1 ring-inset ring-teal-300'
                            : idx % 2 === 0
                              ? 'bg-white'
                              : 'bg-slate-50/50'
                        }`}
                      >
                        <td className="px-4 py-3 text-slate-700 font-mono text-xs whitespace-nowrap">
                          {item.code || '—'}
                        </td>
                        <td className="px-4 py-3">
                          {item.categoryName ? (
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${categoryColors[item.category] ?? 'bg-slate-100 text-slate-600'}`}
                            >
                              {item.categoryName}
                            </span>
                          ) : (
                            '—'
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.diameter || '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.length || '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.width || '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.area || '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.purchasePrice
                            ? Number(item.purchasePrice).toLocaleString('fa-IR')
                            : '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.salePrice
                            ? Number(item.salePrice).toLocaleString('fa-IR')
                            : '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-500 max-w-48 truncate">
                          {item.notes || '—'}
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                          {item.timestamp || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
