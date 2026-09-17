import { useShallow } from 'zustand/react/shallow';
import {
  formatDataErrors,
  type CompanyDataErrors,
} from '~/components/settings/sections/company/validation';
import type { CompanyDataField } from '~/store/settings/types';
import { useSettingsStore } from '~/store/settings/useSettingStore';

export function useCompanyDataErrors(): CompanyDataErrors {
  return useSettingsStore(useShallow(formatDataErrors));
}

export function useCompanyFieldError(
  field: CompanyDataField
): string | undefined {
  return useSettingsStore((s) => formatDataErrors(s)[field]);
}
