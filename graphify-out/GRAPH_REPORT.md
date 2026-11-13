# Graph Report - TheRockAccounting  (2026-11-13)

## Corpus Check
- 295 files · ~80,900 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1492 nodes · 5742 edges · 83 communities (59 shown, 24 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 116 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dfdadf09`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- receiptOutputDialog.tsx
- lucide-react
- TablePagination.tsx
- dependencies
- package.json
- useBlockInvoiceStore.ts
- default-exports.ts
- cn
- routes/constants.ts
- summary.ts
- root.tsx
- invoices/helpers.ts
- RowCard.tsx
- Button
- TableCell
- BlockTableRow.tsx
- ServiceCardBody.tsx
- react
- useWarehouse.ts
- segmented-control.tsx
- DataTable.tsx
- settings/common.tsx
- Alert
- shadcn components.json
- zustand
- TypeScript Config
- settings/index.tsx
- table.tsx
- Toast Hook
- StockCard.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- @radix-ui/react-accordion@^1.2.0
- convertToPersianDigits
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- backend-readiness.md
- routes/constants.ts
- toggle-group.tsx
- gen-types Script
- lucide-react
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- utils.ts
- store/types.ts
- Design-sync Conventions
- useWarehouseStore
- Invoice Saving Concepts
- Package Scripts
- details/columns.tsx
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- FieldTypes
- receipt_issue/Tablist/mobile.tsx
- block/BlockTable.tsx
- SuggestInput.tsx
- @hassanmojab/react-modern-calendar-datepicker
- next-themes@^0.4.6
- @radix-ui/react-context-menu@^2.2.1
- @radix-ui/react-switch@^1.1.0
- @radix-ui/react-dialog@^1.1.2
- warehouse/helpers.ts
- @radix-ui/react-dropdown-menu@^2.1.1
- @radix-ui/react-hover-card@^1.1.1
- @radix-ui/react-label
- toast.tsx
- Modern Stone Logo (Rock Fact brand mark)
- @radix-ui/react-progress@^1.1.0
- @radix-ui/react-separator@^1.1.0
- @radix-ui/react-toast
- react-aria-components
- @react-router/serve@^7.10.1
- shadcn@^3.8.4
- @radix-ui/react-scroll-area@^1.1.0
- @radix-ui/react-tabs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 231 edges
2. `react` - 185 edges
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

## Communities (83 total, 24 thin omitted)

### Community 0 - "receiptOutputDialog.tsx"
Cohesion: 0.16
Nodes (14): ReceiptTableProps, DeliveryTableBodyProps, previewTitle(), switchTriggerClass, Body(), Row(), TableProps, UpperTable() (+6 more)

### Community 1 - "lucide-react"
Cohesion: 0.19
Nodes (26): CustomerForm(), BankSection, StatusSection, PersianDatePicker(), PersianDatePickerProps, SingleCalendar, ReceiptOutputDialog(), Button (+18 more)

### Community 2 - "TablePagination.tsx"
Cohesion: 0.31
Nodes (12): DataTableFooter(), FLOATING, TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem() (+4 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, add@^2.0.6, clsx@^2.1.1, lucide-react@^0.562.0, motion@^13.1.0, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-avatar@^1.1.0 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (23): @fontsource-variable/vazirmatn@^5.2.8, @radix-ui/react-menubar@^1.1.1, @radix-ui/react-navigation-menu@^1.2.0, @radix-ui/react-radio-group@^1.2.0, @radix-ui/react-select@^2.1.1, @radix-ui/react-slot@^1.1.0, @radix-ui/react-toggle-group@^1.1.0, samim-font@^4.0.5 (+15 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.07
Nodes (45): BuyerFields, buyerFromCustomer(), BuyerMatch, customerFromBuyer(), customerTimestamp(), digitsOnly(), findCustomerByNationalId(), findCustomerForBuyer() (+37 more)

### Community 6 - "default-exports.ts"
Cohesion: 0.17
Nodes (16): ReceiptProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestProduct(), Body(), Row(), LowerTable(), RequestReceiptHeader() (+8 more)

### Community 7 - "cn"
Cohesion: 0.09
Nodes (38): PlaceholderSection(), FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), PopoverDescription(), PopoverHeader(), PopoverTitle() (+30 more)

### Community 8 - "routes/constants.ts"
Cohesion: 0.15
Nodes (15): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+7 more)

### Community 9 - "summary.ts"
Cohesion: 0.15
Nodes (33): BLOCK_ROW_FIELDS, BlockRowField, BlockCardBody(), BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, STONE_MEASURE_UNIT, STONE_PRICE_LABEL (+25 more)

### Community 10 - "root.tsx"
Cohesion: 0.20
Nodes (5): Header(), Toaster(), App(), HOME, react-router

### Community 11 - "invoices/helpers.ts"
Cohesion: 0.05
Nodes (85): DataTable(), filterTriggerActiveClass, filterTriggerClass, InvoiceActions(), invoiceColumns(), INVOICE_KIND_LABELS, InvoiceTypeBadge(), DATE_OPTIONS (+77 more)

### Community 12 - "RowCard.tsx"
Cohesion: 0.21
Nodes (15): BlockTable(), BlockRowCards(), BODY_VARIANTS, EditingLabel(), RowCard(), RowCardProps, SummaryLine(), CARD_TRANSITION (+7 more)

### Community 13 - "Button"
Cohesion: 0.20
Nodes (18): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeaderProps, ListFilter, Sheet() (+10 more)

### Community 14 - "TableCell"
Cohesion: 0.21
Nodes (18): BlockDeliveryTable(), deliveryPages(), DeliveryReceipt(), ReceiptTable(), DeliveryTableFooter(), DeliveryTableFooterProps, BlockSalesTable(), SalesTableFooter() (+10 more)

### Community 15 - "BlockTableRow.tsx"
Cohesion: 0.25
Nodes (16): DeleteCell(), FloatingRow(), NumberCell(), CELL, CODE_INPUT, CREAM_BODY, FIELD_INPUT, RESULT_INPUT (+8 more)

### Community 16 - "ServiceCardBody.tsx"
Cohesion: 0.21
Nodes (14): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), SERVICE_PRICE_LABEL, TEXT_INPUT, CARD_FIELD_LABEL, CARD_INPUT (+6 more)

### Community 17 - "react"
Cohesion: 0.24
Nodes (15): ReceiptIssueTablist(), TabsList, TabsTrigger, ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor (+7 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.14
Nodes (26): newId(), canBeDisabled(), createBlocksSlice(), emptyBlock, createEditorSlice(), selectOpenItemId(), createMiscSlice(), emptyMisc (+18 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.23
Nodes (13): IconTitle(), SEGMENT_ON, SEGMENT_TRACK, SEGMENT_TRANSITION, SegmentedControlProps, SegmentedOption, SidebarMenuButton(), sidebarMenuButtonVariants (+5 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.26
Nodes (12): LIST_NUMBER_COLUMN, DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableRow(), DataTableRowProps, rowStateClass() (+4 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.11
Nodes (24): ACCENT, ACCENTS, ALERT, DANGER, IconComponent, ICONS_BY_NAME, SectionCard(), SectionCardProps (+16 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "zustand"
Cohesion: 0.10
Nodes (41): CompanyDataErrors, formatDataErrors(), useCompanyFieldError(), digitsOnly(), isValidBankAccount(), isValidCardNumber(), isValidEconomicCode(), isValidEmail() (+33 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "settings/index.tsx"
Cohesion: 0.19
Nodes (16): ReceiptIssueMobileTablist(), SettingsTopBar(), SettingsMobileTablist(), PageHeader(), useIsMobile(), Customers(), AnimatedSection, ReceiptIssue() (+8 more)

### Community 27 - "table.tsx"
Cohesion: 0.17
Nodes (23): FloatingHeader(), FloatingTable(), deliveryTableItems, RECEIPT_ROW_NUMBER, RECEIPT_ROW_NUMBER_CELL, ReceiptColumnLabel(), requestLowerTableItems, requestUpperTableItems (+15 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastActionElement, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "StockCard.tsx"
Cohesion: 0.15
Nodes (23): EMPTY, FieldContent(), FieldTitle(), FormFieldConfig, formatDateTime(), formatNumber(), formatPrice(), isolateNegative() (+15 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 34 - "convertToPersianDigits"
Cohesion: 0.16
Nodes (23): totalAmountStat(), amount(), InfoRow(), Props, SalesInfoBox(), Props, rial(), SalesNote() (+15 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "backend-readiness.md"
Cohesion: 0.24
Nodes (3): RowCountBadge(), Badge(), badgeVariants

### Community 39 - "routes/constants.ts"
Cohesion: 0.29
Nodes (10): CARGO, CUSTOMER_REGISTER, DOC_REQUEST, INFO, PRIVATE_INVOICE, PURCHASE_REG, RECEIPT_ISSUE, REPORTS (+2 more)

### Community 40 - "toggle-group.tsx"
Cohesion: 0.22
Nodes (10): ToggleField, Switch(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority@^0.7.1, radix-ui@^1.4.3 (+2 more)

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 42 - "lucide-react"
Cohesion: 0.06
Nodes (104): customerColumns, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, CustomersList(), ROLE_FILTER_OPTIONS, DigitsField (+96 more)

### Community 43 - "SSR Entry Points"
Cohesion: 0.18
Nodes (8): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, @react-router/node@^7.10.1, isbot, react-dom, @react-router/node

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 46 - "utils.ts"
Cohesion: 0.17
Nodes (17): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), ReceiptPageProps, Divider() (+9 more)

### Community 47 - "store/types.ts"
Cohesion: 0.35
Nodes (9): InvoiceTableItem, blockDeliveryTableItems, BlockDeliveryTableProps, blockSalesTableItems, BlockSalesTableProps, BlockInvoiceItem, BlockInvoiceTotals, InvoiceTotals (+1 more)

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "useWarehouseStore"
Cohesion: 0.16
Nodes (26): BlockWarehouseSection(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields, categoryColors (+18 more)

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "details/columns.tsx"
Cohesion: 0.17
Nodes (15): DELETE_COLUMN, FloatingColumn, ROW_NUMBER_COLUMN, CODE_CHIP, BLOCK_COLUMNS, blockTableItems, STONE_COLUMNS, SERVICE_COLUMNS (+7 more)

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 60 - "FieldTypes"
Cohesion: 0.33
Nodes (6): FieldTypes, CALCULATED, NUMBER, PRICE, TEXT, FormFieldProps

### Community 61 - "receipt_issue/Tablist/mobile.tsx"
Cohesion: 0.32
Nodes (8): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSectionProps, ReceiptSectionDescriptor, ReceiptSectionId, ReceiptIssueStore

### Community 62 - "block/BlockTable.tsx"
Cohesion: 0.22
Nodes (16): MIN_TABLE_WIDTH, TotalBar(), invoiceTableItems, RowCardTotals(), TotalStat, SavedServiceCards(), ServiceCardBody(), serviceOptions() (+8 more)

### Community 63 - "SuggestInput.tsx"
Cohesion: 0.13
Nodes (25): IdentityField(), IdentityFieldProps, IdentityPart, INPUT, ServiceTypeInput(), ServiceTypeInputProps, serviceOptions(), StoneCodeInput() (+17 more)

### Community 69 - "warehouse/helpers.ts"
Cohesion: 0.15
Nodes (26): AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock(), deriveStone(), formatQuantity(), isNegativeVolume(), makeMovement() (+18 more)

### Community 73 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants, ToastViewport

### Community 74 - "Modern Stone Logo (Rock Fact brand mark)"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 257 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `receiptOutputDialog.tsx`, `lucide-react`, `TablePagination.tsx`, `dependencies`, `package.json`, `default-exports.ts`, `cn`, `routes/constants.ts`, `summary.ts`, `root.tsx`, `invoices/helpers.ts`, `RowCard.tsx`, `Button`, `TableCell`, `BlockTableRow.tsx`, `ServiceCardBody.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `settings/index.tsx`, `table.tsx`, `Toast Hook`, `StockCard.tsx`, `convertToPersianDigits`, `backend-readiness.md`, `toggle-group.tsx`, `lucide-react`, `utils.ts`, `store/types.ts`, `useWarehouseStore`, `details/columns.tsx`, `receipt_issue/Tablist/mobile.tsx`, `block/BlockTable.tsx`, `SuggestInput.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.230) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `receiptOutputDialog.tsx`, `lucide-react`, `TablePagination.tsx`, `routes/constants.ts`, `summary.ts`, `invoices/helpers.ts`, `RowCard.tsx`, `Button`, `TableCell`, `BlockTableRow.tsx`, `ServiceCardBody.tsx`, `react`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `settings/index.tsx`, `table.tsx`, `StockCard.tsx`, `convertToPersianDigits`, `backend-readiness.md`, `toggle-group.tsx`, `lucide-react`, `utils.ts`, `receipt_issue/Tablist/mobile.tsx`, `block/BlockTable.tsx`, `SuggestInput.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Why does `convertToPersianDigits()` connect `convertToPersianDigits` to `receiptOutputDialog.tsx`, `lucide-react`, `TablePagination.tsx`, `useBlockInvoiceStore.ts`, `default-exports.ts`, `routes/constants.ts`, `summary.ts`, `invoices/helpers.ts`, `RowCard.tsx`, `Button`, `TableCell`, `BlockTableRow.tsx`, `ServiceCardBody.tsx`, `DataTable.tsx`, `table.tsx`, `StockCard.tsx`, `backend-readiness.md`, `lucide-react`, `utils.ts`, `store/types.ts`, `useWarehouseStore`, `details/columns.tsx`, `block/BlockTable.tsx`, `SuggestInput.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._