import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import type { CartItem } from "../../types/cart";
import { resetAll } from "../common/resetAction";
import type { RootState } from "../store";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((product) => {
        const item = state.items.find((item) => item.product.id === product.id);
        if (item) item.quantity += 1;
        else state.items.push({ product, quantity: 1 });
      });
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.quantity < 100) item.quantity += 1;
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    setCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, (state) => {
      state.items = [];
    });
  },
});

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const {
  addItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  setCart,
} = cartSlice.actions;
export default cartSlice.reducer;
