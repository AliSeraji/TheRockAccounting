# Graph Report - TheRockAccounting  (2026-10-23)

## Corpus Check
- 233 files · ~61,205 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1251 nodes · 4466 edges · 60 communities (54 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 52 edges (avg confidence: 0.85)
- Token cost: 148,459 input · 0 output

## Community Hubs (Navigation)
- Invoice Form Cards
- Customers Feature
- Saved Invoices List & Detail
- Runtime Dependencies
- Package Manifest
- Delivery Receipt Tables
- Warehouse Store Slices
- Field & Sidebar Primitives
- Invoice Store & Totals
- Request Upper Table & Sales Pages
- Warehouse Columns & Form Fields
- Receipt Header & Customer Info
- Warehouse Page & Sections
- Invoice Item & Service Tables
- Receipt Issue Tabs
- Settings Store Slices
- Block Row Inputs
- Generic DataTable
- Delivery Receipt Pages
- Persian Formatting & Receipt Notes
- Settings Section Widgets
- Dashboard & Persian Calendar
- Receipt Output Dialog
- shadcn components.json
- Settings Tablist & Page Header
- TypeScript Config
- Alert Dialog Primitives
- Item Dialog & Stock Card
- Toast Hook
- Warehouse Helpers & Movements
- Dev Dependencies
- Design-sync Previews
- Tooling & Theme Docs
- Route Constants
- Stone Item & Transfer Dialogs
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- App Shell (root, Header)
- Table Pagination
- Sheet Primitives
- Request Lower Table
- gen-types Script
- Switch & Tooltip Primitives
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- Toast Primitives
- Brand Logo
- Design-sync Conventions
- Settings Sidebar State
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
1. `cn()` - 187 edges
2. `react` - 145 edges
3. `convertToPersianDigits()` - 122 edges
4. `lucide-react` - 60 edges
5. `Button` - 57 edges
6. `TableRow()` - 52 edges
7. `Input` - 41 edges
8. `TableCell()` - 40 edges
9. `useWarehouseStore` - 40 edges
10. `Card` - 36 edges

## Surprising Connections (you probably didn't know these)
- `Destructive button dark-text render warn` --semantically_similar_to--> `Undefined --destructive-foreground`  [INFERRED] [semantically similar]
  .design-sync/NOTES.md → CLAUDE.md
- `dir=rtl on each Persian container` --semantically_similar_to--> `Per-container dir=rtl`  [INFERRED] [semantically similar]
  .design-sync/conventions.md → CLAUDE.md
- `Samim body font and font-vazirmatn for print` --semantically_similar_to--> `Samim body font, font-vazirmatn for print`  [INFERRED] [semantically similar]
  .design-sync/conventions.md → CLAUDE.md
- `Prop-less page-level components` --conceptually_related_to--> `Sliced Zustand stores`  [INFERRED]
  .design-sync/conventions.md → CLAUDE.md
- `Theme token classes` --conceptually_related_to--> `Tailwind v4 CSS-only config (app/app.css)`  [INFERRED]
  .design-sync/conventions.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Invoice store selection via InvoiceStoreKey** — claude_invoicestorecontext, claude_useinvoiceform, claude_draft_editor_stores, claude_invoiceformslice, claude_invoicebody [EXTRACTED 1.00]
- **Append-only stock ledger (کاردکس)** — claude_stock_movements_ledger, claude_makemovement, claude_adjuststock, claude_stockcard [EXTRACTED 1.00]
- **design-sync bundle build inputs** — _design_sync_notes_synth_entry_mode, _design_sync_notes_default_exports_module, _design_sync_notes_gen_types_mjs, _design_sync_notes_cfg_cssentry, _design_sync_notes_cfg_extrafonts [EXTRACTED 1.00]
- **Rock Fact business domains depicted in logo (stone products, warehouse stock, invoicing, accounting)** — app_assets_modern_stone_logo_stone_slabs_motif, app_assets_modern_stone_logo_warehouse_motif, app_assets_modern_stone_logo_invoice_document_motif, app_assets_modern_stone_logo_calculator_motif [INFERRED 0.85]

## Communities (60 total, 6 thin omitted)

### Community 0 - "Invoice Form Cards"
Cohesion: 0.09
Nodes (66): CustomersList(), ExplanationCard(), InvoiceBody(), DayValue, InvoiceInfo, PersianDatePicker, InvoiceItemsCard(), InvoiceSummary (+58 more)

### Community 1 - "Customers Feature"
Cohesion: 0.07
Nodes (65): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, PROVINCE_NAMES, PROVINCES, roleColors, SALE_RATE_OPTIONS (+57 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.08
Nodes (57): EMPTY, InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), amount(), blockItemColumns(), hasValue() (+49 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.04
Nodes (52): dependencies, add, class-variance-authority, clsx, date-fns-jalali, @fontsource-variable/vazirmatn, @hassanmojab/react-modern-calendar-datepicker, isbot (+44 more)

### Community 4 - "Package Manifest"
Cohesion: 0.04
Nodes (50): name, private, publishConfig, types, type, add, @babel/core, babel-plugin-react-compiler (+42 more)

### Community 5 - "Delivery Receipt Tables"
Cohesion: 0.18
Nodes (29): deliveryTableItems, InvoiceTableItem, requestLowerTableItems, requestUpperTableItems, salesTableItems, DetailsTable(), BlockDeliveryTable(), blockDeliveryTableItems (+21 more)

### Community 6 - "Warehouse Store Slices"
Cohesion: 0.12
Nodes (29): newId(), canBeDisabled(), openingMovements(), createBlocksSlice(), emptyBlock, createEditorSlice(), selectOpenItemId(), createMiscSlice() (+21 more)

### Community 7 - "Field & Sidebar Primitives"
Cohesion: 0.10
Nodes (35): CardFooter, FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator() (+27 more)

### Community 8 - "Invoice Store & Totals"
Cohesion: 0.11
Nodes (30): computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs, selectFormData() (+22 more)

### Community 9 - "Request Upper Table & Sales Pages"
Cohesion: 0.14
Nodes (23): BlockDeliveryTableProps, ReceiptTableProps, DeliveryTableBodyProps, Body(), Header(), Row(), TableProps, UpperTable() (+15 more)

### Community 10 - "Warehouse Columns & Form Fields"
Cohesion: 0.10
Nodes (27): FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields (+19 more)

### Community 11 - "Receipt Header & Customer Info"
Cohesion: 0.15
Nodes (20): ReceiptProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestReceiptHeader(), RequestReceiptPage(), RequestReceiptPageProps, AdditionalNote(), InfoRow() (+12 more)

### Community 12 - "Warehouse Page & Sections"
Cohesion: 0.22
Nodes (21): BlockWarehouseSection(), ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, ItemDialog(), ItemsCard() (+13 more)

### Community 13 - "Invoice Item & Service Tables"
Cohesion: 0.15
Nodes (19): BlockTable(), Footer(), blockTableItems, invoiceTableItems, servicesTableItems, Footer(), ServicesTable(), Footer() (+11 more)

### Community 14 - "Receipt Issue Tabs"
Cohesion: 0.18
Nodes (17): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, InvoiceSection(), PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist() (+9 more)

### Community 15 - "Settings Store Slices"
Cohesion: 0.15
Nodes (20): createBackupSection(), initialBackupSettings, createCompanySection(), initialCompany, createInvoiceSection(), DEFAULT_INVOICE_NOTE, initialInvoice, createNumberingSection() (+12 more)

### Community 16 - "Block Row Inputs"
Cohesion: 0.15
Nodes (19): BLOCK_DETAILS, BlockRow, normalize(), BLOCK_ROW_FIELDS, BlockRowField, StoneCodeInput(), StoneCodeInputProps, StoneTypeInput() (+11 more)

### Community 17 - "Generic DataTable"
Cohesion: 0.22
Nodes (16): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableHeader(), DataTableRow() (+8 more)

### Community 18 - "Delivery Receipt Pages"
Cohesion: 0.15
Nodes (17): deliveryPages(), DeliveryReceipt(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), ReceiptPageProps (+9 more)

### Community 19 - "Persian Formatting & Receipt Notes"
Cohesion: 0.16
Nodes (16): AdditionalNote(), NoteList(), Props, rial(), SalesNote(), TotalRow(), baseName, dahgan (+8 more)

### Community 20 - "Settings Section Widgets"
Cohesion: 0.12
Nodes (19): ACCENTS, DANGER, IconComponent, SectionCard(), SectionCardProps, Segmented(), SegmentedOption, SegmentedProps (+11 more)

### Community 21 - "Dashboard & Persian Calendar"
Cohesion: 0.16
Nodes (14): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+6 more)

### Community 22 - "Receipt Output Dialog"
Cohesion: 0.20
Nodes (15): previewTitle(), ReceiptOutputDialog(), switchTriggerClass, RequestProduct(), SalesInvoice(), Button, ButtonProps, buttonVariants (+7 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "Settings Tablist & Page Header"
Cohesion: 0.22
Nodes (13): ACCENT, ALERT, ICONS_BY_NAME, SettingsTopBar(), SettingsMobileTablist(), PageHeader(), TabsList, TabsTrigger (+5 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "Alert Dialog Primitives"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 27 - "Item Dialog & Stock Card"
Cohesion: 0.20
Nodes (15): TabsContent, FormFieldConfig, MOVEMENT_REASONS, stockUnit(), DialogItem, ItemDialogProps, ItemFormProps, amountClass() (+7 more)

### Community 28 - "Toast Hook"
Cohesion: 0.16
Nodes (16): ToastActionElement, ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId() (+8 more)

### Community 29 - "Warehouse Helpers & Movements"
Cohesion: 0.24
Nodes (15): AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock(), deriveStone(), formatQuantity(), isNegativeVolume(), makeMovement() (+7 more)

### Community 30 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): devDependencies, @babel/core, babel-plugin-react-compiler, @babel/preset-typescript, @locator/babel-jsx, prettier, @react-router/dev, tailwindcss (+9 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "Route Constants"
Cohesion: 0.29
Nodes (10): CARGO, CUSTOMER_REGISTER, DOC_REQUEST, INFO, PRIVATE_INVOICE, PURCHASE_REG, RECEIPT_ISSUE, REPORTS (+2 more)

### Community 34 - "Stone Item & Transfer Dialogs"
Cohesion: 0.29
Nodes (11): DialogDescription(), DialogFooter(), stoneFormFields, ItemForm(), sectionTitle(), TransferDialog(), TransferDialogProps, normalizeCode() (+3 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 37 - "App Shell (root, Header)"
Cohesion: 0.23
Nodes (4): Header(), Toaster(), App(), HOME

### Community 38 - "Table Pagination"
Cohesion: 0.41
Nodes (10): TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink(), PaginationLinkProps (+2 more)

### Community 39 - "Sheet Primitives"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 40 - "Request Lower Table"
Cohesion: 0.33
Nodes (7): Body(), Header(), Row(), LowerTable(), SalesServicesTableProps, SalesReceiptPageData, ServiceItem

### Community 41 - "gen-types Script"
Cohesion: 0.20
Nodes (6): files, lines, out, root, specifier(), srcDir

### Community 42 - "Switch & Tooltip Primitives"
Cohesion: 0.24
Nodes (7): SidebarMenuButton(), sidebarMenuButtonVariants, Switch(), Tooltip(), TooltipContent(), TooltipTrigger(), radix-ui

### Community 43 - "SSR Entry Points"
Cohesion: 0.22
Nodes (6): streamTimeout, RFC-9110, isbot, react-dom, react-router, @react-router/node

### Community 44 - "Stock Ledger Concepts"
Cohesion: 0.25
Nodes (8): Rock Fact design system, adjustStock (adjustment with reason), makeMovement helper, Rock Fact (rock-fact) app, Sliced Zustand stores, Append-only stock movements (کاردکس), StockCard (کاردکس tab), Warehouse editor slice

### Community 45 - "Design-sync Pipeline"
Cohesion: 0.31
Nodes (5): .design-sync/default-exports.ts re-export module, /design-login upload authorization, design-sync pipeline, [EXPORT_COLLISION] synth-entry artifact, window.RockFact bundle global

### Community 46 - "Toast Primitives"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastClose, ToastDescription, ToastTitle, toastVariants, ToastViewport, @radix-ui/react-toast

### Community 47 - "Brand Logo"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

### Community 48 - "Design-sync Conventions"
Cohesion: 0.29
Nodes (7): Button variant and size props, Customer card example (Card + Table), dir=rtl on each Persian container, Destructive button dark-text render warn, Preview story format, Undefined --destructive-foreground, Per-container dir=rtl

### Community 49 - "Settings Sidebar State"
Cohesion: 0.33
Nodes (6): SETTINGS_SECTIONS, SettingsSectionDescriptor, createSidebarState(), initialSidebarState, SidebarActivity, SideBarState

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 341 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Generic DataTable` to `Invoice Form Cards`, `Customers Feature`, `Saved Invoices List & Detail`, `Package Manifest`, `Delivery Receipt Tables`, `Field & Sidebar Primitives`, `Invoice Store & Totals`, `Request Upper Table & Sales Pages`, `Warehouse Columns & Form Fields`, `Receipt Header & Customer Info`, `Warehouse Page & Sections`, `Invoice Item & Service Tables`, `Receipt Issue Tabs`, `Block Row Inputs`, `Delivery Receipt Pages`, `Persian Formatting & Receipt Notes`, `Settings Section Widgets`, `Dashboard & Persian Calendar`, `Receipt Output Dialog`, `Settings Tablist & Page Header`, `Alert Dialog Primitives`, `Item Dialog & Stock Card`, `Toast Hook`, `Stone Item & Transfer Dialogs`, `App Shell (root, Header)`, `Table Pagination`, `Sheet Primitives`, `Request Lower Table`, `Switch & Tooltip Primitives`, `SSR Entry Points`, `Toast Primitives`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **What connects `PRICE`, `NUMBER`, `TEXT` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Invoice Form Cards` be split into smaller, more focused modules?**
  _Cohesion score 0.09373737373737374 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Field & Sidebar Primitives` to `Invoice Form Cards`, `Customers Feature`, `Saved Invoices List & Detail`, `Delivery Receipt Tables`, `Warehouse Columns & Form Fields`, `Receipt Header & Customer Info`, `Warehouse Page & Sections`, `Receipt Issue Tabs`, `Block Row Inputs`, `Generic DataTable`, `Delivery Receipt Pages`, `Persian Formatting & Receipt Notes`, `Settings Section Widgets`, `Dashboard & Persian Calendar`, `Receipt Output Dialog`, `Settings Tablist & Page Header`, `Alert Dialog Primitives`, `Item Dialog & Stock Card`, `Stone Item & Transfer Dialogs`, `Table Pagination`, `Sheet Primitives`, `Switch & Tooltip Primitives`, `Toast Primitives`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `Customers Feature` be split into smaller, more focused modules?**
  _Cohesion score 0.06905671466353218 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Customers Feature` to `Invoice Form Cards`, `Saved Invoices List & Detail`, `Package Manifest`, `Field & Sidebar Primitives`, `Receipt Header & Customer Info`, `Warehouse Page & Sections`, `Invoice Item & Service Tables`, `Receipt Issue Tabs`, `Block Row Inputs`, `Delivery Receipt Pages`, `Persian Formatting & Receipt Notes`, `Settings Section Widgets`, `Dashboard & Persian Calendar`, `Receipt Output Dialog`, `Settings Tablist & Page Header`, `Item Dialog & Stock Card`, `Design-sync Previews`, `Route Constants`, `Stone Item & Transfer Dialogs`, `App Shell (root, Header)`, `Table Pagination`, `Sheet Primitives`, `Toast Primitives`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._