import { useId, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Trash2 } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Separator } from '../../ui/separator';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { EASE } from './styles';
import type { RowSummary } from './summary';

interface RowCardProps {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  // Without it the card is read-only, as in a saved invoice: no delete, and
  // the summary stays in the header while the card is open.
  onRemove?: () => void;
  // The store keeps at least one row, so the last one can't be removed.
  canRemove?: boolean;
  summary: RowSummary;
  // The row's form, shown while the card is open.
  children: ReactNode;
}

const BODY_VARIANTS = {
  open: { height: 'auto', opacity: 1 },
  closed: { height: 0, opacity: 0 },
};

// One invoice row on a phone: a summary line that opens into the row's form.
export default function RowCard({
  index,
  isOpen,
  onToggle,
  onRemove,
  canRemove = true,
  summary,
  children,
}: RowCardProps): ReactNode {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const bodyId = useId();
  const number = convertToPersianDigits(index + 1);
  const isEditing = isOpen && onRemove !== undefined;
  const fade = { duration: reduceMotion ? 0 : 0.18, ease: EASE };
  const slide = { duration: reduceMotion ? 0 : 0.28, ease: EASE };

  // Once open, bring the whole card into view; scroll-mt keeps it clear of
  // the page's glass header.
  const reveal = () =>
    cardRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: reduceMotion ? 'auto' : 'smooth',
    });

  return (
    <Card
      ref={cardRef}
      className={cn(
        'scroll-mt-20 scroll-mb-4 rounded-2xl ring-3 transition-[border-color,box-shadow] duration-200',
        isOpen
          ? 'border-brand-400 ring-brand-400/25'
          : 'border-slate-200 ring-transparent'
      )}
    >
      <div className="flex items-center">
        <Button
          type="button"
          variant="ghost"
          aria-expanded={isOpen}
          aria-controls={bodyId}
          onClick={onToggle}
          className="h-auto min-h-16 min-w-0 flex-1 justify-start gap-2.5 whitespace-normal rounded-2xl px-3 py-2.5 text-right font-normal hover:cursor-pointer hover:bg-transparent"
        >
          <span
            className={cn(
              'flex size-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors duration-200',
              isOpen ? 'bg-brand-900 text-white' : 'bg-slate-100 text-slate-700'
            )}
          >
            {number}
          </span>
          {/* Both header contents share one grid cell so they cross-fade. */}
          <span className="grid min-w-0 flex-1 items-center">
            <AnimatePresence initial={false}>
              <motion.span
                key={isEditing ? 'editing' : 'summary'}
                className="col-start-1 row-start-1 min-w-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
              >
                {isEditing ? (
                  <EditingLabel />
                ) : (
                  <SummaryLine summary={summary} />
                )}
              </motion.span>
            </AnimatePresence>
          </span>
          <motion.span
            aria-hidden="true"
            className="shrink-0 text-slate-500"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={slide}
          >
            <ChevronDown />
          </motion.span>
        </Button>
        <AnimatePresence initial={false}>
          {isEditing && (
            <motion.div
              key="remove"
              className="flex shrink-0 items-center overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={fade}
            >
              <Separator orientation="vertical" className="h-6 w-px" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`حذف ردیف ${number}`}
                onClick={onRemove}
                disabled={!canRemove}
                className="mx-1 size-11 rounded-[10px] text-red-600 hover:cursor-pointer hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={bodyId}
            className="overflow-hidden"
            variants={BODY_VARIANTS}
            initial="closed"
            animate="open"
            exit="closed"
            transition={slide}
            onAnimationComplete={(definition) => {
              if (definition === 'open') reveal();
            }}
          >
            <motion.div
              className="flex flex-col gap-2.5 px-3 pb-3"
              initial={{ y: -6 }}
              animate={{ y: 0 }}
              exit={{ y: -6 }}
              transition={slide}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

function SummaryLine({ summary }: { summary: RowSummary }): ReactNode {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="flex min-w-0 items-center gap-1.5">
          <span
            className={cn(
              'truncate text-[14.5px] font-semibold',
              summary.title ? 'text-slate-900' : 'text-slate-600'
            )}
          >
            {summary.title || 'ردیف جدید'}
          </span>
          {summary.code && (
            <span
              dir="ltr"
              className="shrink-0 rounded-md bg-slate-100 px-1.5 text-[11px] text-slate-700"
            >
              {summary.code}
            </span>
          )}
        </span>
        <span className="truncate text-xs text-slate-600">
          {summary.meta || 'برای وارد کردن مشخصات بزنید'}
        </span>
      </span>
      <span className="flex shrink-0 flex-col items-end gap-0.5">
        <span className="text-[15px] font-bold text-brand-900">
          {summary.amount || '—'}
        </span>
        {summary.measure && (
          <span className="text-[11.5px] text-slate-600">
            {summary.measure}
          </span>
        )}
      </span>
    </span>
  );
}

function EditingLabel(): ReactNode {
  return (
    <span className="flex items-center justify-between gap-2">
      <span className="text-[13px] font-semibold text-slate-700">
        ویرایش ردیف
      </span>
      <span className="text-xs text-slate-600">بستن</span>
    </span>
  );
}
