import axios from 'axios';
import { BACKEND_URI } from './index';
import { Favorite } from '../models/Favorite';
import { authHeader } from '../context/authHeader';

export const postFavorite = async ({ userId, topicId }: Favorite) => axios.post(`${BACKEND_URI}/favorite/`, { userId, topicId }).then((response) => response.data);

export const getHisFavorite = async (userId: number | undefined) => axios.get(`${BACKEND_URI}/favorite/${userId}`, { headers: authHeader() }).then((response) => response.data);

export const getIsFavorite = async ({ id, userId, topicId }: Favorite) => axios.get(`${BACKEND_URI}/favorite/isFavorite`, { params: { id, userId, topicId } }).then((response) => response.data);

export const deleteFavorite = async (favoriteId: number) => axios.delete(`${BACKEND_URI}/favorite/${favoriteId}`, { headers: authHeader() }).then((response) => response.data);
