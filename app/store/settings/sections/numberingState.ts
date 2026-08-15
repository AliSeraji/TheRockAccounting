import type { StateCreator } from 'zustand';
import type {
  NumberingData,
  NumberingInfoState,
  SettingStore,
} from '../types';

const initialNumbering: NumberingData = {
  invoicePrefix: 'INV',
  nextNumber: '1',
  fiscalYear: '1404',
  fiscalStart: '1',
  calendar: 'jalali',
};

export const createNumberingSection: StateCreator<
  SettingStore,
  [],
  [],
  NumberingInfoState
> = (set) => ({
  ...initialNumbering,
  setNumberingField: (key, value) =>
    set({ [key]: value } as Partial<NumberingData>),
});
