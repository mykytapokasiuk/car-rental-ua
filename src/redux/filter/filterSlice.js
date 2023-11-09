import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    carBrand: '',
    pricePerHour: '',
    mileageFrom: '',
    mileageTo: '',
  },
};

const filterSlice = createSlice({
  name: 'advertsFilter',
  initialState,
  reducers: {
    setCarBrandFilter: (state, action) => {
      state.filter.carBrand = action.payload;
    },
    setPricePerHourFilter: (state, action) => {
      state.filter.pricePerHour = action.payload;
    },
    setMileageFromFilter: (state, action) => {
      state.filter.mileageFrom = action.payload;
    },
    setMileageToFilter: (state, action) => {
      state.filter.mileageTo = action.payload;
    },
    setClearFilter: (state, action) => {
      Object.keys(state.filter).forEach(
        (i) => (state.filter[i] = action.payload),
      );
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const {
  setCarBrandFilter,
  setPricePerHourFilter,
  setMileageFromFilter,
  setMileageToFilter,
  setClearFilter,
} = filterSlice.actions;
