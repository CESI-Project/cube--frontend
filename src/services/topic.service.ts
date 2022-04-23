import axios from 'axios';
import { BACKEND_URI } from './index';

export const getAllTopics = async () => axios.get(`${BACKEND_URI}/topic`).then((response) => response.data);

export const getTopicById = async (id: number) => axios.get(`${BACKEND_URI}/topic/${id}`).then((response) => response.data);

export const putView = async (id: number) => axios.put(`${BACKEND_URI}/topic/${id}/view`).then((response) => response.data);
