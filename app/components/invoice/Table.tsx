import type React from 'react';
import { useStoneInvoice } from '~/store/useInvoiceForm';
import { useIsMobile } from '~/hooks/use-mobile';
import { handleArrowNavigation } from '~/lib/utils';
import FloatingTable from '../floating-table/FloatingTable';
import TotalBar from '../floating-table/TotalBar';
import { MIN_TABLE_WIDTH } from '../floating-table/styles';
import StoneRowCards from './row-cards/StoneRowCards';
import { stoneTotalStats } from './row-cards/summary';
import { invoiceTableItems } from './common';
import Row from './TableRow';

export default function InvoiceTable(): React.ReactNode {
  const addItem = useStoneInvoice((state) => state.addItem);
  const items = useStoneInvoice((state) => state.items);
  const updateItem = useStoneInvoice((state) => state.updateItem);
  const removeItem = useStoneInvoice((state) => state.removeItem);
  const totals = useStoneInvoice((state) => state.totals);
  const isMobile = useIsMobile();

  // Phones get one card per row instead of the wide table.
  if (isMobile) return <StoneRowCards />;

  return (
    <FloatingTable
      columns={invoiceTableItems}
      track
      className={MIN_TABLE_WIDTH}
      onKeyDown={handleArrowNavigation}
      footer={<TotalBar stats={stoneTotalStats(totals)} />}
    >
      {items.map((item, index) => (
        <Row
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
