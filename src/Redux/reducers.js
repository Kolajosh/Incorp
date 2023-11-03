import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "../Redux/slices/authSlice"

export const rootReducer = combineReducers({
    auth: AuthReducer
})