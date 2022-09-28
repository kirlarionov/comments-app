import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Box } from '@chakra-ui/react';
import CustomButton from '../components/CustomButton';
import MainWrapper from '../components/MainWrapper';

const NotFound = () => (
   <MainWrapper
      backgroundColor="orange.200"
      minHeight={{ base: "96vh", lg: "100%" }}
   >
      <Text
         textAlign="center"
         fontSize={{ lg: "32px", base: "40px" }}
         mb={{ lg: "80px", base: "70px" }}
         mt={{ lg: 0, base: "100px" }}
         color="white"
      >
         Page Not Found 😐
      </Text>
      <Box textAlign="center">
         <Link to="/">
            <CustomButton
               w={{ base: "95%", lg: "auto" }}
               m={{ base: "0 auto", lg: 0 }}
               h={{ base: "55px", lg: "auto" }}
               fontSize={{ lg: "30px", base: "35px" }}
            >
               ← Back to Main
            </CustomButton>
         </Link>
      </Box>

   </MainWrapper>
);

export default NotFound;