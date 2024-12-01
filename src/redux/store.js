import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "iws",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

export const persistedStore = persistStore(store);
