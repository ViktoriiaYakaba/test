import { createSelector } from '@reduxjs/toolkit';


export const selectLocationFilter = (state) => state.filters.location;
export const selectEquipmentFilter = (state) => state.filters.equipment;
export const selectCamperTypeFilter = (state) => state.filters.camperType;


export const selectCatalogItems = (state) => state.catalog.items;

export const selectFilteredCatalog = createSelector(
  [selectCatalogItems, selectLocationFilter, selectEquipmentFilter, selectCamperTypeFilter],
  (items, location, equipment, camperType) => {
    return items.filter(item => {
     
      const matchesLocation = item.location.toLowerCase().includes(location.toLowerCase());

      const matchesEquipment = equipment.every(eq => item.details[eq]);

      const matchesCamperType = camperType ? item.type === camperType : true;

      return matchesLocation && matchesEquipment && matchesCamperType;
    });
  }
);


