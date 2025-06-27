import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
import productListReducer from "./product/productListSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import { aReducer, bReducer, cReducer } from "./state-panels";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    productList: productListReducer,
    product: productReducer,
    cart: cartReducer,
    a: aReducer,
    b: bReducer,
    c: cReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
