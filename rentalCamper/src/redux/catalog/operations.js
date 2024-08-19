import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://66bf332642533c403145695d.mockapi.io/';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/catalog');
      console.log('data', response.data)
      return response.data;
    } catch (e) {
      Notify.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCatalog = createAsyncThunk(
  'catalog/addCatalog',
  async (catalog, thunkAPI) => {
    try {
      const response = await axios.post('/catalog', catalog);
      Notify.success(`${catalog.name} is added to the catalog list!`);
      return response.data;
    } catch (e) {
      Notify.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCatalog = createAsyncThunk(
  'catalog/deleteCatalog',
  async (catalogId, thunkAPI) => {
    try {
      const response = await axios.delete(`/catalog/${catalogId}`);
      Notify.success('Catalog item deleted successfully!');
      return response.data;
    } catch (e) {
      Notify.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCatalog = createAsyncThunk(
  'catalog/updateCatalog',
  async ({ id, updatedCatalog }, thunkAPI) => {
    try {
      const response = await axios.put(`/catalog/${id}`, updatedCatalog);
      Notify.success('Catalog item updated successfully!');
      return response.data;
    } catch (error) {
      Notify.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

