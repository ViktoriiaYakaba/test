import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',        
    equipment: {
      airConditioner: 0,
      automatic: "",
      kitchen: 0,
      TV: 0,
      shower: 0,
    },       
    camperType: '',    
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
      state.equipment = {
      airConditioner: 0,
      automatic: "",
      kitchen: 0,
      TV: 0,
      shower: 0,
    };
      state.camperType = '';
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

