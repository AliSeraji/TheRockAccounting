import type { ReactNode } from 'react';
import { emptyRaw, useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { rawColumns } from './columns';
import { rawFormFields } from './constants';
import ItemsCard from './ItemsCard';
import ItemDialog from './ItemDialog';
import WarehouseGate from './WarehouseGate';

export default function RawWarehouseSection(): ReactNode {
  const items = useWarehouseStore((state) => state.raw);
  const addRaw = useWarehouseStore((state) => state.addRaw);
  const updateRaw = useWarehouseStore((state) => state.updateRaw);
  const removeRaw = useWarehouseStore((state) => state.removeRaw);

  return (
    <WarehouseGate warehouse="raw" itemCount={items.length}>
      <ItemsCard
        title="لیست مواد اولیه انبار تولید"
        noun="ماده اولیه"
        items={items}
        columns={rawColumns}
        nameOf={(item) => item.description}
      />
      <ItemDialog
        noun="ماده اولیه"
        items={items}
        fields={rawFormFields}
        emptyItem={emptyRaw}
        nameOf={(item) => item.description}
        onAdd={addRaw}
        onUpdate={updateRaw}
        onRemove={removeRaw}
      />
    </WarehouseGate>
  );
}
