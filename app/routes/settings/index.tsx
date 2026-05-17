import { type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home } from 'lucide-react';
import CompanySection from '~/components/settings/sections/companysection';

export default function Settings(): ReactNode {
  return (
    <div className="h-full flex flex-col relative" dir="rtl">
      <PageHeader
        lastPage={'داشبورد اصلی'}
        currentPage={'تنظیمات'}
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full flex flex-col items-center overflow-auto pt-24 pb-8">
        <CompanySection />
      </div>
    </div>
  );
}
