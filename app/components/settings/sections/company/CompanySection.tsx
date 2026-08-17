import * as React from 'react';
import { Building2, Phone } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card';
import LogoHandler from './LogoHandler';
import IdentityInput from './IdentityInput';
import ContactInfo from './ContactInfo';

const CompanySection = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-5 px-2 lg:px-0" dir="rtl">
      <Card className="w-full bg-white/90 backdrop-blur border-slate-200">
        <CardHeader className="flex-row justify-between bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
          <CardTitle className="text-slate-800 font-semibold  text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
            <Building2 className="w-5 h-5 text-teal-600" />
            هویت شرکت
          </CardTitle>
          <CardDescription
            className="text-slate-500 text-[10px] md:text-xs pr-7 flex items-center"
            dir="rtl"
          >
            این اطلاعات روی فاکتورها و رسیدها چاپ می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex flex-col lg:flex-row gap-4">
            <LogoHandler />
            <IdentityInput />
          </div>
        </CardContent>
      </Card>
      <ContactInfo />
    </div>
  );
};

export default CompanySection;
