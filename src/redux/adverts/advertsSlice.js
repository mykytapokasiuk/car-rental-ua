import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  axiosParams: { page: 1, limit: 12 },
  favorite: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.axiosParams.page = state.axiosParams.page + 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdvertsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { incrementPage } = advertsSlice.actions;
export const advertsSliceReducer = advertsSlice.reducer;
