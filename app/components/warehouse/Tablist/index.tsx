import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { WarehouseId } from '~/store/warehouse/types';
import { ICONS_BY_NAME, WAREHOUSE_SECTIONS } from '../common';

export default function WarehouseTablist(): ReactNode {
  const activeId = useWarehouseStore((state) => state.activeWarehouse);
  const onSelect = useWarehouseStore((state) => state.setActiveWarehouse);
  const enabled = useWarehouseStore((state) => state.enabled);

  return (
    <Tabs
      value={activeId}
      onValueChange={(id) => onSelect(id as WarehouseId)}
      orientation="horizontal"
      dir="rtl"
      className="w-full"
    >
      <TabsList
        className={cn(
          'flex h-auto w-full flex-row gap-1 rounded-[14px] bg-[#f6f1e7] p-1',
          'overflow-x-auto overscroll-x-contain'
        )}
      >
        {WAREHOUSE_SECTIONS.map((s) => {
          const Icn = ICONS_BY_NAME[s.iconName];
          return (
            <TabsTrigger
              key={s.id}
              value={s.id}
              className={cn(
                'flex flex-1 min-w-fit flex-row items-center justify-center gap-2 whitespace-nowrap rounded-[10px] px-2.5 py-3',
                'text-[13.5px] font-medium text-[#6b6459] transition-[background-color,color,box-shadow] duration-200',
                'data-[state=inactive]:hover:text-[#1f2937]',
                'data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-[#a4854a]',
                'data-[state=active]:shadow-[0_1px_2px_rgba(31,41,55,0.08),0_4px_12px_rgba(164,133,74,0.12)]'
              )}
            >
              <Icn className="size-4" strokeWidth={1.7} />
              <span>{s.title}</span>
              {!enabled[s.id] && (
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                  غیرفعال
                </span>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
