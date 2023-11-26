import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { BASE_URL } = process.env;
axios.defaults.baseURL = `${BASE_URL}`;

export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAdvertsThunk',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const params = state.adverts.axiosParams;

    try {
      const response = await axios.get('/adverts', { params: params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchFilteredAdvertsThunk = createAsyncThunk(
  'adverts/fetchFilteredAdvertsThunk',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const { make, rentalPrice, mileageFrom, mileageTo } =
      state.advertsFilter.filter;
    try {
      const response = await axios.get('/adverts');
      return response.data.filter(
        (item) =>
          (!make || item.make.includes(make)) &&
          (!rentalPrice || +item.rentalPrice.substring(1) <= rentalPrice) &&
          (!mileageFrom || item.mileage >= mileageFrom) &&
          (!mileageTo || item.mileage <= mileageTo),
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
