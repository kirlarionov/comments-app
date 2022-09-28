import React, { useState } from 'react';
import { Text, Flex, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import Loader from '../Loader';
import EditCommentMode from './EditCommentMode';

const MyComment = ({ comment, removeMyComment, setSortDisabled }) => {
   const [editMode, setEditMode] = useState(false);
   const [editTitle, setEditTitle] = useState("");
   const [editText, setEditText] = useState("");
   const [editEmail, setEditEmail] = useState("");
   const [loading, setLoading] = useState(false);
   const colorText = useColorModeValue("gray.500", "gray.700");

   const createdDate = new Date(comment.createdAt).toLocaleString("ru-RU").slice(0, -3);

   const capitalizedTitle = (string) => {
      if (!!string) {
         return string[0].toUpperCase() + string.slice(1);
      }
   }

   const onEditComment = () => {
      setEditMode(true);
      setSortDisabled(true);
      setEditTitle(comment.title);
      setEditText(comment.text);
      setEditEmail(comment.email);
   }

   return !!editMode ? (
      <EditCommentMode
         comment={comment}
         setEditMode={setEditMode}
         editTitle={editTitle}
         setEditTitle={setEditTitle}
         editText={editText}
         setEditText={setEditText}
         editEmail={editEmail}
         setEditEmail={setEditEmail}
         setLoading={setLoading}
         capitalizedTitle={capitalizedTitle}
         setSortDisabled={setSortDisabled}
      />
   ) : (
      <Flex
         position="relative"
         border="2px solid white"
         p="5px 15px"
         color={colorText}
         borderRadius="10px"
         flexDirection="column"
         gap="10px"
      >
         <Flex justifyContent="space-between" mt="5px">
            <Text>TITLE:</Text>
            <Text w={{ lg: "75%", base: "70%" }}>{capitalizedTitle(comment.title)}</Text>
            <IconButton
               mt="-5px"
               icon={<EditIcon color="gray.400" w="16px" h="16px" />}
               onClick={onEditComment}
            />
         </Flex>
         <Flex justifyContent="space-between">
            <Text>TEXT:</Text>
            <Text w={{ lg: "87%", base: "84%" }}>{comment.text}</Text>
         </Flex>
         <Flex justifyContent="space-between">
            <Text>EMAIL:</Text>
            <Text w={{ lg: "87%", base: "81%" }}>{comment.email}</Text>
         </Flex>
         <Flex
            justifyContent="space-between"
            fontSize="14px"
            color="gray.400"
         >
            <Text>CREATED DATE:</Text>
            <Text w="71%">{createdDate}</Text>
            <Button
               color="gray.400"
               onClick={() => removeMyComment(comment.id)}
            >
               DELETE
            </Button>
         </Flex>
         {
            !!loading && (
               <Flex
                  position="absolute"
                  top="0px"
                  right="0px"
                  w="100%"
                  h="100%"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#7c7c7f47"
                  borderRadius="7px"
                  zIndex="999"
               >
                  <Loader />
               </Flex>
            )
         }
      </Flex>
   );
}

export default MyComment;