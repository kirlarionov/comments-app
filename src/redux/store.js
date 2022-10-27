import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSlice";
import myCommentsReducer from "./slices/myCommentsSlice";

export const store = configureStore({
   reducer: {
      main: mainReducer,
      myComments: myCommentsReducer,
   }
});