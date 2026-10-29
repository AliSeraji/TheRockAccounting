import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Package } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  selectOpenItemId,
  useWarehouseStore,
} from '~/store/warehouse/useWarehouse';
import DataTable from '../data-table/DataTable';
import ListHeader from '../data-table/ListHeader';
import type { DataTableColumn, ListFilter } from '../data-table/types';

const PAGE_SIZE = 20;

type ListItem = { id: string; code?: string };

interface ItemsCardProps<T extends ListItem> {
  title: string;
  // Singular noun for the items
  noun: string;
  items: T[];
  columns: DataTableColumn<T>[];
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

  const filters: ListFilter[] = categoryOf
    ? [
        {
          key: 'category',
          label: 'دسته',
          value: filterCategory || 'all',
          options: [
            { value: 'all', label: 'همه دسته‌ها' },
            ...categories.map((cat) => ({ value: cat, label: cat })),
          ],
          onChange: (v) => setFilterCategory(v === 'all' ? '' : v),
        },
      ]
    : [];

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
      <ListHeader
        title={title}
        noun={noun}
        shown={filteredItems.length}
        total={items.length}
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={`جستجوی ${noun}...`}
        filters={filters}
        addLabel={`${noun} جدید`}
        onAdd={openNewItem}
      />

      <CardContent className="p-0">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
            <Package className="w-12 h-12 opacity-30" />
            <p className="text-sm">هیچ موردی یافت نشد</p>
          </div>
        ) : (
          <DataTable
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
