---
name: warehouse-multi-plan
description: "Agreed plan (2026-09-29) for multi-warehouse refactor — task order and user's design decisions"
metadata:
  node_type: memory
  type: project
  originSessionId: 4144437c-3ea4-4231-bcf1-3713fc7b9c6b
  modified: 2026-10-03T18:48:40.487Z
---

Warehouse is being split into multiple warehouses, one task at a time, each reviewed by the user ([[review-diffs-before-writing]]). Spec came from a PDF "مدیریت انبار".

Warehouses: main (stone, invoices deduct from it only), secondary (same fields as main, never linked to invoices, transfer to/from main), misc purchased goods (description, qty, price, partner price, date, notes), raw/production materials (description, qty, purchase price, date, notes). Stone block (کوپ) warehouse added 2026-10-04: code, name, L/W/H (m), weight (t), volume m³ (calculated), price, partner price; tab between secondary and misc; optional/toggleable; not linked to invoices (its own invoice flow is a later task).

Decisions: row click opens a side sheet (bottom drawer on mobile) with details+actions that becomes the edit form; transfers are partial-quantity with merge-by-code in destination; active/inactive toggle for non-main warehouses lives on the warehouse page (inactive keeps items, shows explanation + activate button, deactivating needs confirmation); navigation uses the existing tabbed-page pattern (common.tsx SECTIONS + Tablist); `diameter` renamed to `thickness`; stone prices = purchase/wholesale/partner/consumer; tables show summary columns + row number (ردیف), details in the sheet. No Persian comments in code.

Task order: 1 sliced store + types + invoice reads main only; 2 generic config-driven table; 3 detail sheet + form (replaces NewItemCard); 4 tabs; 5 main<->secondary transfer; 6 active/inactive; 7 misc; 8 raw. Later: invoice deduction, block invoice flow, price tier on invoice, persistence.

Status (2026-10-01): tasks 1–8 implemented (uncommitted at the time). Changes along the way: user swapped the side sheet for a centered Dialog; misc and raw items have NO code (user decided 2026-10-03, reversing an earlier "add code" call; `code` is optional in ItemDialog/ItemsCard); stone quantity may be negative and such rows are highlighted red; dialog/table were made generic (ItemDialog<T>, ItemsCard<T>) and the edit draft moved from the store into the form's local state. Open questions not yet answered: confirm-discard on closing with unsaved edits; whether any stone prices should be required.

**Why:** user wants a reviewable, prioritized sequence.
**How to apply:** check git state to see which task is done before continuing.
