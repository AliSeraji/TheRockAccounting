import { SETTINGS_SECTIONS } from '~/components/settings/common';
import type { SettingStore, SidebarActivity, SideBarState } from '../types';
import type { StateCreator } from 'zustand';

const initialSidebarState: SideBarState = {
  activeSection: SETTINGS_SECTIONS[0],
};

export const createSidebarState: StateCreator<
  SettingStore,
  [],
  [],
  SidebarActivity
> = (set) => ({
  ...initialSidebarState,
  setActiveSection: (sectionId: string) => {
    set({
      activeSection:
        SETTINGS_SECTIONS.find((s) => s.id === sectionId) ||
        SETTINGS_SECTIONS[0],
    });
  },
});
