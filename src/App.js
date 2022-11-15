import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./app-context_NOT_USED_NOW";
import BackgroundWrapper from "./background-wrapper";
import MainPage from "./pages/MainPage";
import CommentPage from "./pages/CommentPage";
import NotFound from "./pages/NotFound";
import CreateNewComment from "./pages/CreateNewComment";

const App = () => (
   <BrowserRouter>
      <AppProvider>
         <ChakraProvider>
            <BackgroundWrapper>
               <Routes>
                  <Route path="/comments-app/" element={<MainPage />} />
                  <Route
                     path="/comments-app/create-new-comment"
                     element={<CreateNewComment />}
                  />
                  <Route
                     path="/comments-app/:commentTitle"
                     element={<CommentPage />}
                  />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </BackgroundWrapper>
         </ChakraProvider>
      </AppProvider>
   </BrowserRouter>
);

export default App;