export type SectionId =
  | 'company'
  | 'invoice'
  | 'numbering'
  | 'backup'
  | 'appearance'
  | 'danger';

export interface Accent {
  from: string;
  to: string;
  ring: string;
  soft: string;
  border: string;
  label: string;
}

export type AccentKey =
  | 'teal'
  | 'blue'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'indigo';

export type AccentMap = Record<AccentKey, Accent>;

export interface SettingsSectionDescriptor {
  id: SectionId;
  title: string;
  desc: string;
  iconName: string;
}

export interface SettingsData {
  // Company identity
  companyName: string;
  brandName: string;
  taxId: string;
  regNumber: string;
  postalCode: string;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  address: string;
  logo: string | null;
  logoError: string | null;

  // Invoice & receipt
  currency: 'rial' | 'toman';
  vat: string;
  discount: string;
  dueIn: string;
  invoiceNote: string;
  paperSize: 'a4' | 'a5';
  printFont: 'vazirmatn' | 'samim' | 'irsans';
  showLogo: boolean;
  showSignature: boolean;
  pageNumbers: boolean;

  // Numbering & fiscal
  invoicePrefix: string;
  nextNumber: string;
  fiscalYear: string;
  fiscalStart: string;
  calendar: 'jalali' | 'hijri' | 'gregorian';

  // Backup
  autoBackup: boolean;
  backupFreq: 'daily' | 'weekly' | 'monthly';

  // Appearance
  uiFont: 'vazirmatn' | 'samim' | 'iransans';
  density: 'comfortable' | 'compact';
  colorMode: 'light' | 'dark' | 'system';
}

// Setter used by every section: updates one field + marks the form dirty.
export type SettingsSetter = <K extends keyof SettingsData>(
  key: K,
  value: SettingsData[K] | null
) => void;

export interface SectionProps {
  data: SettingsData;
  set: SettingsSetter;
  accent: Accent;
}

export type ToastVariant = 'success' | 'danger';
