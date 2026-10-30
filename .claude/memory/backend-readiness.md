---
name: backend-readiness
description: Backend + DB will be built from the frontend; the agreed 5-point plan for automatic stock changes (ledger, sales-only, ids, business-event actions, NUMERIC) and its progress
metadata:
  node_type: memory
  type: project
  originSessionId: 74bd71de-d923-4e5d-b28c-29e6ce637c2b
  modified: 2026-10-22T19:35:39.712Z
---

Roadmap the user stated on 2026-10-18: finish the accounting page, statistics, and individual accounts (حساب اشخاص), then build a backend and database **modelled on the implemented frontend**. The user explicitly asked (2026-10-18) that this plan not be forgotten.

Negative stock (decided 2026-10-18): every warehouse may go below zero (stone/misc/raw `quantity`, block `volume`). The user **rejected** a separate `remainingVolume` field: the block's `volume` (auto-filled from L×W×H, editable) is its stock.

**The 5-point plan for automatic stock changes** (my advice of 2026-10-18; the user wants to follow it):
1. **Stock-movement ledger** instead of overwriting quantities. Each change is a row: item id, warehouse, ± delta (pieces or m³), reason (opening | purchase | sale | transfer | adjustment | reversal), reference (invoice id / transfer id), date, user. On-hand = opening + sum of deltas (the server may cache it in a column updated in the same transaction). It is the classic کاردکس کالا (stock card). Started 2026-10-18: the `StockMovement` / `StockMovementReason` / `StockMovementRef` types are in `app/store/warehouse/types.ts` (type only, nothing records movements yet). Planned next step: `transferStone` writes its two movements.
2. **Only فاکتور فروش (sales invoice) moves stock**, never پیش فاکتور (pre-invoice). Sales invoices are already locked after saving, so no edit and re-deduct. A later cancel is a reversal entry, never an edit or delete.
3. **Link by id, not code; ids not server-numbered.** DONE 2026-10-18: UUID ids from `newId()` in `app/lib/id.ts` for warehouse items, customers and saved invoices (`''` = unsaved; seeds use fixed '1', '2', … for SSR). Invoice rows carry `stockId` ('' = free-typed, moves no stock). Row ids inside an invoice stay numeric local keys.
4. **Store actions = business events** (saveInvoice, transferStone, adjustStock), each mapping to one future API call. A manual quantity edit in the item dialog becomes an adjustment entry with the difference, not an overwrite. DONE for warehouse stock 2026-10-20 (`adjustStock`, and `update*` can no longer change stock). Still generic setters elsewhere, e.g. the invoice and customer stores.
5. **DB stores quantities and money as NUMERIC/decimal**, not float. The frontend already keeps strings, so this is a schema rule only.

Deduction itself must run on the server in the same DB transaction as saving the invoice. Do not build client-side deduction in Zustand.

**Resume here (state as of 2026-10-20):**
- The 2026-10-18 work was committed by the user (f2640c8, d8ad9fc on branch `receipts`). The user wants to approve the steps one at a time.
- The user is fine with the log living in memory until the backend exists; don't raise it again.
- Step 1 DONE 2026-10-20 (uncommitted): `movements` slice (`sections/movements.ts`, state only), `makeMovement()` in warehouse `helpers.ts`, and `transferStone` appends an out/in pair of 'transfer' movements sharing `ref {type:'transfer', id}` and `date`, in the same `set()`. **User decision: a full transfer keeps the source row at zero** (no longer removed; `TransferDialog`'s `onFullTransfer` was removed). CLAUDE.md's Warehouse section documents the log rule. Verified with a vite-node script against the real store.
- Step 2 DONE 2026-10-20 (uncommitted), **user chose option B**: `adjustStock(warehouse, id, stock, note)` in `sections/movements.ts` (one action for all warehouses). `ItemDialog` now takes a `warehouse` prop. **Changed 2026-10-22 (user's choice):** the `AdjustStockDialog` popup was deleted; the edit form's stock field is read-only until its inline «اصلاح» button unlocks it (with a required reason box and a «لغو اصلاح» button), the view footer has no stock button any more (the user removed it), and save calls `update*` then `adjustStock` if the stock changed. `add*` logs 'opening' via `openingMovements()` (none for zero), `update*` keeps the stored stock (store-level guard), and the edit form makes `stock: true` fields read-only and restores them after `derive` (block dims no longer change volume once saved). Helpers `withStoneQuantity`, `stockUnit` (format.ts). Verified with a vite-node script: ledger sum == stock for all items.
- Next steps:
  3. DONE 2026-10-20 (uncommitted). **User chose tabs in the item view dialog**: مشخصات (details) | کاردکس (stock card), footer buttons unchanged. `StockCard.tsx` selects the whole `movements` array and filters by item id + warehouse in render (a plain loop builds the running balance). Columns: date, description (transfers name the other warehouse; the note is shown under it), ±change (unit from `stockUnit`), balance. Labels: `MOVEMENT_REASONS` in warehouse `constants.ts`. Verified by rendering it with react-dom/server via vite-node (for SSR, copy live state into `getInitialState()`).
- After step 3, nothing is left on the warehouse side except the open question below.
- Open question for the user: should sales-invoice deduction also be prototyped in the in-memory log, or wait for the backend (my earlier advice was to wait)?

**Why:** state written now becomes the API/DB schema later, so client-only shortcuts become rewrite work.
**How to apply:** when touching stores or warehouse/invoice code, check new work against these 5 points and flag anything that only works in memory. Related: [[warehouse-multi-plan]], [[block-invoice-tab]].
