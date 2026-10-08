import type { ReactNode } from 'react';
import { emptyBlock, useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { deriveBlock } from '~/store/warehouse/helpers';
import { blockColumns } from './columns';
import { blockFormFields } from './constants';
import ItemsCard from './ItemsCard';
import ItemDialog from './ItemDialog';
import WarehouseGate from './WarehouseGate';

export default function BlockWarehouseSection(): ReactNode {
  const items = useWarehouseStore((state) => state.blocks);
  const addBlock = useWarehouseStore((state) => state.addBlock);
  const updateBlock = useWarehouseStore((state) => state.updateBlock);
  const removeBlock = useWarehouseStore((state) => state.removeBlock);

  return (
    <WarehouseGate warehouse="block" itemCount={items.length}>
      <ItemsCard
        title="لیست کوپ‌های انبار کوپ سنگ"
        noun="کوپ"
        items={items}
        columns={blockColumns}
        nameOf={(item) => item.name}
      />
      <ItemDialog
        noun="کوپ"
        items={items}
        fields={blockFormFields}
        emptyItem={emptyBlock}
        nameOf={(item) => item.name}
        derive={deriveBlock}
        onAdd={addBlock}
        onUpdate={updateBlock}
        onRemove={removeBlock}
      />
    </WarehouseGate>
  );
}
