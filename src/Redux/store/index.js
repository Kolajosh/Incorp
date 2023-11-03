import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from 'redux-persist/es/storage/session' // defaults to sessionStorage for web
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storageSession,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware: [thunk]
})

export const Persistor = persistStore(store);
