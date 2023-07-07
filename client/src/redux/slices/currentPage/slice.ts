
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentPageType } from "../../../types";

const initialState: currentPageType = {
  type: "empty" ,
  id: ""
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<currentPageType>) {
      state.type = action.payload.type;
      state.id = action.payload.id;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;