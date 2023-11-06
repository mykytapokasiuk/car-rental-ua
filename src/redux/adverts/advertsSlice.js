import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  favorite: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdvertsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsSliceReducer = advertsSlice.reducer;
