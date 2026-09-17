import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ICONS_BY_NAME, SETTINGS_SECTIONS } from '../common';
import type { SettingsSectionDescriptor } from '../types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export default function SettingsTopBar(): ReactNode {
  const activeId = useSettingsStore((state) => state.activeSection.id);
  const onSelect = useSettingsStore((state) => state.setActiveSection);
  return (
    <Tabs
      value={activeId}
      onValueChange={onSelect}
      orientation="horizontal"
      dir="rtl"
      className={cn('w-full')}
    >
      <TabsList className="flex h-auto w-full flex-row gap-1 rounded-[14px] bg-[#f6f1e7]/75 backdrop-blur-md p-1 shadow-[0_8px_24px_-12px_rgba(51,43,34,0.12)]">
        {SETTINGS_SECTIONS.map((s: SettingsSectionDescriptor) => {
          const Icn = ICONS_BY_NAME[s.iconName];
          return (
            <TabsTrigger
              key={s.id}
              value={s.id}
              className={cn(
                'group relative flex flex-row flex-1 min-w-fit items-center justify-center gap-3 px-3 rounded-[10px] text-right whitespace-normal transition py-3',
                'text-[13.5px] font-medium text-[#6b6459] transition-[background-color,color,box-shadow] duration-200',
                'data-[state=inactive]:hover:text-[#1f2937]',
                'data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-[#a4854a]',
                'data-[state=active]:shadow-[0_1px_2px_rgba(31,41,55,0.08),0_4px_12px_rgba(164,133,74,0.12)]'
              )}
            >
              <Icn className="w-4 h-4" />
              <span>{s.title}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
