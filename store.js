import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo";
import productDetail from "./slices/productDetail";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userInfo,
  product: productDetail,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
