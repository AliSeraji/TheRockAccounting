import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export type DataTableItem = { id: string };

// Where a column's value goes on the mobile card:
// title/badge/code in the card header, meta on the line under the title,
// stat in the bottom grid (highlight is a stat shown in bold).
export type MobileRole =
  | 'title'
  | 'badge'
  | 'code'
  | 'meta'
  | 'stat'
  | 'highlight';

export type DataTableColumn<T extends DataTableItem> = {
  key: string;
  label: string;
  width: string;
  className?: string;
  // Defaults to 'stat'.
  mobile?: MobileRole;
  render: (item: T) => ReactNode;
};

// A filter in a list header. The first option shows everything, so the
// filter is active whenever another option is picked.
export type ListFilter = {
  key: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  // Stands in for the label on the desktop control; the label shows in a
  // tooltip.
  icon?: LucideIcon;
  // Desktop control: a dropdown, or a segmented control for a few short
  // options. Phones always use the filter sheet.
  variant?: 'dropdown' | 'segmented';
  // A custom desktop control in place of the generated one.
  desktop?: ReactNode;
  // Shown under the filter's pills in the sheet while `value` is
  // `panelValue`, e.g. a range picker for a custom range.
  panel?: ReactNode;
  panelValue?: string;
  // Chip text when the picked option's label doesn't say enough, e.g. the
  // dates of a custom range.
  valueLabel?: string;
};
