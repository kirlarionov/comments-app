import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppState = () => {
   const [title, setTitle] = useState("");
   const [postNum, setPostNum] = useState(1);
   const [openCommentsList, setOpenCommentsList] = useState(false);
   const [background, setBackground] = useState("");
   const [myComments, setMyComments] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [userName, setUserName] = useState("");
   const [startWelcomeText, setStartWelcomeText] = useState(false);

   return {
      title,
      setTitle,
      postNum,
      setPostNum,
      openCommentsList,
      setOpenCommentsList,
      background,
      setBackground,
      myComments,
      setMyComments,
      editMode,
      setEditMode,
      userName,
      setUserName,
      startWelcomeText,
      setStartWelcomeText
   }
}

export const AppProvider = ({ children }) => {
   const {
      title,
      setTitle,
      postNum,
      setPostNum,
      openCommentsList,
      setOpenCommentsList,
      background,
      setBackground,
      myComments,
      setMyComments,
      editMode,
      setEditMode,
      userName,
      setUserName,
      startWelcomeText,
      setStartWelcomeText
   } = useAppState();

   return (
      <AppContext.Provider
         value={{
            title,
            setTitle,
            postNum,
            setPostNum,
            openCommentsList,
            setOpenCommentsList,
            background,
            setBackground,
            myComments,
            setMyComments,
            editMode,
            setEditMode,
            userName,
            setUserName,
            startWelcomeText,
            setStartWelcomeText
         }}
      >
         {children}
      </AppContext.Provider>
   );
}

export const useAppContext = () => {
   return useContext(AppContext);
}
