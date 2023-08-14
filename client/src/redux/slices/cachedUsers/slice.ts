import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: User[] = [];

export const cacheUsersSlice = createSlice({
  name: "cachedUsers",
  initialState,
  reducers: {
    cacheUser(state, action: PayloadAction<User>) {
      state = [...state, {
        id: action.payload.id,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        profile_photo: action.payload.profile_photo,
      }]
    },
    clearCache(state) {
      state = initialState;
    },
  },
});

export const { cacheUser, clearCache } = cacheUsersSlice.actions;

export default cacheUsersSlice.reducer;