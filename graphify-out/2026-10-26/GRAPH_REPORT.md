# Graph Report - TheRockAccounting  (2026-10-26)

## Corpus Check
- 237 files · ~63,857 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1279 nodes · 4648 edges · 55 communities (49 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 52 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ca1c60dc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Invoice Form Cards
- Button
- Saved Invoices List & Detail
- Runtime Dependencies
- Package Manifest
- store/types.ts
- useWarehouseStore
- Field & Sidebar Primitives
- Alert
- routes/constants.ts
- block/BlockTable.tsx
- BlockTableRow.tsx
- ServiceRow.tsx
- tooltip.tsx
- settings/common.tsx
- sales/ReceiptHeader.tsx
- TableRow.tsx
- react
- useWarehouse.ts
- react
- InvoiceDataType
- Dashboard & Persian Calendar
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- TablePagination.tsx
- convertToPersianDigits
- Toast Hook
- ItemDialog.tsx
- Dev Dependencies
- Design-sync Previews
- Tooling & Theme Docs
- StockCard.tsx
- TableRow
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- App Shell (root, Header)
- Sheet Primitives
- toast.tsx
- gen-types Script
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- Brand Logo
- Design-sync Conventions
- Invoice Saving Concepts
- Package Scripts
- Vite & Router Config
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin

## God Nodes (most connected - your core abstractions)
1. `cn()` - 191 edges
2. `react` - 149 edges
3. `convertToPersianDigits()` - 133 edges
4. `lucide-react` - 61 edges
5. `Button` - 57 edges
6. `TableRow()` - 52 edges
7. `Input` - 45 edges
8. `TableCell()` - 40 edges
9. `useWarehouseStore` - 40 edges
10. `convertToEnDigits()` - 37 edges

## Surprising Connections (you probably didn't know these)
- `dir=rtl on each Persian container` --semantically_similar_to--> `Per-container dir=rtl`  [INFERRED] [semantically similar]
  .design-sync/conventions.md → CLAUDE.md
- `Destructive button dark-text render warn` --semantically_similar_to--> `Undefined --destructive-foreground`  [INFERRED] [semantically similar]
  .design-sync/NOTES.md → CLAUDE.md
- `Samim body font and font-vazirmatn for print` --semantically_similar_to--> `Samim body font, font-vazirmatn for print`  [INFERRED] [semantically similar]
  .design-sync/conventions.md → CLAUDE.md
- `Direct slate/teal/emerald palette usage` --conceptually_related_to--> `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md → CLAUDE.md
- `Theme token classes` --conceptually_related_to--> `Tailwind v4 CSS-only config (app/app.css)`  [INFERRED]
  .design-sync/conventions.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **design-sync bundle build inputs** — _design_sync_notes_synth_entry_mode, _design_sync_notes_default_exports_module, _design_sync_notes_gen_types_mjs, _design_sync_notes_cfg_cssentry, _design_sync_notes_cfg_extrafonts [EXTRACTED 1.00]
- **Invoice store selection via InvoiceStoreKey** — claude_invoicestorecontext, claude_useinvoiceform, claude_draft_editor_stores, claude_invoiceformslice, claude_invoicebody [EXTRACTED 1.00]
- **Append-only stock ledger (کاردکس)** — claude_stock_movements_ledger, claude_makemovement, claude_adjuststock, claude_stockcard [EXTRACTED 1.00]
- **Rock Fact business domains depicted in logo (stone products, warehouse stock, invoicing, accounting)** — app_assets_modern_stone_logo_stone_slabs_motif, app_assets_modern_stone_logo_warehouse_motif, app_assets_modern_stone_logo_invoice_document_motif, app_assets_modern_stone_logo_calculator_motif [INFERRED 0.85]

## Communities (55 total, 6 thin omitted)

### Community 0 - "Invoice Form Cards"
Cohesion: 0.07
Nodes (90): CustomersList(), ExplanationCard(), InvoiceBody(), DayValue, InvoiceInfo, PersianDatePicker, InvoiceItemsCard(), InvoiceSummary (+82 more)

### Community 1 - "Button"
Cohesion: 0.22
Nodes (21): previewTitle(), ReceiptOutputDialog(), switchTriggerClass, Button, ButtonProps, buttonVariants, Dialog(), DialogContent() (+13 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.05
Nodes (85): InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), Field(), InvoiceDetails(), PaymentSummary(), rial() (+77 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.04
Nodes (52): dependencies, add, class-variance-authority, clsx, date-fns-jalali, @fontsource-variable/vazirmatn, @hassanmojab/react-modern-calendar-datepicker, isbot (+44 more)

### Community 4 - "Package Manifest"
Cohesion: 0.04
Nodes (52): name, private, publishConfig, types, type, add, @babel/core, babel-plugin-react-compiler (+44 more)

### Community 5 - "store/types.ts"
Cohesion: 0.17
Nodes (16): blockTableItems, deliveryTableItems, InvoiceTableItem, requestLowerTableItems, requestUpperTableItems, salesTableItems, blockDeliveryTableItems, BlockDeliveryTableProps (+8 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.17
Nodes (23): BlockWarehouseSection(), miscColumns, ACCENT, IconComponent, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, miscFormFields, ItemsCard() (+15 more)

### Community 7 - "Field & Sidebar Primitives"
Cohesion: 0.10
Nodes (35): CardFooter, FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator() (+27 more)

### Community 8 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 9 - "routes/constants.ts"
Cohesion: 0.29
Nodes (10): CARGO, CUSTOMER_REGISTER, DOC_REQUEST, INFO, PRIVATE_INVOICE, PURCHASE_REG, RECEIPT_ISSUE, REPORTS (+2 more)

### Community 10 - "block/BlockTable.tsx"
Cohesion: 0.31
Nodes (10): BlockTable(), Footer(), invoiceTableItems, Footer(), InvoiceTable(), InvoiceTableHeader(), InvoiceTableHeaderProps, handleArrowNavigation() (+2 more)

### Community 11 - "BlockTableRow.tsx"
Cohesion: 0.26
Nodes (10): BLOCK_DETAILS, BlockRow, normalize(), BLOCK_ROW_FIELDS, BlockRowField, normalize(), PersianNumericInput(), PersianNumericInputProps (+2 more)

### Community 12 - "ServiceRow.tsx"
Cohesion: 0.27
Nodes (9): servicesTableItems, ServiceRow, Footer(), ServicesTable(), ServiceTypeInput(), ServiceTypeInputProps, SERVICE_OPTIONS, SERVICE_ROW_FIELDS (+1 more)

### Community 13 - "tooltip.tsx"
Cohesion: 0.28
Nodes (6): SidebarMenuButton(), sidebarMenuButtonVariants, Tooltip(), TooltipContent(), TooltipTrigger(), radix-ui

### Community 14 - "settings/common.tsx"
Cohesion: 0.06
Nodes (57): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+49 more)

### Community 15 - "sales/ReceiptHeader.tsx"
Cohesion: 0.53
Nodes (5): Divider(), IconTxtRow(), MetaRow(), Props, SalesReceiptHeader()

### Community 16 - "TableRow.tsx"
Cohesion: 0.17
Nodes (19): StoneCodeInput(), StoneCodeInputProps, StoneTypeInput(), StoneTypeInputProps, SuggestInput(), SuggestInputProps, normalize(), Row (+11 more)

### Community 17 - "react"
Cohesion: 0.14
Nodes (27): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableHeader(), DataTableRow() (+19 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.10
Nodes (41): newId(), AREA_INPUTS, calcStoneArea(), canBeDisabled(), deriveStone(), formatQuantity(), makeMovement(), openingMovements() (+33 more)

### Community 19 - "react"
Cohesion: 0.19
Nodes (13): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+5 more)

### Community 20 - "InvoiceDataType"
Cohesion: 0.15
Nodes (17): ReceiptProps, ReceiptTableProps, DeliveryTableBodyProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestProduct(), RequestReceiptHeader(), RequestReceiptPage() (+9 more)

### Community 21 - "Dashboard & Persian Calendar"
Cohesion: 0.16
Nodes (14): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.06
Nodes (76): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, PROVINCE_NAMES, PROVINCES, roleColors, SALE_RATE_OPTIONS (+68 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "TablePagination.tsx"
Cohesion: 0.41
Nodes (10): TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink(), PaginationLinkProps (+2 more)

### Community 27 - "convertToPersianDigits"
Cohesion: 0.13
Nodes (29): amount(), blockItemColumns(), hasValue(), rowNumber, serviceColumns(), stoneItemColumns(), text(), total() (+21 more)

### Community 28 - "Toast Hook"
Cohesion: 0.16
Nodes (16): ToastActionElement, ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId() (+8 more)

### Community 29 - "ItemDialog.tsx"
Cohesion: 0.15
Nodes (22): EMPTY, FieldContent(), FieldTitle(), FormFieldConfig, formatDateTime(), formatNumber(), formatPrice(), isolateNegative() (+14 more)

### Community 30 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): devDependencies, @babel/core, babel-plugin-react-compiler, @babel/preset-typescript, @locator/babel-jsx, prettier, @react-router/dev, tailwindcss (+9 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "StockCard.tsx"
Cohesion: 0.10
Nodes (21): blockColumns, rawColumns, renderStock(), stoneColumns, blockFormFields, categoryColors, FieldTypes, CALCULATED (+13 more)

### Community 34 - "TableRow"
Cohesion: 0.20
Nodes (23): DetailsTable(), BlockDeliveryTable(), DeliveryTableHeader(), deliveryPages(), DeliveryReceipt(), ReceiptTable(), DeliveryTableBody(), DeliveryTableFooter() (+15 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 37 - "App Shell (root, Header)"
Cohesion: 0.23
Nodes (4): Header(), Toaster(), App(), HOME

### Community 39 - "Sheet Primitives"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 40 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastClose, ToastDescription, ToastTitle, toastVariants, ToastViewport, @radix-ui/react-toast

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 43 - "SSR Entry Points"
Cohesion: 0.22
Nodes (6): streamTimeout, RFC-9110, isbot, react-dom, react-router, @react-router/node

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 47 - "Brand Logo"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "Vite & Router Config"
Cohesion: 0.29
Nodes (5): @react-router/dev, @tailwindcss/vite, vite, vite-plugin-babel, vite-tsconfig-paths

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **78 isolated node(s):** `PRICE`, `NUMBER`, `TEXT`, `CALCULATED`, `RFC-9110` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 345 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Invoice Form Cards`, `Button`, `Saved Invoices List & Detail`, `Package Manifest`, `store/types.ts`, `useWarehouseStore`, `Field & Sidebar Primitives`, `Alert`, `block/BlockTable.tsx`, `BlockTableRow.tsx`, `ServiceRow.tsx`, `tooltip.tsx`, `settings/common.tsx`, `sales/ReceiptHeader.tsx`, `TableRow.tsx`, `react`, `InvoiceDataType`, `Dashboard & Persian Calendar`, `CustomerForm.tsx`, `TablePagination.tsx`, `convertToPersianDigits`, `Toast Hook`, `ItemDialog.tsx`, `StockCard.tsx`, `TableRow`, `App Shell (root, Header)`, `Sheet Primitives`, `toast.tsx`, `SSR Entry Points`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **What connects `PRICE`, `NUMBER`, `TEXT` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Invoice Form Cards` be split into smaller, more focused modules?**
  _Cohesion score 0.06964818127608825 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Field & Sidebar Primitives` to `Invoice Form Cards`, `Button`, `Saved Invoices List & Detail`, `useWarehouseStore`, `Alert`, `ServiceRow.tsx`, `tooltip.tsx`, `settings/common.tsx`, `sales/ReceiptHeader.tsx`, `TableRow.tsx`, `react`, `react`, `Dashboard & Persian Calendar`, `CustomerForm.tsx`, `TablePagination.tsx`, `ItemDialog.tsx`, `TableRow`, `Sheet Primitives`, `toast.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.05006662859318484 - nodes in this community are weakly interconnected._
- **Why does `convertToPersianDigits()` connect `convertToPersianDigits` to `Invoice Form Cards`, `Button`, `Saved Invoices List & Detail`, `store/types.ts`, `useWarehouseStore`, `block/BlockTable.tsx`, `BlockTableRow.tsx`, `ServiceRow.tsx`, `settings/common.tsx`, `sales/ReceiptHeader.tsx`, `TableRow.tsx`, `react`, `react`, `InvoiceDataType`, `Dashboard & Persian Calendar`, `CustomerForm.tsx`, `TablePagination.tsx`, `ItemDialog.tsx`, `StockCard.tsx`, `TableRow`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._