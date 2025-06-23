import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import { resetAll } from "../common/resetAction";

interface ProductState {
  product: Product | undefined;
}

const initialState: ProductState = { product: undefined };

const productListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product | undefined>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, (state) => {
      state.product = undefined;
    });
  },
});

export const { setProduct } = productListSlice.actions;
export default productListSlice.reducer;
