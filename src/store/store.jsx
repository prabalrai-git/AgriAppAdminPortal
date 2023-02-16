import { configureStore } from "@reduxjs/toolkit";
import stateListReducer from "./features/StateList/stateListSlice";
import loginReducer from "./features/Login/loginSlice";
import sideBarCollasped from "./features/SideBarCollasped/sideBarCollaspedSlice";

export const store = configureStore({
  reducer: {
    stateList: stateListReducer,
    loginDetails: loginReducer,
    isSidebarCollasped: sideBarCollasped,
  },
});
