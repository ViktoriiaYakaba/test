import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    location: '', 
    minPrice: 0, 
    maxPrice: 1000000,
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changeLocationFilter(state, action) {
      state.location = action.payload;
    },
    changeMinPriceFilter(state, action) {
      state.minPrice = action.payload;
    },
    changeMaxPriceFilter(state, action) {
      state.maxPrice = action.payload;
    },
  },
});

export const {
  changeNameFilter,
  changeLocationFilter,
  changeMinPriceFilter,
  changeMaxPriceFilter
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

