import { Trash2, Upload } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '~/components/ui/field';

const MAX_FILE_SIZE = 300 * 1024;

export interface StampUploaderProps {
  /** Persian label, also used to build the button captions. */
  label: string;
  value: string | null;
  error?: string | null;
  onChange: (dataUrl: string | null) => void;
  onError: (message: string | null) => void;
}

export default function StampUploader({
  label,
  value,
  error,
  onChange,
  onError,
}: StampUploaderProps): ReactNode {
  const fileRef = useRef<HTMLInputElement>(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_SIZE) {
      onError('حجم فایل نباید بیشتر از ۳۰۰ کیلوبایت باشد');
      e.target.value = '';
      return;
    }
    const r = new FileReader();
    r.onload = (): void => {
      onChange(r.result as string);
      onError(null);
    };
    r.readAsDataURL(f);
  };

  return (
    <Field className="flex flex-col w-full">
      <FieldLabel className="text-slate-700 text-xs pr-2">{label}</FieldLabel>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onUpload}
      />
      <div
        onClick={(): void => fileRef.current?.click()}
        className="group relative w-full aspect-3/2 rounded-xl border-2 border-dashed border-slate-200 bg-linear-to-br from-white to-slate-50/50 hover:border-slate-300 hover:from-slate-50 transition cursor-pointer flex flex-col items-center justify-center overflow-hidden"
      >
        {value ? (
          <>
            <div className="absolute inset-0 checker" />
            <img
              src={value}
              alt={label}
              className="relative max-w-[80%] max-h-[80%] object-contain"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex flex-col items-center gap-1 text-white">
                <Upload className="w-5 h-5" />
                <span className="text-xs font-medium">تغییر {label}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-2">
              <Upload className="w-5 h-5 text-slate-500" />
            </div>
            <span className="text-sm text-slate-600 font-medium">
              انتخاب {label}
            </span>
            <span className="text-xs text-slate-400 mt-1">
              تصویر با پس‌زمینه شفاف بهتر چاپ می‌شود
            </span>
          </>
        )}
      </div>
      {value && (
        <div className="flex flex-row w-full justify-center">
          <button
            type="button"
            onClick={(e): void => {
              e.stopPropagation();
              onChange(null);
              onError(null);
            }}
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 hover:cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            حذف {label}
          </button>
        </div>
      )}
      {error ? (
        <FieldError>{error}</FieldError>
      ) : (
        <FieldDescription className="flex w-full text-slate-400 text-xs justify-center">
          PNG / JPG — حداکثر ۳۰۰ کیلوبایت
        </FieldDescription>
      )}
    </Field>
  );
}
