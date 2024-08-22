import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, addCatalog, deleteCatalog, updateCatalog } from './operations';


const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || 'An unknown error occurred';
};


const catalogsSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload; 
      })
      .addCase(fetchCatalog.rejected, handleRejected)

      
      .addCase(addCatalog.pending, handlePending)
      .addCase(addCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload); 
      })
      .addCase(addCatalog.rejected, handleRejected)

      .addCase(deleteCatalog.pending, handlePending)
      .addCase(deleteCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((catalog) => catalog._id !== action.payload._id); // Rimuovi l'elemento
      })
      .addCase(deleteCatalog.rejected, handleRejected)

      
      .addCase(updateCatalog.pending, handlePending)
      .addCase(updateCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((catalog) =>
          catalog._id === action.payload._id ? action.payload : catalog
        ); 
      })
      .addCase(updateCatalog.rejected, handleRejected);
  }
});


export const catalogsReducer = catalogsSlice.reducer;

