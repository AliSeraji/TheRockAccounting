import type { ReactNode } from 'react';
import logo from '~/assets/modern_stone_logo.svg';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export default function Header(): ReactNode {
  const companyName = useSettingsStore((state) => state.companyName);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-10 h-18">
      <div className="max-w-full px-4 py-4">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex flex-row-reverse items-center gap-3">
            <img src={logo} alt="icon" className="h-10 w-10 object-contain" />
            <div className="text-md md:text-2xl font-bold bg-linear-to-r from-brand-900 via-brand-600 to-brand-900 bg-clip-text text-transparent">
              نرم افزار مدریت و فروش سنگ
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {companyName || ' ...شرکت'}
          </div>
        </div>
      </div>
    </header>
  );
}
