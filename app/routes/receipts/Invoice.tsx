import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import InvoiceHeader from '~/components/invoice/header';
import InvoiceBody from '~/components/invoice';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import DeliveryReceipt from '~/components/receipts/delivery';
import SalesInvoice from '~/components/receipts/sales';
import RequestProduct from '~/components/receipts/request';
import type { ReactNode } from 'react';

export const Invoice = (): ReactNode => {
  const activeTab = useInvoiceStore((state) => state.activeTab);
  const setActiveTab = useInvoiceStore((state) => state.setActiveTab);
  const getInvoiceData = useInvoiceStore((state) => state.getInvoiceData);

  const invoiceData = getInvoiceData();

  return (
    <div className="h-full flex flex-col relative" dir="rtl">
      <InvoiceHeader />

      <div className="w-full flex flex-col items-center overflow-auto pt-16">
        <div className="w-full py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} dir="rtl">
            <TabsList
              className="grid grid-cols-4 mb-8 bg-white/80 border border-slate-200 gap-1"
              dir="rtl"
            >
              <TabsTrigger
                value="invoice"
                className="data-[state=active]:bg-slate-700 hover:bg-slate-400 data-[state=active]:text-white"
              >
                ورود اطلاعات
              </TabsTrigger>
              <TabsTrigger
                value="sales"
                className="data-[state=active]:bg-slate-700 hover:bg-slate-400 data-[state=active]:text-white"
              >
                فاکتور فروش
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="data-[state=active]:bg-slate-700 hover:bg-slate-400 data-[state=active]:text-white"
              >
                رسید تحویل بار
              </TabsTrigger>
              <TabsTrigger
                value="request"
                className="data-[state=active]:bg-slate-700 hover:bg-slate-400 data-[state=active]:text-white"
              >
                درخواست سنگ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="invoice">
              <InvoiceBody />
            </TabsContent>

            <TabsContent value="sales">
              <SalesInvoice data={invoiceData} />
            </TabsContent>

            <TabsContent value="delivery">
              <DeliveryReceipt data={invoiceData} />
            </TabsContent>

            <TabsContent value="request">
              <RequestProduct data={invoiceData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
