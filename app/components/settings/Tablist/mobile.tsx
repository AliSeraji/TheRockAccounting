import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ACCENT, ALERT, ICONS_BY_NAME, SETTINGS_SECTIONS } from '../common';
import type { SettingsSectionDescriptor } from '../types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export default function SettingsMobileTablist(): ReactNode {
  const activeId = useSettingsStore((state) => state.activeSection.id);
  const onSelect = useSettingsStore((state) => state.setActiveSection);

  return (
    <div className="w-full min-w-0 px-3">
      <Tabs
        value={activeId}
        onValueChange={onSelect}
        orientation="horizontal"
        className={cn(
          'w-[unset] min-w-0 rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-md inset-0',
          'shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]'
        )}
      >
        <TabsList
          className={cn(
            'flex flex-row-reverse items-stretch justify-start gap-1.5 h-auto w-[unset] max-w-full',
            'bg-transparent rounded-2xl py-0',
            'overflow-x-auto overscroll-x-contain touch-pan-x scroll-px-2'
          )}
        >
          {SETTINGS_SECTIONS.map((s: SettingsSectionDescriptor) => {
            const Icn = ICONS_BY_NAME[s.iconName];
            const isActive = activeId === s.id;
            const isDanger = s.id === 'danger';
            const gradient = isDanger ? ALERT : ACCENT;
            const chipBg = isActive
              ? `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
              : '#f1f5f9';
            return (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className={cn(
                  'group relative flex flex-col items-center justify-center gap-1.5',
                  'px-4 py-2 rounded-xl h-full whitespace-nowrap transition',
                  'data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0 ',
                  'data-[state=inactive]:hover:bg-transparent '
                )}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition"
                  style={{
                    background: chipBg,
                    color: isActive
                      ? 'white'
                      : isDanger
                        ? ALERT.from
                        : '#475569',
                  }}
                >
                  <Icn className="w-4 h-4" />
                </div>
                <div
                  className={cn(
                    'text-[11px] font-semibold leading-tight text-center',
                    isDanger && !isActive ? 'text-amber-500' : 'text-slate-800'
                  )}
                >
                  {s.title}
                </div>
                {isActive && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-10 rounded-t-full"
                    style={{ background: gradient.to }}
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
