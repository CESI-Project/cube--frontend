import axios from 'axios';
import { BACKEND_URI } from './index';
import { Tag } from '../models/Tag';

export const getAllTags = async (id: number) => axios.get(`${BACKEND_URI}/tag/${id}`).then((response) => response.data);

export const postTag = async ({
  nameEn,
  nameFr,
  familyTagId,
}: Tag) => axios.post(`${BACKEND_URI}/tag`, {
  nameEn,
  nameFr,
  familyTagId,
}).then((response) => response.data);

export const deleteTag = async (id: number | undefined) => axios.delete(`${BACKEND_URI}/tag/${id}`).then((response) => response.data);
