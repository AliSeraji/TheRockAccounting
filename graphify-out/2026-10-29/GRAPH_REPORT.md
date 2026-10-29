# Graph Report - TheRockAccounting  (2026-10-29)

## Corpus Check
- 241 files · ~64,673 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1294 nodes · 4750 edges · 71 communities (47 shown, 24 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fc37a742`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Input
- ItemDialog.tsx
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
- TableRow.tsx
- tooltip.tsx
- useSettingsStore
- receipts/index.tsx
- TableRow.tsx
- DataTable.tsx
- useWarehouse.ts
- react
- InvoiceDataType
- routes/constants.ts
- TabsList
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
- StockCard.tsx
- TableRow
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- @fontsource-variable/vazirmatn@^5.2.8
- Sheet Primitives
- toast.tsx
- gen-types Script
- @hassanmojab/react-modern-calendar-datepicker
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- motion
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
- @radix-ui/react-dialog@^1.1.2
- @radix-ui/react-dropdown-menu@^2.1.1
- @radix-ui/react-navigation-menu@^1.2.0
- @radix-ui/react-radio-group@^1.2.0
- @radix-ui/react-slider@^1.2.0
- @radix-ui/react-slot
- @radix-ui/react-switch@^1.1.0
- @radix-ui/react-tooltip@^1.1.4
- react-aria-components
- shadcn@^3.8.4

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

## Communities (71 total, 24 thin omitted)

### Community 0 - "Input"
Cohesion: 0.10
Nodes (57): CustomersList(), ROLE_FILTER_OPTIONS, ListHeader(), BuyerInput(), matches(), buyerInputClass, CustomerOption(), useActiveCustomers() (+49 more)

### Community 1 - "ItemDialog.tsx"
Cohesion: 0.28
Nodes (14): FormFieldConfig, stockUnit(), DialogItem, ItemDialogProps, ItemForm(), ItemFormProps, amountClass(), describe() (+6 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.07
Nodes (64): EMPTY, InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), amount(), blockItemColumns(), hasValue() (+56 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.562.0, radix-ui@^1.4.3, @radix-ui/react-accordion@^1.2.0, @radix-ui/react-avatar@^1.1.0, @radix-ui/react-popover@^1.1.1 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (25): add@^2.0.6, next-themes@^0.4.6, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-hover-card@^1.1.1, @radix-ui/react-label@^2.1.0, @radix-ui/react-menubar@^1.1.1, @radix-ui/react-separator@^1.1.0, @radix-ui/react-toggle-group@^1.1.0 (+17 more)

### Community 5 - "TableRow"
Cohesion: 0.14
Nodes (33): BlockTable(), Footer(), blockTableItems, deliveryTableItems, InvoiceTableItem, invoiceTableItems, requestLowerTableItems, requestUpperTableItems (+25 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.28
Nodes (17): BlockWarehouseSection(), ItemDialog(), ItemsCard(), ListItem, MiscWarehouseSection(), RawWarehouseSection(), StoneItemDialog(), StoneWarehouseSection() (+9 more)

### Community 7 - "Field & Sidebar Primitives"
Cohesion: 0.10
Nodes (35): CardFooter, FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator() (+27 more)

### Community 8 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 9 - "useBlockInvoiceStore.ts"
Cohesion: 0.10
Nodes (32): ReceiptPageProps, SalesReceiptPageProps, buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService() (+24 more)

### Community 10 - "default-exports.ts"
Cohesion: 0.18
Nodes (14): ReceiptProps, CustomerInfoBox(), CustomerInfoBoxProps, Body(), Row(), LowerTable(), RequestReceiptHeader(), RequestReceiptPage() (+6 more)

### Community 11 - "store/types.ts"
Cohesion: 0.20
Nodes (15): BLOCK_DETAILS, BlockRow, normalize(), BLOCK_ROW_FIELDS, BlockRowField, blockDeliveryTableItems, BlockDeliveryTableProps, blockSalesTableItems (+7 more)

### Community 12 - "TableRow.tsx"
Cohesion: 0.20
Nodes (13): normalize(), PersianNumericInput(), PersianNumericInputProps, toPersianDisplay(), ServiceRow, ServiceTypeInput(), ServiceTypeInputProps, SERVICE_OPTIONS (+5 more)

### Community 13 - "tooltip.tsx"
Cohesion: 0.24
Nodes (7): SidebarMenuButton(), sidebarMenuButtonVariants, Switch(), Tooltip(), TooltipContent(), TooltipTrigger(), radix-ui

### Community 14 - "useSettingsStore"
Cohesion: 0.05
Nodes (75): ACCENT, ACCENTS, ALERT, DANGER, IconComponent, ICONS_BY_NAME, SectionCard(), SectionCardProps (+67 more)

### Community 15 - "receipts/index.tsx"
Cohesion: 0.22
Nodes (16): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+8 more)

### Community 16 - "TableRow.tsx"
Cohesion: 0.20
Nodes (14): StoneCodeInput(), StoneCodeInputProps, StoneTypeInput(), StoneTypeInputProps, SuggestInput(), SuggestInputProps, INVOICE_ROW_FIELDS, InvoiceRowField (+6 more)

### Community 17 - "DataTable.tsx"
Cohesion: 0.16
Nodes (23): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter(), DataTableHeader(), DataTableRowProps (+15 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.11
Nodes (35): newId(), makeMovement(), normalizeCode(), openingMovements(), withStoneQuantity(), createBlocksSlice(), emptyBlock, createEditorSlice() (+27 more)

### Community 19 - "react"
Cohesion: 0.21
Nodes (14): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+6 more)

### Community 20 - "InvoiceDataType"
Cohesion: 0.22
Nodes (10): ReceiptTableProps, DeliveryTableBodyProps, TableProps, SalesTableProps, SalesTableBody(), SalesTableRowProps, Props, ReceiptKind (+2 more)

### Community 21 - "routes/constants.ts"
Cohesion: 0.06
Nodes (37): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif (+29 more)

### Community 22 - "TabsList"
Cohesion: 0.26
Nodes (11): TabsContent, TabsList, TabsTrigger, ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor (+3 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.06
Nodes (79): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, PROVINCE_NAMES, PROVINCES, roleColors, SALE_RATE_OPTIONS (+71 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "warehouse/helpers.ts"
Cohesion: 0.25
Nodes (12): TransferDialogProps, AREA_INPUTS, calcBlockVolume(), calcStoneArea(), deriveBlock(), deriveStone(), isNegativeVolume(), TRANSFER_TARGET (+4 more)

### Community 27 - "convertToPersianDigits"
Cohesion: 0.12
Nodes (28): DataTableRow(), InfoRow(), Props, SalesInfoBox(), Props, rial(), SalesNote(), TotalRow() (+20 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastActionElement, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "warehouse/columns.tsx"
Cohesion: 0.19
Nodes (14): FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, formatNumber() (+6 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "StockCard.tsx"
Cohesion: 0.14
Nodes (13): blockFormFields, categoryColors, FieldTypes, CALCULATED, NUMBER, PRICE, TEXT, miscFormFields (+5 more)

### Community 34 - "TableRow"
Cohesion: 0.18
Nodes (19): BlockDeliveryTable(), deliveryPages(), DeliveryReceipt(), ReceiptTable(), DeliveryTableBody(), DeliveryTableFooter(), DeliveryTableFooterProps, BlockSalesTable() (+11 more)

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

- **Why does `react` connect `react` to `Input`, `ItemDialog.tsx`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `TableRow`, `useWarehouseStore`, `Field & Sidebar Primitives`, `Alert`, `default-exports.ts`, `store/types.ts`, `TableRow.tsx`, `tooltip.tsx`, `useSettingsStore`, `receipts/index.tsx`, `TableRow.tsx`, `DataTable.tsx`, `InvoiceDataType`, `routes/constants.ts`, `TabsList`, `CustomerForm.tsx`, `warehouse/helpers.ts`, `convertToPersianDigits`, `Toast Hook`, `warehouse/columns.tsx`, `TableRow`, `Sheet Primitives`, `toast.tsx`, `SSR Entry Points`?**
  _High betweenness centrality (0.214) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Input` be split into smaller, more focused modules?**
  _Cohesion score 0.10041039671682626 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Field & Sidebar Primitives` to `Input`, `ItemDialog.tsx`, `Saved Invoices List & Detail`, `TableRow`, `Alert`, `TableRow.tsx`, `tooltip.tsx`, `useSettingsStore`, `receipts/index.tsx`, `TableRow.tsx`, `DataTable.tsx`, `react`, `routes/constants.ts`, `TabsList`, `CustomerForm.tsx`, `convertToPersianDigits`, `warehouse/columns.tsx`, `TableRow`, `Sheet Primitives`, `toast.tsx`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.07310126582278481 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `CustomerForm.tsx` to `Input`, `ItemDialog.tsx`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `TableRow`, `useWarehouseStore`, `Field & Sidebar Primitives`, `store/types.ts`, `TableRow.tsx`, `useSettingsStore`, `receipts/index.tsx`, `TableRow.tsx`, `DataTable.tsx`, `react`, `routes/constants.ts`, `TabsList`, `warehouse/helpers.ts`, `convertToPersianDigits`, `Design-sync Previews`, `Sheet Primitives`, `toast.tsx`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._