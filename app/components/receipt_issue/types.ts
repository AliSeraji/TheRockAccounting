export type ReceiptSectionId =
  | 'invoice'
  | 'search'
  | 'print'
  | 'archive'
  | 'list'
  | 'export';

export interface ReceiptSectionDescriptor {
  id: ReceiptSectionId;
  title: string;
  desc: string;
  iconName: string;
}
