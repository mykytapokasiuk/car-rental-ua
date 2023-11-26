import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    make: '',
    rentalPrice: '',
    mileageFrom: '',
    mileageTo: '',
  },
};

const filterSlice = createSlice({
  name: 'advertsFilter',
  initialState,
  reducers: {
    setCarFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    setClearCarFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const { setCarFilter, setClearCarFilter } = filterSlice.actions;
