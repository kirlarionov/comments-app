import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Flex, useColorModeValue } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../../redux/slices/mainSlice';
import { setMyComments } from '../../redux/slices/myCommentsSlice';
import MyComment from './MyComment';
import { deleteMyComment, getMyComments } from '../../services/myComments';
import Loader from '../Loader';

const MyComments = () => {
   const [sort, setSort] = useState("");
   const [sortDisabled, setSortDisabled] = useState(false);
   const [loading, setLoading] = useState(false);

   const { comments } = useSelector((state) => state.myComments);
   const dispatch = useDispatch();

   const background = useColorModeValue("gray.100", "gray.300");
   const colorText = useColorModeValue("gray.500", "gray.700");

   useEffect(() => {
      setLoading(true);
      getMyComments()
         .then(data => {
            setLoading(false);
            return dispatch(
               setMyComments(data.sort((a, b) => new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1))
               );
         });
      return () => dispatch(setTitle(""));
   }, [dispatch]);

   const isSorted = () => {
      switch (sort) {
         case "date-desc":
            dispatch(setMyComments([...comments].sort((a, b) => new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1)));
            break;
         case "date-asc":
            dispatch(setMyComments([...comments].sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1)));
            break;
         case "title-asc":
            dispatch(setMyComments([...comments].sort((a, b) => b.title < a.title ? 1 : -1)));
            break;
         case "title-desc":
            dispatch(setMyComments([...comments].sort((a, b) => b.title > a.title ? 1 : -1)));
            break;
         default:
            break;
      }
   }

   const removeMyComment = (id) => {
      const updatedCommentList = comments.filter(comment => comment.id !== id);
      deleteMyComment(id)
         .then(dispatch(setMyComments(updatedCommentList)));
   }

   return (
      loading ? (
         <Flex justifyContent="center" p="40px">
            <Loader />
         </Flex>
      ) : (
         !!comments.length
            ? <>
               <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="32px"
                  color={colorText}
                  mb="20px"
               >
                  MY COMMENTS
               </Text>
               <Select
                  w="150px"
                  pb="5px"
                  fontSize={{ lg: "16px", base: "18px" }}
                  color={colorText}
                  cursor="pointer"
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  onClick={isSorted}
                  disabled={sortDisabled}
               >
                  <option value='date-desc'>date (DESC)</option>
                  <option value='date-asc'>date (ASC)</option>
                  <option value='title-desc'>title (DESC)</option>
                  <option value='title-asc'>title (ASC)</option>
               </Select>
               <Box
                  p="10px"
                  fontSize="16px"
                  backgroundColor={background}
                  borderRadius="15px"
                  display="flex"
                  flexDirection="column"
                  gap="10px"
               >
                  {
                     comments.map((comment, index) => {
                        return (
                           <MyComment
                              key={index + "-my-comment"}
                              comment={comment}
                              removeMyComment={removeMyComment}
                              setSortDisabled={setSortDisabled}
                           />
                        )
                     })
                  }
               </Box>
            </>
            : <Box
               p="50px"
               fontSize={{ lg: "24px", base: "20px" }}
               color="gray.600"
               textAlign="center"
            >
               You have no comments...
            </Box>
      )
   );
}

export default MyComments;