import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import ServicesTable from './ServicesTable';

export default function InvoiceServices(): React.ReactNode {
  const addService = useInvoiceStore((state) => state.addService);

  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 text-sm lg:text-lg">
            خدمات
          </CardTitle>
          <Button
            onClick={addService}
            size="sm"
            className="bg-slate-700 hover:bg-slate-800 gap-1 hover:cursor-pointer text-xs lg:text-sm "
          >
            <Plus className="w-2 h-2 lg:w-4 lg:h-4" />
            افزودن ردیف
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-1 lg:p-4">
        <div className="overflow-x-auto w-full">
          <ServicesTable addService={addService} />
        </div>
      </CardContent>
    </Card>
  );
}
