import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
import productListReducer from "./product/productListSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import { aReducer, bReducer, cReducer, dReducer } from "./state-panels";
import booksReducer from "./books/booksSlice";

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
    d: dReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
