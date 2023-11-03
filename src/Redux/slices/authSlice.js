import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  data: {},
  isLoggedIn: false,
  isFetching: false,
  error: {
    message: "",
  },
};

export const Authentication = createSlice({
  name: "login",
  initialState: initialValue,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    loginError: (state, action) => {
      state.isFetching = false;
      state.isLoggedIn = false;
      state.error = {
        message: action.payload,
      };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.data = {};
    },
  },
});

export const { loginStart, loginSuccess, loginError, logout } = Authentication.actions;
export default Authentication.reducer;

//Asynchronous thunk action
