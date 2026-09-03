import { create } from 'zustand';
import { RECEIPT_SECTIONS } from '~/components/receipt_issue/common';
import type { ReceiptSectionDescriptor } from '~/components/receipt_issue/types';

interface ReceiptIssueStore {
  activeSection: ReceiptSectionDescriptor;
  setActiveSection: (sectionId: string) => void;
}

export const useReceiptIssueStore = create<ReceiptIssueStore>((set) => ({
  activeSection: RECEIPT_SECTIONS[0],
  setActiveSection: (sectionId: string) => {
    set({
      activeSection:
        RECEIPT_SECTIONS.find((s) => s.id === sectionId) ||
        RECEIPT_SECTIONS[0],
    });
  },
}));
