# Graph Report - TheRockAccounting  (2026-10-29)

## Corpus Check
- 242 files · ~65,940 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1295 nodes · 4751 edges · 69 communities (45 shown, 24 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `97e0692e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Input
- Button
- Saved Invoices List & Detail
- dependencies
- package.json
- TableRow
- useWarehouseStore
- Field & Sidebar Primitives
- Alert
- useBlockInvoiceStore.ts
- default-exports.ts
- store/types.ts
- services/ServicesTable.tsx
- tooltip.tsx
- settings/common.tsx
- BlockTableRow.tsx
- TableRow.tsx
- DataTable.tsx
- useWarehouse.ts
- TableRow.tsx
- formatRialAmount
- routes/constants.ts
- @radix-ui/react-accordion@^1.2.0
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- warehouse/helpers.ts
- convertToPersianDigits
- Toast Hook
- warehouse/columns.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- @radix-ui/react-alert-dialog@^1.1.1
- delivery/index.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- @radix-ui/react-avatar@^1.1.0
- Sheet Primitives
- toast.tsx
- gen-types Script
- @hassanmojab/react-modern-calendar-datepicker
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @radix-ui/react-menubar@^1.1.1
- @radix-ui/react-aspect-ratio@^1.1.0
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
- @radix-ui/react-context-menu@^2.2.1
- @radix-ui/react-popover@^1.1.1
- @radix-ui/react-select
- @radix-ui/react-separator@^1.1.0
- @radix-ui/react-toast
- @radix-ui/react-slider@^1.2.0
- @radix-ui/react-toggle-group@^1.1.0
- samim-font@^4.0.5
- tailwindcss-animate@^1.0.7

## God Nodes (most connected - your core abstractions)
1. `cn()` - 195 edges
2. `react` - 152 edges
3. `convertToPersianDigits()` - 131 edges
4. `lucide-react` - 64 edges
5. `Button` - 57 edges
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

## Communities (69 total, 24 thin omitted)

### Community 0 - "Input"
Cohesion: 0.08
Nodes (78): CustomersList(), ROLE_FILTER_OPTIONS, ListHeader(), ExplanationCard(), DayValue, InvoiceInfo, PersianDatePicker, InvoiceItemsCard() (+70 more)

### Community 1 - "Button"
Cohesion: 0.15
Nodes (27): previewTitle(), ReceiptOutputDialog(), switchTriggerClass, RequestProduct(), SalesInvoice(), Button, ButtonProps, buttonVariants (+19 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.06
Nodes (70): customerColumns, roleColors, EMPTY, InvoiceBody(), InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge() (+62 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (34): dependencies, class-variance-authority@^0.7.1, lucide-react@^0.562.0, motion@^13.1.0, next-themes@^0.4.6, radix-ui@^1.4.3, @radix-ui/react-dropdown-menu@^2.1.1, @radix-ui/react-hover-card@^1.1.1 (+26 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (23): add@^2.0.6, clsx@^2.1.1, @fontsource-variable/vazirmatn@^5.2.8, @radix-ui/react-dialog@^1.1.2, @radix-ui/react-navigation-menu@^1.2.0, @radix-ui/react-tabs@^1.1.0, @radix-ui/react-toggle@^1.1.0, @radix-ui/react-tooltip@^1.1.4 (+15 more)

### Community 5 - "TableRow"
Cohesion: 0.17
Nodes (31): deliveryTableItems, InvoiceTableItem, invoiceTableItems, requestLowerTableItems, requestUpperTableItems, salesTableItems, InvoiceTableHeaderProps, DetailsTable() (+23 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.42
Nodes (11): BlockWarehouseSection(), ItemDialog(), ItemsCard(), ListItem, MiscWarehouseSection(), RawWarehouseSection(), StoneItemDialog(), StoneWarehouseSection() (+3 more)

### Community 7 - "Field & Sidebar Primitives"
Cohesion: 0.10
Nodes (35): CardFooter, FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator() (+27 more)

### Community 8 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 9 - "useBlockInvoiceStore.ts"
Cohesion: 0.11
Nodes (29): buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs (+21 more)

### Community 10 - "default-exports.ts"
Cohesion: 0.17
Nodes (17): ReceiptProps, ReceiptTableProps, DeliveryTableBodyProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestReceiptHeader(), RequestReceiptPage(), RequestReceiptPageProps (+9 more)

### Community 11 - "store/types.ts"
Cohesion: 0.20
Nodes (15): BlockDeliveryTableProps, Body(), Row(), LowerTable(), BlockSalesTableProps, SalesServicesTableProps, printableServices(), requestReceiptPager() (+7 more)

### Community 12 - "services/ServicesTable.tsx"
Cohesion: 0.25
Nodes (9): servicesTableItems, ServiceRow, Footer(), ServicesTable(), ServiceTypeInput(), ServiceTypeInputProps, SERVICE_OPTIONS, SERVICE_ROW_FIELDS (+1 more)

### Community 13 - "tooltip.tsx"
Cohesion: 0.32
Nodes (6): SidebarMenuButton(), sidebarMenuButtonVariants, Tooltip(), TooltipContent(), TooltipTrigger(), radix-ui

### Community 14 - "settings/common.tsx"
Cohesion: 0.06
Nodes (64): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+56 more)

### Community 15 - "BlockTableRow.tsx"
Cohesion: 0.24
Nodes (11): BlockTable(), Footer(), BLOCK_DETAILS, BlockRow, normalize(), blockTableItems, BLOCK_ROW_FIELDS, BlockRowField (+3 more)

### Community 16 - "TableRow.tsx"
Cohesion: 0.25
Nodes (12): StoneCodeInput(), StoneCodeInputProps, StoneTypeInput(), StoneTypeInputProps, SuggestInput(), SuggestInputProps, StoneSuggestion, Popover() (+4 more)

### Community 17 - "DataTable.tsx"
Cohesion: 0.16
Nodes (24): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableHeader(), DataTableRow() (+16 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.14
Nodes (25): newId(), canBeDisabled(), openingMovements(), createBlocksSlice(), emptyBlock, createEditorSlice(), selectOpenItemId(), createMiscSlice() (+17 more)

### Community 19 - "TableRow.tsx"
Cohesion: 0.28
Nodes (10): Footer(), InvoiceTable(), normalize(), Row, INVOICE_ROW_FIELDS, InvoiceRowField, handleArrowNavigation(), StoneItem (+2 more)

### Community 20 - "formatRialAmount"
Cohesion: 0.28
Nodes (10): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), SalesTableFooter(), salesPages(), SalesTable(), SalesTableBody() (+2 more)

### Community 21 - "routes/constants.ts"
Cohesion: 0.06
Nodes (36): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif (+28 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.06
Nodes (79): ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, SALE_RATE_OPTIONS, CustomerForm(), DigitsField, DigitsFieldProps, FieldShell() (+71 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "warehouse/helpers.ts"
Cohesion: 0.15
Nodes (24): stoneFormFields, TransferDialogProps, AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock(), deriveStone(), formatQuantity() (+16 more)

### Community 27 - "convertToPersianDigits"
Cohesion: 0.08
Nodes (43): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), ReceiptPageProps, Divider() (+35 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastActionElement, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "warehouse/columns.tsx"
Cohesion: 0.09
Nodes (29): FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields (+21 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 34 - "delivery/index.tsx"
Cohesion: 0.36
Nodes (7): deliveryPages(), DeliveryReceipt(), ReceiptTable(), DeliveryTableBody(), DeliveryTableFooter(), DeliveryTableFooterProps, receiptPager()

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 39 - "Sheet Primitives"
Cohesion: 0.21
Nodes (18): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeaderProps, ListFilter, Sheet() (+10 more)

### Community 40 - "toast.tsx"
Cohesion: 0.25
Nodes (8): Toast, ToastAction, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants, ToastViewport

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

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 238 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `convertToPersianDigits` to `Input`, `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `TableRow`, `useWarehouseStore`, `Field & Sidebar Primitives`, `Alert`, `default-exports.ts`, `store/types.ts`, `services/ServicesTable.tsx`, `tooltip.tsx`, `settings/common.tsx`, `BlockTableRow.tsx`, `TableRow.tsx`, `DataTable.tsx`, `TableRow.tsx`, `formatRialAmount`, `routes/constants.ts`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `Toast Hook`, `warehouse/columns.tsx`, `delivery/index.tsx`, `Sheet Primitives`, `toast.tsx`, `SSR Entry Points`?**
  _High betweenness centrality (0.205) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Input` be split into smaller, more focused modules?**
  _Cohesion score 0.07871448532836516 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Field & Sidebar Primitives` to `Input`, `Button`, `Saved Invoices List & Detail`, `TableRow`, `Sheet Primitives`, `Alert`, `toast.tsx`, `services/ServicesTable.tsx`, `tooltip.tsx`, `settings/common.tsx`, `TableRow.tsx`, `DataTable.tsx`, `routes/constants.ts`, `CustomerForm.tsx`, `convertToPersianDigits`, `warehouse/columns.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.06486210418794688 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Input` to `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `useWarehouseStore`, `Field & Sidebar Primitives`, `services/ServicesTable.tsx`, `settings/common.tsx`, `BlockTableRow.tsx`, `TableRow.tsx`, `DataTable.tsx`, `TableRow.tsx`, `routes/constants.ts`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `convertToPersianDigits`, `Design-sync Previews`, `Sheet Primitives`, `toast.tsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._