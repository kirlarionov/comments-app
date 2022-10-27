import React from 'react';
import { Text, Flex, Input, Textarea, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setMyComments } from '../../redux/slices/myCommentsSlice';
import CustomButton from '../CustomButton';
import { editMyComment } from '../../services/myComments';

const EditCommentMode = ({
   setEditMode, editTitle, setEditTitle, editText, editEmail, setEditEmail,
   comment, setSortDisabled, setEditText, capitalizedTitle, setLoading
}) => {

   const dispatch = useDispatch();

   const applyEditComment = () => {
      setLoading(true);

      const updatedCommentObj = {
         title: editTitle,
         text: editText,
         email: editEmail
      }

      editMyComment(comment.id, updatedCommentObj)
         .then(data => dispatch(setMyComments(prevState => {
            setLoading(false);
            return prevState.map(curComment => {
               if (curComment.id === comment.id) {
                  return { ...curComment, ...data }
               } else return curComment
            })
         })));

      setEditMode(false);
      setSortDisabled(false);
   }

   const onCancelEdit = () => {
      setEditMode(false);
      setSortDisabled(false);
      setEditTitle("");
      setEditText("");
      setEditEmail("");
   }

   return (
      <Flex
         border="2px solid #5796ba"
         p="5px 15px"
         color="gray.600"
         borderRadius="10px"
         flexDirection="column"
         gap="10px"
         fontSize={{ lg: "16px", base: "14px" }}
      >
         <Flex
            justifyContent="space-between"
            mt="5px"
            position="relative"
         >
            <Text>TITLE:</Text>
            <Input
               w={{ lg: "87%", base: "84%" }}
               fontSize={{ lg: "16px", base: "14px" }}
               value={capitalizedTitle(editTitle) || ""}
               onChange={e => setEditTitle(e.target.value)}
            />
            <Box
               color="white"
               backgroundColor="#5796ba"
               fontSize={{ lg: "16px", base: "12px" }}
               lineHeight="20px"
               h="22px"
               p="0 10px"
               position="absolute"
               top="-34px"
               right="0px"
               borderRadius="5px 5px 0 0"
            >
               EDIT MODE
            </Box>
         </Flex>
         <Flex justifyContent="space-between">
            <Text>TEXT:</Text>
            <Textarea
               w={{ lg: "87%", base: "84%" }}
               fontSize={{ lg: "16px", base: "14px" }}
               value={editText}
               onChange={e => setEditText(e.target.value)}
            />
         </Flex>
         <Flex justifyContent="space-between">
            <Text>EMAIL:</Text>
            <Input
               w={{ lg: "87%", base: "84%" }}
               fontSize={{ lg: "16px", base: "14px" }}
               value={editEmail}
               onChange={e => setEditEmail(e.target.value)}
            />
         </Flex>
         <Flex justifyContent="center" gap="10px">
            <CustomButton
               color="white"
               w="100px"
               size="sm"
               fontSize={{ lg: "16px", base: "12px" }}
               onClick={applyEditComment}
            >
               APPLY
            </CustomButton>
            <CustomButton
               color="gray.400"
               w="100px"
               size="sm"
               fontSize={{ lg: "16px", base: "12px" }}
               backgroundColor="none"
               onClick={onCancelEdit}
            >
               CANCEL
            </CustomButton>
         </Flex>
      </Flex >
   );
}

export default EditCommentMode;