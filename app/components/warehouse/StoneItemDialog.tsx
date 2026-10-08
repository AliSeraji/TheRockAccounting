import { useState, type ReactNode } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Button } from '../ui/button';
import { emptyStone, useWarehouseStore } from '~/store/warehouse/useWarehouse';
import type { StoneStockItem, StoneWarehouseId } from '~/store/warehouse/types';
import {
  TRANSFER_TARGET,
  deriveStone,
  parseQuantity,
} from '~/store/warehouse/helpers';
import { stoneFormFields } from './constants';
import { WAREHOUSE_SECTIONS } from './common';
import ItemDialog from './ItemDialog';
import TransferDialog from './TransferDialog';

export default function StoneItemDialog({
  warehouse,
}: {
  warehouse: StoneWarehouseId;
}): ReactNode {
  const items = useWarehouseStore((state) => state.stones[warehouse]);
  const addStone = useWarehouseStore((state) => state.addStone);
  const updateStone = useWarehouseStore((state) => state.updateStone);
  const removeStone = useWarehouseStore((state) => state.removeStone);
  const closeEditor = useWarehouseStore((state) => state.closeEditor);
  const target = TRANSFER_TARGET[warehouse];
  const targetEnabled = useWarehouseStore((state) => state.enabled[target]);
  const targetTitle = WAREHOUSE_SECTIONS.find((s) => s.id === target)?.title;
  const [transferItem, setTransferItem] = useState<StoneStockItem | null>(null);

  const transferBlockedReason = (item: StoneStockItem): string | null => {
    if (!targetEnabled) {
      return `${targetTitle} غیرفعال است؛ برای انتقال ابتدا آن را فعال کنید.`;
    }
    if (parseQuantity(item.quantity) <= 0) return 'موجودی این محصول صفر است.';
    return null;
  };

  const transferAction = (item: StoneStockItem) => {
    const reason = transferBlockedReason(item);
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setTransferItem(item)}
          disabled={reason !== null}
          className="gap-2 hover:cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4" />
          انتقال به {targetTitle}
        </Button>
        {reason && (
          <p className="order-last w-full text-xs text-slate-500">{reason}</p>
        )}
      </>
    );
  };

  return (
    <>
      <ItemDialog
        noun="محصول"
        items={items}
        fields={stoneFormFields}
        emptyItem={emptyStone}
        nameOf={(item) => item.name}
        derive={deriveStone}
        onAdd={(item) => addStone(warehouse, item)}
        onUpdate={(id, item) => updateStone(warehouse, id, item)}
        onRemove={(id) => removeStone(warehouse, id)}
        viewActions={transferAction}
      />
      {transferItem && (
        <TransferDialog
          warehouse={warehouse}
          item={transferItem}
          onClose={() => setTransferItem(null)}
          onFullTransfer={closeEditor}
        />
      )}
    </>
  );
}
