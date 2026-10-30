import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { useInvoiceForm } from '~/store/useInvoiceForm';
import AddRowFooter from '../AddRowFooter';
import ServicesTable from './ServicesTable';

export default function InvoiceServices(): React.ReactNode {
  const addService = useInvoiceForm((state) => state.addService);
  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 text-sm lg:text-lg">
            خدمات
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-1 lg:p-4">
        <div className="overflow-x-auto w-full">
          <ServicesTable />
        </div>
      </CardContent>
      <AddRowFooter label="افزودن ردیف" onAdd={addService} />
    </Card>
  );
}
