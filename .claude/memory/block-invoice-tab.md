---
name: block-invoice-tab
description: "Block (کوپ) invoice tab + invoice list (submit, detail, edit, receipts) — design decisions as of 2026-10-08"
metadata:
  node_type: memory
  type: project
  originSessionId: 13e87190-37ea-4cde-b89f-03de1510ca2c
  modified: 2026-10-08T13:30:24.331Z
---

Built 2026-10-08 on branch `warehouse`, uncommitted at the time. Follows on from the block warehouse in [[warehouse-multi-plan]].

**Block invoice tab** (id `block`, from the mockup PDF "Factor Koop"):
- Total = volume (m³, the warehouse's `calcBlockVolume`) × price. Weight is entered by hand and only summed.
- A block code from the block warehouse (only while it is enabled) fills in type, L/W/H and weight. Price is not filled in.
- It reuses the cards unchanged, although the mockup drops national ID, project, tax and the delivery note.

**Invoice list** (2026-10-08, user's choices):
- Detail and edit open inside the "لیست فاکتورها" tab (drill-down with a back button), never on the creation tabs. **No delete** (user said "no delete for now").
- Search and print were removed from the tablist. Search lives in the list; print only in the receipt dialog, which now has a فاکتور / رسید تحویل بار switch.
- Sales invoices (فاکتور فروش) are locked. Saving one, from creation or edit, asks for confirmation first.

My defaults, not confirmed by the user:
- Submit requires a buyer, a date and at least one complete item row (type + amount); untouched rows are dropped.
- A blank invoice number takes Settings › Numbering `nextNumber` (digits only, prefix ignored) and increments it.
- Invoice numbers are unique across stone and block invoices.
- The submit button became the gold primary button; the preview buttons became outline buttons.

Architecture: the stores are factories. Draft and editor instances are picked through `InvoiceStoreContext` holding `{kind, mode}` (`app/store/useInvoiceForm.ts`), and the list is in `app/store/invoices/`. The list is in memory only.

**Why:** the user may revisit these choices. Persistence and warehouse deduction on sales are the obvious follow-ups.
**How to apply:** check git to see what's committed, then ask before changing these decisions.
