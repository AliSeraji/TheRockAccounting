import { useState, type ReactNode } from 'react';
import { ArrowLeftRight, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { StoneStockItem, StoneWarehouseId } from '~/store/warehouse/types';
import {
  TRANSFER_TARGET,
  normalizeCode,
  parseQuantity,
} from '~/store/warehouse/helpers';
import { FieldTypes } from './constants';
import { WAREHOUSE_SECTIONS } from './common';
import { formatNumber } from './format';
import FormField from './FormField';

const sectionTitle = (id: StoneWarehouseId) =>
  WAREHOUSE_SECTIONS.find((s) => s.id === id)?.title ?? '';

interface TransferDialogProps {
  warehouse: StoneWarehouseId;
  item: StoneStockItem;
  onClose: () => void;
  // Called after a transfer that moved the whole quantity out of the row.
  onFullTransfer: () => void;
}

// Mount only while open so the quantity resets for each transfer.
export default function TransferDialog({
  warehouse,
  item,
  onClose,
  onFullTransfer,
}: TransferDialogProps): ReactNode {
  const to = TRANSFER_TARGET[warehouse];
  const transferStone = useWarehouseStore((state) => state.transferStone);
  const mergesIntoExisting = useWarehouseStore((state) =>
    state.stones[to].some(
      (i) => normalizeCode(i.code) === normalizeCode(item.code)
    )
  );
  const [quantity, setQuantity] = useState(item.quantity);
  const [error, setError] = useState<string | null>(null);

  const available = parseQuantity(item.quantity);

  const handleConfirm = () => {
    const amount = parseQuantity(quantity);
    if (amount <= 0) {
      setError('تعداد انتقال باید بیشتر از صفر باشد.');
      return;
    }
    if (amount > available) {
      setError(
        `تعداد انتقال نمی‌تواند بیشتر از موجودی (${formatNumber(item.quantity)}) باشد.`
      );
      return;
    }
    transferStone(warehouse, item.id, amount);
    toast.success(
      `${formatNumber(String(amount))} عدد «${item.name}» به ${sectionTitle(to)} منتقل شد.`
    );
    onClose();
    if (amount === available) onFullTransfer();
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        dir="rtl"
        className="sm:max-w-md flex flex-col gap-0 p-0 overflow-hidden font-vazirmatn"
      >
        <DialogHeader className="px-6 pt-5 pb-4 pr-12 border-b border-brand-200 bg-linear-to-r from-brand-100 to-slate-50">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold text-slate-800">
            <ArrowLeftRight className="w-5 h-5 text-brand-600" />
            انتقال به {sectionTitle(to)}
          </DialogTitle>
          <DialogDescription className="text-brand-900">
            {item.name} <span className="font-mono">({item.code})</span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 px-6 py-4">
          <p className="text-sm text-slate-600">
            موجودی فعلی در {sectionTitle(warehouse)}:{' '}
            <span className="font-semibold text-slate-800">
              {formatNumber(item.quantity)}
            </span>
          </p>
          <FormField
            label="تعداد انتقال"
            fieldKey="quantity"
            value={quantity}
            type={FieldTypes.NUMBER}
            placeholder="تعداد"
            required
            onChange={(_, value) => {
              setQuantity(value);
              setError(null);
            }}
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
            {mergesIntoExisting
              ? `این کد در ${sectionTitle(to)} وجود دارد؛ تعداد به همان ردیف اضافه می‌شود.`
              : `این کد در ${sectionTitle(to)} وجود ندارد؛ ردیف جدیدی ساخته می‌شود.`}
          </p>
        </div>

        <DialogFooter className="m-0 px-6 py-4 flex-row flex-wrap sm:justify-start">
          <Button
            onClick={handleConfirm}
            className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
          >
            <ArrowLeftRight className="w-4 h-4" />
            انتقال
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="gap-2 hover:cursor-pointer"
          >
            <X className="w-4 h-4" />
            انصراف
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
