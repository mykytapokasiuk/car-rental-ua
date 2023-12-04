import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'advertsFavorite',
  initialState,
  reducers: {
    addFavoriteAdvert: (state, action) => {
      state.favorites = [...state.favorites, ...action.payload];
    },
    deleteFavoriteAdvert: (state, action) => {
      state.favorites = state.favorites.filter(
        (advert) => advert.id !== action.payload,
      );
    },
  },
});

export const favoritesSliceReducer = favoritesSlice.reducer;
export const { addFavoriteAdvert, deleteFavoriteAdvert } =
  favoritesSlice.actions;
