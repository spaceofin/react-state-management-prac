import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import type { CartItem } from "../../types/cart";
import { resetAll } from "../common/resetAction";
import type { RootState } from "../store";
import type { CouponCode } from "../../types/coupon";
import { COUPONS } from "../../constants/coupons";

interface CartState {
  items: CartItem[];
  appliedCouponCode: CouponCode | null;
}

const initialState: CartState = {
  items: [],
  appliedCouponCode: null,
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
    setAppliedCoupon: (state, action: PayloadAction<CouponCode | null>) => {
      state.appliedCouponCode = action.payload;
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

const selectCartItems = (state: RootState) => state.cart.items;
const selectAppliedCouponCode = (state: RootState) =>
  state.cart.appliedCouponCode;

export const selectAppliedCoupon = createSelector(
  [selectAppliedCouponCode],
  (code) => COUPONS.find((coupon) => coupon.code === code) ?? null
);

export const selectDiscountedTotalPrice = createSelector(
  [selectCartItems, selectAppliedCoupon],
  (items, coupon) => {
    const total = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    if (!coupon) return total;

    if (coupon.type === "percent") {
      return total * (1 - coupon.value);
    } else if (coupon.type === "fixed") {
      return Math.max(0, total - coupon.value);
    }

    return total;
  }
);

export const {
  addItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  setCart,
  setAppliedCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
