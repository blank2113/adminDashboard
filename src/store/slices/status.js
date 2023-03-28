import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  id: 0,
  id2: 0,
  title: "",
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatusValue: (state, action) => {
      state.value = action.payload;
    },
    getUserId: (state, action) => {
      state.id = action.payload;
    },
    getUserId2: (state, action) => {
      state.id = action.payload;
    },
    getTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setStatusValue, getUserId, getUserId2, getTitle } =
  statusSlice.actions;
export default statusSlice.reducer;
