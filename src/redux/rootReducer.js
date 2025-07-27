import { combineReducers } from "@reduxjs/toolkit";
import userPrefrenceReducer from "./userPrefrence/userPrefrenceSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPrefrence: userPrefrenceReducer,
});

export default rootReducer;
