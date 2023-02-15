import { configureStore } from "@reduxjs/toolkit";
import stateListReducer from "./features/StateList/stateListSlice";

export const store = configureStore({
  reducer: {
    stateList: stateListReducer,
  },
});
