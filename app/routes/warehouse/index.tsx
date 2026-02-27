import { useState, type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home } from 'lucide-react';
import NewItemCard from '~/components/warehouse/NewItemCard';
import WareHouseAssets from '~/components/warehouse/Assets';

export default function Warehouse(): ReactNode {
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
        <NewItemCard />

        <WareHouseAssets />
      </div>
    </div>
  );
}
