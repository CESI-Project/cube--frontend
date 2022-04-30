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
  userName, birthDate, email, password, role = ['user'],
}: User) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username: userName, birthDate, email, password, role,
}).then((response) => {
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
});

export const getUserById = async (id:number | undefined) => axios.get(`${BACKEND_URI}/user/${id}`).then((response) => response.data);
