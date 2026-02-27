import { useMemo, useState, type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import WarehouseTable from './table/WarehouseTable';
import { convertToPersianDigits } from '~/lib/utils';
import { Package } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';

export default function WareHouseAssets(): ReactNode {
  const assets = useWarehouseStore((state) => state.items);
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

  // useEffect(() => {
  //   if (form.length && form.width && form.quantity) {
  //     const area =
  //       parseFloat(form.length) *
  //       parseFloat(form.width) *
  //       parseFloat(form.quantity);
  //     setForm((prev) => ({ ...prev, area: area.toString() }));
  //   }
  // }, [form.length, form.width, form.quantity, setForm]);

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-row w-full items-center justify-between gap-3">
          <CardTitle className="w-full text-slate-800 font-semibold text-lg">
            لیست محصولات انبار
            <span className="mr-2 text-sm font-normal text-slate-400">
              ({convertToPersianDigits(filteredItems.length)} از{' '}
              {convertToPersianDigits(assets.length)} محصول)
            </span>
          </CardTitle>

          <div className="flex flex-row justify-end w-full gap-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو..."
              className="w-40 border-slate-200 rounded-lg text-sm"
            />
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger
                dir="rtl"
                className="flex flex-row max-w-41 border border-slate-200 rounded-lg text-sm px-3 py-1.5 bg-white text-slate-700 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus:border-slate-400 focus:border-2"
              >
                <SelectValue placeholder={'همه دسته ها'} />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  {categories.map(([cat, catName]) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="hover:cursor-pointer"
                    >
                      {cat} — {catName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
          <WarehouseTable items={filteredItems} />
        )}
      </CardContent>
    </Card>
  );
}
