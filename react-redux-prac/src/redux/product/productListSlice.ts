import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface ProductListState {
  products: Product[];
}

const initialState: ProductListState = {
  products: [],
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productListSlice.actions;
export default productListSlice.reducer;
