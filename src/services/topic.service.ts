import axios from 'axios';
import { BACKEND_URI } from './index';
import { Topic } from '../models/Topic';

export const getAllTopics = async () => axios.get(`${BACKEND_URI}/topic`).then((response) => response.data);

export const getTopicById = async (id: number) => axios.get(`${BACKEND_URI}/topic/${id}`).then((response) => response.data);

export const postCreationTopic = async ({
  title, tags, text, picture,
}: Topic) => {
  const topic = { title, tags, text };
  const json = JSON.stringify(topic);
  const blob = new Blob([json], { type: 'application/json' });

  const data = new FormData();
  data.append('topic', blob);
  data.append('file', picture);

  axios.post(`${BACKEND_URI}/topic/withImg`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => (response.data));
};

export const getMyTopics = async (userId: number | undefined) => axios.get(`${BACKEND_URI}/topic/user/${userId}/myTopic`).then((response) => response.data);

export const getTotalTopics = async () => axios.get(`${BACKEND_URI}/topic/admin/count`).then((response) => response.data);

export const putEditTopic = async ({
  title, tags, text, id,
}: Topic) => axios.put(`${BACKEND_URI}/topic/${id}`, { title, text, tags }).then((response) => response.data);

export const putValidationTopic = async (id: number | undefined) => axios.put(`${BACKEND_URI}/topic/${id}/validation`).then((response) => response.data);

export const deleteTopic = async (id: number | undefined) => axios.delete(`${BACKEND_URI}/topic/admin/${id}`).then((response) => response.data);
