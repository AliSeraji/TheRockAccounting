import type { ReactNode } from 'react';

export type WarehouseRowItem = { id: number };

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

export type WarehouseColumn<T extends WarehouseRowItem> = {
  key: string;
  label: string;
  width: string;
  className?: string;
  // Defaults to 'stat'.
  mobile?: MobileRole;
  render: (item: T) => ReactNode;
};
