import axios from 'axios';
import { BACKEND_URI } from './index';
import { SubComment } from '../models/SubComment';

export const getSubCommentByComment = async (id: number | undefined) => axios.get(`${BACKEND_URI}/responseComment/${id}`).then((response) => response.data);

export const postCreationSubComment = async ({
  text, createdAt, commentId, userId,
}: SubComment) => axios.post(`${BACKEND_URI}/responseComment/`, {
  text, createdAt, commentId, userId,
}).then((response) => response.data);
