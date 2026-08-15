import type { StateCreator } from 'zustand';
import type { BackupInfoState, BackupSettings, SettingStore } from '../types';

const initialBackupSettings: BackupSettings = {
  autoBackup: false,
  backupFreq: 'daily',
};

export const createBackupSection: StateCreator<
  SettingStore,
  [],
  [],
  BackupInfoState
> = (set) => ({
  ...initialBackupSettings,
  setBackupField: (key, value) =>
    set({ [key]: value } as Partial<BackupSettings>),
});
