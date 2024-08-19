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
import { catalogsReducer } from './catalog/slice';
import { filtersReducer } from './filters/slice';

const catalogPersistConfig = {
  key: 'catalog',
  storage,
};

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

export const store = configureStore({
  reducer: {
    catalog: persistReducer(catalogPersistConfig, catalogsReducer), 
    filters: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

