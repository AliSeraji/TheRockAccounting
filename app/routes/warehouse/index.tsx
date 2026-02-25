import { useState, useMemo, type ReactNode, type SetStateAction } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home, Package, Plus, Save, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import type { WarehouseItem } from '~/store/warehouse/types';
import {
  categoryColors,
  emptyForm,
  formFields,
} from '~/components/warehouse/constants';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import NewItemCard from '~/components/warehouse/NewItemCard';

export default function Warehouse(): ReactNode {
  const items = useWarehouseStore((state) => state.items);
  const addItem = useWarehouseStore((state) => state.addItem);
  const updateItem = useWarehouseStore((state) => state.updateItem);
  const removeItem = useWarehouseStore((state) => state.removeItem);

  const [form, setForm] = useState(emptyForm);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const getCurrentTimestamp = () =>
    new Date().toLocaleString('fa-IR').slice(0, 9);

  const handleChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    for (let [key, value] of Object.entries(form)) {
      if (key === 'date') continue;
      if (!value) {
        console.log('Missing field:', key);
        alert('لطفاً تمام فیلدها را پر کنید');
        return;
      }
    }
    if (selectedId !== null) {
      updateItem(selectedId, { ...form, date: getCurrentTimestamp() });
    } else {
      addItem({ ...form, date: getCurrentTimestamp() });
    }

    setForm(emptyForm);
    setSelectedId(null);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    removeItem(selectedId);
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
      id: item.id,
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
      date: item.date,
    });
  };

  const selectedItem = items.find((i) => i.id === selectedId);

  const categories = useMemo(
    () =>
      Array.from(
        new Map(items.map((i) => [i.category, i.categoryName])).entries()
      ),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const matchSearch =
          !search ||
          item.name.includes(search) ||
          item.code.toLowerCase().includes(search.toLowerCase());
        const matchCategory =
          !filterCategory || item.category === filterCategory;
        return matchSearch && matchCategory;
      }),
    [items, search, filterCategory]
  );

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
        <NewItemCard
          selectedId={selectedId}
          handleNew={handleNew}
          handleSave={handleSave}
          handleDelete={handleDelete}
          form={form}
          setForm={setForm}
          selectedItem={selectedItem}
        />

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
                          {item.date || '—'}
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
