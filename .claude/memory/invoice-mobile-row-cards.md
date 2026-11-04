---
name: invoice-mobile-row-cards
description: Phone layout for stone/block invoice rows = "A+C ledger accordion" cards (chosen 2026-11-03, built 2026-11-04 in invoice/row-cards/ with motion animations)
metadata:
  node_type: memory
  type: project
  originSessionId: 535967bd-154c-4fa9-b2e5-30917e10e6a3
  modified: 2026-11-04T18:44:20.071Z
---

On phones (`useIsMobile()`), invoice item rows show as **A+C ledger accordion** cards instead of the table. The user chose the design on 2026-11-03. It was built on 2026-11-04 (not yet committed when written). Desktop keeps the table.

**Design source:** the claude.ai canvas https://claude.ai/artifact/7N8W6amksnqv5xWHAkjNis. The chosen boards are `project/AC-stone.dc.html` and `project/AC-block.dc.html`. Boards A–D are the rejected alternatives.

**How it's built:**
- `app/components/invoice/row-cards/` holds all the card code:
  - `RowCardList` + `useOpenRow` (one card open; a new row opens and focuses; a lone blank row starts open; a saved invoice starts closed).
  - `RowCard` (shadcn `Card` / `Button` / `Separator`; header cross-fade, chevron rotate, body height animation).
  - `IdentityField` (two `SuggestInput`s), `NumberField`, `PriceStrip`, `RowCardTotals`, `summary.ts`, `styles.ts`.
  - `Stone|BlockRowCards` and `Stone|BlockCardBody`.
- `Table.tsx` and `BlockTable.tsx` return the cards when `isMobile`.
- The saved-invoice view (`invoices/InvoiceDetails.tsx`) shows read-only `SavedRowCards` on phones. A card with no `onRemove` is read-only: no delete, and the summary stays in the header while open. The size fields and totals live in `fields.ts` and `summary.ts`, shared by the edit and view cards.
- Services use cards too (2026-11-04). `ServicesTable.tsx` returns `ServiceRowCards` on phones; the view uses `SavedServiceCards`; one `ServiceCardBody` serves both modes. A fresh invoice's blank service card starts closed (`openLoneBlank={false}`), while the items card's blank row starts open.
- Stock linking lives in `app/hooks/useStoneStockLink.ts` and `useBlockStockLink.ts`. **The user chose these** as the one source of truth for the desktop rows and the cards.
- The user asked for shadcn components wherever possible ([[prefer-shadcn-components]]).

**User requirements:**
- New code goes in new files and folders.
- The accordion must have proper open/close animations (`motion/react`, honouring reduced motion).
- Report every edit made to existing files.

**Open items:**
- It hasn't been tried in a real browser or phone yet.
- The «N ردیف» count sits in the totals box, not the card header, because the header is the shared `InvoiceItemsCard`.
- Related: [[invoice-add-row-footer]], [[block-invoice-tab]], [[review-diffs-before-writing]].
