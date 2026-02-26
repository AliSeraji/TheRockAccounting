import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import WarehouseTable from './table/WarehouseTable';
import { convertToPersianDigits } from '~/lib/utils';
import type { WarehouseItem } from '~/store/warehouse/types';
import { Package } from 'lucide-react';

interface AssetProps {
  assets: WarehouseItem[];
  setForm: (item: WarehouseItem) => void;
  setSelectedId: (num: Number | null) => void;
  selectedId: number | null;
}

export default function WareHouseAssets({
  assets,
  setForm,
  setSelectedId,
  selectedId,
}: AssetProps): ReactNode {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const categories = useMemo(
    () =>
      Array.from(
        new Map(assets.map((i) => [i.category, i.categoryName])).entries()
      ),
    [assets]
  );

  const filteredItems = useMemo(
    () =>
      assets.filter((asset) => {
        const matchSearch =
          !search ||
          asset.name.includes(search) ||
          asset.code.toLowerCase().includes(search.toLowerCase());
        const matchCategory =
          !filterCategory || asset.category === filterCategory;
        return matchSearch && matchCategory;
      }),
    [assets, search, filterCategory]
  );

  const handleSelectItem = useCallback((item: WarehouseItem) => {
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
  }, []);

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-slate-800 font-semibold text-lg">
            لیست محصولات انبار
            <span className="mr-2 text-sm font-normal text-slate-400">
              ({filteredItems.length} از {convertToPersianDigits(assets.length)}{' '}
              محصول)
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
          <WarehouseTable
            items={filteredItems}
            selectedId={selectedId}
            onSelectItem={handleSelectItem}
          />
        )}
      </CardContent>
    </Card>
  );
}
