import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import categoriesReducer from './categories/categoriesSlice';
import transactionsReducer from './transactions/transactionsSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['error'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    transactions: transactionsReducer,
  },
  middleware,

  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
