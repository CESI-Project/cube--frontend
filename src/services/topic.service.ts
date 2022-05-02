import axios from 'axios';
import { BACKEND_URI } from './index';
import { View } from '../models/View';

export const getAllTopics = async () => axios.get(`${BACKEND_URI}/topic`).then((response) => response.data);

export const getTopicById = async ({ topicId, userId }: View) => axios.get(`${BACKEND_URI}/topic/${topicId}`, { params: { view: { topicId, userId } } }).then((response) => response.data);

export const putView = async (id: number) => axios.put(`${BACKEND_URI}/topic/${id}/view`).then((response) => response.data);
