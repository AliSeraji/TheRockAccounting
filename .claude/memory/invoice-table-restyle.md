---
name: invoice-table-restyle
description: "2026-11-08 desktop tables restyled to 'floating rows' (mockup D): invoice tables, saved invoice view and all DataTable lists; desktop only; shared app/components/floating-table/"
metadata:
  node_type: memory
  type: project
  originSessionId: edc188ea-9e12-4d3d-966e-81b6ab0f78fd
  modified: 2026-11-08T18:51:52.901Z
---

On 2026-11-08 the user picked **D · ردیف‌های شناور** (floating rows) from five mockups on the Design canvas https://claude.ai/artifact/4FWx2E1aq7STSvvtX1bLsM. The other options were A ledger, B bronze band, C grouped columns and E formula.

**What changed (built 2026-11-08, uncommitted, not yet reviewed in the browser by the user):**
- **Scope:**
  - The stone, block and services tables, on the new-invoice tabs and in the editor.
  - The read-only saved-invoice view (`invoices/details/DetailsTable`).
  - Every `DataTable` list: invoices, customers and warehouse. The user chose to restyle all three together.
- **Look:**
  - Each row is a white rounded card with a number `Badge`, and a blank row is dashed.
  - Headers are plain labels with the unit on a second line.
  - Totals are `TotalTiles`, with a dark amount tile at the left end.
  - Card bodies are cream on desktop. The gradient title bar stays, with a «N ردیف» badge.
  - The add-row button is bronze on desktop only.
- **Code:** shared pieces live in `app/components/floating-table/`: `FloatingTable`, `FloatingHeader`, `FloatingRow`, `NumberCell`, `DeleteCell`, `TotalTiles`, `RowCountBadge`, `InvoiceTableCard`, plus `styles.ts` and `columns.ts`.
  - `STONE_COLUMNS`, `BLOCK_COLUMNS` and `SERVICE_COLUMNS` define each column once, for the editable rows and the saved view.
  - `TotalTiles` reuses `stoneTotalStats` and its siblings from `row-cards/summary.ts`.
  - `StoneCodeInput`, `StoneTypeInput` and `ServiceTypeInput` are now thin wrappers over `SuggestInput`.
  - `invoice/TableHeader.tsx` and `data-table/DataTableHeader.tsx` were deleted.

**Why:** the user wanted a modern, professional table. **Desktop only:** phones must not change at all. No file in `invoice/row-cards/` or `DataTableCard` was touched, and shared shells only got `md:` classes.

**How to apply:** new desktop tables should render through `floating-table/` instead of hand-built grids. Keep phone UI untouched unless asked. Related: [[prefer-shadcn-components]], [[invoice-add-row-footer]], [[invoice-mobile-row-cards]], [[review-diffs-before-writing]].
