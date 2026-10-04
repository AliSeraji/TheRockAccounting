import type { ReactNode } from 'react';
import type { StoneWarehouseId } from '~/store/warehouse/types';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { isNegativeStock } from '~/store/warehouse/helpers';
import { stoneColumns } from './columns';
import { WAREHOUSE_SECTIONS } from './common';
import ItemsCard from './ItemsCard';
import StoneItemDialog from './StoneItemDialog';
import WarehouseGate from './WarehouseGate';

export default function StoneWarehouseSection({
  warehouse,
}: {
  warehouse: StoneWarehouseId;
}): ReactNode {
  const items = useWarehouseStore((state) => state.stones[warehouse]);
  const title = WAREHOUSE_SECTIONS.find((s) => s.id === warehouse)?.title;

  return (
    <WarehouseGate warehouse={warehouse} itemCount={items.length}>
      <ItemsCard
        title={`لیست محصولات ${title}`}
        noun="محصول"
        items={items}
        columns={stoneColumns}
        nameOf={(item) => item.name}
        categoryOf={(item) => item.category}
        isFlagged={isNegativeStock}
        flagLabel="موجودی منفی"
      />
      <StoneItemDialog warehouse={warehouse} />
    </WarehouseGate>
  );
}
