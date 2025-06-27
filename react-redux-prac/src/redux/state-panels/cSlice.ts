import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Cstate {
  ids: Set<number>;
}

const initialState: Cstate = {
  ids: new Set([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]),
};

const cSlice = createSlice({
  name: "c",
  initialState,
  reducers: {},
});

export const selectHasId = (id: number) => (state: RootState) =>
  state.c.ids.has(id);

export default cSlice.reducer;
