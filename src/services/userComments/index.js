import { USER_COMMENTS } from "./config";
import axios from "axios";

export const getUserComments = async (postNum) => {
   const { data } = await axios.get(`${USER_COMMENTS}?postId=${postNum}`);
   return data;
}

export const getCommentInfo = async (postNum, title) => {
   const { data } = await axios.get(`${USER_COMMENTS}?postId=${postNum}&name=${title}`);
   return data;
}