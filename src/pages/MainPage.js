import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenCommentsList, setTitle } from "../redux/slices/mainSlice";
import UserComments from '../components/UserComments';
import MainWrapper from '../components/MainWrapper';
import MyComments from '../components/MyComments';
import CustomButton from '../components/CustomButton';
import StartModal from '../components/StartModal';
import WelcomeText from '../components/WelcomeText';

const MainPage = () => {
   const [titleCommentHeader, setTitleCommentHeader] = useState("");

   const { startWelcomeText, openCommentsList, title } = useSelector((state) => state.main);
   const dispatch = useDispatch();

   const pageBackground = useColorModeValue("gray.200", "gray.500");
   const textColor = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      if (!openCommentsList) {
         dispatch(setTitle(""));
         setTitleCommentHeader("");
      }
      return () => dispatch(setTitle(""))
   }, [openCommentsList, dispatch]);

   useEffect(() => {
      if (title) {
         setTitleCommentHeader(
            title[0].toLocaleUpperCase() + title.slice(1)
         );
      }
   }, [title]);

   const toggleVisibleComments = () => {
      dispatch(setOpenCommentsList(!openCommentsList));
   }

   return (
      <MainWrapper
         backgroundColor={pageBackground}
         position="relative"
         minH="87vh"
      >
         <StartModal />
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
            <Tooltip
               label="Click to create a new comment"
               borderRadius="7px"
               top="-50px"
               backgroundColor="gray.500"
            >
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
            </Tooltip>
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
            startWelcomeText && !openCommentsList && <WelcomeText />
         }
         {
            !!openCommentsList && (
               <>
                  <UserComments />
                  <MyComments />
               </>
            )
         }
      </MainWrapper >
   );
}

export default MainPage;