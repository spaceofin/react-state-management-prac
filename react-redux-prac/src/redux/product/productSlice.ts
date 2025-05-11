import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface ProductState {
  product: Product | undefined;
}

const initialState: ProductState = { product: undefined };

const productListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productListSlice.actions;
export default productListSlice.reducer;
