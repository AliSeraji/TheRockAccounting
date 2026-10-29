import type { ReactNode } from 'react';

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
};
