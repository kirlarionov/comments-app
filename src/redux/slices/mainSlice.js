import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userName: "",
   startWelcomeText: false,
   openCommentsList: false,
   title: "",
   background: "",
   postNum: 1,
}

export const mainSlice = createSlice({
   name: "main",
   initialState,
   reducers: {
      setUserName: (state, action) => {
         state.userName = action.payload
      },
      setStartWelcomeText: (state, action) => {
         state.startWelcomeText = action.payload
      },
      setOpenCommentsList: (state, action) => {
         state.openCommentsList = action.payload
      },
      setTitle: (state, action) => {
         state.title = action.payload
      },
      setBackground: (state, action) => {
         state.background = action.payload
      },
      setPostNum: (state, action) => {
         state.postNum = action.payload
      },
   },
});

export const {
   setUserName,
   setStartWelcomeText,
   setOpenCommentsList,
   setTitle,
   setBackground,
   setPostNum,
} = mainSlice.actions;

export default mainSlice.reducer;