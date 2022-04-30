import axios from 'axios';
import { BACKEND_URI } from './index';
import { Comment } from '../models/Comment';
import { authHeader } from '../context/authHeader';

export const getAllComments = async (id: number) => axios.get(`${BACKEND_URI}/comment/${id}`).then((response) => response.data);

export const postCreationComment = async ({
  text, userId, topicId, react, dislike, createdAt,
}: Comment) => axios.post(`${BACKEND_URI}/comment`, {
  text, userId, topicId, react, dislike, createdAt,
}, { headers: authHeader() }).then((response) => response.data);
