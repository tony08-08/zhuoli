import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    formType: "login",
    user: { username: "", password: "" },
    register: {},
    forget: {},
  },
  reducers: {
    setFormTypeAction: (state, action) => {
      state.formType = action.payload;
    },
    setUserAction: (state, action) => {
      state.user = action.payload;
    },
    setRegisterAction: (state, action) => {
      state.register = action.payload;
    },
    setForgetAction: (state, action) => {
      state.forget = action.payload;
    },
  },
});

export const {
  setFormTypeAction,
  setUserAction,
  setRegisterAction,
  setForgetAction,
} = loginSlice.actions;
export default loginSlice.reducer;
