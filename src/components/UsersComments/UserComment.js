import React from "react";
import { Link } from "react-router-dom";
import { Text, Flex, Button, Box, useColorModeValue } from '@chakra-ui/react';
import { useAppContext } from "../../app-context";

const UserComment = ({ item }) => {
   const { title, setTitle } = useAppContext();
   const colorText = useColorModeValue("gray.500", "gray.700");

   const pathName = (name) => {
      return `/comments/${name.split(" ").join("-")}`;
   }

   return (
      <Flex
         flexDirection={{ lg: "row", base: "column" }}
         justifyContent="space-between"
         alignItems={{ lg: "center", base: "start" }}
         fontSize={{ lg: "16px", base: "18px" }}
         p={{ lg: "0px 15px", base: "0 0 0 15px" }}
         borderRadius="10px"
         border={item.name === title ? "2px solid white" : "2px solid transparent"}
         _hover={{ backgroundColor: "gray.300" }}
         transition="all .2s"
         cursor="pointer"
         onClick={() => setTitle(item.name)}
      >
         <Text color={colorText}>
            {item.id}. {item.name}
         </Text>
         <Box textAlign="end" w={{ lg: "auto", base: "100%" }}>
            <Link to={pathName(item.name)} key={item.id}>
               <Button
                  variant="outline"
                  color={colorText}
                  fontSize={{ lg: "14px", base: "14px" }}
               >
                  more info...
               </Button>
            </Link>
         </Box>

      </Flex>
   );
}

export default UserComment;