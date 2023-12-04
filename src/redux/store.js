import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsSliceReducer } from './adverts/advertsSlice.js';
import { filterSliceReducer } from './filter/filterSlice.js';
import { favoritesSliceReducer } from './favorites/favoritesSlice.js';

const advertsFavoritePersistConfig = {
  key: 'advertsFavorite',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    adverts: advertsSliceReducer,
    advertsFilter: filterSliceReducer,
    advertsFavorite: persistReducer(
      advertsFavoritePersistConfig,
      favoritesSliceReducer,
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
