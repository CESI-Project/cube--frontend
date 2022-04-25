import axios from 'axios';
import { BACKEND_URI } from './index';
import { Topic } from '../models/Topic';

export const getAllTopics = async () => axios.get(`${BACKEND_URI}/topic`).then((response) => response.data);

export const getTopicById = async (id: number) => axios.get(`${BACKEND_URI}/topic/${id}`).then((response) => response.data);

export const postCreationTopic = async ({
  title, picture, tags, text,
}: Topic) => axios.post(`${BACKEND_URI}/topic/`, { topic: { title, tags, text }, file: picture }).then((response) => response.data);
