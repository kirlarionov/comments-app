import { USERS_COMMENTS } from "./config";
import axios from "axios";

export const getUsersComments = async (postNum) => {
   const { data } = await axios.get(`${USERS_COMMENTS}?postId=${postNum}`);
   return data;
}

export const getCommentInfo = async (postNum, title) => {
   const { data } = await axios.get(`${USERS_COMMENTS}?postId=${postNum}&name=${title}`);
   return data;
}