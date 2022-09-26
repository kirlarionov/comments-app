import React from 'react';
import { Box } from '@chakra-ui/react';

const MainWrapper = ({ backgroundColor, children, ...props }) => (
   <Box
      maxW="900px"
      margin="0 auto"
      backgroundColor={backgroundColor}
      borderRadius="25px"
      padding="6px"
      fontSize="18px"
      color="gray.600"
   >
      <Box
         border="4px solid white"
         borderRadius="20px"
         padding={[null, "10px", "20px", "30px"]}
         {...props}
      >
         {children}
      </Box>
   </Box >
);

export default MainWrapper;