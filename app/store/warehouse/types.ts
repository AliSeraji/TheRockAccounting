export type WarehouseItem = {
  id: number;
  code: string;
  category: string;
  name: string;
  diameter: string;
  length: string;
  width: string;
  area: string;
  purchasePrice: string;
  salePrice: string;
  quantity: string;
  notes: string;
  date: string;
};

export interface WarehouseState {
  items: WarehouseItem[];
  selectedItem: WarehouseItem;
  updateSelectedItem: (
    field: keyof WarehouseItem,
    value: string | number
  ) => void;
  setSelectedItem: (item: WarehouseItem) => void;
  addItem: (item: WarehouseItem) => void;
  updateItem: (id: number, item: WarehouseItem) => void;
  removeItem: (id: number) => void;
}
