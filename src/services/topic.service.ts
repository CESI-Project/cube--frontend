import axios from 'axios';
import { BACKEND_URI } from './index';
import { Topic } from '../models/Topic';

export const getAllTopics = async () => axios.get(`${BACKEND_URI}/topic`).then((response) => response.data);

export const getTopicById = async (id: number) => axios.get(`${BACKEND_URI}/topic/${id}`).then((response) => response.data);

export const postCreationTopic = async ({
  title, tags, text,
}: Topic) => axios.post(`${BACKEND_URI}/topic`, { title, text, tags }).then((response) => response.data);

export const getMyTopics = async (userId: number | undefined) => axios.get(`${BACKEND_URI}/topic/user/${userId}/myTopic`).then((response) => response.data);

export const getTotalTopics = async () => axios.get(`${BACKEND_URI}/topic/admin/count`).then((response) => response.data);
