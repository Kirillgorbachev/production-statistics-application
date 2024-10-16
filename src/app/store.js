import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Model/AuthSlice";
import { baseApi } from "../baseApi/baseAPi";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authReducer = persistReducer({key: 'auth', storage}, authSlice.reducer)


const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(baseApi.middleware)
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authSlice.middleware),
});

export const persistor = persistStore(store)
export default store;