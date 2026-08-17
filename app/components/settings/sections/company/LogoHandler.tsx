import { Trash2, Upload } from 'lucide-react';
import { memo, useRef, type ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '~/components/ui/field';
import { useSettingsStore } from '~/store/settings/useSettingStore';

const LogoHandler = memo(function LogoHandler(): ReactNode {
  const { logo, logoError } = useSettingsStore(
    useShallow((s) => ({
      logo: s.logo,
      logoError: s.logoError,
    }))
  );

  const setField = useSettingsStore((s) => s.setField);
  const fileRef = useRef<HTMLInputElement>(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 300 * 1024) {
      setField('logoError', 'حجم فایل نباید بیشتر از ۳۰۰ کیلوبایت باشد');
      e.target.value = '';
      return;
    }
    const r = new FileReader();
    r.onload = (): void => {
      setField('logo', r.result as string);
      setField('logoError', null);
    };
    r.readAsDataURL(f);
  };

  return (
    <div>
      <Field className="flex flex-col w-full justify-center">
        <FieldLabel className="text-slate-700 text-xs pr-2 justify-center lg:justify-start ">
          لوگوی شرکت
        </FieldLabel>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onUpload}
        />
        <div className="flex flex-row w-full justify-center">
          <div
            onClick={(): void => fileRef.current?.click()}
            className="group relative w-full aspect-square max-w-50 rounded-xl border-2 border-dashed border-slate-200 bg-linear-to-br from-white to-slate-50/50 hover:border-slate-300 hover:from-slate-50 transition cursor-pointer flex flex-col items-center justify-center overflow-hidden"
          >
            {logo ? (
              <>
                <div className="absolute inset-0 checker" />
                <img
                  src={logo}
                  alt="لوگوی شرکت"
                  className="relative max-w-[80%] max-h-[80%] object-contain"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center gap-1 text-white">
                    <Upload className="w-5 h-5" />
                    <span className="text-xs font-medium">تغییر لوگو</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-2">
                  <Upload className="w-5 h-5 text-slate-500" />
                </div>
                <span className="text-sm text-slate-600 font-medium">
                  انتخاب لوگو
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  یا فایل را بکشید
                </span>
              </>
            )}
          </div>
        </div>
        {logo && (
          <div className="flex flex-row w-full justify-center">
            <button
              type="button"
              onClick={(e): void => {
                e.stopPropagation();
                setField('logo', null);
              }}
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 hover:cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              حذف لوگو
            </button>
          </div>
        )}
        {logoError ? (
          <FieldError>{logoError}</FieldError>
        ) : (
          <FieldDescription className="flex w-full text-slate-400 text-xs justify-center ">
            PNG / JPG — حداکثر ۳۰۰ کیلوبایت
          </FieldDescription>
        )}
      </Field>
    </div>
  );
});

export default LogoHandler;
