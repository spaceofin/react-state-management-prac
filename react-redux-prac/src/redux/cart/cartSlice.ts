import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
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
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
