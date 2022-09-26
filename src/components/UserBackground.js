import React, { useState } from "react";
import {
   Box,
   Image,
   PopoverHeader,
   PopoverContent,
   PopoverArrow,
   PopoverTrigger,
   Popover,
   PopoverCloseButton,
   PopoverBody,
   Input,
   Button
} from '@chakra-ui/react';
import { useAppContext } from "../app-context";
import CustomButton from "./CustomButton";
import settingImg from "../assets/settings.png";

const UserBackground = () => {
   const { background, setBackground } = useAppContext();
   const [inputBg, setInputBg] = useState("");
   // https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000

   const onClearButton = () => {
      setBackground("")
      setInputBg("")
   }

   return (
      <Box
         left="10px"
         bottom="12"
         position="fixed"
         cursor="pointer"
         _hover={{ backgroundColor: "gray.200" }}
         padding="10px"
         borderRadius="20px"
         transition="all .2s"
         zIndex={999}
      >
         <Popover placement="right">
            <PopoverTrigger>
               <Image src={settingImg} alt="" />
            </PopoverTrigger>
            <PopoverContent ml="8px" minW={{ lg: "500px", base: "auto" }} color="gray.500">
               <PopoverHeader fontWeight='semibold' textAlign="center">Change website background</PopoverHeader>
               <PopoverArrow />
               <PopoverCloseButton />
               <PopoverBody display="flex">
                  <Input
                     type="text"
                     placeholder="Enter image link"
                     value={inputBg}
                     onChange={e => setInputBg(e.target.value)}
                  />
                  <CustomButton
                     ml="10px"
                     onClick={() => setBackground(inputBg)}
                  >
                     Apply
                  </CustomButton>
               </PopoverBody>
               {
                  background && <Button
                     h="25px"
                     borderRadius="0 0 5px 5px"
                     onClick={onClearButton}
                  >
                     clear
                  </Button>
               }
            </PopoverContent>
         </Popover>
      </Box>
   );
}

export default UserBackground;