---
name: invoice-table-restyle
description: "2026-11-08 desktop tables restyled to 'floating rows' (mockup D): invoice tables, saved invoice view and all DataTable lists; desktop only; shared app/components/floating-table/"
metadata:
  node_type: memory
  type: project
  originSessionId: edc188ea-9e12-4d3d-966e-81b6ab0f78fd
  modified: 2026-11-09T17:47:11.439Z
---

On 2026-11-08 the user picked **D · ردیف‌های شناور** (floating rows) from five mockups on a Design canvas. The canvas was deleted the same day, so the built code is now the reference. The other options were A ledger, B bronze band, C grouped columns and E formula.

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
  - The lists' desktop pagination is a white pill too (`TablePagination` with `floating`, from `DataTableFooter`). The current page reuses the selected-row look (`rowStateClass`). Phone pagination is unchanged. Its prev/next arrows point toward the page numbers, which is unchanged from before and was not fixed.

**Round 2 (2026-11-09):** the user's staff struggled with the built design. The fields were too faint to see, the small two-line header was unclear, and the total tiles were too big. The user asked for the smallest modern fix and wants to choose. Mockups were on a Design canvas, which was deleted on 2026-11-09 after the choice, so the built code is the reference:
- **A:** a light header bar with one-line labels such as «قطر (سانت)», outlined white fields with placeholders, and a slim totals row aligned under its columns.
- **B:** a dark header bar, filled fields with an underline, and compact total pills at the left end.
- **C:** no header row, a small label inside each field, and one slim dark totals bar.

Parts can be mixed. The user chose **A's rows and C's totals bar**, and wanted a better header. Round 2 on the same canvas offers three headers on that combination:
- **1:** grouped, with group pills «مشخصات سنگ / ابعاد و تعداد / قیمت و محاسبه» over bold column labels.
- **2:** an icon over each label, in a white header card shaped like the rows.
- **3:** each label is a block the same width as the input box below it, and the computed columns are tinted bronze.

The user rejected all three ("none of the headers satisfies me"), and the earlier A, B and C headers too. Round 3, on the same canvas, tries other kinds of header:
- **4 · Active column:** an interactive board. The header is a segmented track, like the G filter style the user liked, and the column being typed in lights up in the header and down the rows.
- **5 · Glass:** a frosted, sticky header that rows scroll under.
- **6 · Steps:** numbered circles on a line show the order to fill the fields, and calculated columns get «=».

**Chosen 2026-11-09:** board 4 without the column band down the rows. Built the same day, uncommitted:
- **Header:** `FloatingTable` with `track` (invoice tables and the saved view) renders `FloatingHeader` as a segmented track. It uses `SEGMENT_TRACK`, `SEGMENT_ON` and `SEGMENT_TRANSITION`, now exported from `ui/segmented-control.tsx`. The focused input's column rises as a white segment, tracked by `onFocus` on the body. The lists keep the plain header.
- **Fields:** outlined white boxes (`FIELD_INPUT`, `CODE_INPUT`, `TEXT_INPUT`). Text fields get hint text, and a blank row's typed number fields get «۰».
- **Totals:** `TotalBar`, one slim dark bar, replaced `TotalTiles`.
- **Labels:** one line, «قطر (سانت)», «متراژ (مترمربع)».
- **Everywhere (2026-11-09):** the user liked the header and asked for it on every table. The `DataTable` lists (invoices, customers, warehouse) now pass `track`. The warehouse `StockCard` (کاردکس) uses `FloatingTable` with `track` on desktop and keeps its bordered grid on phones. Print receipts are excluded.
- **Future, not to build yet:** the user wants header-click sorting later, using the raised segment to mark the sorted column. `FloatingHeader` already takes an `active` index, so sorting can drive it instead of focus.

See [[units-written-out]].

**Why:** the user wanted a modern, professional table. **Desktop only:** phones must not change at all. No file in `invoice/row-cards/` or `DataTableCard` was touched, and shared shells only got `md:` classes.

**How to apply:** new desktop tables should render through `floating-table/` instead of hand-built grids. Keep phone UI untouched unless asked. Related: [[prefer-shadcn-components]], [[invoice-add-row-footer]], [[invoice-mobile-row-cards]], [[review-diffs-before-writing]].
