import { useInvoiceForm } from '~/store/useInvoiceForm';
import InvoiceTableCard from '../../floating-table/InvoiceTableCard';
import ServicesTable from './ServicesTable';

export default function InvoiceServices(): React.ReactNode {
  const addService = useInvoiceForm((state) => state.addService);
  const count = useInvoiceForm((state) => state.services.length);
  return (
    <InvoiceTableCard title="خدمات" count={count} onAdd={addService}>
      <div className="overflow-x-auto w-full">
        <ServicesTable />
      </div>
    </InvoiceTableCard>
  );
}
