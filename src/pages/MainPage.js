import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useAppContext } from "../app-context";
import UsersComments from '../components/UsersComments';
import MainWrapper from '../components/MainWrapper';
import MyComments from '../components/MyComments';
import CustomButton from '../components/CustomButton';

const MainPage = () => {
   const { openCommentsList, setOpenCommentsList, title, setTitle } = useAppContext();
   const [titleCommentHeader, setTitleCommentHeader] = useState("");
   const pageBackground = useColorModeValue("gray.200", "gray.500");
   const textColor = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      if (!openCommentsList) {
         setTitle("");
         setTitleCommentHeader("");
      }
   }, [openCommentsList, setTitle]);

   useEffect(() => {
      if (title) {
         setTitleCommentHeader(
            title[0].toLocaleUpperCase() + title.slice(1)
         );
      }
   }, [title]);

   const toggleVisibleComments = () => {
      setOpenCommentsList(!openCommentsList);
   }

   return (
      <MainWrapper backgroundColor={pageBackground} position="relative" minH="87vh">
         <Box >
            <Text
               fontSize="30px"
               textAlign="center"
               color="white"
               pt={{ base: "10px", lg: "0px" }}
            >
               COMMENTS LIST PAGE
            </Text>
         </Box>
         <Flex
            justifyContent="space-between"
            alignItems="center"
            p={{ base: "0 15px", lg: 0 }}
         >
            <CustomButton
               margin="25px 0px"
               onClick={toggleVisibleComments}
            >
               {openCommentsList ? "CLOSE ↑" : "OPEN ↓"}
            </CustomButton>
            <Link to="create-new-comment">
               <CustomButton
                  fontSize="26px"
                  p="10px 10px 14px"
                  position={{ md: "static", lg: "fixed" }}
                  top="75px"
                  right="250px"
               >
                  +
               </CustomButton>
            </Link>
            {
               !!openCommentsList && title && (
                  <Flex
                     alignItems="center"
                     width="80%"
                     display={{ base: "none", md: "none", lg: "flex" }}
                  >
                     <Text mr="25px" color={textColor}>comment title:</Text>
                     <Text color={textColor} fontSize="24px">"{titleCommentHeader}"</Text>
                  </Flex>
               )
            }
         </Flex>
         {
            !!openCommentsList && (
               <>
                  <UsersComments />
                  <MyComments />
               </>
            )
         }
      </MainWrapper >
   );
}

export default MainPage;