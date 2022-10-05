import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { getCommentInfo } from "../services/userComments";
import Loader from '../components/Loader';
import MainWrapper from '../components/MainWrapper';

const CommentPage = () => {
   const [title, setTitle] = useState('');
   const [commentInfo, setCommentInfo] = useState({});
   const [loading, setLoading] = useState(true);

   const { postNum } = useSelector(state => state.main);
   const { commentTitle } = useParams();

   useEffect(() => {
      setTitle(
         commentTitle.split("-").join(" ")
      );
   }, [commentTitle]);

   useEffect(() => {
      if (title) {
         getCommentInfo(postNum, title)
            .then(data => setCommentInfo(data[0], setLoading(false)));
      }
   }, [postNum, title]);

   return (
      <MainWrapper backgroundColor="blue.200" minHeight={{ base: "96vh", lg: "100%" }}>
         <Text
            fontSize="30px"
            textAlign="center"
            color="white"
            pb="30px"
         >
            COMMENT PAGE
         </Text>
         {
            !!loading ? (
               <Box
                  p="32px"
                  textAlign="center"
                  fontSize="36px"
               >
                  <Loader />
                  <Text>Loading...</Text>
               </Box>
            ) : (
               <>
                  <Flex
                     flexDirection={{ lg: "row", base: "column" }}
                     alignItems="center"
                     justifyContent="space-between"
                     pb="20px"
                  >
                     <Text fontWeight="bold">TITLE:</Text>
                     <Text width="80%">{commentInfo.name}</Text>
                  </Flex>
                  <Flex
                     flexDirection={{ lg: "row", base: "column" }}
                     alignItems="center"
                     justifyContent="space-between"
                     pb="20px"
                  >
                     <Text fontWeight="bold">TEXT:</Text>
                     <Text width="80%">{commentInfo.body}</Text>
                  </Flex>
                  <Flex
                     flexDirection={{ lg: "row", base: "column" }}
                     alignItems="center"
                     justifyContent="space-between"
                     pb="30px"
                  >
                     <Text fontWeight="bold">EMAIL:</Text>
                     <Text width="80%">{commentInfo.email}</Text>
                  </Flex>
                  <Link to="/">
                     <CustomButton _hover={{ backgroundColor: "blue.300" }}>← Back to Main</CustomButton>
                  </Link>
               </>
            )
         }
      </MainWrapper >
   );
}

export default CommentPage;