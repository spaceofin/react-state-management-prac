import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
import productListReducer from "./product/productListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    productList: productListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
