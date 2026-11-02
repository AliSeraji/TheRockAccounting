---
name: invoices-editable-never-deleted
description: "Rule since 2026-11-02 — every saved invoice (sales too) stays editable, none is ever deleted; editing a sales invoice will be limited to the highest access level"
metadata:
  node_type: memory
  type: project
  originSessionId: 2f074600-eda7-4af9-8adf-aed7b0394064
  modified: 2026-11-02T19:29:03.386Z
---

User's rule (2026-11-02): **every saved invoice stays fully editable, sales invoices (فاکتور فروش) included, and no invoice is ever deleted** ("All invoices should not be deleted"). Users with access levels come later; only the highest level may then edit sales invoices.

Built that day (uncommitted):
- `can('editSalesInvoice')` in `app/lib/permissions.ts` returns true for everyone. `canEditInvoice` in `store/invoices/helpers.ts` uses it, and the lock (`isLocked`) is gone (renamed `isSalesInvoice`).
- Stock follows the invoice through `setInvoiceStock` (warehouse movements slice). What the invoice holds is read from the log. On a change it logs a 'reversal' for everything held, then a 'sale' per row. A removed row gives its stock back (the user asked about this explicitly). Nothing is logged when no stock row changed.
- The confirmation before saving a sales invoice stays, reworded to say the stock will be updated. The stock card shows the invoice number on sale/return lines.

**Why:** the business corrects invoices after the fact; access levels, not a lock, will protect finalised ones.
**How to apply:** never add an invoice delete or cancel. Gate new "dangerous" invoice actions through `can()` so access levels plug in at one place. Related: [[backend-readiness]], [[block-invoice-tab]].
