export type PersonType = 'حقیقی' | 'حقوقی';

export type AccountRole =
  | 'مشتری'
  | 'تامین‌کننده'
  | 'مشتری و تامین‌کننده'
  | 'بازاریاب'
  | 'کارمند'
  | 'سایر';

export type AccountNature = 'تجاری' | 'غیرتجاری';

export type SaleRate =
  | 'قیمت مصرف‌کننده'
  | 'قیمت همکار'
  | 'قیمت عمده'
  | 'قیمت ویژه';

export type Customer = {
  id: number;
  code: string;
  personType: PersonType;
  accountRole: AccountRole;
  accountNature: AccountNature;
  firstName: string;
  lastName: string;
  businessName: string;
  nationalId: string;
  economicCode: string;
  description: string;
  saleRate: SaleRate;
  mobile: string;
  phone: string;
  email: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
  bankAccount: string;
  iban: string;
  cardNumber: string;
  useInReceive: boolean;
  useInPayment: boolean;
  isActive: boolean;
  date: string;
};

export type CustomerField = keyof Customer;

export interface CustomerState {
  customers: Customer[];
  selectedCustomer: Customer;
  setSelectedCustomer: (customer: Customer) => void;
  updateSelectedCustomer: (
    field: CustomerField,
    value: string | boolean
  ) => void;
  addCustomer: (customer: Customer) => void;
  updateCustomer: (id: number, customer: Customer) => void;
  removeCustomer: (id: number) => void;
}
