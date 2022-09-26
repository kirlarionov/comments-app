import React, { useState } from 'react';
import { Box, Text, Flex, Input, Alert, AlertIcon, Textarea, useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import CustomButton from '../components/CustomButton';
import { addMyComment } from '../services/myComments';
import MainWrapper from '../components/MainWrapper';

const CreateNewComment = () => {
   const [commentAdded, setCommentAdded] = useState(false);
   const [inputTitle, setInputTitle] = useState("");
   const [inputText, setInputText] = useState("");
   const [inputEmail, setInputEmail] = useState("");
   const background = useColorModeValue("green.200", "green.500");

   const successfullyAddedComment = () => {
      setCommentAdded(true);
      setTimeout(() => setCommentAdded(false), 1500);
      setInputTitle("");
      setInputText("");
      setInputEmail("");
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      addMyComment({ ...data, createdAt: Date.now() });
      successfullyAddedComment();
   }

   return (
      <MainWrapper
         backgroundColor={background}
         fontSize={{ lg: "22px", base: "18px" }}
         minHeight={{ base: "96vh", lg: "100%" }}
      >
         <Text
            fontSize="30px"
            textAlign="center"
            color="white"
            pt={{ lg: 0, base: "20px" }}
            pb={{ lg: "40px", base: "30px" }}
         >
            CREATE NEW COMMENT
         </Text>
         {
            commentAdded && (
               <Box position="relative">
                  <Alert
                     status='success'
                     borderRadius="5px"
                     position="absolute"
                     top={{ lg: "-40px", base: "-30" }}
                     backgroundColor="yellow.200"
                     height="25px"
                  >
                     <AlertIcon />
                     YOUR COMMENT HAS BEEN ADDED!
                  </Alert>
               </Box>
            )
         }
         <form onSubmit={handleSubmit}>
            <Flex
               flexDirection={{ lg: "row", base: "column" }}
               justifyContent={{ lg: "space-between", base: "none" }}
               alignItems="center"
               pb="20px"
            >
               <Text
                  textAlign="end"
                  color="white"
                  w={{ lg: "17%", base: "auto" }}
                  mb={{ base: "15px", lg: 0 }}
               >
                  TITLE:
               </Text>
               <Input
                  name="title"
                  type="text"
                  w={{ lg: "80%", base: "97%" }}
                  backgroundColor="white"
                  value={inputTitle}
                  required
                  onChange={e => setInputTitle(e.target.value)}
               />
            </Flex>
            <Flex
               flexDirection={{ lg: "row", base: "column" }}
               justifyContent={{ lg: "space-between", base: "none" }}
               alignItems="center"
               pb="20px"
            >
               <Text
                  textAlign="end"
                  color="white"
                  w={{ lg: "17%", base: "auto" }}
                  mb={{ base: "15px", lg: 0 }}
               >
                  TEXT:
               </Text>
               <Textarea
                  name="text"
                  type="text"
                  w={{ lg: "80%", base: "97%" }}
                  backgroundColor="white"
                  value={inputText}
                  required
                  onChange={e => setInputText(e.target.value)}
               />
            </Flex>
            <Flex
               flexDirection={{ lg: "row", base: "column" }}
               justifyContent={{ lg: "space-between", base: "none" }}
               alignItems="center"
               pb="20px"
            >
               <Text
                  textAlign="end"
                  color="white"
                  w={{ lg: "17%", base: "auto" }}
                  mb={{ base: "15px", lg: 0 }}
               >
                  EMAIL:
               </Text>
               <Input
                  name="email"
                  type="text"
                  w={{ lg: "80%", base: "97%" }}
                  backgroundColor="white"
                  value={inputEmail}
                  required
                  onChange={e => setInputEmail(e.target.value)}
               />
            </Flex>
            <Box
               textAlign={{ lg: "end", base: "center" }}
               pb={{ lg: "40px", base: "30px" }}
               mb={{ base: "30px", lg: 0 }}
            >
               <CustomButton
                  type="submit"
                  w={{ lg: "80%", base: "97%" }}
                  mt={{ base: "35px", lg: 0 }}
                  borderRadius="5px"
                  fontSize={{ lg: "18px", base: "20px" }}
               >
                  S U B M I T
               </CustomButton>
            </Box>
         </form>
         <Link to="/">
            <CustomButton
               backgroundColor="gray.400"
               m={{ lg: 0, base: "10px" }}
               borderRadius="5px"
            >
               ← Back to Main
            </CustomButton>
         </Link>
      </MainWrapper>
   );
}

export default CreateNewComment;