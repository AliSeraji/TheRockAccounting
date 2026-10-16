import { createContext, useContext } from 'react';
import { useStore, type StoreApi } from 'zustand';
import type {
  BlockInvoiceState,
  InvoiceFormState,
  InvoiceKind,
  InvoiceSnapshot,
  InvoiceState,
} from './types';
import { stoneInvoiceEditor, useInvoiceStore } from './useInvoiceStore';
import {
  blockInvoiceEditor,
  useBlockInvoiceStore,
} from './useBlockInvoiceStore';

// 'draft' is the invoice on a creation tab, 'edit' a saved invoice opened
// for editing from the invoice list.
export type InvoiceMode = 'draft' | 'edit';

export interface InvoiceStoreKey {
  kind: InvoiceKind;
  mode: InvoiceMode;
}

const STONE_STORES: Record<InvoiceMode, StoreApi<InvoiceState>> = {
  draft: useInvoiceStore,
  edit: stoneInvoiceEditor,
};

const BLOCK_STORES: Record<InvoiceMode, StoreApi<BlockInvoiceState>> = {
  draft: useBlockInvoiceStore,
  edit: blockInvoiceEditor,
};

// Which invoice store the invoice cards and tables inside it edit. Defaults
// to the stone invoice draft.
export const InvoiceStoreContext = createContext<InvoiceStoreKey>({
  kind: 'stone',
  mode: 'draft',
});

export function useInvoiceForm<T>(selector: (state: InvoiceFormState) => T): T {
  const { kind, mode } = useContext(InvoiceStoreContext);
  const store: StoreApi<InvoiceFormState> =
    kind === 'stone' ? STONE_STORES[mode] : BLOCK_STORES[mode];
  return useStore(store, selector);
}

export function useStoneInvoice<T>(selector: (state: InvoiceState) => T): T {
  const { mode } = useContext(InvoiceStoreContext);
  return useStore(STONE_STORES[mode], selector);
}

export function useBlockInvoice<T>(
  selector: (state: BlockInvoiceState) => T
): T {
  const { mode } = useContext(InvoiceStoreContext);
  return useStore(BLOCK_STORES[mode], selector);
}

export function readInvoice({ kind, mode }: InvoiceStoreKey): InvoiceSnapshot {
  return kind === 'stone'
    ? { kind: 'stone', data: STONE_STORES[mode].getState().getInvoiceData() }
    : { kind: 'block', data: BLOCK_STORES[mode].getState().getInvoiceData() };
}

export function loadInvoice(mode: InvoiceMode, invoice: InvoiceSnapshot) {
  if (invoice.kind === 'stone') {
    STONE_STORES[mode].getState().loadInvoice(invoice.data);
  } else {
    BLOCK_STORES[mode].getState().loadInvoice(invoice.data);
  }
}

export function resetInvoice({ kind, mode }: InvoiceStoreKey) {
  if (kind === 'stone') STONE_STORES[mode].getState().resetInvoice();
  else BLOCK_STORES[mode].getState().resetInvoice();
}
