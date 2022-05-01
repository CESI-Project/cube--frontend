import axios from 'axios';
import { BACKEND_URI } from './index';

export const getAllTags = async (id: number) => axios.get(`${BACKEND_URI}/tag/${id}`).then((response) => response.data);
