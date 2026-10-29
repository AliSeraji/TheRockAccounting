import type { ReactNode } from 'react';
import { Home } from 'lucide-react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import CustomerForm from '~/components/customers/CustomerForm';
import CustomersList from '~/components/customers/CustomersList';

export default function Customers(): ReactNode {
  return (
    <div className="flex flex-col w-full h-full font-vazirmatn" dir="rtl">
      <PageHeader
        lastPage="داشبورد اصلی"
        currentPage="اشخاص و مشتریان"
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />

      <div className="w-full flex-1 min-h-0 flex flex-col items-center overflow-auto gap-6 px-4 pt-16 md:pt-20 lg:pt-24 pb-6">
        <CustomersList />
        <CustomerForm />
      </div>
    </div>
  );
}
