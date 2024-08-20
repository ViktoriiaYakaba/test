import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',        
    equipment: [],       
    camperType: null,    
  },
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;  
    },
    toggleEquipmentFilter(state, action) {
      if (state.equipment.includes(action.payload)) {
        state.equipment = state.equipment.filter(
          (item) => item !== action.payload
        ); 
      } else {
        state.equipment.push(action.payload); 
      }
    },
    setCamperTypeFilter(state, action) {
      state.camperType = action.payload; 
    },
    clearFilters(state) {
      state.location = '';
      state.equipment = [];
      state.camperType = null;
    },
  },
});

export const {
  setLocationFilter,
  toggleEquipmentFilter,
  setCamperTypeFilter,
  clearFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

