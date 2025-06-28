import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Cstate {
  ids: { [id: number]: true };
}

const initialState: Cstate = {
  ids: {
    0: true,
    2: true,
    4: true,
    6: true,
    8: true,
    10: true,
    12: true,
    14: true,
    16: true,
    18: true,
  },
};

const cSlice = createSlice({
  name: "c",
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<string>) => {
      const num = Number(action.payload);
      if (!isNaN(num)) state.ids[num] = true;
    },
  },
});

export const selectHasId = (id: number) => (state: RootState) =>
  Boolean(state.c.ids[id]);

export const { addId } = cSlice.actions;
export default cSlice.reducer;
