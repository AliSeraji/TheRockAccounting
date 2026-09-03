import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ACCENT, ICONS_BY_NAME, RECEIPT_SECTIONS } from '../common';
import type { ReceiptSectionDescriptor } from '../types';
import { useReceiptIssueStore } from '~/store/receipt_issue/useReceiptIssueStore';

export default function ReceiptIssueSidebar(): ReactNode {
  const activeId = useReceiptIssueStore((state) => state.activeSection.id);
  const onSelect = useReceiptIssueStore((state) => state.setActiveSection);
  return (
    <aside className="w-72 self-start">
      <Tabs
        value={activeId}
        onValueChange={onSelect}
        orientation="vertical"
        className={cn(
          'rounded-2xl border border-slate-200/70 bg-white/85 backdrop-blur-md overflow-hidden',
          'shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="px-4 py-3 border-b border-slate-200/70 bg-linear-to-l from-slate-50 to-white">
          <div className="flex flex-row justify-center text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
            مدیریت فاکتور فروش
          </div>
        </div>
        <TabsList className="p-2 flex flex-col items-stretch gap-0.5 h-auto bg-transparent rounded-none">
          {RECEIPT_SECTIONS.map((s: ReceiptSectionDescriptor) => {
            const Icn = ICONS_BY_NAME[s.iconName];
            const isActive = activeId === s.id;
            const chipBg = isActive
              ? `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`
              : '#f1f5f9';
            return (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className={cn(
                  'group relative flex items-center justify-start gap-3 px-3 py-2.5 rounded-xl text-right h-auto whitespace-normal transition',
                  'data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-slate-200/70',
                  'data-[state=inactive]:hover:bg-slate-50'
                )}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition shrink-0"
                  style={{
                    background: chipBg,
                    color: isActive ? 'white' : '#475569',
                  }}
                >
                  <Icn className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-800">
                    {s.title}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {s.desc}
                  </div>
                </div>
                {isActive && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-l-full"
                    style={{ background: ACCENT.to }}
                  />
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </aside>
  );
}
