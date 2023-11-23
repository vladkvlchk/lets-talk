
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatPageType } from "../../../types";

const initialState: ChatPageType = {
  type: "empty" ,
  chat_id: "",
  contact_id: "",
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<ChatPageType>) {
      state.type = action.payload.type;
      state.chat_id = action.payload.chat_id;
      state.contact_id = action.payload.contact_id;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;