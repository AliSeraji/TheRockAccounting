---
name: invoice-add-row-footer
description: "Chosen 2026-10-30 — invoice tables' add-row button sits in a card footer at bottom-left (AddRowFooter); delete column bordered"
metadata:
  node_type: memory
  type: project
  originSessionId: 636a3588-bdf2-4635-9a08-54123dd474fb
  modified: 2026-10-29T20:59:25.001Z
---

On 2026-10-30 the add-row `+` moved out of the totals row of the stone, block and services tables into a card footer (`components/invoice/AddRowFooter.tsx`), placed **bottom-left** (the RTL end side, under the delete column). The user picked it from ASCII mockups over bottom-right (my recommendation), full-width dashed and centered. The delete column, borderless before, now has borders from header to totals row.

**Why:** the + in the borderless totals cell looked misplaced; bottom-left keeps it near the old + and the delete buttons.

**How to apply:** new editable invoice-style tables should reuse `AddRowFooter` with the same placement instead of putting add buttons inside the table. Related: [[page-header-glass-scroll]], [[block-invoice-tab]].
