import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { BASE_URL } = process.env;
axios.defaults.baseURL = `${BASE_URL}`;

export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAdvertsThunk',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
