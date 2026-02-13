import { create } from 'zustand';

export interface SettingsState {
  companyName: string;
  logo: string | null;

  setCompanyName: (value: string) => void;
  setLogo: (img: string | null) => void;
  getSettings: () => { companyName: string; logo: string | null };
  resetSettings: () => void;
}

const initialState = {
  companyName: '',
  logo: null,
};

export const useSettingsStore = create<SettingsState>((set, get) => ({
  ...initialState,

  setCompanyName: (value: string) => set({ companyName: value }),
  setLogo: (value?: string | null) => set({ logo: value }),

  getSettings: () => {
    const state = get();
    return {
      companyName: state.companyName,
      logo: state.logo,
    };
  },

  resetSettings: () => set(initialState),
}));
