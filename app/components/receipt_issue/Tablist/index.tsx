import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ACCENT, ICONS_BY_NAME, RECEIPT_SECTIONS } from '../common';
import type { ReceiptSectionDescriptor } from '../types';
import { useReceiptIssueStore } from '~/store/receipt_issue/useReceiptIssueStore';

export default function ReceiptIssueTablist(): ReactNode {
  const activeId = useReceiptIssueStore((state) => state.activeSection.id);
  const onSelect = useReceiptIssueStore((state) => state.setActiveSection);
  return (
    <nav className="w-full min-w-0">
      <Tabs
        value={activeId}
        onValueChange={onSelect}
        orientation="horizontal"
        dir="rtl"
        className={cn(
          'flex items-stretch rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-md overflow-hidden',
          'shadow-[0_1px_2px_rgba(51,43,34,0.04),0_8px_24px_-12px_rgba(51,43,34,0.08)]'
        )}
      >
        <TabsList
          className={cn(
            'flex-1 min-w-0 p-2 flex flex-row items-stretch justify-start gap-1 h-auto bg-transparent rounded-none',
            'overflow-x-auto overscroll-x-contain'
          )}
        >
          {RECEIPT_SECTIONS.map((s: ReceiptSectionDescriptor) => {
            const Icn = ICONS_BY_NAME[s.iconName];
            const isActive = activeId === s.id;
            const chipBg = isActive
              ? `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`
              : '#f2ede4';
            return (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className={cn(
                  'group relative flex flex-1 min-w-fit xl:min-w-0 items-center justify-start gap-2.5 px-3 py-2.5 rounded-xl text-right h-auto transition',
                  'border border-transparent',
                  'data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-slate-200/70',
                  'data-[state=inactive]:hover:bg-slate-50'
                )}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition shrink-0"
                  style={{
                    background: chipBg,
                    color: isActive ? 'white' : '#6b6257',
                  }}
                >
                  <Icn className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                    {s.title}
                  </div>
                  <div className="hidden xl:block text-[11px] text-slate-500 truncate">
                    {s.desc}
                  </div>
                </div>
                <div
                  className={cn(
                    'absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-t-full',
                    'transition-[width,opacity] duration-300 ease-out',
                    isActive ? 'w-[80%] opacity-100' : 'w-0 opacity-0'
                  )}
                  style={{ background: ACCENT.to }}
                />
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
}
