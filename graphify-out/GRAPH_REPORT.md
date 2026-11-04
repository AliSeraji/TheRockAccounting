# Graph Report - TheRockAccounting  (2026-11-04)

## Corpus Check
- 276 files · ~75,582 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1401 nodes · 5364 edges · 64 communities (46 shown, 18 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `96dcd8c3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lucide-react
- Button
- Saved Invoices List & Detail
- dependencies
- package.json
- useBlockInvoiceStore.ts
- useWarehouseStore
- cn
- PersianCalendar.tsx
- utils.ts
- convertToPersianDigits
- table.tsx
- TableCell
- Button
- StockCard.tsx
- root.tsx
- BlockTableRow.tsx
- toast.tsx
- useWarehouse.ts
- Modern Stone Logo (Rock Fact brand mark)
- DataTable.tsx
- settings/common.tsx
- Alert
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- parseQuantity
- Table
- Toast Hook
- warehouse/columns.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- warehouse/Tablist/mobile.tsx
- sales/ReceiptHeader.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- @radix-ui/react-context-menu@^2.2.1
- add@^2.0.6
- @radix-ui/react-slot
- gen-types Script
- @radix-ui/react-popover@^1.1.1
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @radix-ui/react-progress@^1.1.0
- @radix-ui/react-toggle@^1.1.0
- Design-sync Conventions
- samim-font@^4.0.5
- Invoice Saving Concepts
- Package Scripts
- tailwindcss-animate@^1.0.7
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- @radix-ui/react-radio-group@^1.2.0
- @radix-ui/react-tooltip@^1.1.4
- store/types.ts
- @radix-ui/react-slider@^1.2.0

## God Nodes (most connected - your core abstractions)
1. `cn()` - 207 edges
2. `react` - 169 edges
3. `convertToPersianDigits()` - 148 edges
4. `lucide-react` - 63 edges
5. `Button` - 55 edges
6. `TableRow()` - 52 edges
7. `Input` - 43 edges
8. `useWarehouseStore` - 41 edges
9. `Card` - 40 edges
10. `TableCell()` - 40 edges

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

## Communities (64 total, 18 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.07
Nodes (85): CustomersList(), ROLE_FILTER_OPTIONS, DigitsFieldProps, FieldShell(), SelectFieldProps, TextFieldProps, ListHeader(), AddRowFooter() (+77 more)

### Community 1 - "Button"
Cohesion: 0.20
Nodes (22): PersianDatePicker(), PersianDatePickerProps, SingleCalendar, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+14 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.07
Nodes (49): invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), InvoiceEditor(), InvoicesList(), KIND_OPTIONS, matches(), normalize() (+41 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (40): dependencies, @hassanmojab/react-modern-calendar-datepicker@^3.1.7, lucide-react@^0.562.0, next-themes@^0.4.6, radix-ui@^1.4.3, @radix-ui/react-accordion@^1.2.0, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-checkbox@^1.1.1 (+32 more)

### Community 4 - "package.json"
Cohesion: 0.07
Nodes (29): clsx@^2.1.1, @fontsource-variable/vazirmatn@^5.2.8, motion@^13.1.0, @radix-ui/react-alert-dialog@^1.1.1, @radix-ui/react-avatar@^1.1.0, @radix-ui/react-dialog@^1.1.2, @radix-ui/react-label@^2.1.0, @radix-ui/react-navigation-menu@^1.2.0 (+21 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.11
Nodes (31): buyerFromCustomer(), computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs (+23 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.23
Nodes (18): BlockWarehouseSection(), ItemsCard(), ListItem, MiscWarehouseSection(), RawWarehouseSection(), StoneItemDialog(), StoneWarehouseSection(), WarehouseTablist() (+10 more)

### Community 7 - "cn"
Cohesion: 0.08
Nodes (42): PlaceholderSection(), FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator() (+34 more)

### Community 8 - "PersianCalendar.tsx"
Cohesion: 0.10
Nodes (25): dashboardItems, DashboardCard(), DashboardCardProps, PersianCalendar(), getHolidays(), hijriFormatter, HOLIDAY_OVERRIDES, isFriday() (+17 more)

### Community 9 - "utils.ts"
Cohesion: 0.11
Nodes (25): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+17 more)

### Community 10 - "convertToPersianDigits"
Cohesion: 0.19
Nodes (25): amount(), blockItemColumns(), hasValue(), rowNumber, serviceColumns(), stoneItemColumns(), text(), total() (+17 more)

### Community 11 - "table.tsx"
Cohesion: 0.29
Nodes (10): DetailsTable(), DeliveryTableFooter(), DeliveryTableFooterProps, Body(), Row(), SalesTableFooter(), SalesTableBody(), TableBody() (+2 more)

### Community 12 - "TableCell"
Cohesion: 0.16
Nodes (22): BlockTable(), Footer(), BlockRow, blockTableItems, invoiceTableItems, normalize(), PersianNumericInput(), PersianNumericInputProps (+14 more)

### Community 13 - "Button"
Cohesion: 0.18
Nodes (21): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeaderProps, ListFilter, Button (+13 more)

### Community 14 - "StockCard.tsx"
Cohesion: 0.17
Nodes (16): deliveryTableItems, requestLowerTableItems, requestUpperTableItems, DeliveryTableHeaderProps, Header(), Body(), Header(), Row() (+8 more)

### Community 15 - "root.tsx"
Cohesion: 0.22
Nodes (5): Header(), Toaster(), App(), react-router@^7.10.1, react-router

### Community 16 - "BlockTableRow.tsx"
Cohesion: 0.06
Nodes (86): BLOCK_ROW_FIELDS, BlockRowField, BlockCardBody(), BlockRowCards(), BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, SERVICE_PRICE_LABEL (+78 more)

### Community 17 - "toast.tsx"
Cohesion: 0.20
Nodes (10): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastTitle, toastVariants, ToastViewport (+2 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.09
Nodes (40): newId(), AREA_INPUTS, calcBlockVolume(), calcStoneArea(), canBeDisabled(), deriveBlock(), deriveStone(), makeMovement() (+32 more)

### Community 19 - "Modern Stone Logo (Rock Fact brand mark)"
Cohesion: 0.32
Nodes (8): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif

### Community 20 - "DataTable.tsx"
Cohesion: 0.14
Nodes (26): customerColumns, EMPTY, DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableFooter() (+18 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.06
Nodes (64): InvoiceActions(), ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, BLOCK_DRAFT, BlockInvoiceSection(), InvoiceSection() (+56 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.06
Nodes (73): ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, CustomerForm(), DigitsField, SelectField (+65 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "parseQuantity"
Cohesion: 0.44
Nodes (9): formatQuantity(), isNegativeVolume(), parseQuantity(), createMovementsSlice(), heldBy(), perItem(), sameStock(), stockOf() (+1 more)

### Community 27 - "Table"
Cohesion: 0.16
Nodes (19): InvoiceTableItem, salesTableItems, BlockSalesTable(), blockSalesTableItems, SalesInvoice(), salesPages(), InfoRow(), Props (+11 more)

### Community 28 - "Toast Hook"
Cohesion: 0.17
Nodes (15): ToastProps, Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners (+7 more)

### Community 29 - "warehouse/columns.tsx"
Cohesion: 0.09
Nodes (28): FieldContent(), FieldTitle(), blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields (+20 more)

### Community 30 - "devDependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @babel/core@^7.22.0, babel-plugin-react-compiler@^1.0.0, @babel/preset-typescript@^7.22.0, @locator/babel-jsx@^0.5.1, prettier@^3.7.4, @react-router/dev@^7.10.1, tailwindcss@^4.1.13 (+25 more)

### Community 31 - "Design-sync Previews"
Cohesion: 0.12
Nodes (4): columns, customers, invoiceItems, roleColors

### Community 32 - "Tooling & Theme Docs"
Cohesion: 0.19
Nodes (10): Direct slate/teal/emerald palette usage, Theme token classes, cfg.cssEntry (compiled root-*.css), Tailwind v4 CSS-only config (app/app.css), Warm slate/gray remap and brand-* scale, yarn package manager, yarn typecheck (only static check), Docker deployment (+2 more)

### Community 33 - "warehouse/Tablist/mobile.tsx"
Cohesion: 0.21
Nodes (11): ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor, FormFieldConfig, stoneFormFields, ItemDialogProps (+3 more)

### Community 34 - "sales/ReceiptHeader.tsx"
Cohesion: 0.53
Nodes (5): Divider(), IconTxtRow(), MetaRow(), Props, SalesReceiptHeader()

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

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

### Community 64 - "store/types.ts"
Cohesion: 0.12
Nodes (28): ReceiptProps, BlockDeliveryTable(), blockDeliveryTableItems, BlockDeliveryTableProps, DeliveryTableHeader(), deliveryPages(), DeliveryReceipt(), ReceiptPageProps (+20 more)

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 246 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `settings/common.tsx` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `useBlockInvoiceStore.ts`, `useWarehouseStore`, `cn`, `PersianCalendar.tsx`, `utils.ts`, `convertToPersianDigits`, `table.tsx`, `TableCell`, `Button`, `StockCard.tsx`, `root.tsx`, `BlockTableRow.tsx`, `toast.tsx`, `DataTable.tsx`, `Alert`, `CustomerForm.tsx`, `Table`, `Toast Hook`, `warehouse/columns.tsx`, `warehouse/Tablist/mobile.tsx`, `sales/ReceiptHeader.tsx`, `SSR Entry Points`, `store/types.ts`?**
  _High betweenness centrality (0.225) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.07303960136375558 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `useWarehouseStore`, `PersianCalendar.tsx`, `utils.ts`, `convertToPersianDigits`, `table.tsx`, `TableCell`, `Button`, `StockCard.tsx`, `BlockTableRow.tsx`, `toast.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `CustomerForm.tsx`, `Table`, `warehouse/columns.tsx`, `warehouse/Tablist/mobile.tsx`, `sales/ReceiptHeader.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.07374254049445865 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `useWarehouseStore`, `cn`, `PersianCalendar.tsx`, `utils.ts`, `convertToPersianDigits`, `TableCell`, `Button`, `root.tsx`, `BlockTableRow.tsx`, `toast.tsx`, `DataTable.tsx`, `settings/common.tsx`, `CustomerForm.tsx`, `Design-sync Previews`, `warehouse/Tablist/mobile.tsx`, `sales/ReceiptHeader.tsx`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._