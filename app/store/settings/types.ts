import type { SettingsSectionDescriptor } from '~/components/settings/types';
import { BackupSection } from './../../components/settings/sections/Backup';

export type SettingStore = CompanyInfoState &
  NumberingInfoState &
  SidebarActivity &
  BackupInfoState;

export type CalendarKind = 'jalali' | 'hijri' | 'gregorian';

export type BackupFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface NumberingData {
  invoicePrefix: string;
  nextNumber: string;
  fiscalYear: string;
  fiscalStart: string;
  calendar: CalendarKind;
}

export interface BackupSettings {
  autoBackup: boolean;
  backupFreq: BackupFreq;
}

export interface NumberingInfoState extends NumberingData {
  setNumberingField: <K extends keyof NumberingData>(
    key: K,
    value: NumberingData[K]
  ) => void;
}

export interface CompanyData {
  companyName: string | null;
  brandName: string | null;
  taxId: string | null;
  regNumber: string | null;
  postalCode: string | null;
  phone: string | null;
  mobile: string | null;
  email: string | null;
  website: string | null;
  address: string | null;
  logo: string | null;
  logoError: string | null;
}

export interface BackupInfoState extends BackupSettings {
  setBackupField: <k extends keyof BackupSettings>(
    key: k,
    value: BackupSettings[k]
  ) => void;
}

export interface CompanyInfoState extends CompanyData {
  setField: <K extends keyof CompanyData>(
    key: K,
    value: CompanyData[K]
  ) => void;
}

export interface SideBarState {
  activeSection: SettingsSectionDescriptor;
}

export interface SidebarActivity extends SideBarState {
  setActiveSection: (sectionId: string) => void;
}
