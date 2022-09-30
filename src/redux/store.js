import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSlice";

export const store = configureStore({
   reducer: {
      main: mainReducer,
   },
});