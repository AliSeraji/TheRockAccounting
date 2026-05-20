import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { DANGER, ICONS_BY_NAME, SETTINGS_SECTIONS } from '../common';
import type { SettingsSectionDescriptor } from '../types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export default function SettingsSidebar(): ReactNode {
  const activeId = useSettingsStore((state) => state.activeSection.id);
  const onSelect = useSettingsStore((state) => state.setActiveSection);
  return (
    <aside className="w-72 shrink-0 sticky top-4 self-start">
      <div
        className={cn(
          'rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-md overflow-hidden',
          'shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="px-4 py-3 border-b border-slate-200/70 bg-gradient-to-l from-slate-50 to-white">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
            دسته‌بندی تنظیمات
          </div>
        </div>
        <nav className="p-2 flex flex-col gap-0.5">
          {SETTINGS_SECTIONS.map((s: SettingsSectionDescriptor) => {
            const Icn = ICONS_BY_NAME[s.iconName];
            const isActive = activeId === s.id;
            const isDanger = s.id === 'danger';
            const chipBg = isActive
              ? isDanger
                ? `linear-gradient(135deg, ${DANGER.from}, ${DANGER.to})`
                : `linear-gradient(135deg, ${accent.from}, ${accent.to})`
              : '#f1f5f9';
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelect(s.id)}
                className={cn(
                  'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-right transition',
                  isActive
                    ? 'bg-white shadow-sm border border-slate-200/70'
                    : 'hover:bg-slate-50'
                )}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition"
                  style={{
                    background: chipBg,
                    color: isActive
                      ? 'white'
                      : isDanger
                        ? '#e11d48'
                        : '#475569',
                  }}
                >
                  <Icn className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      'text-sm font-semibold',
                      isDanger && !isActive ? 'text-rose-700' : 'text-slate-800'
                    )}
                  >
                    {s.title}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {s.desc}
                  </div>
                </div>
                {isActive && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-l-full"
                    style={{ background: isDanger ? DANGER.to : accent.to }}
                  />
                )}
              </button>
            );
          })}
        </nav>
        <div className="px-4 py-3 border-t border-slate-200/70 bg-slate-50/60">
          <div className="flex items-center justify-between text-xs">
            <div className="text-slate-500">نسخه برنامه</div>
            <code className="font-mono text-slate-600 px-1.5 py-0.5 rounded bg-white border border-slate-200">
              v۱.۴.۲
            </code>
          </div>
        </div>
      </div>
    </aside>
  );
}
