import React from "react";
import { useAppContext } from "./app-context"
import { Box, useColorMode, Button, useColorModeValue } from '@chakra-ui/react'
import UserBackground from "./components/UserBackground"

const BackgroundWrapper = ({ children }) => {
   const { background } = useAppContext();
   const { toggleColorMode } = useColorMode();
   const buttonBackground = useColorModeValue("gray.200", "gray.500");
   const colorText = useColorModeValue("gray.400", "white");

   return (
      <Box
         position="relative"
         minH="100vh"
         padding={{ lg: 12, base: 3, md: 7 }}
         backgroundImage={`url(${background})`}
         backgroundRepeat="no-repeat"
         backgroundPosition="center center"
         backgroundAttachment="fixed"
         backgroundSize="cover"
      >
         <UserBackground />
         <Button
            size="xsm"
            position="fixed"
            bottom="10px"
            left="10px"
            color={colorText}
            padding="4px 7px"
            backgroundColor={buttonBackground}
            border="2px solid #b8baca"
            zIndex="998"
            _hover={{
               backgroundColor: "gray.300",
               color: "white",
               transition: "all .3s"
            }}
            onClick={toggleColorMode}
         >
            Toggle Theme
         </Button>
         {children}
      </Box>
   )
}

export default BackgroundWrapper