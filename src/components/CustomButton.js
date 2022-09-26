import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

const CustomButton = ({ children, ...props }) => {
   const buttonBackground = useColorModeValue("blue.200", "gray.500");

   return (
      <Button
         backgroundColor={buttonBackground}
         borderRadius="10px"
         color="white"
         fontSize="22px"
         {...props}
      >
         {children}
      </Button>
   );
}

export default CustomButton;