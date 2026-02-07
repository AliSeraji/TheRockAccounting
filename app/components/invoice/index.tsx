import InvoiceInfo from './InvoiceInfo';
import InvoiceSummary from './InvoiceSummary';
import ExplanationCard from './ExplanaitionCard';
import InvoiceItemsCard from './InvoiceItemCards';

export default function InvoiceBody() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="w-full lg:col-span-2 space-y-6">
        <div className="w-full grid grid-cols-1 items-center lg:grid-cols-3 gap-6">
          <InvoiceInfo />
          <InvoiceSummary />
        </div>
        <InvoiceItemsCard />
        <ExplanationCard />
      </div>
    </div>
  );
}
