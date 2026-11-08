# Graph Report - TheRockAccounting  (2026-11-08)

## Corpus Check
- 294 files · ~79,119 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1481 nodes · 5658 edges · 77 communities (52 shown, 25 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0043ff17`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lucide-react
- Button
- invoices/helpers.ts
- dependencies
- package.json
- useBlockInvoiceStore.ts
- BlockTableRow.tsx
- cn
- routes/constants.ts
- utils.ts
- convertToPersianDigits
- InvoicesList.tsx
- block/BlockTable.tsx
- Button
- useInvoiceForm.ts
- TableRow.tsx
- RowCard.tsx
- store/types.ts
- useWarehouse.ts
- segmented-control.tsx
- DataTable.tsx
- settings/common.tsx
- Alert
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- summary.ts
- TableCell
- Toast Hook
- ServiceCardBody.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- invoices/types.ts
- SalesReceiptPage.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- InvoiceDetails.tsx
- TablePagination.tsx
- gen-types Script
- @radix-ui/react-popover@^1.1.1
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @hassanmojab/react-modern-calendar-datepicker
- invoices/helpers.ts
- Design-sync Conventions
- utils.ts
- Invoice Saving Concepts
- Package Scripts
- sales/ServicesTable.tsx
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- @radix-ui/react-checkbox@^1.1.1
- @radix-ui/react-dialog@^1.1.2
- @fontsource-variable/vazirmatn@^5.2.8
- DateRangePicker.client.tsx
- table.tsx
- @radix-ui/react-context-menu@^2.2.1
- @radix-ui/react-navigation-menu@^1.2.0
- @radix-ui/react-switch@^1.1.0
- @radix-ui/react-avatar@^1.1.0
- @radix-ui/react-scroll-area@^1.1.0
- react-aria-components
- table@^6.9.0
- @radix-ui/react-slider@^1.2.0
- tailwindcss-animate@^1.0.7
- @radix-ui/react-progress@^1.1.0
- @radix-ui/react-tabs
- @radix-ui/react-tooltip@^1.1.4

## God Nodes (most connected - your core abstractions)
1. `cn()` - 228 edges
2. `react` - 184 edges
3. `convertToPersianDigits()` - 147 edges
4. `lucide-react` - 62 edges
5. `Button` - 55 edges
6. `convertToEnDigits()` - 44 edges
7. `useWarehouseStore` - 41 edges
8. `Card` - 40 edges
9. `Input` - 39 edges
10. `TableCell()` - 38 edges

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

## Communities (77 total, 25 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.06
Nodes (94): DigitsFieldProps, FieldShell(), SelectFieldProps, TextFieldProps, InvoiceTableCard(), AddRowFooter(), ExplanationCard(), InvoiceBody() (+86 more)

### Community 1 - "Button"
Cohesion: 0.08
Nodes (62): CustomerForm(), DigitsField, SelectField, TextField, ToggleField, BankSection, sectionGrid, SectionProps (+54 more)

### Community 2 - "invoices/helpers.ts"
Cohesion: 0.29
Nodes (14): InvoiceEditor(), Saved, useInvoiceSaver(), InvoicesSection(), finalizeInvoice(), hasChanges(), invoiceProblems(), isSalesInvoice() (+6 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, clsx@^2.1.1, lucide-react@^0.562.0, motion@^13.1.0, radix-ui@^1.4.3, @radix-ui/react-accordion@^1.2.0, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-collapsible@^1.1.0 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (23): add@^2.0.6, next-themes@^0.4.6, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-dropdown-menu@^2.1.1, @radix-ui/react-slot@^1.1.0, @radix-ui/react-toggle@^1.1.0, samim-font@^4.0.5, shadcn@^3.8.4 (+15 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.13
Nodes (25): buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs (+17 more)

### Community 6 - "BlockTableRow.tsx"
Cohesion: 0.12
Nodes (27): DeleteCell(), FloatingRow(), NumberCell(), CELL, CODE_CHIP, CODE_INPUT, CREAM_BODY, FIELD_INPUT (+19 more)

### Community 7 - "cn"
Cohesion: 0.09
Nodes (39): FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator(), SheetDescription() (+31 more)

### Community 8 - "routes/constants.ts"
Cohesion: 0.06
Nodes (37): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif (+29 more)

### Community 9 - "utils.ts"
Cohesion: 0.21
Nodes (14): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+6 more)

### Community 10 - "convertToPersianDigits"
Cohesion: 0.17
Nodes (14): ReceiptProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestProduct(), RequestReceiptHeader(), RequestReceiptPage(), RequestReceiptPageProps, Body() (+6 more)

### Community 11 - "InvoicesList.tsx"
Cohesion: 0.12
Nodes (30): filterTriggerActiveClass, filterTriggerClass, invoiceColumns(), DATE_OPTIONS, DateFilterPopover(), DateFilterPopoverProps, DateRangePanel(), DateRangePanelProps (+22 more)

### Community 12 - "block/BlockTable.tsx"
Cohesion: 0.20
Nodes (20): FloatingTable(), MIN_TABLE_WIDTH, TotalTiles(), BlockTable(), invoiceTableItems, BlockCardBody(), BlockRowCards(), TotalStat (+12 more)

### Community 13 - "Button"
Cohesion: 0.25
Nodes (15): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeader(), ListHeaderProps, ListFilter (+7 more)

### Community 14 - "useInvoiceForm.ts"
Cohesion: 0.18
Nodes (16): InvoiceActions(), BLOCK_DRAFT, BlockInvoiceSection(), previewTitle(), switchTriggerClass, ReceiptKind, ReceiptPreview, ReceiptType (+8 more)

### Community 15 - "TableRow.tsx"
Cohesion: 0.15
Nodes (25): IdentityField(), IdentityFieldProps, IdentityPart, INPUT, StoneCodeInput(), StoneCodeInputProps, StoneTypeInput(), StoneTypeInputProps (+17 more)

### Community 16 - "RowCard.tsx"
Cohesion: 0.14
Nodes (20): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), BODY_VARIANTS, EditingLabel(), RowCard(), RowCardProps (+12 more)

### Community 17 - "store/types.ts"
Cohesion: 0.20
Nodes (15): InvoiceTableItem, requestLowerTableItems, requestUpperTableItems, blockDeliveryTableItems, BlockDeliveryTableProps, ReceiptPageProps, blockSalesTableItems, BlockSalesTableProps (+7 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.06
Nodes (85): BlockWarehouseSection(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, IconComponent, WAREHOUSE_SECTIONS (+77 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.18
Nodes (18): IconTitle(), SegmentedControl(), SegmentedControlProps, SegmentedOption, SidebarMenuButton(), sidebarMenuButtonVariants, ToggleGroup(), ToggleGroupContext (+10 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.20
Nodes (15): LIST_NUMBER_COLUMN, DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableRow() (+7 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.07
Nodes (52): CustomersList(), ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist() (+44 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.08
Nodes (54): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, ROLE_FILTER_OPTIONS, BuyerInput() (+46 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "summary.ts"
Cohesion: 0.30
Nodes (16): BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, SERVICE_PRICE_LABEL, STONE_MEASURE_UNIT, STONE_PRICE_LABEL, STONE_SIZE_FIELDS, blockSummary() (+8 more)

### Community 27 - "TableCell"
Cohesion: 0.19
Nodes (18): BlockDeliveryTable(), deliveryPages(), DeliveryReceipt(), ReceiptTable(), ReceiptTableProps, DeliveryTableBody(), DeliveryTableBodyProps, DeliveryTableFooter() (+10 more)

### Community 28 - "Toast Hook"
Cohesion: 0.11
Nodes (23): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+15 more)

### Community 29 - "ServiceCardBody.tsx"
Cohesion: 0.36
Nodes (12): NumberField(), PriceStrip(), RowCardList(), RowCardTotals(), SavedRowCards(), SavedServiceCards(), ServiceCardBody(), serviceOptions() (+4 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "invoices/types.ts"
Cohesion: 0.24
Nodes (11): INVOICE_KIND_LABELS, InvoiceTypeBadge(), InvoiceViewHeader(), InvoiceFilters, InvoiceListView, InvoicesStore, SavedInvoice, SaveResult (+3 more)

### Community 34 - "SalesReceiptPage.tsx"
Cohesion: 0.17
Nodes (22): PaymentSummary(), rial(), InfoRow(), Props, SalesInfoBox(), Props, rial(), SalesNote() (+14 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "InvoiceDetails.tsx"
Cohesion: 0.15
Nodes (18): DELETE_COLUMN, FloatingColumn, ROW_NUMBER_COLUMN, BLOCK_COLUMNS, blockTableItems, STONE_COLUMNS, SERVICE_COLUMNS, servicesTableItems (+10 more)

### Community 40 - "TablePagination.tsx"
Cohesion: 0.47
Nodes (9): TablePagination(), Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink(), PaginationLinkProps, PaginationNext() (+1 more)

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 43 - "SSR Entry Points"
Cohesion: 0.15
Nodes (10): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, react-router@^7.10.1, @react-router/node@^7.10.1, isbot, react-dom (+2 more)

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 47 - "invoices/helpers.ts"
Cohesion: 0.19
Nodes (13): can(), Permission, BLOCK_INPUTS, BuyerResolution, canEditInvoice(), INVOICE_TYPES, isBlank(), isFilledBlock() (+5 more)

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "utils.ts"
Cohesion: 0.20
Nodes (10): RowCountBadge(), Badge(), badgeVariants, baseName, dahgan, dahyek, numberToWords(), sadgan (+2 more)

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "sales/ServicesTable.tsx"
Cohesion: 0.26
Nodes (10): BlockSalesTable(), SalesInvoice(), salesPages(), salesServicesTableItems, SalesServicesTableProps, SalesTable(), printableServices(), SalesReceiptPageData (+2 more)

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 63 - "DateRangePicker.client.tsx"
Cohesion: 0.38
Nodes (6): DateRangePicker, DateRangePicker(), DateRangePickerProps, fromDay(), RangeCalendar, toDay()

### Community 64 - "table.tsx"
Cohesion: 0.19
Nodes (21): FloatingHeader(), deliveryTableItems, salesTableItems, DeliveryTableHeader(), DeliveryTableHeaderProps, Body(), Header(), Row() (+13 more)

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 254 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **25 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `utils.ts` to `lucide-react`, `Button`, `invoices/helpers.ts`, `dependencies`, `package.json`, `BlockTableRow.tsx`, `cn`, `routes/constants.ts`, `convertToPersianDigits`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `useInvoiceForm.ts`, `TableRow.tsx`, `RowCard.tsx`, `store/types.ts`, `useWarehouse.ts`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `CustomerForm.tsx`, `summary.ts`, `TableCell`, `Toast Hook`, `ServiceCardBody.tsx`, `invoices/types.ts`, `SalesReceiptPage.tsx`, `InvoiceDetails.tsx`, `TablePagination.tsx`, `SSR Entry Points`, `utils.ts`, `sales/ServicesTable.tsx`, `DateRangePicker.client.tsx`, `table.tsx`?**
  _High betweenness centrality (0.226) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.059922533606744134 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `Button`, `BlockTableRow.tsx`, `routes/constants.ts`, `utils.ts`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `useInvoiceForm.ts`, `TableRow.tsx`, `RowCard.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `CustomerForm.tsx`, `TableCell`, `Toast Hook`, `ServiceCardBody.tsx`, `invoices/types.ts`, `SalesReceiptPage.tsx`, `InvoiceDetails.tsx`, `TablePagination.tsx`, `utils.ts`, `table.tsx`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.07592407592407592 - nodes in this community are weakly interconnected._
- **Why does `convertToPersianDigits()` connect `SalesReceiptPage.tsx` to `lucide-react`, `Button`, `invoices/helpers.ts`, `BlockTableRow.tsx`, `routes/constants.ts`, `utils.ts`, `convertToPersianDigits`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `useInvoiceForm.ts`, `TableRow.tsx`, `RowCard.tsx`, `store/types.ts`, `useWarehouse.ts`, `DataTable.tsx`, `CustomerForm.tsx`, `summary.ts`, `TableCell`, `ServiceCardBody.tsx`, `invoices/types.ts`, `InvoiceDetails.tsx`, `TablePagination.tsx`, `invoices/helpers.ts`, `utils.ts`, `sales/ServicesTable.tsx`, `DateRangePicker.client.tsx`, `table.tsx`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._