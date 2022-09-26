import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { useAppContext } from "../../app-context";
import { getUsersComments } from "../../services/usersComments";
import Loader from '../Loader';
import UserComment from "./UserComment";

const UsersComments = () => {
   const { postNum, setPostNum } = useAppContext();
   const [usersComments, setUsersComments] = useState([]);
   const colorText = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      getUsersComments(postNum)
         .then(usersComments => setUsersComments(usersComments));
   }, [postNum]);

   return (
      !usersComments.length ? (
         <Flex justifyContent="center" padding="60px">
            <Loader />
         </Flex>
      ) : (
         <Box>
            <Text
               textAlign="center"
               fontSize="20px"
               color={colorText}
               mb="20px"
            >
               USERS COMMENTS
            </Text>
            {
               usersComments.map(item => (
                  <UserComment
                     key={item.id}
                     item={item}
                  />
               ))
            }
            <Flex
               justifyContent="center"
               gap="15px"
               m="20px 0"
            >
               {
                  [1, 2, 3, 4, 5].map(item => {
                     return (
                        <Button
                           key={item + "-num"}
                           border="1px solid white"
                           color={colorText}
                           fontSize={{ base: "18px", lg: "16px" }}
                           onClick={() => setPostNum(item)}
                        >
                           {item}
                        </Button>
                     )
                  })
               }
            </Flex>
         </Box>
      )
   );
}

export default UsersComments;