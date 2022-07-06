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
  // @ts-ignore
  userName, email, password, role = ['user'], age,
}: User) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username: userName, email, password, role, age,
}).then((response) => {
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
});

export const postCreationSpecialAccount = async ({
  // @ts-ignore
  userName, email = `admin.${userName}@gmail.com`, password, role, age = '99',
}: User) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username: userName, email, password, role, age,
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

export const putActivatedUser = async (id: number | undefined) => axios.put(`${BACKEND_URI}/user/${id}/activation`).then((response) => response.data);

export const getStatistics = async (id: number | undefined) => axios.get(`${BACKEND_URI}/user/${id}/dashboard`).then((response) => response.data);
