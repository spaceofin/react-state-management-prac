import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.id = uuidv4();
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
