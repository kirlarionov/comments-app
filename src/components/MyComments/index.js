import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Flex, useColorModeValue } from '@chakra-ui/react';
import { useAppContext } from "../../app-context";
import MyComment from './MyComment';
import { deleteMyComment, getMyComments } from '../../services/myComments';
import Loader from '../Loader';

const MyComments = () => {
   const { setTitle, myComments, setMyComments } = useAppContext();
   const [sort, setSort] = useState("");
   const [sortDisabled, setSortDisabled] = useState(false);
   const [loading, setLoading] = useState(false);
   const background = useColorModeValue("gray.100", "gray.300");
   const colorText = useColorModeValue("gray.500", "gray.700");

   const isSorted = () => {
      switch (sort) {
         case "date-desc":
            setMyComments(prevState => [...prevState].sort((a, b) => new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1));
            break;
         case "date-asc":
            setMyComments(prevState => [...prevState].sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1));
            break;
         case "title-asc":
            setMyComments(prevState => [...prevState].sort((a, b) => b.title < a.title ? 1 : -1));
            break;
         case "title-desc":
            setMyComments(prevState => [...prevState].sort((a, b) => b.title > a.title ? 1 : -1));
            break;
         default:
            break;
      }
   }

   const removeMyComment = (id) => {
      const updatedCommentList = myComments.filter(comment => comment.id !== id);
      deleteMyComment(id)
         .then(setMyComments(updatedCommentList));
   }

   useEffect(() => {
      setLoading(true);
      getMyComments()
         .then(data => {
            setLoading(false);
            return setMyComments(data);
         });
      return () => setTitle("");
   }, [setTitle, setMyComments]);

   return (
      loading ? (
         <Flex justifyContent="center" p="40px">
            <Loader />
         </Flex>
      ) : (
         !!myComments.length
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
                  placeholder={sort ? "" : "Sort by..."}
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
                  <option value='date-asc'>date (ASC)</option>
                  <option value='date-desc'>date (DESC)</option>
                  <option value='title-asc'>title (ASC)</option>
                  <option value='title-desc'>title (DESC)</option>
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
                     myComments.map((comment, index) => {
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