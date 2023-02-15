import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const stateListSlice = createSlice({
  name: "stateList",
  initialState,
  reducers: {
    setStateListToStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStateListToStore } = stateListSlice.actions;

export default stateListSlice.reducer;
