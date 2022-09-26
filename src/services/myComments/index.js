import axios from 'axios';
import { MY_COMMENTS } from './config';

export const getMyComments = async () => {
   const response = await axios(MY_COMMENTS);
   return response.data;
}

export const addMyComment = async (data) => {
   const response = await axios.post(MY_COMMENTS, data);
   return response.data;
}

export const deleteMyComment = async (id) => {
   const response = await axios.delete(MY_COMMENTS + id);
   return response.data;
}

export const editMyComment = async (id, data) => {
   const response = await axios.put(MY_COMMENTS + id, data);
   return response.data;
}



