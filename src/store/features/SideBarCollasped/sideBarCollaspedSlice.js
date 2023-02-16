import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const sidBarCollaspedSlice = createSlice({
  name: "isCollasped",
  initialState,
  reducers: {
    setSidebarCollaspedStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebarCollaspedStore } = sidBarCollaspedSlice.actions;

export default sidBarCollaspedSlice.reducer;
