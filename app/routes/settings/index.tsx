import { useRef, type ReactNode } from 'react';
import PageHeader from '~/components/ui/PageHeader';
import { HOME } from '../constants';
import { Home, Trash2, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { useSettingsStore } from '~/store/useSettingsStore';
import { Button } from '~/components/ui/button';

export default function Settings(): ReactNode {
  const companyName = useSettingsStore((state) => state.companyName);
  const setCompanyName = useSettingsStore((state) => state.setCompanyName);
  const logo = useSettingsStore((state) => state.logo);
  const setLogo = useSettingsStore((state) => state.setLogo);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setLogo(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="justify-center w-full py-6" dir="rtl">
      <PageHeader
        lastPage={'داشبورد اصلی'}
        currentPage={'تنظیمات'}
        link={HOME}
        icon={<Home className="w-5 h-5 text-white" />}
      />
      <div className="w-full flex flex-col items-center overflow-auto pt-16">
        <Card className="w-full border-slate-200 bg-white/90 backdrop-blur">
          <CardHeader className="border-b-slate-400 rounded-t-lg">
            <CardTitle className="text-slate-800 font-semibold text-lg">
              تنظیمات شرکت
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-700">نام شرکت</Label>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border-slate-200 rounded-lg focus:ring-slate-400 max-w-100"
                placeholder="شرکت شما"
              />
            </div>

            <div className="flex flex-row space-x-2 items-center">
              <Label className="h-fit text-slate-700 text-nowrap">
                لوگوی شرکت
              </Label>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {logo ? (
                <div className="flex items-center gap-4">
                  <img
                    src={logo}
                    alt="لوگوی شرکت"
                    className="w-24 h-24 object-contain rounded-full border border-slate-200 p-1"
                  />
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="hover:cursor-pointer"
                    >
                      <Upload className="w-4 h-4 ml-2" />
                      تغییر لوگو
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setLogo(null)}
                      className="hover:cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 ml-2" />
                      حذف لوگو
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-dashed border-2 border-slate-300 h-24 w-24 text-xs rounded-full hover:cursor-pointer"
                >
                  <Upload className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
