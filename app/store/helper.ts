import type { InvoiceTotals, ServiceItem, StoneItem } from './types';

export function computeTotals(
  items: StoneItem[],
  services: ServiceItem[],
  discount: string,
  tax: string,
  received: string
): InvoiceTotals {
  const totalQuantity = items.reduce(
    (sum, item) => sum + (parseFloat(item.quantity) || 0),
    0
  );
  const totalArea = items.reduce(
    (sum, item) => sum + (parseFloat(item.area) || 0),
    0
  );
  const totalAmount = items.reduce(
    (sum, item) => sum + (parseFloat(item.total) || 0),
    0
  );
  const totalServicesAmount = services.reduce(
    (sum, service) => sum + (parseFloat(service.total) || 0),
    0
  );
  const grossAmount = totalAmount + totalServicesAmount;

  const discountAmount = (parseFloat(discount || '0') * grossAmount) / 100;

  const taxAmount = (parseFloat(tax || '0') * grossAmount) / 100;

  const totalPaymentAmount =
    grossAmount - discountAmount + taxAmount - parseFloat(received || '0');

  return {
    totalQuantity,
    totalArea,
    totalAmount,
    totalServicesAmount,
    totalPaymentAmount,
  };
}
