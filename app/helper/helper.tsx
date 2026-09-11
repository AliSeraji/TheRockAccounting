import type { InvoiceDataType, ServiceItem, StoneItem } from '~/store/types';

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

export function printableServices(services: ServiceItem[]): ServiceItem[] {
  return services.filter(
    (service) =>
      service.serviceType.trim() !== '' || (parseFloat(service.total) || 0) > 0
  );
}

// Rows taken by the services table's header and footer when it shares a page with the items table
const SERVICES_TABLE_OVERHEAD = 2;

export interface SalesReceiptPageData {
  items: StoneItem[];
  startIndex: number;
  services: ServiceItem[];
  serviceStartIndex: number;
  showItemsFooter: boolean;
  pageNumber: number;
  isLastPage: boolean;
}

export function salesReceiptPager(
  data: InvoiceDataType,
  rowsPerPage: number
): SalesReceiptPageData[] {
  const services = printableServices(data.services);
  const pages: SalesReceiptPageData[] = [];
  let itemIndex = 0;
  let serviceIndex = 0;

  do {
    const startIndex = itemIndex;
    const serviceStartIndex = serviceIndex;
    const pageItems = data.items.slice(itemIndex, itemIndex + rowsPerPage);
    itemIndex += pageItems.length;

    let pageServices: ServiceItem[] = [];
    if (itemIndex === data.items.length) {
      const budget =
        pageItems.length > 0
          ? rowsPerPage - pageItems.length - SERVICES_TABLE_OVERHEAD
          : rowsPerPage;
      pageServices = services.slice(
        serviceIndex,
        serviceIndex + Math.max(0, budget)
      );
      serviceIndex += pageServices.length;
    }

    pages.push({
      items: pageItems,
      startIndex,
      services: pageServices,
      serviceStartIndex,
      showItemsFooter: pageItems.length > 0 && itemIndex === data.items.length,
      pageNumber: pages.length + 1,
      isLastPage: false,
    });
  } while (itemIndex < data.items.length || serviceIndex < services.length);

  pages[pages.length - 1].isLastPage = true;
  return pages;
}

export function requestReceiptPager(
  data: InvoiceDataType,
  rowsPerPage: number
) {
  const services = printableServices(data.services);
  const totalPages = Math.max(
    1,
    Math.ceil(data.items.length / rowsPerPage),
    Math.ceil(services.length / rowsPerPage)
  );
  return Array.from({ length: totalPages }, (_, pageIndex) => {
    const startIndex = pageIndex * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return {
      items: data.items.slice(startIndex, endIndex),
      services: services.slice(startIndex, endIndex),
      startIndex,
      pageNumber: pageIndex + 1,
      isLastPage: pageIndex === totalPages - 1,
    };
  });
}
