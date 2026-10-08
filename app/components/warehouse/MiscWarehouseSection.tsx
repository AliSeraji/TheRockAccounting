import type { ReactNode } from 'react';
import { emptyMisc, useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { miscColumns } from './columns';
import { miscFormFields } from './constants';
import ItemsCard from './ItemsCard';
import ItemDialog from './ItemDialog';
import WarehouseGate from './WarehouseGate';

export default function MiscWarehouseSection(): ReactNode {
  const items = useWarehouseStore((state) => state.misc);
  const addMisc = useWarehouseStore((state) => state.addMisc);
  const updateMisc = useWarehouseStore((state) => state.updateMisc);
  const removeMisc = useWarehouseStore((state) => state.removeMisc);

  return (
    <WarehouseGate warehouse="misc" itemCount={items.length}>
      <ItemsCard
        title="لیست کالاهای انبار متفرقه"
        noun="کالا"
        items={items}
        columns={miscColumns}
        nameOf={(item) => item.description}
      />
      <ItemDialog
        noun="کالا"
        items={items}
        fields={miscFormFields}
        emptyItem={emptyMisc}
        nameOf={(item) => item.description}
        onAdd={addMisc}
        onUpdate={updateMisc}
        onRemove={removeMisc}
      />
    </WarehouseGate>
  );
}
