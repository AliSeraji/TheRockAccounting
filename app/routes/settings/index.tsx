import { memo, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home } from 'lucide-react';
import CompanySection from '~/components/settings/sections/companysection';
import SettingsSidebar from '~/components/settings/Tablist';
import SettingsMobileTablist from '~/components/settings/Tablist/mobile';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import InvoiceSection from '~/components/settings/sections/InvoiceSection';
import { SETTINGS_SECTIONS } from '~/components/settings/common';
import NumberingSection from '~/components/settings/sections/NumberingSection';
import { BackupSection } from '~/components/settings/sections/Backup';
import { DangerSection } from '~/components/settings/sections/Privacy';
import { useIsMobile } from '~/hooks/use-mobile';

const SECTION_COMPONENTS: Record<string, () => ReactNode> = {
  company: () => <CompanySection />,
  invoice: () => <InvoiceSection />,
  numbering: () => <NumberingSection />,
  backup: () => <BackupSection />,
  danger: () => <DangerSection />,
};

const TRANSITION = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

const AnimatedSection = memo(function AnimatedSection(): ReactNode {
  const activeId = useSettingsStore((state) => state.activeSection.id);

  const currentIndex = useMemo(
    () => SETTINGS_SECTIONS.findIndex((s) => s.id === activeId),
    [activeId]
  );

  const prevIndexRef = useRef(currentIndex);
  const direction = currentIndex >= prevIndexRef.current ? 1 : -1;

  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const content = useMemo(
    () => SECTION_COMPONENTS[activeId]?.() ?? null,
    [activeId]
  );

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={activeId}
        custom={direction}
        initial={{ opacity: 0, x: direction * 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * -40 }}
        transition={TRANSITION}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
});

export default function Settings(): ReactNode {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-full  relative" dir="rtl">
      <PageHeader
        lastPage={'داشبورد اصلی'}
        currentPage={'تنظیمات'}
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full min-w-0 flex flex-col md:flex-row items-stretch md:items-center overflow-y-auto overflow-x-hidden pt-24 pb-8 gap-5">
        {isMobile ? (
          <SettingsMobileTablist />
        ) : (
          <div className="flex flex-col justify-center h-full ">
            <SettingsSidebar />
          </div>
        )}
        <div className="pt-14 flex-1 min-w-0 w-full overflow-auto">
          <AnimatedSection />
        </div>
      </div>
    </div>
  );
}
