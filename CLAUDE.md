# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Rock Fact" (package `rock-fact`): a Persian (Farsi), RTL accounting front end for a stone business. It covers stone and block (کوپ) invoices with a saved-invoice list, printable receipts, customers, multi-warehouse stock and company settings. It is a React Router 7 framework-mode app (SSR on) built with React 19, Tailwind v4, shadcn/ui (Radix) and Zustand. There is **no backend yet**: no loaders or actions, no persistence, so a reload loses everything. All data lives in in-memory Zustand stores. `app/dummy_data/stones.json` seeds the main warehouse (`store/warehouse/sections/stones.ts`).

## Commands

The package manager is **yarn** (only `yarn.lock` is committed). The `Dockerfile` still runs `npm ci` and copies a `package-lock.json` that doesn't exist, so a Docker build fails until that is fixed.

```bash
yarn dev            # dev server with HMR, http://localhost:5173
yarn build          # react-router build -> build/client, build/server
yarn start          # serve the production build
yarn typecheck      # react-router typegen && tsc  (the only static check)
yarn format         # prettier --write app/**
yarn format:check
```

There is no test runner and no linter. Use `yarn typecheck` to verify changes. `react-router build` prints "Error when using sourcemap…" warnings for `ui/field.tsx`, `ui/separator.tsx` and `ui/switch.tsx`. These are harmless.

On a Windows checkout with `core.autocrlf=true`, git writes CRLF line endings while `.prettierrc` sets `endOfLine: lf`, so `yarn format:check` flags every file. To check formatting there, run `yarn prettier --check --end-of-line auto <files>`. Don't run `yarn format` to clear the warnings: it rewrites the line endings of every file.

## Architecture

- **Routing** is configured in `app/routes.ts`, not by file-system routes. Path strings live in `app/routes/constants.ts`, and some of them (CARGO, REPORTS, …) have no route yet. `app/root.tsx` renders the global `Header`, an `<Outlet />` and the sonner `Toaster`. Route modules are thin and compose components from `app/components/<feature>/`.
- **State** uses Zustand stores under `app/store/`. Page-level components take no props and read stores directly. Large stores are **sliced**: each `sections/*.ts` file is a `StateCreator` spread into one `create()`, and the combined type is an intersection in `types.ts`. Both `settings/useSettingStore.ts` and `warehouse/useWarehouse.ts` work this way. To add an area, add a slice and extend the store type.

### Invoices

- There are two invoice kinds (`InvoiceKind = 'stone' | 'block'` in `store/types.ts`). Each kind has a store factory that is instantiated twice: a **draft** for the creation tab (`useInvoiceStore`, `useBlockInvoiceStore`) and an **editor** for a saved invoice opened from the list (`stoneInvoiceEditor`, `blockInvoiceEditor`).
- `store/invoiceFormSlice.ts` holds what both kinds share: header fields, notes, services, discount/tax/received. It takes a `withTotals` callback, so each kind recomputes its own totals (`computeTotals` / `computeBlockTotals` in `store/helper.ts`) whenever a money field changes. Each kind's store adds `items`, its own `updateItem` (stone: area = w×l×qty; block: volume via `calcBlockVolume`, priced per m³), `getInvoiceData`, `loadInvoice` and `resetInvoice`.
- `store/useInvoiceForm.ts` decides which store a component edits. `InvoiceStoreContext` carries an `InvoiceStoreKey` (`{ kind, mode }`, default stone/draft). Shared cards (`components/invoice/*`) read through `useInvoiceForm(selector)`. Kind-specific tables use `useStoneInvoice` / `useBlockInvoice`. Never import a store directly into a shared invoice card, or the editor view will edit the draft. `readInvoice`, `loadInvoice` and `resetInvoice` act on a key from outside React.
- `components/invoice/index.tsx` (`InvoiceBody`) composes the cards. Its `itemsTable` prop swaps the stone `Table` for `invoice/block/BlockTable`.
- **Saved invoices** live in `store/invoices/useInvoicesStore.ts`. `saveInvoice(snapshot, id?)` validates with `invoiceProblems`, assigns the next number from the numbering settings when the number field is blank, and strips blank rows (`finalizeInvoice`). The store also holds the list tab's view (`list | view | edit`), filters and page. A `فاکتور فروش` (sales invoice) is **locked** after saving (`isLocked`). Only `پیش فاکتور` (pre-invoices) can be edited. `components/invoices/useInvoiceSaver.tsx` wraps saving with the error and lock-confirmation dialogs.
- **Customer type**: every invoice has `customerType` (`'regular'` = مشتری ثابت, `'walkIn'` = مشتری گذری, the default) and `customerId`. A regular buyer is picked from the active customers in `invoice/BuyerInput` (`pickCustomer` copies their details into the buyer fields). Editing the name or switching type clears `customerId`, and saving a regular invoice without a picked customer is refused. A walk-in is typed in and has no customer record. A customer named on a saved invoice can't be deleted (`CustomerForm`). Payments are not part of this: they will be recorded later against saved invoices.
- Invoice rows pick stock from the warehouse store: `selectInvoiceStones` (main warehouse only) and `selectInvoiceBlocks` (empty while the block warehouse is disabled).

### Warehouse

- `/warehouse` has five warehouses (`WarehouseId`): `main` and `secondary` (stone, transfers between them merge by code), `block`, `misc` and `raw`. `main` can never be disabled. The others can be switched off through `enabled`, and `WarehouseGate` hides a disabled warehouse's content without deleting its items.
- One `editor` slice (`closed | view | edit | create`) drives the item dialog for whichever warehouse is on screen.
- **Stock log**: the `movements` slice is an append-only list of `StockMovement`s (the کاردکس, or stock card), modelled on the future database table. An item's quantity (a block's volume) is a cached balance. Any action that changes it must append matching movements (`makeMovement` in `helpers.ts`) in the **same** `set()`, and must never edit or delete a movement. `add*` logs an 'opening' entry, `transferStone` an out/in pair, and `adjustStock` an 'adjustment' with a required reason. `update*` keeps the stored stock. In the edit form, the field marked `stock: true` stays read-only until its «اصلاح» button unlocks it and shows a required reason box. Saving calls `update*` and then, if the stock changed, `adjustStock`. Deleting an item leaves its movements. A full transfer keeps the source row at zero. The item dialog's view has two tabs: مشخصات (details) and کاردکس (`StockCard`: the item's movements with a running balance).

### Tabbed pages and tables

- **Tabbed pages** (receipt issue at `/issue_receipt`, warehouse, settings) follow one pattern. A `common.tsx` holds a `*_SECTIONS` descriptor array with id, title, desc and a lucide `iconName`. A store holds the active section. `Tablist/index.tsx` (desktop) and `Tablist/mobile.tsx` are switched by `useIsMobile()`. The route maps section ids to components in `SECTION_COMPONENTS` and animates between them with `motion`. The receipt-issue tabs are `invoice` (stone draft), `block` (block draft, wrapped in `InvoiceStoreContext`) and `list` (`InvoicesSection`: list, detail or editor).
- **Lists** (customers, warehouse, invoices) use the generic `components/data-table/DataTable`. Each feature defines `DataTableColumn<T>[]` in its own `columns.tsx`. The `mobile` role on each column places its value on the stacked card that replaces the table on phones.
- Confirmation and error dialogs across features reuse `components/warehouse/Alert.tsx` (`variant`, `onConfirm`). Every delete asks for confirmation first with a `warning` Alert, as `warehouse/ItemDialog.tsx` and `customers/CustomerForm.tsx` do.

### Printing and platform

- **Printing**: `components/receipts/{sales,delivery,request}` render paginated A4/A5 pages (`receipt-page receipt-page-a4|a5`) inside a `.print-receipt` wrapper. `receipts/dialogs/receiptOutputDialog.tsx` clones that node, injects a temporary `@media print` stylesheet and calls `window.print()`. Pagination helpers are in `app/helper/helper.tsx` (`receiptPager`, `salesReceiptPager`, which lets services share the last items page).
- **Client-only code**: SSR is on, so browser-only libraries go in `*.client.tsx` files and load via `React.lazy`. `invoice/PersianDatePicker.client.tsx` is an example.
- `components/ui/` is shadcn (new-york style, config in `components.json`). Add primitives with the shadcn CLI rather than by hand.

## Persian / RTL conventions

- The document is `lang="en"` with no global direction. Apply `dir="rtl"` on each page or container, including `DialogContent`.
- Numbers show Persian digits. Amounts are in Rial with `٬` separators. Use the helpers in `app/lib/utils.ts`: `convertToPersianDigits`, `convertToEnDigits` (normalize input before `parseFloat`), `formatRialAmount`, `persianNumberToText`/`numberToWords`, and `cleanTrailingZeros`. Store fields for numeric inputs are **strings**.
- Dates are Jalali (`date-fns-jalali`, `@hassanmojab/react-modern-calendar-datepicker`).
- Fonts: Samim is the body font. Use `font-vazirmatn` for printed receipts and invoices.

## Styling

- Tailwind v4 is configured in CSS only (`app/app.css`: `@theme`, `@utility`). There is no `tailwind.config`.
- The theme **remaps `slate-*` and `gray-*` to warm tones** and adds a gold/bronze `brand-*` scale (and utilities such as `bg-gold-gradient`). Existing `slate-*` classes are intentionally beige/brown, not blue.
- `--destructive-foreground` is undefined, so destructive buttons show dark text on red.
- Tailwind v4 buttons use the default arrow cursor, so every clickable control needs `hover:cursor-pointer`. The shared dialog close button in `ui/dialog.tsx` has it.
- Prettier: single quotes, semicolons, `trailingComma: es5`, width 80, LF line endings.

## Build tooling

- `vite.config.ts` runs `babel-plugin-react-compiler` through `vite-plugin-babel` on all JS/TS. Manual `memo`/`useMemo` is usually unnecessary, and code must follow the Rules of React or the compiler skips it.
- Import alias: `~/*` → `app/*`.

## design-sync (`.design-sync/`)

The components are also exported as a design-system bundle (`window.RockFact`). Read `.design-sync/NOTES.md` before touching that pipeline. The main rule for app work: **when you add a default-exported component, add a re-export line to `.design-sync/default-exports.ts`**, or it is missing from the bundle. `.ds-sync/`, `ds-bundle/` and `.design-sync/.cache/` are generated and gitignored.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
