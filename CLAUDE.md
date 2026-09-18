# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Rock Fact" (package `rock-fact`): a Persian (Farsi), RTL accounting front end for a stone business. It covers sales invoices and printable receipts, customers, warehouse stock and company settings. It is a React Router 7 framework-mode app (SSR on) built with React 19, Tailwind v4, shadcn/ui (Radix) and Zustand. There is **no backend yet**: no loaders or actions, no persistence. All data lives in in-memory Zustand stores, plus `app/dummy_data/stones.json`.

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

## Architecture

- **Routing** is configured in `app/routes.ts`, not by file-system routes. Path strings live in `app/routes/constants.ts`, and some of them (CARGO, REPORTS, …) have no route yet. `app/root.tsx` renders the global `Header`, an `<Outlet />` and the sonner `Toaster`. Route modules are thin and compose components from `app/components/<feature>/`.
- **State** uses one Zustand store per feature under `app/store/`:
  - `useInvoiceStore.ts`: the invoice being edited (stone items, services, discount/tax/received). Setters that affect money call `computeTotals` (`store/helper.ts`) and store the `totals`. `getInvoiceData()` returns the snapshot the receipts render from.
  - `settings/useSettingStore.ts`: a sliced store. Each `settings/sections/*.ts` is a `StateCreator<SettingStore, …>` spread into one `create()`. To add a settings area, add a slice and extend `SettingStore` in `settings/types.ts`.
  - `receipt_issue/`, `customers/`, `warehouse/`: per-page stores.
  - Page-level components take no props and read stores directly.
- **Tabbed pages** (receipt issue at `/issue_receipt`, settings) follow one pattern. A `common.tsx` holds a `*_SECTIONS` descriptor array with id, title, desc and a lucide `iconName`. A store holds the active section. `Tablist/index.tsx` (desktop) and `Tablist/mobile.tsx` are switched by `useIsMobile()`. The route maps section ids to components and animates between them with `motion`. Most receipt-issue sections are still `PlaceholderSection`.
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
- Prettier: single quotes, semicolons, `trailingComma: es5`, width 80, LF line endings.

## Build tooling

- `vite.config.ts` runs `babel-plugin-react-compiler` through `vite-plugin-babel` on all JS/TS. Manual `memo`/`useMemo` is usually unnecessary, and code must follow the Rules of React or the compiler skips it.
- Import alias: `~/*` → `app/*`.

## design-sync (`.design-sync/`)

The components are also exported as a design-system bundle (`window.RockFact`). Read `.design-sync/NOTES.md` before touching that pipeline. The main rule for app work: **when you add a default-exported component, add a re-export line to `.design-sync/default-exports.ts`**, or it is missing from the bundle. `.ds-sync/`, `ds-bundle/` and `.design-sync/.cache/` are generated and gitignored.
