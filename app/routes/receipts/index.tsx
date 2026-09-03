import { memo, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from 'lucide-react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import ReceiptIssueSidebar from '~/components/receipt_issue/Tablist';
import ReceiptIssueMobileTablist from '~/components/receipt_issue/Tablist/mobile';
import { RECEIPT_SECTIONS } from '~/components/receipt_issue/common';
import { useReceiptIssueStore } from '~/store/receipt_issue/useReceiptIssueStore';
import { useIsMobile } from '~/hooks/use-mobile';
import InvoiceSection from '~/components/receipt_issue/sections/InvoiceSection';
import PlaceholderSection from '~/components/receipt_issue/sections/PlaceholderSection';

const SECTION_COMPONENTS: Record<string, () => ReactNode> = {
  invoice: () => <InvoiceSection />,
  search: () => (
    <PlaceholderSection
      title="جستجوی رسید"
      desc="جستجو در رسیدهای صادر شده"
      iconName="Search"
    />
  ),
  print: () => (
    <PlaceholderSection
      title="چاپ رسید"
      desc="چاپ و خروجی رسیدها"
      iconName="Printer"
    />
  ),
  archive: () => (
    <PlaceholderSection
      title="بایگانی رسیدها"
      desc="مشاهده و مدیریت رسیدهای بایگانی شده"
      iconName="ArchiveRestore"
    />
  ),
  list: () => (
    <PlaceholderSection
      title="لیست رسیدها"
      desc="مشاهده لیست کامل رسیدها"
      iconName="ClipboardList"
    />
  ),
  export: () => (
    <PlaceholderSection
      title="خروجی گزارش"
      desc="دریافت خروجی و گزارش از رسیدها"
      iconName="FileOutput"
    />
  ),
};

const TRANSITION = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

const AnimatedSection = memo(function AnimatedSection(): ReactNode {
  const activeId = useReceiptIssueStore((state) => state.activeSection.id);

  const currentIndex = useMemo(
    () => RECEIPT_SECTIONS.findIndex((s) => s.id === activeId),
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

export const ReceiptIssue = (): ReactNode => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-full relative" dir="rtl">
      <PageHeader
        lastPage={'داشبورد اصلی'}
        currentPage={'فاکتور فروش'}
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full min-w-0 flex flex-col md:flex-row flex-1 min-h-0 overflow-y-auto md:overflow-hidden overflow-x-hidden pt-20 lg:pt-24 pb-6 gap-5">
        {isMobile ? (
          <div className="sticky top-0 z-30">
            <ReceiptIssueMobileTablist />
          </div>
        ) : (
          <div className="flex flex-col justify-center h-full">
            <ReceiptIssueSidebar />
          </div>
        )}
        <div className="lg:pt-2 flex-1 min-w-0 min-h-0 w-full md:h-full md:overflow-y-auto">
          <AnimatedSection />
        </div>
      </div>
    </div>
  );
};

export default ReceiptIssue;
