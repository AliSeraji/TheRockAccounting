import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { WarehouseId } from '~/store/warehouse/types';
import { ACCENT, ICONS_BY_NAME, WAREHOUSE_SECTIONS } from '../common';

export default function WarehouseMobileTablist(): ReactNode {
  const activeId = useWarehouseStore((state) => state.activeWarehouse);
  const onSelect = useWarehouseStore((state) => state.setActiveWarehouse);
  const enabled = useWarehouseStore((state) => state.enabled);

  return (
    <div className="w-full min-w-0 px-3">
      <Tabs
        value={activeId}
        onValueChange={(id) => onSelect(id as WarehouseId)}
        orientation="horizontal"
        className="w-[unset] min-w-0 rounded-lg border border-slate-200/70 bg-white/85 backdrop-blur-md inset-0"
      >
        <TabsList
          className={cn(
            'flex flex-row-reverse items-stretch justify-start gap-1.5 h-auto w-[unset] max-w-full',
            'bg-transparent rounded-lg py-0',
            'overflow-x-auto overscroll-x-contain touch-pan-x scroll-px-2'
          )}
        >
          {WAREHOUSE_SECTIONS.map((s) => {
            const Icn = ICONS_BY_NAME[s.iconName];
            const isActive = activeId === s.id;
            return (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className={cn(
                  'group relative flex flex-col items-center justify-center gap-1.5',
                  'px-4 py-2 rounded-xl h-full whitespace-nowrap transition',
                  'data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0',
                  'data-[state=inactive]:hover:bg-transparent',
                  !enabled[s.id] && 'opacity-50'
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-sm flex items-center justify-center transition',
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'bg-[#f2ede4] text-[#6b6257]'
                  )}
                >
                  <Icn className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-semibold leading-tight text-center text-slate-800">
                  {s.title}
                </div>
                {isActive && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-10 rounded-t-full"
                    style={{ background: ACCENT.to }}
                  />
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}
