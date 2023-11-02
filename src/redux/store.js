import { configureStore } from '@reduxjs/toolkit';
import { advertsSliceReducer } from './adverts/advertsSlice';
import { filterSliceReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    advertsFilter: filterSliceReducer,
    adverts: advertsSliceReducer,
  },
});
