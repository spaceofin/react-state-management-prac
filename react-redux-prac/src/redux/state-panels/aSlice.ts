import { createSlice } from "@reduxjs/toolkit";

interface Astate {
  num: number;
  arr: number[];
}

const initialState: Astate = {
  num: 0,
  arr: [],
};

const aSlice = createSlice({
  name: "a",
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

export const { incrementNum, appendZeroToArr } = aSlice.actions;
export default aSlice.reducer;
