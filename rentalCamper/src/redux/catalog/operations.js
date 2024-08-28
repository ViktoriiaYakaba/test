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





