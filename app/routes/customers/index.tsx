import type { ReactNode } from 'react';
import { Home } from 'lucide-react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import CustomerForm from '~/components/customers/CustomerForm';
import CustomersList from '~/components/customers/CustomersList';

export default function Customers(): ReactNode {
  return (
    <div
      className="flex flex-col justify-center w-full h-full py-6 font-vazirmatn"
      dir="rtl"
    >
      <PageHeader
        lastPage="داشبورد اصلی"
        currentPage="اشخاص و مشتریان"
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />

      <div className="w-full flex flex-col items-center overflow-auto pt-16 gap-6 px-4">
        <CustomerForm />

        <CustomersList />
      </div>
    </div>
  );
}
