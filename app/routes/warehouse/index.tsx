import { useState, useMemo, useCallback, type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home } from 'lucide-react';
import type { WarehouseItem } from '~/store/warehouse/types';
import { emptyForm } from '~/components/warehouse/constants';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import NewItemCard from '~/components/warehouse/NewItemCard';
import WareHouseAssets from '~/components/warehouse/Assets';

export default function Warehouse(): ReactNode {
  const items = useWarehouseStore((state) => state.items);
  const addItem = useWarehouseStore((state) => state.addItem);
  const updateItem = useWarehouseStore((state) => state.updateItem);
  const removeItem = useWarehouseStore((state) => state.removeItem);

  const [form, setForm] = useState(emptyForm);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getCurrentTimestamp = () =>
    new Date().toLocaleString('fa-IR').slice(0, 9);

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

  const selectedItem = items.find((i) => i.id === selectedId);

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
        />

        <WareHouseAssets
          assets={items}
          setForm={setForm}
          setSelectedId={() => setSelectedId}
          selectedId={selectedId}
        />
      </div>
    </div>
  );
}
