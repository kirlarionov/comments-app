import React, { useEffect, useState } from "react";
import {
   Box,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalFooter,
   ModalBody,
   ModalHeader,
   Input,
   Text,
   useDisclosure
} from "@chakra-ui/react";
import { useAppContext } from "../app-context";
import CustomButton from "./CustomButton";
import MainWrapper from "./MainWrapper";

const StartModal = () => {
   const { userName, setUserName, setStartWelcomeText } = useAppContext();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [inputIsEmpty, setInputIsEmpty] = useState(false);

   const onChangeInputName = (e) => setUserName(e.target.value);

   useEffect(() => {
      if (!userName) {
         onOpen();
      }
   }, [onOpen, userName, setStartWelcomeText]);

   const onContinue = () => {
      if (!!userName) {
         onClose();
         setStartWelcomeText(true);
      } else {
         setInputIsEmpty(true);
         setInterval(() => setInputIsEmpty(false), 2000);
      }
   }

   return (
      <Modal
         closeOnOverlayClick={false}
         isOpen={isOpen}
         onClose={onClose}
      >
         <ModalOverlay />
         <ModalContent
            margin="auto 0"
            top="-80px"
            borderRadius="25px"
            backgroundColor="gray.300"
         >
            <MainWrapper>
               <ModalHeader
                  fontSize="24px"
                  color="gray.600"
                  pb={4}
               >
                  Please enter your name
               </ModalHeader>
               <ModalBody pb={7}>
                  <Box h="25px">
                     <Text color="red">
                        {inputIsEmpty && "Please enter your name in order to enter"}
                     </Text>
                  </Box>
                  <Input
                     placeholder="Your name"
                     backgroundColor="#ffffff"
                     size="lg"
                     color="gray.600"
                     fontSize="20px"
                     value={userName}
                     onChange={onChangeInputName}
                  />
               </ModalBody>
               <ModalFooter>
                  <CustomButton onClick={onContinue} type="submit">
                     Continue
                  </CustomButton>
               </ModalFooter>
            </MainWrapper>
         </ModalContent>
      </Modal>
   );
}

export default StartModal;