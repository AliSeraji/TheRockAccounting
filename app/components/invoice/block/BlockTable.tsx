import type React from 'react';
import { useBlockInvoice } from '~/store/useInvoiceForm';
import { useIsMobile } from '~/hooks/use-mobile';
import { handleArrowNavigation } from '~/lib/utils';
import FloatingTable from '../../floating-table/FloatingTable';
import TotalBar from '../../floating-table/TotalBar';
import { MIN_TABLE_WIDTH } from '../../floating-table/styles';
import BlockRowCards from '../row-cards/BlockRowCards';
import { blockTotalStats } from '../row-cards/summary';
import BlockRow from './BlockTableRow';
import { blockTableItems } from './common';

export default function BlockTable(): React.ReactNode {
  const addItem = useBlockInvoice((state) => state.addItem);
  const items = useBlockInvoice((state) => state.items);
  const updateItem = useBlockInvoice((state) => state.updateItem);
  const removeItem = useBlockInvoice((state) => state.removeItem);
  const totals = useBlockInvoice((state) => state.totals);
  const isMobile = useIsMobile();

  // Phones get one card per row instead of the wide table.
  if (isMobile) return <BlockRowCards />;

  return (
    <FloatingTable
      columns={blockTableItems}
      track
      className={MIN_TABLE_WIDTH}
      onKeyDown={handleArrowNavigation}
      footer={<TotalBar stats={blockTotalStats(totals)} />}
    >
      {items.map((item, index) => (
        <BlockRow
          key={item.id}
          rowItem={item}
          index={index}
          update={updateItem}
          remove={removeItem}
          addItem={addItem}
        />
      ))}
    </FloatingTable>
  );
}
