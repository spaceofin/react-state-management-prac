import { createSlice } from "@reduxjs/toolkit";

interface Bstate {
  num: number;
  arr: number[];
}

const initialState: Bstate = {
  num: 0,
  arr: [],
};

const bSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    incrementNum: (state) => {
      state.num += 1;
    },
    appendZeroToArr: (state) => {
      state.arr.push(0);
    },
  },
});

export const { incrementNum, appendZeroToArr } = bSlice.actions;
export default bSlice.reducer;
