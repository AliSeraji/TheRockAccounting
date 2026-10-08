import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Package, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { convertToPersianDigits } from '~/lib/utils';
import {
  selectOpenItemId,
  useWarehouseStore,
} from '~/store/warehouse/useWarehouse';
import WarehouseTable from './table/WarehouseTable';
import type { WarehouseColumn } from './table/types';

const PAGE_SIZE = 20;

type ListItem = { id: number; code?: string };

interface ItemsCardProps<T extends ListItem> {
  title: string;
  // Singular noun for the items
  noun: string;
  items: T[];
  columns: WarehouseColumn<T>[];
  // Text searched alongside the code, if the items have one.
  nameOf: (item: T) => string;
  // Enables the category filter when given.
  categoryOf?: (item: T) => string;
  // Rows matching this are highlighted, with `flagLabel` as their tooltip.
  isFlagged?: (item: T) => boolean;
  flagLabel?: string;
}

export default function ItemsCard<T extends ListItem>({
  title,
  noun,
  items,
  columns,
  nameOf,
  categoryOf,
  isFlagged,
  flagLabel,
}: ItemsCardProps<T>): ReactNode {
  const selectedId = useWarehouseStore(selectOpenItemId);
  const openItem = useWarehouseStore((state) => state.openItem);
  const openNewItem = useWarehouseStore((state) => state.openNewItem);
  const handleSelect = (item: T) => openItem(item.id);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => (categoryOf ? Array.from(new Set(items.map(categoryOf))) : []),
    [items, categoryOf]
  );

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const matchSearch =
          !search ||
          nameOf(item).includes(search) ||
          !!item.code?.toLowerCase().includes(search.toLowerCase());
        const matchCategory =
          !filterCategory || categoryOf?.(item) === filterCategory;
        return matchSearch && matchCategory;
      }),
    [items, search, filterCategory, nameOf, categoryOf]
  );

  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
  const paginatedItems = useMemo(
    () =>
      filteredItems.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      ),
    [filteredItems, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterCategory]);

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-col md:flex-row w-full items-stretch md:items-center justify-between gap-3">
          <CardTitle className="w-full text-slate-800 font-semibold text-lg">
            {title}
            <span className="mr-2 text-sm font-normal text-slate-400">
              ({convertToPersianDigits(filteredItems.length)} از{' '}
              {convertToPersianDigits(items.length)} {noun})
            </span>
          </CardTitle>

          <div className="flex flex-row justify-end w-full gap-2">
            <Button
              onClick={openNewItem}
              className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              {noun} جدید
            </Button>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو..."
              className="min-w-0 flex-1 md:flex-none md:w-40 border-slate-200 rounded-lg text-sm"
            />
            {categoryOf && (
              <Select
                value={filterCategory || 'all'}
                onValueChange={(v) => setFilterCategory(v === 'all' ? '' : v)}
              >
                <SelectTrigger
                  dir="rtl"
                  className="flex flex-row max-w-41 border border-slate-200 rounded-lg text-sm px-3 py-1.5 bg-white text-slate-700 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus:border-slate-400 focus:border-2"
                >
                  <SelectValue placeholder={'همه دسته ها'} />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="all" className="hover:cursor-pointer">
                      همه دسته‌ها
                    </SelectItem>
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat}
                        value={cat}
                        className="hover:cursor-pointer"
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
            <Package className="w-12 h-12 opacity-30" />
            <p className="text-sm">هیچ موردی یافت نشد</p>
          </div>
        ) : (
          <WarehouseTable
            columns={columns}
            items={paginatedItems}
            firstRowNumber={(currentPage - 1) * PAGE_SIZE + 1}
            selectedId={selectedId}
            onSelect={handleSelect}
            isFlagged={isFlagged}
            flagLabel={flagLabel}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </CardContent>
    </Card>
  );
}
