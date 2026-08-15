import { create } from 'zustand';
import type { SettingStore } from './types';
import { createSidebarState } from './sections/sidebarState';
import { createCompanySection } from './sections/companyState';
import { createNumberingSection } from './sections/numberingState';
import { createBackupSection } from './sections/BackupSection';

export const useSettingsStore = create<SettingStore>()((...state) => ({
  ...createCompanySection(...state),
  ...createNumberingSection(...state),
  ...createSidebarState(...state),
  ...createBackupSection(...state),
}));
