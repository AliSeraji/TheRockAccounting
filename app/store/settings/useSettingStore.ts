import { create } from 'zustand';
import type { CompanyData, CompanyInfoState } from './types';

const initialState: CompanyData = {
  companyName: '',
  logo: null,
  brandName: '',
  taxId: '',
  regNumber: '',
  postalCode: '',
  phone: '',
  mobile: '',
  logoError: '',
  email: '',
  website: '',
  address: '',
};

export const useSettingsStore = create<CompanyInfoState>((set) => ({
  ...initialState,
  setField: (key, value) =>
    set({ [key]: value } as Pick<CompanyData, typeof key>),
}));
