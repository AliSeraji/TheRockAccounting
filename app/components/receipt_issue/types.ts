export type ReceiptSectionId =
  | 'invoice'
  | 'block'
  | 'archive'
  | 'list'
  | 'export';

export interface ReceiptSectionDescriptor {
  id: ReceiptSectionId;
  title: string;
  desc: string;
  iconName: string;
}
