import type { ActionMap, AppTypes } from '..';

export type FilterState = {
  state: number;
  query: string;
  category: number;
  subCategory?: number;
  priceMin?: number;
  priceMax?: number;
  sortBy?: string;
  order?: string;
  per_page?: number;
};

export type FilterParams = Partial<FilterState>;

export type FilterPayload = {
  [AppTypes.SetFilter]: Partial<FilterState>;
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];
