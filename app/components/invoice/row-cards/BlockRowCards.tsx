import type { ReactNode } from 'react';
import { isFilledBlock } from '~/store/invoices/helpers';
import { useBlockInvoice } from '~/store/useInvoiceForm';
import BlockCardBody from './BlockCardBody';
import RowCardList from './RowCardList';
import RowCardTotals from './RowCardTotals';
import { blockSummary, blockTotalStats } from './summary';

// The block invoice's items on a phone, in place of BlockTable.
export default function BlockRowCards(): ReactNode {
  const items = useBlockInvoice((state) => state.items);
  const updateItem = useBlockInvoice((state) => state.updateItem);
  const removeItem = useBlockInvoice((state) => state.removeItem);
  const addItem = useBlockInvoice((state) => state.addItem);
  const totals = useBlockInvoice((state) => state.totals);

  return (
    <RowCardList
      items={items}
      isFilled={isFilledBlock}
      summarize={blockSummary}
      onRemove={removeItem}
      renderBody={(item, autoFocus) => (
        <BlockCardBody
          item={item}
          update={updateItem}
          addItem={addItem}
          autoFocus={autoFocus}
        />
      )}
      totals={
        <RowCardTotals
          rowCount={items.length}
          stats={blockTotalStats(totals)}
        />
      }
    />
  );
}
