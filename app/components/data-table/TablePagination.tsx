import { useMemo, type ReactNode } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination';
import { SURFACE } from '~/components/floating-table/styles';
import { cn, convertToPersianDigits } from '~/lib/utils';
import { rowStateClass } from './DataTableRow';

export interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

// The desktop lists' look: a white pill like their rows, the current page
// marked like a selected row. Phones keep the plain buttons.
const FLOATING = {
  content: cn(SURFACE, 'gap-1 p-1'),
  button:
    'h-8 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900',
  page: 'w-8 px-0',
  active: cn(
    'border-transparent font-bold text-brand-900 hover:text-brand-900',
    rowStateClass(true, false)
  ),
  arrow: 'px-3',
};

export default function TablePagination({
  currentPage,
  totalPages,
  setCurrentPage,
  floating = false,
}: TablePaginationProps & { floating?: boolean }): ReactNode {
  const pages = useMemo(() => {
    const items: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
      items.push(1);
      if (currentPage > 3) items.push('ellipsis');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) items.push(i);
      if (currentPage < totalPages - 2) items.push('ellipsis');
      items.push(totalPages);
    }
    return items;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  const arrowClass = (disabled: boolean) =>
    cn(
      floating && [FLOATING.button, FLOATING.arrow],
      disabled ? 'pointer-events-none opacity-40' : 'hover:cursor-pointer'
    );

  return (
    <Pagination dir="rtl">
      <PaginationContent className={cn(floating && FLOATING.content)}>
        <PaginationItem>
          <PaginationNext
            className={arrowClass(currentPage === 1)}
            href="#"
            text="قبلی"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pages.map((page, idx) =>
          page === 'ellipsis' ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis
                className={cn(floating && 'text-slate-500')}
              />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                className={cn(
                  'hover:cursor-pointer',
                  floating && [
                    FLOATING.button,
                    FLOATING.page,
                    page === currentPage && FLOATING.active,
                  ]
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {convertToPersianDigits(page)}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationPrevious
            className={arrowClass(currentPage === totalPages)}
            href="#"
            text="بعدی"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
