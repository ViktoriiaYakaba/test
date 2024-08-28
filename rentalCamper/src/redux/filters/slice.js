
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',        
    equipment: {
      airConditioner: false,
      automatic: false,
      kitchen: false,
      TV: false,
      shower: false,
    },       
    camperType: '',    
  },
  reducers: {
    setFilters(state, action) {
      const { location, airConditioner, automatic, kitchen, TV, shower, type } = action.payload;
      state.location = location;  
      state.equipment = { airConditioner, automatic, kitchen, TV, shower };
      state.camperType = type;
    },
    clearFilters(state) {
      state.location = '';
      state.equipment = {
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false,
      };
      state.camperType = '';
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;


