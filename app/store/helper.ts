import type {
  BlockInvoiceItem,
  BlockInvoiceTotals,
  InvoiceTotals,
  PaymentTotals,
  ServiceItem,
  StoneItem,
} from './types';

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
  const totalArea =
    Math.round(
      items.reduce((sum, item) => sum + (parseFloat(item.area) || 0), 0) * 100
    ) / 100;
  const totalAmount = items.reduce(
    (sum, item) => sum + (parseFloat(item.total) || 0),
    0
  );

  return {
    totalQuantity,
    totalArea,
    ...computePaymentTotals(totalAmount, services, discount, tax, received),
  };
}

export function computeBlockTotals(
  items: BlockInvoiceItem[],
  services: ServiceItem[],
  discount: string,
  tax: string,
  received: string
): BlockInvoiceTotals {
  const totalWeight =
    Math.round(
      items.reduce((sum, item) => sum + (parseFloat(item.weight) || 0), 0) *
        1000
    ) / 1000;
  const totalVolume =
    Math.round(
      items.reduce((sum, item) => sum + (parseFloat(item.volume) || 0), 0) * 100
    ) / 100;
  const totalAmount = items.reduce(
    (sum, item) => sum + (parseFloat(item.total) || 0),
    0
  );

  return {
    totalWeight,
    totalVolume,
    ...computePaymentTotals(totalAmount, services, discount, tax, received),
  };
}

// Adds the services to the items total, then applies the discount, the tax
// and the amount already received.
function computePaymentTotals(
  totalAmount: number,
  services: ServiceItem[],
  discount: string,
  tax: string,
  received: string
): PaymentTotals {
  const totalServicesAmount = services.reduce(
    (sum, service) => sum + (parseFloat(service.total) || 0),
    0
  );
  const grossAmount = totalAmount + totalServicesAmount;

  const discountAmount = parseFloat(discount || '0') || 0;

  const taxAmount = (parseFloat(tax || '0') * grossAmount) / 100;

  const totalPaymentAmount =
    grossAmount - discountAmount + taxAmount - parseFloat(received || '0');

  return {
    totalAmount,
    totalServicesAmount,
    totalPaymentAmount,
  };
}
