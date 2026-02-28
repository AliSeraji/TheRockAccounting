import { Toaster as Sonner, type ToasterProps } from 'sonner';
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from 'lucide-react';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      dir="rtl"
      className="flex flex-row items-center toaster group text-lg font-vazirmatn"
      icons={{
        success: <CircleCheckIcon className="size-6" />,
        info: <InfoIcon className="size-6" />,
        warning: <TriangleAlertIcon className="size-6" />,
        error: <OctagonXIcon className="size-6" />,
        loading: <Loader2Icon className="size-6 animate-spin" />,
      }}
      toastOptions={{
        style: {
          fontFamily: 'var(--font-vazirmatn)',
        },
        classNames: {
          success:
            '!bg-emerald-500 !text-white !border-emerald-600 [&>[data-icon]]:!text-white',
          error:
            '!bg-red-500 !text-white !border-red-600 [&>[data-icon]]:!text-white',
          warning:
            '!bg-amber-500 !text-white !border-amber-600 [&>[data-icon]]:!text-white',
          info: '!bg-sky-500 !text-white !border-sky-600 [&>[data-icon]]:!text-white',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
