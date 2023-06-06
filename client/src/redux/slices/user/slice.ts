import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: User = {
  id: 1,
  firstName: "",
  lastName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = action.payload;
    },
    clearUser(state) {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;