import { configureStore } from "@reduxjs/toolkit";
import authInputReducer from "./AuthInputSlice";

export default configureStore({
  reducer: {
    authInput: authInputReducer,
  },
});
