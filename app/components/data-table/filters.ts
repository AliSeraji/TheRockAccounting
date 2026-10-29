import type { ListFilter } from './types';

export const isFilterActive = (filter: ListFilter): boolean =>
  filter.value !== filter.options[0].value;

export const resetFilter = (filter: ListFilter): void =>
  filter.onChange(filter.options[0].value);

export const clearFilters = (filters: ListFilter[]): void =>
  filters.filter(isFilterActive).forEach(resetFilter);
