import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogItems = (state) => state.catalog.catalogs; 
export const selectLocationFilter = (state) => state.filters.location;
export const selectCamperTypeFilter = (state) => state.filters.camperType; 
export const selectEquipmentFilter = (state) => state.filters.equipment; 

export const selectFilteredCatalog = createSelector(
    [selectCatalogItems, selectLocationFilter, selectCamperTypeFilter, selectEquipmentFilter],
    (catalogs, locationFilter, camperType, equipment) => {
        
        if (!locationFilter && !camperType && Object.values(equipment).every(v => !v)) {
            return catalogs; 
        }

        return catalogs.filter((catalog) => {
            const matchesLocation = locationFilter === '' || catalog.location.toLowerCase().includes(locationFilter.toLowerCase());
            const matchesCamperType = camperType === '' || catalog.form.includes(camperType);
            const matchesEquipment = 
                (!equipment.airConditioner || catalog.details.AC) &&
                (!equipment.kitchen || catalog.details.kitchen) &&
                (!equipment.TV || catalog.details.TV) &&
                (!equipment.shower || catalog.details.shower) &&
                (!equipment.automatic || catalog.transmission === 'automatic');

            return matchesLocation && matchesCamperType && matchesEquipment;
        });
    }
);




