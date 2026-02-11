import type { ReactNode } from 'react';

export default function RequestReceiptPage(): ReactNode {
  return (
    <div
      className="bg-white mx-auto shadow-2xl print:shadow-none"
      style={{ width: '210mm', minHeight: '148mm', padding: '5mm' }}
      dir="rtl"
    ></div>
  );
}
