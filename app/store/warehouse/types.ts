export type WarehouseItem = {
  id: number;
  code: string;
  category: string;
  categoryName: string;
  name: string;
  diameter: string;
  length: string;
  width: string;
  area: string;
  purchasePrice: string;
  salePrice: string;
  notes: string;
  date: string;
};

export interface WarehouseState {
  items: WarehouseItem[];
  addItem: (item: WarehouseItem) => void;
  updateItem: (id: number, item: WarehouseItem) => void;
  removeItem: (id: number) => void;
}
