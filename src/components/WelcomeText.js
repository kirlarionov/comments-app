import React, { useEffect, useState } from "react";
import { Text, Flex, Image, Box, ScaleFade, useColorModeValue } from '@chakra-ui/react';
import { useAppContext } from "../app-context";
import HelloIcon from '../assets/hello.svg';
import SmileIcon from '../assets/smile.png';

const WelcomeText = () => {
   const { userName } = useAppContext();
   const [welcomeText1, setWelcomeText1] = useState(false);
   const [welcomeText2, setWelcomeText2] = useState(false);
   const [welcomeText3, setWelcomeText3] = useState(false);
   const textColor = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      setTimeout(() => setWelcomeText1(true), 500);
      return () => {
         setWelcomeText1(false);
      }
   }, []);

   useEffect(() => {
      if (welcomeText1) {
         setTimeout(() => setWelcomeText2(true), 1500);
      }
      return () => {
         setWelcomeText2(false);
      }
   }, [welcomeText1]);

   useEffect(() => {
      if (welcomeText2) {
         setTimeout(() => setWelcomeText3(true), 1500);
      }
      return () => {
         setWelcomeText3(false);
      }
   }, [welcomeText2]);


   return (
      <Flex
         flexDirection="column"
         alignItems="center"
         fontSize={{ lg: "32px", base: "28px" }}
         color={textColor}
         mt="40px"
         gap="15px"
      >
         <ScaleFade in={welcomeText1} initialScale={1}>
            <Flex
               alignItems="center"
               justifyContent="center"
            >
               <Text>- Hello, <strong>{userName}</strong>!</Text>
               <Image src={HelloIcon} alt="Hello image" w="34px" h="34px" ml="10px" />
            </Flex>
         </ScaleFade>

         <ScaleFade in={welcomeText2} initialScale={1}>
            <Box>
               <Text>Thanks for using our App.</Text>
               <Text>Welcome and Good Luck!</Text>
            </Box>
         </ScaleFade>
         <ScaleFade in={welcomeText3} initialScale={1}>
            <Image src={SmileIcon} alt="Smile" />
         </ScaleFade>
      </Flex>
   );
}

export default WelcomeText;