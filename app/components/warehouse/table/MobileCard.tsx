import { Fragment, memo, type ReactNode } from 'react';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { EMPTY } from '../format';
import { rowStateClass } from './TableRow';
import type { MobileRole, WarehouseColumn, WarehouseRowItem } from './types';

interface WarehouseMobileCardProps<T extends WarehouseRowItem> {
  item: T;
  rowNumber: number;
  columns: WarehouseColumn<T>[];
  isSelected: boolean;
  isFlagged: boolean;
  flagLabel?: string;
  onSelect: (item: T) => void;
}

const roleOf = <T extends WarehouseRowItem>(
  col: WarehouseColumn<T>
): MobileRole => col.mobile ?? 'stat';

// Mobile replacement for a table row: the same columns, stacked into a card
// so nothing needs horizontal scrolling.
function WarehouseMobileCard<T extends WarehouseRowItem>({
  item,
  rowNumber,
  columns,
  isSelected,
  isFlagged,
  flagLabel,
  onSelect,
}: WarehouseMobileCardProps<T>): ReactNode {
  const withRole = (role: MobileRole) =>
    columns
      .filter((col) => roleOf(col) === role)
      .map((col) => ({ col, value: col.render(item) }));
  // Empty header and meta values are left out instead of showing a dash.
  const filled = (role: MobileRole) =>
    withRole(role).filter(({ value }) => value !== EMPTY);

  const badges = filled('badge');
  const titles = withRole('title');
  const codes = filled('code');
  const meta = filled('meta');
  const stats = columns.filter((col) =>
    ['stat', 'highlight'].includes(roleOf(col))
  );
  // Four stats are too tight in one row on a phone, so they go 2 × 2.
  const statColumns = stats.length === 4 ? 2 : Math.min(stats.length, 3);

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      title={isFlagged ? flagLabel : undefined}
      className={cn(
        'flex w-full flex-col gap-3 rounded-2xl p-3.5 text-right text-sm cursor-pointer transition-[background-color,box-shadow] duration-150',
        rowStateClass(isSelected, isFlagged),
        !isSelected && !isFlagged && 'ring-1 ring-inset ring-slate-200'
      )}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex min-w-0 items-start gap-2.5">
          <span className="mt-0.5 shrink-0 text-xs text-slate-400">
            {convertToPersianDigits(rowNumber)}
          </span>
          <div className="flex min-w-0 flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              {badges.map(({ col, value }) => (
                <Fragment key={col.key}>{value}</Fragment>
              ))}
              {titles.map(({ col, value }) => (
                <span
                  key={col.key}
                  className="text-[14.5px] font-semibold text-slate-800 wrap-break-word"
                >
                  {value}
                </span>
              ))}
            </div>
            {meta.length > 0 && (
              <div className="text-[12.5px] text-slate-500">
                {meta.map(({ col, value }, idx) => (
                  <Fragment key={col.key}>
                    {idx > 0 && ' · '}
                    {col.label} {value}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
        {codes.map(({ col, value }) => (
          <span
            key={col.key}
            dir="ltr"
            className="shrink-0 whitespace-nowrap rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[11.5px] text-slate-500"
          >
            {value}
          </span>
        ))}
      </div>

      {stats.length > 0 && (
        <dl
          className="grid gap-x-2 gap-y-2.5 border-t border-dashed border-slate-200 pt-2.5"
          style={{
            gridTemplateColumns: `repeat(${statColumns}, minmax(0, 1fr))`,
          }}
        >
          {stats.map((col) => (
            <div key={col.key} className="flex flex-col gap-0.5">
              <dt className="text-[11px] text-slate-400">{col.label}</dt>
              <dd
                className={cn(
                  'text-[13px]',
                  roleOf(col) === 'highlight'
                    ? 'font-bold text-brand-800'
                    : 'font-medium text-slate-700'
                )}
              >
                {col.render(item)}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </button>
  );
}

// memo drops the generic signature, so cast it back.
export default memo(WarehouseMobileCard) as typeof WarehouseMobileCard;
