import { memo, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from 'lucide-react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import WarehouseTablist from '~/components/warehouse/Tablist';
import WarehouseMobileTablist from '~/components/warehouse/Tablist/mobile';
import { WAREHOUSE_SECTIONS } from '~/components/warehouse/common';
import StoneWarehouseSection from '~/components/warehouse/StoneWarehouseSection';
import BlockWarehouseSection from '~/components/warehouse/BlockWarehouseSection';
import MiscWarehouseSection from '~/components/warehouse/MiscWarehouseSection';
import RawWarehouseSection from '~/components/warehouse/RawWarehouseSection';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { WarehouseId } from '~/store/warehouse/types';
import { useIsMobile } from '~/hooks/use-mobile';

const SECTION_COMPONENTS: Record<WarehouseId, () => ReactNode> = {
  main: () => <StoneWarehouseSection warehouse="main" />,
  secondary: () => <StoneWarehouseSection warehouse="secondary" />,
  block: () => <BlockWarehouseSection />,
  misc: () => <MiscWarehouseSection />,
  raw: () => <RawWarehouseSection />,
};

const TRANSITION = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

const AnimatedSection = memo(function AnimatedSection(): ReactNode {
  const activeId = useWarehouseStore((state) => state.activeWarehouse);

  const currentIndex = useMemo(
    () => WAREHOUSE_SECTIONS.findIndex((s) => s.id === activeId),
    [activeId]
  );

  const prevIndexRef = useRef(currentIndex);
  const direction = currentIndex >= prevIndexRef.current ? 1 : -1;

  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const content = useMemo(() => SECTION_COMPONENTS[activeId](), [activeId]);

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

export default function Warehouse(): ReactNode {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-full relative font-vazirmatn" dir="rtl">
      <PageHeader
        lastPage="داشبورد اصلی"
        currentPage="انبار"
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full min-w-0 flex flex-col flex-1 min-h-0 overflow-y-auto overflow-x-hidden pt-20 lg:pt-24">
        <div className="sticky top-0 z-30">
          {isMobile ? (
            <WarehouseMobileTablist />
          ) : (
            <div className="px-4">
              <WarehouseTablist />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0 w-full px-4 pt-5">
          <AnimatedSection />
        </div>
      </div>
    </div>
  );
}
