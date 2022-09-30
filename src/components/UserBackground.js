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
import { useSelector, useDispatch } from "react-redux";
import { setBackground } from "../redux/slices/mainSlice";
import CustomButton from "./CustomButton";
import settingImg from "../assets/settings.png";

const UserBackground = () => {
   const [inputBg, setInputBg] = useState("");

   const { background } = useSelector(state => state.main);
   const dispatch = useDispatch();

   const onClearButton = () => {
      dispatch(setBackground(""));
      setInputBg("");
   }

   const onChangeBackground = () => {
      dispatch(setBackground(inputBg));
   };

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
                     onClick={onChangeBackground}
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