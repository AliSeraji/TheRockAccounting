import type { Props } from '../types';
import InfoBox from './InfoBox';
import ReceiptHeader from './ReceiptHeader';

export default function ReceiptPage({ data }: Props): React.ReactNode {
  return (
    <div
      className="receipt-page bg-white mx-auto shadow-2xl mb-8"
      style={{
        width: '210mm',
        minHeight: '148mm',
        padding: '8mm 10mm',
      }}
    >
      <ReceiptHeader
        date={data.invoiceDate}
        invoiceNumber={data.invoiceNumber}
        companyName={data?.buyer}
      />

      <InfoBox
        buyer={data.buyer}
        project={data.project}
        address={data.address}
      />
    </div>
  );
}
