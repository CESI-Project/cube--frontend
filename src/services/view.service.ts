import axios from 'axios';
import { BACKEND_URI } from './index';
import { View } from '../models/View';

export const postViewByTopic = async ({ topicId, userId }: View) => axios.post(`${BACKEND_URI}/view/`, { topicId, userId }).then((response) => response.data);

export const getViewByUser = async (id: number | undefined) => axios.get(`${BACKEND_URI}/view/${id}`).then((response) => response.data);

export const getTotalViews = async () => axios.get(`${BACKEND_URI}/view/admin/count`).then((response) => response.data);
