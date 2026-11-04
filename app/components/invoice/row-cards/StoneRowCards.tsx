import type { ReactNode } from 'react';
import { isFilledStone } from '~/store/invoices/helpers';
import { useStoneInvoice } from '~/store/useInvoiceForm';
import RowCardList from './RowCardList';
import RowCardTotals from './RowCardTotals';
import StoneCardBody from './StoneCardBody';
import { stoneSummary, stoneTotalStats } from './summary';

// The stone invoice's items on a phone, in place of InvoiceTable.
export default function StoneRowCards(): ReactNode {
  const items = useStoneInvoice((state) => state.items);
  const updateItem = useStoneInvoice((state) => state.updateItem);
  const removeItem = useStoneInvoice((state) => state.removeItem);
  const addItem = useStoneInvoice((state) => state.addItem);
  const totals = useStoneInvoice((state) => state.totals);

  return (
    <RowCardList
      items={items}
      isFilled={isFilledStone}
      summarize={stoneSummary}
      onRemove={removeItem}
      renderBody={(item, autoFocus) => (
        <StoneCardBody
          item={item}
          update={updateItem}
          addItem={addItem}
          autoFocus={autoFocus}
        />
      )}
      totals={
        <RowCardTotals
          rowCount={items.length}
          stats={stoneTotalStats(totals)}
        />
      }
    />
  );
}
