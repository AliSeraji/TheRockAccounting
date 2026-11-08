# Graph Report - TheRockAccounting  (2026-11-08)

## Corpus Check
- 294 files · ~79,224 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1479 nodes · 5670 edges · 88 communities (64 shown, 24 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.9)
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
- TableCell
- cn
- routes/constants.ts
- utils.ts
- default-exports.ts
- InvoicesList.tsx
- block/BlockTable.tsx
- Button
- InvoiceDetails.tsx
- TableRow.tsx
- ServiceCardBody.tsx
- store/types.ts
- useWarehouse.ts
- segmented-control.tsx
- DataTable.tsx
- receipts/index.tsx
- Alert
- shadcn components.json
- customers/types.ts
- TypeScript Config
- summary.ts
- table.tsx
- Toast Hook
- warehouse/columns.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- invoices/types.ts
- SalesReceiptPage.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- details/columns.tsx
- backend-readiness.md
- TablePagination.tsx
- gen-types Script
- store/settings/types.ts
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @hassanmojab/react-modern-calendar-datepicker
- SavedRowCards.tsx
- Design-sync Conventions
- useWarehouseStore
- Invoice Saving Concepts
- Package Scripts
- settings/common.tsx
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- @radix-ui/react-checkbox@^1.1.1
- @radix-ui/react-dialog@^1.1.2
- @fontsource-variable/vazirmatn@^5.2.8
- useSettingsStore
- customers/helpers.ts
- @radix-ui/react-context-menu@^2.2.1
- @radix-ui/react-navigation-menu@^1.2.0
- @radix-ui/react-switch@^1.1.0
- RowCard.tsx
- parseQuantity
- react-aria-components
- root.tsx
- @radix-ui/react-slider@^1.2.0
- toast.tsx
- Modern Stone Logo (Rock Fact brand mark)
- BlockInvoiceSection.tsx
- StoneItemDialog.tsx
- button.tsx
- @radix-ui/react-tooltip@^1.1.4
- customers/index.tsx
- WarehouseId
- motion
- @radix-ui/react-aspect-ratio@^1.1.0
- @radix-ui/react-collapsible@^1.1.0
- @radix-ui/react-dropdown-menu@^2.1.1
- @radix-ui/react-radio-group@^1.2.0
- @radix-ui/react-slot
- shadcn@^3.8.4

## God Nodes (most connected - your core abstractions)
1. `cn()` - 229 edges
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

## Communities (88 total, 24 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.07
Nodes (84): DigitsField, DigitsFieldProps, FieldShell(), SelectField, SelectFieldProps, TextField, TextFieldProps, ContactSection (+76 more)

### Community 1 - "Button"
Cohesion: 0.20
Nodes (26): CustomerForm(), PersianDatePicker(), PersianDatePickerProps, SingleCalendar, Button, Dialog(), DialogContent(), DialogDescription() (+18 more)

### Community 2 - "invoices/helpers.ts"
Cohesion: 0.17
Nodes (26): InvoiceEditor(), Saved, useInvoiceSaver(), InvoicesSection(), newCustomerProblems(), BLOCK_INPUTS, BuyerResolution, canEditInvoice() (+18 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.562.0, radix-ui@^1.4.3, @radix-ui/react-accordion@^1.2.0, @radix-ui/react-avatar@^1.1.0, @radix-ui/react-popover@^1.1.1 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (25): add@^2.0.6, next-themes@^0.4.6, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-hover-card@^1.1.1, @radix-ui/react-label@^2.1.0, @radix-ui/react-menubar@^1.1.1, @radix-ui/react-separator@^1.1.0, @radix-ui/react-toggle-group@^1.1.0 (+17 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.09
Nodes (36): ReceiptPageProps, buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState (+28 more)

### Community 6 - "TableCell"
Cohesion: 0.29
Nodes (16): DeleteCell(), FloatingRow(), NumberCell(), CELL, CODE_INPUT, CREAM_BODY, FIELD_INPUT, RESULT_INPUT (+8 more)

### Community 7 - "cn"
Cohesion: 0.10
Nodes (36): FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), Separator(), SheetDescription(), SheetHeader(), Sidebar() (+28 more)

### Community 8 - "routes/constants.ts"
Cohesion: 0.10
Nodes (25): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+17 more)

### Community 9 - "utils.ts"
Cohesion: 0.21
Nodes (14): deliveryPages(), DeliveryReceipt(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider() (+6 more)

### Community 10 - "default-exports.ts"
Cohesion: 0.11
Nodes (27): ReceiptProps, requestLowerTableItems, requestUpperTableItems, CustomerInfoBox(), CustomerInfoBoxProps, Body(), Header(), Row() (+19 more)

### Community 11 - "InvoicesList.tsx"
Cohesion: 0.13
Nodes (30): DataTable(), filterTriggerActiveClass, filterTriggerClass, invoiceColumns(), DATE_OPTIONS, DateFilterPopover(), DateFilterPopoverProps, DateRangePanel() (+22 more)

### Community 12 - "block/BlockTable.tsx"
Cohesion: 0.17
Nodes (24): TotalTiles(), BlockTable(), blockTableItems, invoiceTableItems, BlockRowCards(), RowCardList(), RowCardTotals(), TotalStat (+16 more)

### Community 13 - "Button"
Cohesion: 0.21
Nodes (18): ROLE_FILTER_OPTIONS, clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeader(), ListHeaderProps (+10 more)

### Community 14 - "InvoiceDetails.tsx"
Cohesion: 0.17
Nodes (19): blockItemColumns, serviceColumns, stoneItemColumns, Field(), InvoiceDetails(), PaymentSummary(), rial(), SummaryRow() (+11 more)

### Community 15 - "TableRow.tsx"
Cohesion: 0.16
Nodes (21): IdentityField(), IdentityFieldProps, IdentityPart, INPUT, ServiceTypeInput(), ServiceTypeInputProps, serviceOptions(), StoneCodeInput() (+13 more)

### Community 16 - "ServiceCardBody.tsx"
Cohesion: 0.19
Nodes (15): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), SERVICE_PRICE_LABEL, serviceOptions(), TEXT_INPUT, CARD_FIELD_LABEL (+7 more)

### Community 17 - "store/types.ts"
Cohesion: 0.16
Nodes (17): BlockDeliveryTableProps, DeliveryTableBodyProps, TableProps, BlockSalesTableProps, salesPages(), SalesTableProps, SalesTableRowProps, Props (+9 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.12
Nodes (32): newId(), AREA_INPUTS, canBeDisabled(), openingMovements(), VOLUME_INPUTS, createBlocksSlice(), emptyBlock, createEditorSlice() (+24 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.21
Nodes (16): IconTitle(), SegmentedControl(), SegmentedControlProps, SegmentedOption, SidebarMenuButton(), sidebarMenuButtonVariants, ToggleGroup(), ToggleGroupContext (+8 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.26
Nodes (12): LIST_NUMBER_COLUMN, DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableRow(), DataTableRowProps, rowStateClass() (+4 more)

### Community 21 - "receipts/index.tsx"
Cohesion: 0.22
Nodes (16): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+8 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "customers/types.ts"
Cohesion: 0.12
Nodes (34): customerColumns, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, ToggleField, BankSection, sectionGrid (+26 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "summary.ts"
Cohesion: 0.41
Nodes (14): BlockCardBody(), NumberField(), PriceStrip(), SavedRowCards(), StoneCardBody(), blockSummary(), digits(), formatAmount() (+6 more)

### Community 27 - "table.tsx"
Cohesion: 0.18
Nodes (27): deliveryTableItems, InvoiceTableItem, salesTableItems, BlockDeliveryTable(), blockDeliveryTableItems, DeliveryTableHeader(), DeliveryTableHeaderProps, ReceiptTable() (+19 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastActionElement, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "warehouse/columns.tsx"
Cohesion: 0.09
Nodes (30): EMPTY, FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns (+22 more)

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
Nodes (11): INVOICE_KIND_LABELS, InvoiceTypeBadge(), InvoiceViewHeader(), INVOICE_TYPES, InvoiceFilters, InvoiceListView, InvoicesStore, SavedInvoice (+3 more)

### Community 34 - "SalesReceiptPage.tsx"
Cohesion: 0.10
Nodes (32): RowCountBadge(), amount(), code(), hasValue(), text(), AdditionalNote(), NoteList(), InfoRow() (+24 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "details/columns.tsx"
Cohesion: 0.25
Nodes (11): DELETE_COLUMN, FloatingColumn, ROW_NUMBER_COLUMN, FloatingHeader(), FloatingTable(), CODE_CHIP, MIN_TABLE_WIDTH, BLOCK_COLUMNS (+3 more)

### Community 39 - "backend-readiness.md"
Cohesion: 0.24
Nodes (3): can(), Permission, StockMovementRef

### Community 40 - "TablePagination.tsx"
Cohesion: 0.35
Nodes (11): DataTableFooter(), TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink() (+3 more)

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 42 - "store/settings/types.ts"
Cohesion: 0.13
Nodes (25): SettingsSectionDescriptor, createBackupSection(), initialBackupSettings, createCompanySection(), initialCompany, createInvoiceSection(), DEFAULT_INVOICE_NOTE, initialInvoice (+17 more)

### Community 43 - "SSR Entry Points"
Cohesion: 0.15
Nodes (10): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, react-router@^7.10.1, @react-router/node@^7.10.1, isbot, react-dom (+2 more)

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 47 - "SavedRowCards.tsx"
Cohesion: 0.18
Nodes (18): BLOCK_ROW_FIELDS, BlockRowField, BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, STONE_MEASURE_UNIT, STONE_PRICE_LABEL, STONE_SIZE_FIELDS (+10 more)

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "useWarehouseStore"
Cohesion: 0.24
Nodes (17): BlockWarehouseSection(), IconComponent, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, ItemsCard(), ListItem, MiscWarehouseSection(), RawWarehouseSection() (+9 more)

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "settings/common.tsx"
Cohesion: 0.11
Nodes (21): ACCENT, ACCENTS, ALERT, DANGER, IconComponent, SectionCard(), SectionCardProps, Segmented() (+13 more)

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 63 - "useSettingsStore"
Cohesion: 0.24
Nodes (15): ICONS_BY_NAME, SETTINGS_SECTIONS, SettingsTopBar(), SettingsMobileTablist(), TabsList, TabsTrigger, ACCENT, ICONS_BY_NAME (+7 more)

### Community 64 - "customers/helpers.ts"
Cohesion: 0.21
Nodes (14): BuyerFields, BuyerMatch, customerFromBuyer(), customerTimestamp(), digitsOnly(), findCustomerByNationalId(), findCustomerForBuyer(), idsOf() (+6 more)

### Community 68 - "RowCard.tsx"
Cohesion: 0.26
Nodes (10): BODY_VARIANTS, EditingLabel(), RowCard(), RowCardProps, SummaryLine(), CARD_TRANSITION, RowCardListProps, EASE (+2 more)

### Community 69 - "parseQuantity"
Cohesion: 0.36
Nodes (12): formatQuantity(), isNegativeVolume(), makeMovement(), parseQuantity(), withStoneQuantity(), createMovementsSlice(), heldBy(), perItem() (+4 more)

### Community 71 - "root.tsx"
Cohesion: 0.23
Nodes (4): Header(), Toaster(), App(), HOME

### Community 73 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants, ToastViewport

### Community 74 - "Modern Stone Logo (Rock Fact brand mark)"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

### Community 75 - "BlockInvoiceSection.tsx"
Cohesion: 0.36
Nodes (6): InvoiceActions(), BLOCK_DRAFT, BlockInvoiceSection(), InvoiceSection(), InvoiceStoreContext, resetInvoice()

### Community 76 - "StoneItemDialog.tsx"
Cohesion: 0.29
Nodes (7): stoneFormFields, TransferDialogProps, calcStoneArea(), deriveStone(), TRANSFER_TARGET, StoneStockItem, StoneWarehouseId

### Community 77 - "button.tsx"
Cohesion: 0.33
Nodes (5): AddRowFooter(), ButtonProps, buttonVariants, CardFooter, class-variance-authority

### Community 79 - "customers/index.tsx"
Cohesion: 0.70
Nodes (3): CustomersList(), PageHeader(), Customers()

### Community 80 - "WarehouseId"
Cohesion: 0.50
Nodes (5): FormFieldConfig, ItemDialogProps, ItemFormProps, WarehouseGateProps, WarehouseId

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 254 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `utils.ts` to `lucide-react`, `Button`, `invoices/helpers.ts`, `dependencies`, `package.json`, `useBlockInvoiceStore.ts`, `TableCell`, `cn`, `routes/constants.ts`, `default-exports.ts`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `InvoiceDetails.tsx`, `TableRow.tsx`, `ServiceCardBody.tsx`, `store/types.ts`, `segmented-control.tsx`, `DataTable.tsx`, `receipts/index.tsx`, `Alert`, `customers/types.ts`, `table.tsx`, `Toast Hook`, `warehouse/columns.tsx`, `invoices/types.ts`, `SalesReceiptPage.tsx`, `details/columns.tsx`, `TablePagination.tsx`, `SSR Entry Points`, `SavedRowCards.tsx`, `useWarehouseStore`, `settings/common.tsx`, `useSettingsStore`, `RowCard.tsx`, `root.tsx`, `toast.tsx`, `BlockInvoiceSection.tsx`, `StoneItemDialog.tsx`, `button.tsx`, `customers/index.tsx`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.06823120382442416 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `Button`, `TableCell`, `routes/constants.ts`, `utils.ts`, `default-exports.ts`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `InvoiceDetails.tsx`, `TableRow.tsx`, `ServiceCardBody.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `receipts/index.tsx`, `Alert`, `customers/types.ts`, `summary.ts`, `table.tsx`, `warehouse/columns.tsx`, `invoices/types.ts`, `SalesReceiptPage.tsx`, `details/columns.tsx`, `backend-readiness.md`, `TablePagination.tsx`, `settings/common.tsx`, `useSettingsStore`, `RowCard.tsx`, `toast.tsx`, `button.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Why does `convertToPersianDigits()` connect `SalesReceiptPage.tsx` to `lucide-react`, `Button`, `invoices/helpers.ts`, `TableCell`, `routes/constants.ts`, `utils.ts`, `default-exports.ts`, `InvoicesList.tsx`, `block/BlockTable.tsx`, `Button`, `InvoiceDetails.tsx`, `TableRow.tsx`, `ServiceCardBody.tsx`, `store/types.ts`, `DataTable.tsx`, `customers/types.ts`, `summary.ts`, `table.tsx`, `warehouse/columns.tsx`, `invoices/types.ts`, `details/columns.tsx`, `TablePagination.tsx`, `useWarehouseStore`, `RowCard.tsx`, `BlockInvoiceSection.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._