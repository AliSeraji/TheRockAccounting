import type { ReactNode } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import RowCard from './RowCard';
import { EASE } from './styles';
import type { RowSummary } from './summary';
import { useOpenRow } from './useOpenRow';

interface RowCardListProps<T extends { id: number }> {
  items: T[];
  isFilled: (item: T) => boolean;
  summarize: (item: T) => RowSummary;
  // The row's form. `autoFocus` is true for a row just added.
  renderBody: (item: T, autoFocus: boolean) => ReactNode;
  // Left out for a saved invoice's read-only cards.
  onRemove?: (id: number) => void;
  totals: ReactNode;
  // Whether a lone blank row starts open (see useOpenRow).
  openLoneBlank?: boolean;
}

const CARD_TRANSITION = {
  duration: 0.22,
  ease: EASE,
  layout: { duration: 0.28, ease: EASE },
};

// Phone replacement for an invoice items table: one card per row, opened one
// at a time to edit it.
export default function RowCardList<T extends { id: number }>({
  items,
  isFilled,
  summarize,
  renderBody,
  onRemove,
  totals,
  openLoneBlank,
}: RowCardListProps<T>): ReactNode {
  const { openId, focusId, toggle } = useOpenRow(
    items,
    isFilled,
    openLoneBlank
  );

  return (
    // "user" drops slides and layout moves when the phone asks for reduced
    // motion; RowCard also zeroes its own durations then.
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col gap-2.5 p-1">
        {/* popLayout takes a removed card out of the flow at once, so the
            cards below slide up (layout="position") while it fades out. */}
        <div className="relative flex flex-col gap-2.5">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={CARD_TRANSITION}
              >
                <RowCard
                  index={index}
                  isOpen={item.id === openId}
                  onToggle={() => toggle(item.id)}
                  onRemove={onRemove && (() => onRemove(item.id))}
                  canRemove={items.length > 1}
                  summary={summarize(item)}
                >
                  {renderBody(item, item.id === focusId)}
                </RowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {totals}
      </div>
    </MotionConfig>
  );
}
