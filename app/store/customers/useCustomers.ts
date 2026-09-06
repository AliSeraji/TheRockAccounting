import { create } from 'zustand/react';
import type { Customer, CustomerState } from './types';

export const emptyCustomer: Customer = {
  id: -1,
  code: '',
  personType: 'حقیقی',
  accountRole: 'مشتری',
  accountNature: 'تجاری',
  firstName: '',
  lastName: '',
  businessName: '',
  nationalId: '',
  economicCode: '',
  description: '',
  saleRate: 'قیمت مصرف‌کننده',
  mobile: '',
  phone: '',
  email: '',
  province: '',
  city: '',
  postalCode: '',
  address: '',
  bankAccount: '',
  iban: '',
  cardNumber: '',
  useInReceive: true,
  useInPayment: false,
  isActive: true,
  date: '',
};

const initialCustomers: Customer[] = [
  {
    ...emptyCustomer,
    id: 1,
    code: '1001',
    personType: 'حقوقی',
    accountRole: 'مشتری',
    businessName: 'ساختمانی آرین سازه',
    nationalId: '10861234565',
    economicCode: '411234567890',
    saleRate: 'قیمت همکار',
    mobile: '09121234567',
    phone: '02188776655',
    province: 'تهران',
    city: 'تهران',
    address: 'خیابان ولیعصر، پلاک ۱۲۰',
    postalCode: '1234567890',
    useInReceive: true,
    date: '۱۴۰۴/۶/۱۰',
  },
  {
    ...emptyCustomer,
    id: 2,
    code: '1002',
    firstName: 'رضا',
    lastName: 'محمدی',
    businessName: 'سنگ‌بری محمدی',
    nationalId: '0499370899',
    accountRole: 'مشتری و تامین‌کننده',
    saleRate: 'قیمت عمده',
    mobile: '09351112233',
    province: 'اصفهان',
    city: 'اصفهان',
    useInReceive: true,
    useInPayment: true,
    date: '۱۴۰۴/۶/۱۲',
  },
  {
    ...emptyCustomer,
    id: 3,
    code: '1003',
    firstName: 'مریم',
    lastName: 'کریمی',
    businessName: 'دکوراسیون کریمی',
    accountRole: 'مشتری',
    mobile: '09901234567',
    province: 'خراسان رضوی',
    city: 'مشهد',
    isActive: false,
    date: '۱۴۰۴/۶/۱۵',
  },
];

const initialState = {
  customers: initialCustomers,
  selectedCustomer: emptyCustomer,
};

export const useCustomersStore = create<CustomerState>((set, get) => ({
  ...initialState,

  setSelectedCustomer: (customer: Customer) =>
    set({ selectedCustomer: customer }),

  updateSelectedCustomer: (field, value) => {
    const { selectedCustomer } = get();
    const next: Customer = { ...selectedCustomer, [field]: value } as Customer;

    if (field === 'province') next.city = '';

    if (field === 'personType') {
      if (value === 'حقوقی') {
        next.firstName = '';
        next.lastName = '';
      } else {
        next.economicCode = '';
      }
    }

    set({ selectedCustomer: next });
  },

  addCustomer: (customer: Customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),

  updateCustomer: (id: number, customer: Customer) =>
    set((state) => ({
      customers: state.customers.map((c) => (c.id === id ? customer : c)),
    })),

  removeCustomer: (id: number) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),
}));

export const nextCustomerCode = (customers: Customer[]): string => {
  const codes = customers
    .map((c) => Number(c.code))
    .filter((c) => Number.isFinite(c) && c > 0);
  return String(codes.length > 0 ? Math.max(...codes) + 1 : 1001);
};
