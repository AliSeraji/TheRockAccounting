import type { StateCreator } from 'zustand';
import type { CompanyData, CompanyInfoState, SettingStore } from '../types';

const initialCompany: CompanyData = {
  companyName: '',
  brandName: '',
  taxId: '',
  regNumber: '',
  postalCode: '',
  phone: '',
  mobile: '',
  email: '',
  website: '',
  address: '',
  logo: null,
  logoError: '',
};

export const createCompanySection: StateCreator<
  SettingStore,
  [],
  [],
  CompanyInfoState
> = (set, get) => ({
  ...initialCompany,
  setField: (key, value) => set({ [key]: value } as Partial<CompanyData>),
});
