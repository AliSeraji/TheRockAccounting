# Graph Report - TheRockAccounting  (2026-11-08)

## Corpus Check
- 294 files · ~79,566 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1483 nodes · 5696 edges · 72 communities (55 shown, 17 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 115 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1d9f7342`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Card
- lucide-react
- CustomerForm.tsx
- dependencies
- package.json
- useBlockInvoiceStore.ts
- DateRangePicker.client.tsx
- cn
- routes/constants.ts
- next-themes@^0.4.6
- ItemDialog.tsx
- invoices/helpers.ts
- convertToPersianDigits
- Button
- customers/helpers.ts
- utils.ts
- convertToPersianDigits
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
- convertToEnDigits
- SalesReceiptPage.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- backend-readiness.md
- TablePagination.tsx
- CustomersList.tsx
- gen-types Script
- store/settings/types.ts
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- utils.ts
- Textarea
- Design-sync Conventions
- useWarehouseStore
- Invoice Saving Concepts
- Package Scripts
- select.tsx
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- FieldTypes
- @radix-ui/react-alert-dialog@^1.1.1
- @react-router/serve@^7.10.1
- @radix-ui/react-context-menu@^2.2.1
- @radix-ui/react-switch@^1.1.0
- warehouse/helpers.ts
- root.tsx
- toast.tsx
- Modern Stone Logo (Rock Fact brand mark)
- @radix-ui/react-collapsible@^1.1.0
- @radix-ui/react-radio-group@^1.2.0
- @radix-ui/react-slot

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

## Communities (72 total, 17 thin omitted)

### Community 0 - "Card"
Cohesion: 0.26
Nodes (24): ExplanationCard(), DetailCard(), ToggleRow(), BackupSection(), CompanySection(), ContactInfo, LogoHandler, InvoiceSection() (+16 more)

### Community 1 - "lucide-react"
Cohesion: 0.13
Nodes (36): AddRowFooter(), PersianDatePicker(), PersianDatePickerProps, SingleCalendar, previewTitle(), ReceiptOutputDialog(), switchTriggerClass, RequestProduct() (+28 more)

### Community 2 - "CustomerForm.tsx"
Cohesion: 0.15
Nodes (26): CustomerForm(), DigitsField, DigitsFieldProps, FieldShell(), SelectField, SelectFieldProps, TextField, TextFieldProps (+18 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (39): dependencies, add@^2.0.6, clsx@^2.1.1, @fontsource-variable/vazirmatn@^5.2.8, @hassanmojab/react-modern-calendar-datepicker@^3.1.7, lucide-react@^0.562.0, motion@^13.1.0, @radix-ui/react-aspect-ratio@^1.1.0 (+31 more)

### Community 4 - "package.json"
Cohesion: 0.07
Nodes (29): @radix-ui/react-accordion@^1.2.0, @radix-ui/react-avatar@^1.1.0, @radix-ui/react-checkbox@^1.1.1, @radix-ui/react-dropdown-menu@^2.1.1, @radix-ui/react-menubar@^1.1.1, @radix-ui/react-scroll-area@^1.1.0, @radix-ui/react-tabs@^1.1.0, @radix-ui/react-toggle@^1.1.0 (+21 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.12
Nodes (28): buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs (+20 more)

### Community 6 - "DateRangePicker.client.tsx"
Cohesion: 0.38
Nodes (6): DateRangePicker(), DateRangePickerProps, fromDay(), RangeCalendar, toDay(), @hassanmojab/react-modern-calendar-datepicker

### Community 7 - "cn"
Cohesion: 0.10
Nodes (36): FieldGroup(), FieldLegend(), FieldSet(), PopoverDescription(), PopoverHeader(), PopoverTitle(), SheetDescription(), SheetHeader() (+28 more)

### Community 8 - "routes/constants.ts"
Cohesion: 0.10
Nodes (25): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+17 more)

### Community 10 - "ItemDialog.tsx"
Cohesion: 0.24
Nodes (10): ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, FormFieldConfig, ItemDialogProps, ItemFormProps (+2 more)

### Community 11 - "invoices/helpers.ts"
Cohesion: 0.06
Nodes (78): filterTriggerActiveClass, filterTriggerClass, InvoiceActions(), invoiceColumns(), INVOICE_KIND_LABELS, InvoiceTypeBadge(), DATE_OPTIONS, DateFilterPopover() (+70 more)

### Community 12 - "convertToPersianDigits"
Cohesion: 0.07
Nodes (80): FloatingTable(), InvoiceTableCard(), MIN_TABLE_WIDTH, TotalTiles(), BlockTable(), invoiceTableItems, InvoiceBody(), InvoiceItemsCard() (+72 more)

### Community 13 - "Button"
Cohesion: 0.24
Nodes (16): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeader(), ListHeaderProps, ListFilter (+8 more)

### Community 14 - "customers/helpers.ts"
Cohesion: 0.19
Nodes (20): BuyerInput(), matches(), buyerInputClass, CustomerOption(), useActiveCustomers(), BuyerFields, BuyerMatch, digitsOnly() (+12 more)

### Community 15 - "utils.ts"
Cohesion: 0.06
Nodes (61): EMPTY, DELETE_COLUMN, FloatingColumn, ROW_NUMBER_COLUMN, DeleteCell(), FloatingRow(), NumberCell(), RowCountBadge() (+53 more)

### Community 16 - "convertToPersianDigits"
Cohesion: 0.19
Nodes (19): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), amount(), code(), hasValue(), text() (+11 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.12
Nodes (27): newId(), canBeDisabled(), createBlocksSlice(), emptyBlock, createEditorSlice(), selectOpenItemId(), createMiscSlice(), emptyMisc (+19 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.17
Nodes (19): IconTitle(), SegmentedControl(), SegmentedControlProps, SegmentedOption, SidebarMenuButton(), sidebarMenuButtonVariants, ToggleGroup(), ToggleGroupContext (+11 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.23
Nodes (15): LIST_NUMBER_COLUMN, DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableRow() (+7 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.07
Nodes (51): CustomersList(), ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist() (+43 more)

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
Cohesion: 0.06
Nodes (91): FloatingHeader(), deliveryTableItems, InvoiceTableItem, ReceiptProps, requestLowerTableItems, requestUpperTableItems, salesTableItems, AdditionalNote() (+83 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "ItemDetails.tsx"
Cohesion: 0.29
Nodes (11): FieldContent(), FieldTitle(), renderStock(), formatDateTime(), formatNumber(), formatPrice(), isolateNegative(), DetailItem (+3 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "convertToEnDigits"
Cohesion: 0.30
Nodes (12): DayValue, INVOICE_TYPE_OPTIONS, InvoiceInfo, PersianDatePicker, InvoiceSummary, idsOf(), NationalIdInput(), Label (+4 more)

### Community 34 - "SalesReceiptPage.tsx"
Cohesion: 0.23
Nodes (11): InfoRow(), Props, SalesInfoBox(), Divider(), IconTxtRow(), MetaRow(), Props, SalesReceiptHeader() (+3 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 38 - "backend-readiness.md"
Cohesion: 0.23
Nodes (4): can(), StockMovement, StockMovementReason, StockMovementRef

### Community 39 - "TablePagination.tsx"
Cohesion: 0.30
Nodes (12): FLOATING, TablePagination(), TablePaginationProps, SURFACE, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem() (+4 more)

### Community 40 - "CustomersList.tsx"
Cohesion: 0.23
Nodes (10): customerColumns, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, ROLE_FILTER_OPTIONS, AccountRole, CustomerState (+2 more)

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 42 - "store/settings/types.ts"
Cohesion: 0.12
Nodes (31): IdentityInput, useCompanyDataErrors(), useCompanyFieldError(), createBackupSection(), initialBackupSettings, createCompanySection(), initialCompany, createInvoiceSection() (+23 more)

### Community 43 - "SSR Entry Points"
Cohesion: 0.17
Nodes (8): streamTimeout, RFC-9110, isbot@^5.1.32, react-dom@^19.2.3, @react-router/node@^7.10.1, isbot, react-dom, @react-router/node

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 46 - "utils.ts"
Cohesion: 0.15
Nodes (10): CURRENT_JALALI_YEAR, Months, Years, baseName, dahgan, dahyek, numberToWords(), sadgan (+2 more)

### Community 47 - "Textarea"
Cohesion: 0.42
Nodes (7): BulletTextarea(), BulletTextareaProps, displayCaret(), fromDisplay(), toDisplay(), Textarea, TextareaProps

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "useWarehouseStore"
Cohesion: 0.16
Nodes (25): BlockWarehouseSection(), blockColumns, miscColumns, rawColumns, stoneColumns, blockFormFields, categoryColors, miscFormFields (+17 more)

### Community 50 - "Invoice Saving Concepts"
Cohesion: 0.29
Nodes (7): Shared Alert dialog (warehouse/Alert.tsx), Generic DataTable with DataTableColumn, Sales invoice locking (isLocked), InvoicesSection (list / detail / editor), saveInvoice (validate, number, finalize), useInvoiceSaver, useInvoicesStore (saved invoices)

### Community 51 - "Package Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, format:check, start, typecheck

### Community 52 - "select.tsx"
Cohesion: 0.32
Nodes (7): menuItemClass, menuSurfaceClass, SelectContent, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator

### Community 53 - "Fonts & Printing"
Cohesion: 0.33
Nodes (5): Samim body font and font-vazirmatn for print, cfg.extraFonts (Samim, Vazirmatn), Samim body font, font-vazirmatn for print, receiptPager / salesReceiptPager, Receipt printing (receiptOutputDialog, window.print)

### Community 60 - "FieldTypes"
Cohesion: 0.33
Nodes (6): FieldTypes, CALCULATED, NUMBER, PRICE, TEXT, FormFieldProps

### Community 69 - "warehouse/helpers.ts"
Cohesion: 0.21
Nodes (20): AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock(), deriveStone(), formatQuantity(), isNegativeVolume(), makeMovement() (+12 more)

### Community 71 - "root.tsx"
Cohesion: 0.20
Nodes (6): Header(), Toaster(), App(), HOME, react-router@^7.10.1, react-router

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
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Card`, `lucide-react`, `CustomerForm.tsx`, `dependencies`, `package.json`, `DateRangePicker.client.tsx`, `cn`, `routes/constants.ts`, `ItemDialog.tsx`, `invoices/helpers.ts`, `convertToPersianDigits`, `Button`, `customers/helpers.ts`, `utils.ts`, `convertToPersianDigits`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `Toast Hook`, `ItemDetails.tsx`, `convertToEnDigits`, `SalesReceiptPage.tsx`, `TablePagination.tsx`, `CustomersList.tsx`, `store/settings/types.ts`, `SSR Entry Points`, `Textarea`, `useWarehouseStore`, `select.tsx`, `root.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.13429951690821257 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `Card`, `lucide-react`, `CustomerForm.tsx`, `routes/constants.ts`, `ItemDialog.tsx`, `invoices/helpers.ts`, `convertToPersianDigits`, `Button`, `customers/helpers.ts`, `utils.ts`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `react`, `ItemDetails.tsx`, `convertToEnDigits`, `SalesReceiptPage.tsx`, `backend-readiness.md`, `TablePagination.tsx`, `CustomersList.tsx`, `store/settings/types.ts`, `utils.ts`, `Textarea`, `useWarehouseStore`, `select.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `Card`, `CustomerForm.tsx`, `dependencies`, `package.json`, `cn`, `routes/constants.ts`, `ItemDialog.tsx`, `invoices/helpers.ts`, `convertToPersianDigits`, `Button`, `utils.ts`, `convertToPersianDigits`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `react`, `Design-sync Previews`, `convertToEnDigits`, `SalesReceiptPage.tsx`, `TablePagination.tsx`, `CustomersList.tsx`, `useWarehouseStore`, `select.tsx`, `root.tsx`, `toast.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._