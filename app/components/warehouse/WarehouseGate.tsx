import { useState, type ReactNode } from 'react';
import { Power, PowerOff } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ToggleRow } from '../settings/common';
import { convertToPersianDigits } from '~/lib/utils';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { canBeDisabled } from '~/store/warehouse/helpers';
import type { WarehouseId } from '~/store/warehouse/types';
import { WAREHOUSE_SECTIONS } from './common';
import { Alert } from './Alert';

interface WarehouseGateProps {
  warehouse: WarehouseId;
  // Number of items kept in the warehouse, shown while it is inactive.
  itemCount: number;
  children: ReactNode;
}

// Adds the active/inactive switch to optional warehouses and hides their
// content while they are switched off.
export default function WarehouseGate({
  warehouse,
  itemCount,
  children,
}: WarehouseGateProps): ReactNode {
  const enabled = useWarehouseStore((state) => state.enabled[warehouse]);
  const setEnabled = useWarehouseStore((state) => state.setWarehouseEnabled);
  const [confirmDisable, setConfirmDisable] = useState(false);

  if (!canBeDisabled(warehouse)) return children;

  const title = WAREHOUSE_SECTIONS.find((s) => s.id === warehouse)?.title;

  const enable = () => {
    setEnabled(warehouse, true);
    toast.success(`${title} فعال شد.`);
  };

  const disable = () => {
    setEnabled(warehouse, false);
    toast.warning(`${title} غیرفعال شد.`);
  };

  return (
    <div className="flex flex-col gap-4">
      <ToggleRow
        label={`وضعیت ${title}: ${enabled ? 'فعال' : 'غیرفعال'}`}
        hint="انبارهای غیر از انبار اصلی را می‌توانید هر زمان که لازم بود فعال یا غیرفعال کنید."
        checked={enabled}
        onCheckedChange={(next) => (next ? enable() : setConfirmDisable(true))}
      />

      {enabled ? (
        children
      ) : (
        <Card className="w-full border-amber-300 bg-amber-50/70 mb-6">
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <PowerOff className="w-14 h-14 text-amber-500" />
            <div className="space-y-2">
              <p className="text-lg font-semibold text-slate-800">
                {title} غیرفعال است
              </p>
              <p className="text-sm text-slate-600">
                تا زمانی که این انبار غیرفعال است، امکان مشاهده، ثبت یا انتقال
                محصولات آن وجود ندارد.
              </p>
              {itemCount > 0 && (
                <p className="text-sm text-slate-600">
                  {convertToPersianDigits(itemCount)} محصول در این انبار حفظ شده
                  است و پس از فعال‌سازی دوباره در دسترس خواهد بود.
                </p>
              )}
            </div>
            <Button
              onClick={enable}
              className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
            >
              <Power className="w-4 h-4" />
              فعال‌سازی {title}
            </Button>
          </CardContent>
        </Card>
      )}

      <Alert
        open={confirmDisable}
        set={setConfirmDisable}
        title={`غیرفعال کردن ${title}`}
        description={`با غیرفعال کردن این انبار، مشاهده، ثبت محصول جدید و انتقال به یا از آن ممکن نخواهد بود. محصولات موجود${itemCount > 0 ? ` (${convertToPersianDigits(itemCount)} محصول)` : ''} حذف نمی‌شوند و پس از فعال‌سازی دوباره در دسترس خواهند بود.`}
        variant="warning"
        cancelText="انصراف"
        confirmText="غیرفعال شود"
        onConfirm={disable}
      />
    </div>
  );
}
