import type { InvoiceTotals, StoneItem } from './types';

export function computeTotals(
  items: StoneItem[],
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

  const discountAmount = (parseFloat(discount || '0') * totalAmount) / 100;

  const taxAmount = (parseFloat(tax || '0') * totalAmount) / 100;

  const totalPaymentAmount =
    totalAmount - discountAmount + taxAmount - parseFloat(received || '0');

  return {
    totalQuantity,
    totalArea,
    totalAmount,
    totalPaymentAmount,
  };
}
