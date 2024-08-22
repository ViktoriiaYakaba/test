import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogState = (state) => state.catalog;


export const selectIsLoading = createSelector(
  [selectCatalogState],
  (catalog) => catalog.isLoading
);

export const selectError = createSelector(
  [selectCatalogState],
  (catalog) => catalog.error
);

export const selectFilterName = (state) => state.filters.name;

export const selectFilteredCatalog = createSelector(
  [selectCatalogState, selectFilterName],
  (catalog, filterName) => {
    if (!catalog.items) {
      return [];
    }
    return catalog.items.filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

