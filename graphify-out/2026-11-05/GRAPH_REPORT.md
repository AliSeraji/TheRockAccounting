# Graph Report - TheRockAccounting  (2026-11-05)

## Corpus Check
- 280 files · ~76,749 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 1, .ico 1)

## Summary
- 1417 nodes · 5432 edges · 72 communities (48 shown, 24 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5f7c6dac`
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
- default-exports.ts
- TableCell
- Button
- ItemDialog.tsx
- utils.ts
- BlockTableRow.tsx
- toast.tsx
- useWarehouse.ts
- segmented-control.tsx
- DataTable.tsx
- settings/common.tsx
- Alert
- shadcn components.json
- CustomerForm.tsx
- TypeScript Config
- parseQuantity
- store/types.ts
- Toast Hook
- warehouse/columns.tsx
- devDependencies
- Design-sync Previews
- Tooling & Theme Docs
- warehouse/Tablist/mobile.tsx
- SalesReceiptPage.tsx
- Invoice Architecture Concepts
- Design-sync Bundle Rules
- graphify
- @radix-ui/react-context-menu@^2.2.1
- backend-readiness.md
- TablePagination.tsx
- gen-types Script
- @radix-ui/react-popover@^1.1.1
- SSR Entry Points
- Stock Ledger Concepts
- Design-sync Pipeline
- @hassanmojab/react-modern-calendar-datepicker
- next-themes@^0.4.6
- Design-sync Conventions
- @radix-ui/react-accordion@^1.2.0
- Invoice Saving Concepts
- Package Scripts
- @radix-ui/react-alert-dialog@^1.1.1
- Fonts & Printing
- graphify Rules
- Persian Digits & Rial
- Client-only Code & Jalali Dates
- alphaAgent Template
- React Compiler Plugin
- @radix-ui/react-checkbox@^1.1.1
- @radix-ui/react-dialog@^1.1.2
- @radix-ui/react-hover-card@^1.1.1
- @radix-ui/react-scroll-area@^1.1.0
- table.tsx
- @radix-ui/react-select
- @radix-ui/react-separator@^1.1.0
- @radix-ui/react-switch@^1.1.0
- @radix-ui/react-slider@^1.2.0
- @radix-ui/react-toggle-group@^1.1.0
- react-aria-components
- table@^6.9.0

## God Nodes (most connected - your core abstractions)
1. `cn()` - 215 edges
2. `react` - 172 edges
3. `convertToPersianDigits()` - 148 edges
4. `lucide-react` - 65 edges
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

## Communities (72 total, 24 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.07
Nodes (84): CustomersList(), ROLE_FILTER_OPTIONS, ListHeader(), AddRowFooter(), ExplanationCard(), InvoiceBody(), DayValue, INVOICE_TYPE_OPTIONS (+76 more)

### Community 1 - "Button"
Cohesion: 0.20
Nodes (20): PersianDatePicker(), PersianDatePickerProps, SingleCalendar, Button, Dialog(), DialogContent(), DialogDescription(), DialogFooter() (+12 more)

### Community 2 - "Saved Invoices List & Detail"
Cohesion: 0.06
Nodes (78): EMPTY, InvoiceActions(), invoiceColumns, INVOICE_KIND_LABELS, InvoiceTypeBadge(), amount(), blockItemColumns(), hasValue() (+70 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): dependencies, add@^2.0.6, @fontsource-variable/vazirmatn@^5.2.8, lucide-react@^0.562.0, motion@^13.1.0, @radix-ui/react-aspect-ratio@^1.1.0, @radix-ui/react-avatar@^1.1.0, @radix-ui/react-collapsible@^1.1.0 (+25 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (23): clsx@^2.1.1, @radix-ui/react-dropdown-menu@^2.1.1, @radix-ui/react-navigation-menu@^1.2.0, @radix-ui/react-progress@^1.1.0, @radix-ui/react-slot@^1.1.0, @radix-ui/react-tooltip@^1.1.4, shadcn@^3.8.4, tailwind-merge@^3.4.0 (+15 more)

### Community 5 - "useBlockInvoiceStore.ts"
Cohesion: 0.10
Nodes (33): ReceiptPageProps, computeBlockTotals(), computePaymentTotals(), computeTotals(), createInvoiceFormSlice(), emptyService(), initialFormState, PaymentInputs (+25 more)

### Community 6 - "useWarehouseStore"
Cohesion: 0.31
Nodes (15): BlockWarehouseSection(), ItemDialog(), ItemsCard(), ListItem, MiscWarehouseSection(), RawWarehouseSection(), StoneItemDialog(), StoneWarehouseSection() (+7 more)

### Community 7 - "cn"
Cohesion: 0.10
Nodes (34): FieldGroup(), FieldLegend(), FieldSeparator(), FieldSet(), SelectLabel, SelectSeparator, Separator(), SidebarContent() (+26 more)

### Community 8 - "PersianCalendar.tsx"
Cohesion: 0.06
Nodes (37): Modern Stone Logo (Rock Fact brand mark), Calculator icon (accounting), Dark hexagonal shield frame, Embedded base64 PNG raster (1174x1254 RGBA), Gold/bronze swoosh accent, Invoice document icon, Marble and stone slab motif, Warehouse with shelved stone blocks motif (+29 more)

### Community 9 - "utils.ts"
Cohesion: 0.21
Nodes (14): AdditionalNote(), InfoBox(), InfoRow(), Props, Note(), ReceiptPage(), Divider(), MetaRow() (+6 more)

### Community 10 - "convertToPersianDigits"
Cohesion: 0.19
Nodes (15): ReceiptProps, ReceiptTableProps, DeliveryTableBodyProps, CustomerInfoBox(), CustomerInfoBoxProps, RequestReceiptHeader(), RequestReceiptPage(), RequestReceiptPageProps (+7 more)

### Community 11 - "default-exports.ts"
Cohesion: 0.36
Nodes (5): Body(), Header(), Row(), LowerTable(), AdditionalNote()

### Community 12 - "TableCell"
Cohesion: 0.16
Nodes (26): DataTableFooter(), BlockTable(), Footer(), BlockRow, blockTableItems, invoiceTableItems, normalize(), PersianNumericInput() (+18 more)

### Community 13 - "Button"
Cohesion: 0.21
Nodes (18): clearFilters(), isFilterActive(), resetFilter(), FilterSheet(), FilterSheetProps, ListHeaderProps, ListFilter, Sheet() (+10 more)

### Community 14 - "ItemDialog.tsx"
Cohesion: 0.17
Nodes (23): FieldContent(), FieldTitle(), TabsContent, FormFieldConfig, formatDateTime(), formatNumber(), formatPrice(), isolateNegative() (+15 more)

### Community 15 - "utils.ts"
Cohesion: 0.13
Nodes (26): IdentityFieldProps, ServiceTypeInput(), ServiceTypeInputProps, StoneCodeInput(), StoneCodeInputProps, StoneTypeInput(), StoneTypeInputProps, SuggestInput() (+18 more)

### Community 16 - "BlockTableRow.tsx"
Cohesion: 0.07
Nodes (71): BLOCK_ROW_FIELDS, BlockRowField, BlockCardBody(), BlockRowCards(), BLOCK_MEASURE_UNIT, BLOCK_PRICE_LABEL, BLOCK_SIZE_FIELDS, SERVICE_PRICE_LABEL (+63 more)

### Community 17 - "toast.tsx"
Cohesion: 0.22
Nodes (9): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+1 more)

### Community 18 - "useWarehouse.ts"
Cohesion: 0.10
Nodes (38): newId(), AREA_INPUTS, calcBlockVolume(), calcStoneArea(), canBeDisabled(), deriveBlock(), deriveStone(), makeMovement() (+30 more)

### Community 19 - "segmented-control.tsx"
Cohesion: 0.17
Nodes (18): IconTitle(), SegmentedControlProps, SegmentedOption, SidebarMenuButton(), sidebarMenuButtonVariants, ToggleGroup(), ToggleGroupContext, ToggleGroupItem() (+10 more)

### Community 20 - "DataTable.tsx"
Cohesion: 0.27
Nodes (13): DataTable(), DataTableProps, DataTableCard(), DataTableCardProps, roleOf(), DataTableHeader(), DataTableRow(), DataTableRowProps (+5 more)

### Community 21 - "settings/common.tsx"
Cohesion: 0.07
Nodes (52): ACCENT, IconComponent, ICONS_BY_NAME, RECEIPT_SECTIONS, PlaceholderSection(), PlaceholderSectionProps, ReceiptIssueTablist(), ReceiptIssueMobileTablist() (+44 more)

### Community 22 - "Alert"
Cohesion: 0.25
Nodes (14): AlertDialog(), AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+6 more)

### Community 23 - "shadcn components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 24 - "CustomerForm.tsx"
Cohesion: 0.06
Nodes (78): customerColumns, ACCOUNT_NATURE_OPTIONS, ACCOUNT_ROLE_OPTIONS, PERSON_TYPE_OPTIONS, roleColors, SALE_RATE_OPTIONS, CustomerForm(), DigitsField (+70 more)

### Community 25 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, baseUrl, esModuleInterop, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 26 - "parseQuantity"
Cohesion: 0.44
Nodes (9): formatQuantity(), isNegativeVolume(), parseQuantity(), createMovementsSlice(), heldBy(), perItem(), sameStock(), stockOf() (+1 more)

### Community 27 - "store/types.ts"
Cohesion: 0.13
Nodes (26): InvoiceTableItem, requestLowerTableItems, requestUpperTableItems, salesTableItems, servicesTableItems, blockDeliveryTableItems, BlockDeliveryTableProps, BlockSalesTable() (+18 more)

### Community 28 - "Toast Hook"
Cohesion: 0.19
Nodes (14): Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+6 more)

### Community 29 - "warehouse/columns.tsx"
Cohesion: 0.10
Nodes (20): blockColumns, miscColumns, rawColumns, renderStock(), stoneColumns, blockFormFields, categoryColors, FieldTypes (+12 more)

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
Cohesion: 0.39
Nodes (5): ACCENT, IconComponent, ICONS_BY_NAME, WAREHOUSE_SECTIONS, WarehouseSectionDescriptor

### Community 34 - "SalesReceiptPage.tsx"
Cohesion: 0.15
Nodes (18): InfoRow(), Props, SalesInfoBox(), Props, rial(), SalesNote(), TotalRow(), Divider() (+10 more)

### Community 35 - "Invoice Architecture Concepts"
Cohesion: 0.17
Nodes (12): Prop-less page-level components, Draft and editor invoice store instances, InvoiceBody (components/invoice/index.tsx), invoiceFormSlice (withTotals), InvoiceKind (stone | block), InvoiceStoreContext / InvoiceStoreKey, Config-based routing (app/routes.ts), selectInvoiceStones / selectInvoiceBlocks (+4 more)

### Community 36 - "Design-sync Bundle Rules"
Cohesion: 0.18
Nodes (10): Sidebar parts require SidebarProvider, componentSrcMap pins, dtsPropsFor overrides for shadcn wrappers, Folder-qualified exports for colliding names, gen-types.mjs prop-contract generator, package.json publishConfig.types, lib/source-kit.mjs component derivation, tsconfigPathsPlugin (lib/bundle.mjs) (+2 more)

### Community 39 - "backend-readiness.md"
Cohesion: 0.23
Nodes (3): can(), Permission, StockMovementRef

### Community 40 - "TablePagination.tsx"
Cohesion: 0.41
Nodes (10): TablePagination(), TablePaginationProps, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationItem(), PaginationLink(), PaginationLinkProps (+2 more)

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

### Community 64 - "table.tsx"
Cohesion: 0.20
Nodes (18): deliveryTableItems, DetailsTable(), BlockDeliveryTable(), DeliveryTableHeader(), DeliveryTableHeaderProps, deliveryPages(), DeliveryReceipt(), ReceiptTable() (+10 more)

## Ambiguous Edges - Review These
- `Direct slate/teal/emerald palette usage` → `Warm slate/gray remap and brand-* scale`  [AMBIGUOUS]
  .design-sync/conventions.md · relation: conceptually_related_to

## Knowledge Gaps
- **38 isolated node(s):** `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER`, `TEXT`, `CALCULATED` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 249 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `utils.ts` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `useBlockInvoiceStore.ts`, `useWarehouseStore`, `cn`, `PersianCalendar.tsx`, `convertToPersianDigits`, `default-exports.ts`, `TableCell`, `Button`, `ItemDialog.tsx`, `utils.ts`, `BlockTableRow.tsx`, `toast.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `CustomerForm.tsx`, `store/types.ts`, `Toast Hook`, `warehouse/Tablist/mobile.tsx`, `SalesReceiptPage.tsx`, `TablePagination.tsx`, `SSR Entry Points`, `table.tsx`?**
  _High betweenness centrality (0.220) - this node is a cross-community bridge._
- **What connects `C:/Users/Ali/AppData/Roaming/uv/tools/graphifyy/Scripts/python.exe`, `PRICE`, `NUMBER` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.07190082644628099 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `lucide-react`, `Button`, `Saved Invoices List & Detail`, `PersianCalendar.tsx`, `utils.ts`, `TableCell`, `Button`, `ItemDialog.tsx`, `utils.ts`, `BlockTableRow.tsx`, `toast.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `Alert`, `CustomerForm.tsx`, `store/types.ts`, `warehouse/Tablist/mobile.tsx`, `SalesReceiptPage.tsx`, `TablePagination.tsx`, `table.tsx`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `Saved Invoices List & Detail` be split into smaller, more focused modules?**
  _Cohesion score 0.05785819482432148 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `Button`, `Saved Invoices List & Detail`, `dependencies`, `package.json`, `useWarehouseStore`, `cn`, `PersianCalendar.tsx`, `utils.ts`, `TableCell`, `Button`, `ItemDialog.tsx`, `utils.ts`, `BlockTableRow.tsx`, `toast.tsx`, `segmented-control.tsx`, `DataTable.tsx`, `settings/common.tsx`, `CustomerForm.tsx`, `Design-sync Previews`, `warehouse/Tablist/mobile.tsx`, `SalesReceiptPage.tsx`, `TablePagination.tsx`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Direct slate/teal/emerald palette usage` and `Warm slate/gray remap and brand-* scale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._