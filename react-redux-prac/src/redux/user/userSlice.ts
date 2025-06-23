import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetAll } from "../common/resetAction";

interface UserState {
  id: string | null;
  email: string | null;
  name: string | null;
  isLoggedIn: boolean;
}

const initialUserState: UserState = {
  id: null,
  email: null,
  name: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
    });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
