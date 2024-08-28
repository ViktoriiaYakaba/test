import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';


const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || 'An unknown error occurred';
};

const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState: {
    catalogs: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalogs = action.payload; 
      })
      .addCase(fetchCatalog.rejected, handleRejected)
  }
});


export const catalogsReducer = catalogsSlice.reducer;

