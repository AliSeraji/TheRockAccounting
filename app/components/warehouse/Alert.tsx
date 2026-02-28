import type { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { cn } from '~/lib/utils';

type AlertVariant = 'warning' | 'error' | 'info';

const variantStyles: Record<
  AlertVariant,
  { container: string; cancel: string; confirm: string }
> = {
  warning: {
    container: 'bg-amber-50 border-2 border-amber-400',
    cancel:
      'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 hover:cursor-pointer',
    confirm:
      'bg-amber-600 text-white border-0 hover:bg-amber-700 hover:cursor-pointer',
  },
  error: {
    container: 'bg-red-50 border-2 border-red-400',
    cancel:
      'bg-red-100 text-red-900 border border-red-300 hover:bg-red-200 hover:cursor-pointer',
    confirm:
      'bg-red-600 text-white border-0 hover:bg-red-700 hover:cursor-pointer',
  },
  info: {
    container: 'bg-sky-50 border-2 border-sky-400',
    cancel:
      'bg-sky-100 text-sky-900 border border-sky-300 hover:bg-sky-200 hover:cursor-pointer',
    confirm:
      'bg-sky-600 text-white border-0 hover:bg-sky-700 hover:cursor-pointer',
  },
};

export const Alert = ({
  open,
  set,
  title,
  description,
  variant = 'warning',
  cancelText = 'متوجه شدم',
  confirmText,
  onConfirm,
}: {
  open: boolean;
  set: (open: boolean) => void;
  title: string;
  description: string;
  variant?: AlertVariant;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}): ReactNode => {
  const styles = variantStyles[variant];

  return (
    <AlertDialog open={open} onOpenChange={() => set(false)}>
      <AlertDialogContent
        className={cn('w-full ring-0', styles.container)}
        dir="rtl"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-black">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter
          className={cn('flex flex-row justify-center sm:justify-center')}
        >
          <AlertDialogCancel
            className={styles.cancel}
            onClick={() => set(false)}
          >
            {cancelText}
          </AlertDialogCancel>
          {onConfirm && (
            <AlertDialogAction
              className={styles.confirm}
              onClick={() => {
                onConfirm();
                set(false);
              }}
            >
              {confirmText ?? 'تایید'}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
