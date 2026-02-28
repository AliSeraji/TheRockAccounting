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
import { TableRow, TableCell } from '~/components/ui/table';
import { cn, convertToPersianDigits } from '~/lib/utils';

export default function TableFooter({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}): ReactNode {
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

  return (
    <TableRow className="border-t border-slate-200">
      <TableCell colSpan={12} className="py-3">
        <Pagination dir="rtl">
          <PaginationContent>
            <PaginationItem>
              <PaginationNext
                className={
                  currentPage === 1
                    ? 'pointer-events-none opacity-40'
                    : 'hover:cursor-pointer'
                }
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
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    className="hover:cursor-pointer"
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
                className={cn(
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-40'
                    : 'hover:cursor-pointer'
                )}
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
      </TableCell>
    </TableRow>
  );
}
