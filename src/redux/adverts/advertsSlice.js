import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsThunk, fetchFilteredAdvertsThunk } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  axiosParams: {},
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setAxiosParams: (state, action) => {
      state.axiosParams = action.payload;
    },
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
      })

      .addCase(fetchFilteredAdvertsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilteredAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { incrementPage, setAxiosParams } = advertsSlice.actions;
export const advertsSliceReducer = advertsSlice.reducer;
