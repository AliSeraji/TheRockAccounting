import { type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home } from 'lucide-react';
import CompanySection from '~/components/settings/sections/companysection';
import SettingsSidebar from '~/components/settings/side';
import { useSettingsStore } from '~/store/settings/useSettingStore';
import InvoiceSection from '~/components/settings/sections/InvoiceSection';
import { SETTINGS_SECTIONS } from '~/components/settings/common';

export default function Settings(): ReactNode {
  const activeSection = useSettingsStore((state) => state.activeSection);

  return (
    <div className="h-full flex flex-col relative" dir="rtl">
      <PageHeader
        lastPage={'داشبورد اصلی'}
        currentPage={'تنظیمات'}
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full flex flex-row items-center overflow-auto pt-24 pb-8 gap-5">
        <div className="flex flex-col justify-center h-full ">
          <SettingsSidebar />
        </div>
        <div className="pt-14">
          {activeSection === SETTINGS_SECTIONS[0] && <CompanySection />}
          {activeSection === SETTINGS_SECTIONS[1] && <InvoiceSection />}
        </div>
      </div>
    </div>
  );
}
