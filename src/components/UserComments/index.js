import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setPostNum } from "../../redux/slices/mainSlice";
import { getUserComments } from "../../services/userComments";
import Loader from "../Loader";
import UserComment from "./UserComment";

const UserComments = () => {
   const [userComments, setUserComments] = useState([]);

   const { postNum } = useSelector(state => state.main);
   const dispatch = useDispatch();

   const colorText = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      getUserComments(postNum)
         .then(userComments => setUserComments(userComments));
   }, [postNum]);

   const onSelectPostNum = (item) => {
      dispatch(setPostNum(item));
   }

   return (
      !userComments.length ? (
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
               USER COMMENTS
            </Text>
            {
               userComments.map(item => (
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
                           onClick={() => onSelectPostNum(item)}
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

export default UserComments;