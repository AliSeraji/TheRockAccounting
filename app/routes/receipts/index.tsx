import { memo, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from 'lucide-react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import ReceiptIssueTablist from '~/components/receipt_issue/Tablist';
import ReceiptIssueMobileTablist from '~/components/receipt_issue/Tablist/mobile';
import { RECEIPT_SECTIONS } from '~/components/receipt_issue/common';
import { useReceiptIssueStore } from '~/store/receipt_issue/useReceiptIssueStore';
import { useIsMobile } from '~/hooks/use-mobile';
import InvoiceSection from '~/components/receipt_issue/sections/InvoiceSection';
import BlockInvoiceSection from '~/components/receipt_issue/sections/BlockInvoiceSection';
import InvoicesSection from '~/components/receipt_issue/sections/InvoicesSection';

const SECTION_COMPONENTS: Record<string, () => ReactNode> = {
  invoice: () => <InvoiceSection />,
  block: () => <BlockInvoiceSection />,
  list: () => <InvoicesSection />,
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
      <div className="flex-1 min-w-0 min-h-0 w-full overflow-y-auto overflow-x-hidden pt-16 md:pt-20 lg:pt-24">
        {isMobile ? <ReceiptIssueMobileTablist /> : <ReceiptIssueTablist />}
        <AnimatedSection />
      </div>
    </div>
  );
};

export default ReceiptIssue;
