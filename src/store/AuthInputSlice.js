import { createSlice } from "@reduxjs/toolkit";

const AuthInputSlice = createSlice({
  name: "inputValues",
  initialState: {
    // text: "",
    // pass: "",
    userData: [],
    showPass: false,
  },
  reducers: {
    submitForm(state, action) {
      state.userData.push({
        name: action.payload.userName,
        password: action.payload.userPassword,
      });
    },
    // toggleViewPass(state, action) {},
  },
});

export const { submitForm, toggleViewPass } = AuthInputSlice.actions;

export default AuthInputSlice.reducer;
