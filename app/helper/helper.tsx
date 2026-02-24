import type { InvoiceDataType } from '~/store/types';

export function receiptPager(data: InvoiceDataType, itemsPerPage: number) {
  const totalPages = Math.ceil(data.items.length / itemsPerPage);
  return Array.from({ length: totalPages }, (_, pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {
      items: data.items.slice(startIndex, endIndex),
      startIndex,
      pageNumber: pageIndex + 1,
      isLastPage: pageIndex === totalPages - 1,
    };
  });
}
