import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const loginDetailsSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    setLoginDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoginDetails } = loginDetailsSlice.actions;

export default loginDetailsSlice.reducer;
