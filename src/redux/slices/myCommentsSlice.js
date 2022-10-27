import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   comments: []
}

export const myCommentsSlice = createSlice({
   name: "myComments",
   initialState,
   reducers: {
      setMyComments: (state, action) => {
         state.comments = action.payload
      }
   }
});

export const {
   setMyComments
} = myCommentsSlice.actions;

export default myCommentsSlice.reducer;