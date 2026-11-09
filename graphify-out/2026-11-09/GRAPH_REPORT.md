# Graph Report - TheRockAccounting  (2026-11-09)

## Corpus Check
- 295 files · ~80,378 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1487 nodes · 5707 edges · 88 communities (64 shown, 24 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 114 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6206e2cf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useInvoiceForm.ts
- lucide-react
- CustomerForm.tsx
- dependencies
- package.json
- useBlockInvoiceStore.ts
- DateFilter.tsx
- cn
- routes/constants.ts
- summary.ts
- WarehouseId
- InvoiceDetails.tsx
- RowCard.tsx
- Button
- customers/helpers.ts
- BlockTableRow.tsx
- ServiceCardBody.tsx
- @radix-ui/react-popover@^1.1.1
- useWarehouse.ts
- segmented-control.tsx
- DataTable.tsx
- settings/common.tsx
- Alert
- shadcn components.json
- validate.ts
- TypeScript Config
- @radix-ui/react-progress@^1.1.0
- react
- Toast Hook
- ItemDetails.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- InvoicesList.tsx
- convertToPersianDigits
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- backend-readiness.md
- TableCell
- customers/types.ts
- gen-types Script
- lucide-react
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- utils.ts
- Textarea
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
- default-exports.ts
- block/BlockTable.tsx
- StoneCardBody.tsx
- StoneItemDialog.tsx
- @radix-ui/react-context-menu@^2.2.1
- store/types.ts
- @radix-ui/react-switch@^1.1.0
- TableBody
- warehouse/helpers.ts
- invoice/Table.tsx
- toggle-group.tsx
- invoices/columns.tsx
- toast.tsx
- Modern Stone Logo (Rock Fact brand mark)
- @fontsource-variable/vazirmatn@^5.2.8
- @hassanmojab/react-modern-calendar-datepicker
- @radix-ui/react-avatar@^1.1.0
- @radix-ui/react-checkbox@^1.1.1
- @radix-ui/react-dialog@^1.1.2
- @radix-ui/react-navigation-menu@^1.2.0
- @radix-ui/react-scroll-area@^1.1.0
- @radix-ui/react-slider@^1.2.0
- @radix-ui/react-tabs
- @radix-ui/react-tooltip@^1.1.4
- react-aria-components
- table@^6.9.0
- tailwindcss-animate@^1.0.7

## God Nodes (most connected - your core abstractions)
1. `cn()` - 231 edges
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

### Community 0 - "useInvoiceForm.ts"
Cohesion: 0.15
Nodes (25): InvoiceBody(), InvoiceActions(), InvoiceEditor(), Saved, useInvoiceSaver(), BLOCK_DRAFT, BlockInvoiceSection(), InvoiceSection() (+17 more)

### Community 1 - "lucide-react"
Cohesion: 0.17
Nodes (26): PersianDatePicker(), PersianDatePickerProps, SingleCalendar, previewTitle(), ReceiptOutputDialog(), switchTriggerClass, RequestProduct(), Button (+18 more)

### Community 2 - "CustomerForm.tsx"
Cohesion: 0.20
Nodes (21): ACCOUNT_ROLE_OPTIONS, SALE_RATE_OPTIONS, CustomerForm(), DigitsField, TextField, ToggleField, BankSection, sectionGrid (+13 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, clsx@^2.1.1, lucide-react@^0.562.0, motion@^13.1.0, radix-ui@^1.4.3, @radix-ui/react-accordion@^1.2.0, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-collapsible@^1.1.0 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (23): add@^2.0.6, next-themes@^0.4.6, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-dropdown-menu@^2.1.1, @radix-ui/react-slot@^1.1.0, @radix-ui/react-toggle@^1.1.0, samim-font@^4.0.5, shadcn@^3.8.4 (+15 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.11
Nodes (29): computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs, selectFormData() (+21 more)

### Community 6 - "DateFilter.tsx"
Cohesion: 0.13
Nodes (16): filterTriggerActiveClass, filterTriggerClass, DATE_OPTIONS, DateFilterPopoverProps, DateRangePanelProps, DateRangePicker, TodayButtonProps, DateRangePicker() (+8 more)

### Community 7 - "cn"
Cohesion: 0.09
Nodes (37): FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), PopoverDescription(), PopoverHeader(), PopoverTitle(), SelectLabel (+29 more)

### Community 8 - "routes/constants.ts"
Cohesion: 0.10
Nodes (25): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+17 more)

### Community 9 - "summary.ts"
Cohesion: 0.21
Nodes (21): BLOCK_ROW_FIELDS, BlockRowField, BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, STONE_MEASURE_UNIT, STONE_PRICE_LABEL, STONE_SIZE_FIELDS (+13 more)

### Community 10 - "WarehouseId"
Cohesion: 0.50
Nodes (5): FormFieldConfig, ItemDialogProps, ItemFormProps, WarehouseGateProps, WarehouseId

### Community 11 - "InvoiceDetails.tsx"
Cohesion: 0.14
Nodes (27): Field(), InvoiceDetails(), InvoiceViewHeader(), InvoicesSection(), printableServices(), can(), Permission, newCustomerProblems() (+19 more)

### Community 12 - "RowCard.tsx"
Cohesion: 0.18
Nodes (21): NumberField(), PriceStrip(), BODY_VARIANTS, EditingLabel(), RowCard(), RowCardProps, SummaryLine(), CARD_TRANSITION (+13 more)

### Community 13 - "Button"
Cohesion: 0.21
Nodes (19): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeader(), ListHeaderProps, ListFilter (+11 more)

### Community 14 - "customers/helpers.ts"
Cohesion: 0.33
Nodes (10): BuyerFields, buyerFromCustomer(), BuyerMatch, customerFromBuyer(), customerTimestamp(), digitsOnly(), findCustomerByNationalId(), findCustomerForBuyer() (+2 more)

### Community 15 - "BlockTableRow.tsx"
Cohesion: 0.16
Nodes (27): DeleteCell(), FloatingRow(), NumberCell(), CELL, CODE_INPUT, CREAM_BODY, FIELD_INPUT, RESULT_INPUT (+19 more)

### Community 16 - "ServiceCardBody.tsx"
Cohesion: 0.20
Nodes (14): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), SERVICE_PRICE_LABEL, serviceOptions(), TEXT_INPUT, CARD_FIELD_LABEL (+6 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.13
Nodes (28): newId(), AREA_INPUTS, calcStoneArea(), canBeDisabled(), deriveStone(), openingMovements(), VOLUME_INPUTS, createBlocksSlice() (+20 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.23
Nodes (14): IconTitle(), SEGMENT_ON, SEGMENT_TRACK, SEGMENT_TRANSITION, SegmentedControl(), SegmentedControlProps, SegmentedOption, SidebarMenuButton() (+6 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.13
Nodes (28): customerColumns, roleColors, EMPTY, LIST_NUMBER_COLUMN, DataTable(), DataTableProps, DataTableCard(), DataTableCardProps (+20 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.07
Nodes (55): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+47 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "validate.ts"
Cohesion: 0.35
Nodes (15): CompanyDataErrors, formatDataErrors(), digitsOnly(), isValidBankAccount(), isValidCardNumber(), isValidEconomicCode(), isValidEmail(), isValidIban() (+7 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 27 - "react"
Cohesion: 0.19
Nodes (19): FloatingHeader(), deliveryTableItems, InvoiceTableItem, requestLowerTableItems, requestUpperTableItems, salesTableItems, DeliveryTableHeader(), DeliveryTableHeaderProps (+11 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "ItemDetails.tsx"
Cohesion: 0.16
Nodes (20): FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, formatDateTime() (+12 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "InvoicesList.tsx"
Cohesion: 0.18
Nodes (21): invoiceColumns(), DateFilterPopover(), DateRangePanel(), TodayButton(), dateRange(), inRange(), InvoicesList(), KIND_OPTIONS (+13 more)

### Community 34 - "convertToPersianDigits"
Cohesion: 0.14
Nodes (26): totalAmountStat(), PaymentSummary(), rial(), SummaryRow(), InfoRow(), Props, SalesInfoBox(), Props (+18 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "backend-readiness.md"
Cohesion: 0.19
Nodes (4): RowCountBadge(), code(), Badge(), badgeVariants

### Community 39 - "TableCell"
Cohesion: 0.20
Nodes (17): BlockDeliveryTable(), deliveryPages(), DeliveryReceipt(), ReceiptTable(), DeliveryTableFooter(), DeliveryTableFooterProps, BlockSalesTable(), SalesTableFooter() (+9 more)

### Community 40 - "customers/types.ts"
Cohesion: 0.25
Nodes (8): PERSON_TYPE_OPTIONS, AccountRole, CustomerState, PersonType, SaleRate, emptyCustomer, initialCustomers, initialState

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 42 - "lucide-react"
Cohesion: 0.06
Nodes (96): CustomersList(), ROLE_FILTER_OPTIONS, DigitsFieldProps, FieldShell(), SelectField, SelectFieldProps, TextFieldProps, InvoiceTableCard() (+88 more)

### Community 43 - "SSR Entry Points"
Cohesion: 0.15
Nodes (10): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, react-router@^7.10.1, @react-router/node@^7.10.1, isbot, react-dom (+2 more)

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 46 - "utils.ts"
Cohesion: 0.14
Nodes (20): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+12 more)

### Community 47 - "Textarea"
Cohesion: 0.42
Nodes (7): BulletTextarea(), BulletTextareaProps, displayCaret(), fromDisplay(), toDisplay(), Textarea, TextareaProps

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "useWarehouseStore"
Cohesion: 0.23
Nodes (19): BlockWarehouseSection(), ACCENT, IconComponent, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, ItemDialog(), ItemsCard(), ListItem (+11 more)

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "details/columns.tsx"
Cohesion: 0.16
Nodes (16): DELETE_COLUMN, FloatingColumn, ROW_NUMBER_COLUMN, CODE_CHIP, BLOCK_COLUMNS, blockTableItems, STONE_COLUMNS, SERVICE_COLUMNS (+8 more)

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 60 - "FieldTypes"
Cohesion: 0.33
Nodes (6): FieldTypes, CALCULATED, NUMBER, PRICE, TEXT, FormFieldProps

### Community 61 - "default-exports.ts"
Cohesion: 0.22
Nodes (12): ReceiptProps, CustomerInfoBox(), CustomerInfoBoxProps, Body(), Row(), LowerTable(), RequestReceiptHeader(), RequestReceiptPage() (+4 more)

### Community 62 - "block/BlockTable.tsx"
Cohesion: 0.29
Nodes (12): FloatingTable(), MIN_TABLE_WIDTH, TotalBar(), BlockTable(), BlockCardBody(), BlockRowCards(), TotalStat, blockTotalStats() (+4 more)

### Community 63 - "StoneCardBody.tsx"
Cohesion: 0.20
Nodes (14): IdentityFieldProps, IdentityPart, INPUT, CARD_TEXT_SIZE, StoneCodeInputProps, StoneTypeInputProps, INVOICE_ROW_FIELDS, InvoiceRowField (+6 more)

### Community 64 - "StoneItemDialog.tsx"
Cohesion: 0.15
Nodes (13): blockFormFields, categoryColors, miscFormFields, MOVEMENT_REASONS, rawFormFields, stoneFormFields, TransferDialogProps, TRANSFER_TARGET (+5 more)

### Community 66 - "store/types.ts"
Cohesion: 0.25
Nodes (12): blockDeliveryTableItems, BlockDeliveryTableProps, ReceiptPageProps, blockSalesTableItems, BlockSalesTableProps, SalesReceiptPageProps, BlockInvoiceData, BlockInvoiceItem (+4 more)

### Community 68 - "TableBody"
Cohesion: 0.20
Nodes (11): ReceiptTableProps, DeliveryTableBody(), DeliveryTableBodyProps, Body(), Row(), TableProps, SalesTableProps, SalesTableRowProps (+3 more)

### Community 69 - "warehouse/helpers.ts"
Cohesion: 0.22
Nodes (17): formatQuantity(), isNegativeVolume(), makeMovement(), parseQuantity(), withStoneQuantity(), createMovementsSlice(), heldBy(), perItem() (+9 more)

### Community 70 - "invoice/Table.tsx"
Cohesion: 0.36
Nodes (9): invoiceTableItems, InvoiceItemsCard(), StoneCardBody(), StoneRowCards(), stoneTotalStats(), InvoiceTable(), useAddInvoiceItem(), useInvoiceItemCount() (+1 more)

### Community 71 - "toggle-group.tsx"
Cohesion: 0.27
Nodes (8): Switch(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority@^0.7.1, class-variance-authority, radix-ui

### Community 72 - "invoices/columns.tsx"
Cohesion: 0.52
Nodes (4): INVOICE_KIND_LABELS, InvoiceTypeBadge(), INVOICE_TYPES, SavedInvoice

### Community 73 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastTitle, toastVariants, ToastViewport

### Community 74 - "Modern Stone Logo (Rock Fact brand mark)"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 256 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `useInvoiceForm.ts`, `lucide-react`, `CustomerForm.tsx`, `dependencies`, `package.json`, `DateFilter.tsx`, `cn`, `routes/constants.ts`, `summary.ts`, `InvoiceDetails.tsx`, `RowCard.tsx`, `Button`, `BlockTableRow.tsx`, `ServiceCardBody.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `Toast Hook`, `ItemDetails.tsx`, `InvoicesList.tsx`, `convertToPersianDigits`, `backend-readiness.md`, `TableCell`, `lucide-react`, `SSR Entry Points`, `utils.ts`, `Textarea`, `useWarehouseStore`, `details/columns.tsx`, `default-exports.ts`, `block/BlockTable.tsx`, `StoneCardBody.tsx`, `StoneItemDialog.tsx`, `store/types.ts`, `TableBody`, `invoice/Table.tsx`, `toggle-group.tsx`, `invoices/columns.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useInvoiceForm.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14516129032258066 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `CustomerForm.tsx`, `DateFilter.tsx`, `routes/constants.ts`, `InvoiceDetails.tsx`, `RowCard.tsx`, `Button`, `BlockTableRow.tsx`, `ServiceCardBody.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `react`, `ItemDetails.tsx`, `InvoicesList.tsx`, `convertToPersianDigits`, `backend-readiness.md`, `TableCell`, `lucide-react`, `utils.ts`, `Textarea`, `block/BlockTable.tsx`, `StoneCardBody.tsx`, `TableBody`, `toggle-group.tsx`, `invoices/columns.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `useInvoiceForm.ts`, `lucide-react`, `CustomerForm.tsx`, `dependencies`, `package.json`, `DateFilter.tsx`, `cn`, `routes/constants.ts`, `InvoiceDetails.tsx`, `RowCard.tsx`, `Button`, `BlockTableRow.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `react`, `Design-sync Previews`, `InvoicesList.tsx`, `convertToPersianDigits`, `utils.ts`, `useWarehouseStore`, `StoneItemDialog.tsx`, `invoices/columns.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._