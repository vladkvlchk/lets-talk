import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  profile_photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profile_photo = action.payload.profile_photo;
    },
    clearUser(state) {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;