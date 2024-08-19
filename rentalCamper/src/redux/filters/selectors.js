import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = (state) => state.filters.name;
export const selectLocationFilter = (state) => state.filters.location; // Add other filters if necessary

export const selectFilteredCatalog = createSelector(
  [selectNameFilter, selectLocationFilter, (state) => state.catalog.items], // Changed 'campers.items' to 'catalog.items'
  (nameFilter, locationFilter, catalogItems) => {
    return catalogItems.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(nameFilter.toLowerCase());
      const locationMatch = item.location.toLowerCase().includes(locationFilter.toLowerCase()); // Add other filtering criteria if needed
      return nameMatch && locationMatch;
    });
  }
);

