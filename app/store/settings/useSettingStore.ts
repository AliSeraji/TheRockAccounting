import { create } from 'zustand';
import type { SettingStore } from './types';
import { createSidebarState } from './sections/sidebarState';
import { createCompanySection } from './sections/companyState';

export const useSettingsStore = create<SettingStore>()((...state) => ({
  ...createCompanySection(...state),
  ...createSidebarState(...state),
}));
