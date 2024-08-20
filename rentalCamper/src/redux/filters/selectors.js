import { createSelector } from '@reduxjs/toolkit';

// Selettori per i filtri
export const selectLocationFilter = (state) => state.filters.location;
export const selectEquipmentFilter = (state) => state.filters.equipment;
export const selectCamperTypeFilter = (state) => state.filters.camperType;

// Selettore per il catalogo
export const selectCatalogItems = (state) => state.catalog.items;

// Selettore combinato che applica i filtri
export const selectFilteredCatalog = createSelector(
  [selectCatalogItems, selectLocationFilter, selectEquipmentFilter, selectCamperTypeFilter],
  (items, location, equipment, camperType) => {
    return items.filter(item => {
      // Filtraggio per location
      const matchesLocation = item.location.toLowerCase().includes(location.toLowerCase());

      // Filtraggio per equipaggiamento
      const matchesEquipment = equipment.every(eq => item.details[eq]);

      // Filtraggio per tipo di camper
      const matchesCamperType = camperType ? item.type === camperType : true;

      // Restituisce true solo se tutti i filtri corrispondono
      return matchesLocation && matchesEquipment && matchesCamperType;
    });
  }
);


