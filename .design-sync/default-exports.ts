// Re-exports components that design-sync's synthesized entry can't reach.
//
// The converter builds its bundle entry as `export * from "<file>"` per
// source file. That loses two kinds of component, so this module re-exports
// them by name (wired in via `extraEntries` in .design-sync/config.json):
//
// 1. Default exports - `export *` skips them entirely.
// 2. Named exports defined in more than one file (AdditionalNote) - when two
//    `export *` lines provide the same name, JavaScript drops that name.
//
// Names that collide across folders (Header, Body, Row, InvoiceSection,
// TableFooter, AdditionalNote) are folder-qualified so the design agent can
// tell them apart; the bare names are excluded in `componentSrcMap`.
// Add a line here when a new default-exported component is created.

// App shell
export { default as AppHeader } from '../app/components/header';
export { default as PageHeader } from '../app/components/ui/PageHeader';
export { default as PersianCalendar } from '../app/components/PersianCalendar';

// Customers
export { default as CustomerForm } from '../app/components/customers/CustomerForm';
export { default as CustomersList } from '../app/components/customers/CustomersList';
export { default as BankSection } from '../app/components/customers/form/BankSection';
export { default as ContactSection } from '../app/components/customers/form/ContactSection';
export { default as IdentitySection } from '../app/components/customers/form/IdentitySection';
export { default as StatusSection } from '../app/components/customers/form/StatusSection';

// Invoice
export { default as InvoiceBody } from '../app/components/invoice/index';
export { default as ExplanationCard } from '../app/components/invoice/ExplanaitionCard';
export { default as InvoiceInfo } from '../app/components/invoice/InvoiceInfo';
export { default as InvoiceItemsCard } from '../app/components/invoice/InvoiceItemCards';
export { default as InvoiceSummary } from '../app/components/invoice/InvoiceSummary';
export { default as InvoiceTable } from '../app/components/invoice/Table';
export { default as InvoiceTableRow } from '../app/components/invoice/TableRow';
export { default as PersianDatePicker } from '../app/components/invoice/PersianDatePicker.client';
export { default as PersianNumericInput } from '../app/components/invoice/PersianNumericInput';
export { default as StoneCodeInput } from '../app/components/invoice/StoneCodeInput';
export { default as StoneTypeInput } from '../app/components/invoice/StoneTypeInput';
export { default as InvoiceServices } from '../app/components/invoice/services/InvoiceServices';
export { default as ServiceRow } from '../app/components/invoice/services/ServiceRow';
export { default as ServicesTable } from '../app/components/invoice/services/ServicesTable';
export { default as ServiceTypeInput } from '../app/components/invoice/services/ServiceTypeInput';
export { default as BlockInvoiceTable } from '../app/components/invoice/block/BlockTable';
export { default as BlockInvoiceTableRow } from '../app/components/invoice/block/BlockTableRow';
export { default as InvoiceActions } from '../app/components/invoice/InvoiceActions';

// Invoice list
export { default as InvoicesList } from '../app/components/invoices/InvoicesList';
export { default as InvoiceDetails } from '../app/components/invoices/InvoiceDetails';
export { default as InvoiceEditor } from '../app/components/invoices/InvoiceEditor';
export { default as InvoiceViewHeader } from '../app/components/invoices/InvoiceViewHeader';
export { default as InvoiceDetailsTable } from '../app/components/invoices/details/DetailsTable';

// Receipt issue
export { default as ReceiptIssueSidebar } from '../app/components/receipt_issue/Tablist/index';
export { default as ReceiptIssueMobileTablist } from '../app/components/receipt_issue/Tablist/mobile';
export { default as ReceiptIssueInvoiceSection } from '../app/components/receipt_issue/sections/InvoiceSection';
export { default as ReceiptIssueBlockInvoiceSection } from '../app/components/receipt_issue/sections/BlockInvoiceSection';
export { default as ReceiptIssueInvoicesSection } from '../app/components/receipt_issue/sections/InvoicesSection';
export { default as PlaceholderSection } from '../app/components/receipt_issue/sections/PlaceholderSection';

// Receipts: delivery
export { AdditionalNote as DeliveryAdditionalNote } from '../app/components/receipts/delivery/AdditionalNote';
export { default as DeliveryReceipt } from '../app/components/receipts/delivery/index';
export { default as InfoBox } from '../app/components/receipts/delivery/InfoBox';
export { default as ReceiptHeader } from '../app/components/receipts/delivery/ReceiptHeader';
export { default as ReceiptPage } from '../app/components/receipts/delivery/receipt';
export { default as ReceiptTable } from '../app/components/receipts/delivery/Table';
export { default as BlockDeliveryTable } from '../app/components/receipts/delivery/BlockTable';

// Receipts: dialogs
export { default as ReceiptOutputDialog } from '../app/components/receipts/dialogs/receiptOutputDialog';

// Receipts: request
export { default as RequestProduct } from '../app/components/receipts/request/index';
export { default as CustomerInfoBox } from '../app/components/receipts/request/CustomerInfoBox';
export { default as RequestReceiptHeader } from '../app/components/receipts/request/ReceiptHeader';
export { default as RequestReceiptPage } from '../app/components/receipts/request/RequestReceiptPage';
export { default as LowerTable } from '../app/components/receipts/request/LowerTable/Table';
export { default as RequestLowerTableBody } from '../app/components/receipts/request/LowerTable/Body';
export { default as RequestLowerTableHeader } from '../app/components/receipts/request/LowerTable/Header';
export { default as RequestLowerTableRow } from '../app/components/receipts/request/LowerTable/Row';
export { default as UpperTable } from '../app/components/receipts/request/UpperTable/Table';
export { default as RequestUpperTableBody } from '../app/components/receipts/request/UpperTable/Body';
export { default as RequestUpperTableHeader } from '../app/components/receipts/request/UpperTable/Header';
export { default as RequestUpperTableRow } from '../app/components/receipts/request/UpperTable/Row';

// Receipts: sales
export { AdditionalNote as SalesAdditionalNote } from '../app/components/receipts/sales/AdditionalNote';
export { default as SalesInvoice } from '../app/components/receipts/sales/index';
export { default as SalesInfoBox } from '../app/components/receipts/sales/InfoBox';
export { default as SalesNote } from '../app/components/receipts/sales/Note';
export { default as PriceBox } from '../app/components/receipts/sales/PriceBox';
export { default as SalesReceiptHeader } from '../app/components/receipts/sales/ReceiptHeader';
export { default as SalesReceiptsPage } from '../app/components/receipts/sales/SalesReceiptPage';
export { default as SalesServicesTable } from '../app/components/receipts/sales/ServicesTable';
export { default as SalesSignature } from '../app/components/receipts/sales/Signature';
export { default as SalesTable } from '../app/components/receipts/sales/Table';
export { default as BlockSalesTable } from '../app/components/receipts/sales/BlockTable';
export { default as SalesTableBody } from '../app/components/receipts/sales/TableBody';
export { default as SalesTableFooter } from '../app/components/receipts/sales/Footer';
export { default as SalesTableHeader } from '../app/components/receipts/sales/TableHeader';

// Settings
export { default as SettingsSidebar } from '../app/components/settings/Tablist/index';
export { default as SettingsMobileTablist } from '../app/components/settings/Tablist/mobile';
export { default as CompanySection } from '../app/components/settings/sections/company/CompanySection';
export { default as ContactInfo } from '../app/components/settings/sections/company/ContactInfo';
export { default as IdentityInput } from '../app/components/settings/sections/company/IdentityInput';
export { default as LogoHandler } from '../app/components/settings/sections/company/LogoHandler';
export { default as SettingsInvoiceSection } from '../app/components/settings/sections/invoice/InvoiceSection';
export { default as StampUploader } from '../app/components/settings/sections/invoice/StampUploader';
export { default as NumberingSection } from '../app/components/settings/sections/numbering-section/NumberingSection';

// Warehouse
export { default as BlockWarehouseSection } from '../app/components/warehouse/BlockWarehouseSection';
export { default as FormField } from '../app/components/warehouse/FormField';
export { default as ItemDetails } from '../app/components/warehouse/ItemDetails';
export { default as ItemDialog } from '../app/components/warehouse/ItemDialog';
export { default as ItemsCard } from '../app/components/warehouse/ItemsCard';
export { default as MiscWarehouseSection } from '../app/components/warehouse/MiscWarehouseSection';
export { default as RawWarehouseSection } from '../app/components/warehouse/RawWarehouseSection';
export { default as StockCard } from '../app/components/warehouse/StockCard';
export { default as StoneItemDialog } from '../app/components/warehouse/StoneItemDialog';
export { default as StoneWarehouseSection } from '../app/components/warehouse/StoneWarehouseSection';
export { default as TransferDialog } from '../app/components/warehouse/TransferDialog';
export { default as WarehouseGate } from '../app/components/warehouse/WarehouseGate';
export { default as WarehouseTablist } from '../app/components/warehouse/Tablist';
export { default as WarehouseMobileTablist } from '../app/components/warehouse/Tablist/mobile';

// Data table
export { default as DataTable } from '../app/components/data-table/DataTable';
export { default as DataTableFooter } from '../app/components/data-table/DataTableFooter';
export { default as DataTableHeader } from '../app/components/data-table/DataTableHeader';
export { default as DataTableRow } from '../app/components/data-table/DataTableRow';
export { default as DataTableCard } from '../app/components/data-table/DataTableCard';
export { default as TablePagination } from '../app/components/data-table/TablePagination';
