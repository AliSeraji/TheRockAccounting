# Graph Report - TheRockAccounting  (2026-10-30)

## Corpus Check
- 243 files · ~66,248 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1299 nodes · 4779 edges · 68 communities (47 shown, 21 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `64387d88`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lucide-react
- Button
- Saved Invoices List & Detail
- dependencies
- package.json
- BlockTableRow.tsx
- useWarehouseStore
- cn
- root.tsx
- convertToPersianDigits
- store/types.ts
- default-exports.ts
- TableRow.tsx
- warehouse/index.tsx
- receipts/index.tsx
- utils.ts
- useInvoiceForm.ts
- DataTable.tsx
- useWarehouse.ts
- warehouse/columns.tsx
- @fontsource-variable/vazirmatn@^5.2.8
- routes/constants.ts
- TablePagination.tsx
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- warehouse/helpers.ts
- default-exports.ts
- Toast Hook
- StockCard.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- toast.tsx
- @radix-ui/react-dropdown-menu@^2.1.1
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- Modern Stone Logo (Rock Fact brand mark)
- @radix-ui/react-accordion@^1.2.0
- @radix-ui/react-slot
- gen-types Script
- @hassanmojab/react-modern-calendar-datepicker
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @radix-ui/react-switch@^1.1.0
- @radix-ui/react-alert-dialog@^1.1.1
- Design-sync Conventions
- @radix-ui/react-checkbox@^1.1.1
- Invoice Saving Concepts
- Package Scripts
- @radix-ui/react-collapsible@^1.1.0
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- @radix-ui/react-avatar@^1.1.0
- @radix-ui/react-label
- @radix-ui/react-scroll-area@^1.1.0
- @radix-ui/react-select
- Table
- @radix-ui/react-toast
- Alert
- FilterSheet.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 196 edges
2. `react` - 154 edges
3. `convertToPersianDigits()` - 131 edges
4. `lucide-react` - 62 edges
5. `Button` - 53 edges
6. `TableRow()` - 52 edges
7. `Input` - 41 edges
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

## Communities (68 total, 21 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.05
Nodes (107): ListHeader(), AddRowFooter(), ExplanationCard(), InvoiceBody(), DayValue, InvoiceInfo, PersianDatePicker, InvoiceItemsCard() (+99 more)

### Community 1 - "Button"
Cohesion: 0.31
Nodes (11): PersianDatePicker(), PersianDatePickerProps, SingleCalendar, ReceiptOutputDialog(), Dialog(), DialogContent(), DialogHeader(), DialogOverlay() (+3 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.07
Nodes (58): InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), InvoiceEditor(), InvoicesList(), KIND_OPTIONS, matches() (+50 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (38): dependencies, add@^2.0.6, class-variance-authority@^0.7.1, lucide-react@^0.562.0, next-themes@^0.4.6, radix-ui@^1.4.3, @radix-ui/react-context-menu@^2.2.1, @radix-ui/react-dialog@^1.1.2 (+30 more)

### Community 4 - "package.json"
Cohesion: 0.07
Nodes (27): clsx@^2.1.1, motion@^13.1.0, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-menubar@^1.1.1, @radix-ui/react-popover@^1.1.1, @radix-ui/react-slider@^1.2.0, @radix-ui/react-tabs@^1.1.0, @react-router/serve@^7.10.1 (+19 more)

### Community 5 - "BlockTableRow.tsx"
Cohesion: 0.14
Nodes (19): BlockTable(), Footer(), BLOCK_DETAILS, BlockRow, normalize(), blockTableItems, BLOCK_ROW_FIELDS, BlockRowField (+11 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.31
Nodes (15): Button, ButtonProps, buttonVariants, DialogFooter(), BlockWarehouseSection(), ItemDialog(), ItemForm(), ItemsCard() (+7 more)

### Community 7 - "cn"
Cohesion: 0.09
Nodes (40): FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator(), SidebarContent() (+32 more)

### Community 8 - "root.tsx"
Cohesion: 0.22
Nodes (5): Header(), Toaster(), App(), react-router@^7.10.1, react-router

### Community 9 - "convertToPersianDigits"
Cohesion: 0.30
Nodes (18): amount(), blockItemColumns(), hasValue(), rowNumber, serviceColumns(), stoneItemColumns(), text(), total() (+10 more)

### Community 10 - "store/types.ts"
Cohesion: 0.16
Nodes (21): BlockDeliveryTableProps, ReceiptTableProps, DeliveryTableBodyProps, TableProps, BlockSalesTable(), blockSalesTableItems, BlockSalesTableProps, SalesInvoice() (+13 more)

### Community 11 - "default-exports.ts"
Cohesion: 0.14
Nodes (27): ReceiptProps, requestLowerTableItems, requestUpperTableItems, salesTableItems, ServicesTable(), DetailsTable(), CustomerInfoBox(), CustomerInfoBoxProps (+19 more)

### Community 12 - "TableRow.tsx"
Cohesion: 0.20
Nodes (13): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), ServiceRow, ServiceTypeInput(), ServiceTypeInputProps, SERVICE_OPTIONS (+5 more)

### Community 13 - "warehouse/index.tsx"
Cohesion: 0.22
Nodes (12): ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, WarehouseTablist(), WarehouseMobileTablist(), useIsMobile() (+4 more)

### Community 14 - "receipts/index.tsx"
Cohesion: 0.16
Nodes (22): CustomersList(), ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist() (+14 more)

### Community 15 - "utils.ts"
Cohesion: 0.11
Nodes (26): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+18 more)

### Community 16 - "useInvoiceForm.ts"
Cohesion: 0.06
Nodes (62): BuyerInput(), matches(), buyerInputClass, CustomerOption(), useActiveCustomers(), idsOf(), NationalIdInput(), StoneCodeInput() (+54 more)

### Community 17 - "DataTable.tsx"
Cohesion: 0.25
Nodes (14): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableHeader(), DataTableRow(), DataTableRowProps (+6 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.11
Nodes (27): canBeDisabled(), createBlocksSlice(), emptyBlock, createEditorSlice(), selectOpenItemId(), createMiscSlice(), emptyMisc, createNavigationSlice() (+19 more)

### Community 19 - "warehouse/columns.tsx"
Cohesion: 0.10
Nodes (18): blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields, categoryColors, FieldTypes (+10 more)

### Community 21 - "routes/constants.ts"
Cohesion: 0.10
Nodes (25): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+17 more)

### Community 22 - "TablePagination.tsx"
Cohesion: 0.35
Nodes (11): DataTableFooter(), TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink() (+3 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.07
Nodes (63): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, CustomerForm(), ROLE_FILTER_OPTIONS (+55 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "warehouse/helpers.ts"
Cohesion: 0.16
Nodes (26): DialogDescription(), sectionTitle(), TransferDialog(), TransferDialogProps, AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock() (+18 more)

### Community 27 - "default-exports.ts"
Cohesion: 0.16
Nodes (16): ReceiptPageProps, InfoRow(), Props, SalesInfoBox(), Divider(), IconTxtRow(), MetaRow(), Props (+8 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "StockCard.tsx"
Cohesion: 0.16
Nodes (23): EMPTY, FieldContent(), FieldTitle(), TabsContent, FormFieldConfig, formatDateTime(), formatNumber(), formatPrice() (+15 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastTitle, toastVariants, ToastViewport

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "Modern Stone Logo (Rock Fact brand mark)"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 43 - "SSR Entry Points"
Cohesion: 0.17
Nodes (8): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, @react-router/node@^7.10.1, isbot, react-dom, @react-router/node

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 64 - "Table"
Cohesion: 0.20
Nodes (19): deliveryTableItems, Footer(), BlockDeliveryTable(), blockDeliveryTableItems, DeliveryTableHeader(), DeliveryTableHeaderProps, deliveryPages(), DeliveryReceipt() (+11 more)

### Community 66 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 67 - "FilterSheet.tsx"
Cohesion: 0.21
Nodes (18): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeaderProps, ListFilter, Sheet() (+10 more)

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 238 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `utils.ts` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `BlockTableRow.tsx`, `useWarehouseStore`, `cn`, `root.tsx`, `convertToPersianDigits`, `store/types.ts`, `default-exports.ts`, `TableRow.tsx`, `warehouse/index.tsx`, `receipts/index.tsx`, `useInvoiceForm.ts`, `DataTable.tsx`, `routes/constants.ts`, `TablePagination.tsx`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `default-exports.ts`, `Toast Hook`, `StockCard.tsx`, `toast.tsx`, `SSR Entry Points`, `Table`, `Alert`, `FilterSheet.tsx`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.05341055341055341 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `useWarehouseStore`, `convertToPersianDigits`, `default-exports.ts`, `TableRow.tsx`, `warehouse/index.tsx`, `receipts/index.tsx`, `utils.ts`, `useInvoiceForm.ts`, `DataTable.tsx`, `routes/constants.ts`, `TablePagination.tsx`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `default-exports.ts`, `StockCard.tsx`, `toast.tsx`, `Table`, `Alert`, `FilterSheet.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.07171171171171171 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `BlockTableRow.tsx`, `useWarehouseStore`, `cn`, `root.tsx`, `convertToPersianDigits`, `TableRow.tsx`, `warehouse/index.tsx`, `receipts/index.tsx`, `utils.ts`, `useInvoiceForm.ts`, `DataTable.tsx`, `routes/constants.ts`, `TablePagination.tsx`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `default-exports.ts`, `StockCard.tsx`, `Design-sync Previews`, `toast.tsx`, `FilterSheet.tsx`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._