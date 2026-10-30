---
name: accounting-design
description: "Accounting page design being worked out with the user (expenses list, customer payments, every invoice buyer becomes a customer; ثابت/گذری type removed) — decisions so far, started 2026-10-21"
metadata:
  node_type: memory
  type: project
  originSessionId: 9cedde40-5a4e-49ec-8048-7f2b26d9d69f
  modified: 2026-10-26T15:21:26.594Z
---

Design-by-questioning ("grill me") session started 2026-10-21. No code written yet. Nothing for accounting exists: the home card حساب داری points to `/cargo` and گزارشات to `/purchase_registration`, neither has a route.

**Decided by the user:**
1. **One expense list (هزینه‌ها)**, separate from invoices, never shown on the invoices page. Every company purchase goes on it. Some lines (e.g. gloves for workers) also add stock to the **misc** warehouse; others (e.g. tea) are money only. Stocked lines should log a `'purchase'` movement (reason exists, unused so far).
2. **Income = money actually received** from customers (cash basis), not invoice totals. Users record each customer payment, what it was for, and the app shows what the customer still owes.
3. **Every invoice buyer is a customer (built 2026-10-26).** History: a ثابت/گذری (regular/walk-in) customer type was built on 2026-10-23. Its toggle confused users and was made automatic on 2026-10-25. On 2026-10-26 user research found the whole idea obsolete and it was **removed**; don't bring it back. Now:
   - The name and national-ID fields suggest customers (the user chose those two, not phone).
   - An exact match links on blur.
   - On save, an unlinked buyer is linked by **national ID first, then exact name**; several matches refuse the save. Otherwise **a new customer is created automatically, for pre-invoices and sales invoices alike**.
   - A new customer **must have a national ID or economic code** (the user flagged this as a big flaw when it was missing). Invalid details **stop the save with the reason**.
   - Free typing stays possible.
   - The rules are in CLAUDE.md › Invoices › Buyer and customers.
   - The `/customers` form requires an ID too (user, 2026-10-26). A person needs their national code; a company its national ID or economic code. Both forms use `requiredErrors`.
4. **Payments (2026-10-23):** recorded later against **saved invoices**, possibly as several partial payments. Not paying at the time of purchase must **never block, lock or flag** anything. The old Q3 idea (an "unpaid" badge) is dropped.

**Mockup (2026-10-22):** Design canvas https://claude.ai/artifact/Bf8MKX9gdZbEKeKui7W4gV, made at the user's request. It shows an accounting page with 3 tabs (خلاصه | دریافت‌ها | هزینه‌ها) plus the ثبت هزینه dialog (misc-warehouse switch) and the ثبت دریافت dialog (one payment split across invoices). It shows my recommendations as if decided. Q3 is settled by points 3–4 above (no unpaid badge; every buyer becomes a customer). Still unconfirmed: whether a cheque counts as income on receipt or when cashed, overpayment kept as علی‌الحساب, and expense categories edited in Settings. Chart colours: income #b7832a, expenses #3a6ea5 (validated).

**Known problems found in code:** (fixed: every saved invoice now carries `customerId`, see CLAUDE.md › Invoices) `received` is one number on the invoice and sales invoices lock after save, so later payments need their own records.

**Why:** the user will build the backend from this frontend ([[backend-readiness]]), so payments and expenses should be append-only records like the stock log.
**How to apply:** continue asking one question at a time with a recommendation; update this file as answers come in.
