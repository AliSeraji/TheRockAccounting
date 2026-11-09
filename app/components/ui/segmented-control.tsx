import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

export type SegmentedOption = { value: string; label: string };

// An icon standing in for a control's visible title; the title shows in a
// tooltip. The svg itself is the trigger, so it can sit directly inside a
// Select trigger.
export function IconTitle({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}): ReactNode {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon
            aria-hidden="true"
            className={cn('size-4 shrink-0 text-slate-500', className)}
          />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface SegmentedControlProps {
  value: string;
  onChange: (value: string) => void;
  options: SegmentedOption[];
  // Names the group for screen readers, and shows in the icon's tooltip.
  label: string;
  // Shown at the start of the track in place of a visible title.
  icon?: LucideIcon;
  // Stretches the options to share the full width.
  fullWidth?: boolean;
  className?: string;
}

// A cream track whose picked option is a raised white segment. The colour
// change uses the same transition as the phone filter sheet's pills.
// The track and the raised segment are shared with the desktop invoice
// tables' column header, which raises the column being typed in.
export const SEGMENT_TRACK =
  'rounded-xl bg-slate-200/70 p-0.75 shadow-[inset_0_1px_2px_rgb(64_55_45/0.08)]';

export const SEGMENT_ON =
  'data-[state=on]:bg-white data-[state=on]:text-brand-900 data-[state=on]:shadow-[0_1px_3px_rgb(64_55_45/0.14),0_0_0_1px_rgb(176_139_69/0.22)]';

export const SEGMENT_TRANSITION =
  'transition-[background-color,color,box-shadow] duration-200 motion-reduce:transition-none';

export function SegmentedControl({
  value,
  onChange,
  options,
  label,
  icon: Icon,
  fullWidth,
  className,
}: SegmentedControlProps): ReactNode {
  return (
    <ToggleGroup
      type="single"
      dir="rtl"
      spacing={0.5}
      value={value}
      // Radix sends '' when the picked option is clicked again; a segmented
      // control always keeps a value.
      onValueChange={(next) => next && onChange(next)}
      aria-label={label}
      className={cn(
        'h-10',
        SEGMENT_TRACK,
        fullWidth && 'grid w-full auto-cols-fr grid-flow-col',
        className
      )}
    >
      {Icon && (
        <span className="ml-0.5 grid h-full w-8 shrink-0 place-items-center border-l border-slate-300">
          <IconTitle icon={Icon} label={label} />
        </span>
      )}
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          className={cn(
            'h-8.5 rounded-[9px] px-3.5 text-[13.5px] font-medium text-slate-700 hover:cursor-pointer hover:bg-white/50 hover:text-slate-900 focus-visible:ring-brand-400/40',
            SEGMENT_TRANSITION,
            SEGMENT_ON
          )}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
