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

export interface CompanyInfoState extends CompanyData {
  setField: <K extends keyof CompanyData>(key: K, value: CompanyData[K]) => void;
}
