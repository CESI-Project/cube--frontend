import axios from 'axios';
import { BACKEND_URI } from './index';
import { User } from '../models/User';

interface postConncetionProps {
    userName: string
    password: string
}

export const postConnection = async ({ userName, password }: postConncetionProps) => axios.post(`${BACKEND_URI}/user/auth/log-in`, { username: userName, password }).then((response) => {
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
});

export const postCreationAccount = async ({
  userName, email, password, roles = ['user'],
}: User) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username: userName, email, password, roles,
}).then((response) => {
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
});

export const getUserById = async (id:number | undefined) => axios.get(`${BACKEND_URI}/user/${id}`).then((response) => response.data);

export const getTotalUsers = async () => axios.get(`${BACKEND_URI}/user/admin/count`).then((response) => response.data);

export const getAllUsers = async (id: number | undefined) => axios.get(`${BACKEND_URI}/user/admin/${id}`).then((response) => response.data);

export const putDeactivatedUser = async (id: number | undefined) => axios.put(`${BACKEND_URI}/user/${id}/desactivation`).then((response) => response.data);
