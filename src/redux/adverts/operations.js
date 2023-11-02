import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6543f54701b5e279de2132bd.mockapi.io/';

export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/averts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
