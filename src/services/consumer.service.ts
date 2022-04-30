import axios from 'axios';
import { BACKEND_URI } from './index';
import { User } from '../models/User';

interface postConncetionProps {
    username: string
    password: string
}

export const postConnection = async ({ username, password }: postConncetionProps) => axios.post(`${BACKEND_URI}/user/auth/log-in`, { username, password }).then((response) => response.data);

export const postCreationAccount = async ({
  username, birthDate, email, password, role = ['user'],
}: User) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username, birthDate, email, password, role,
}).then((response) => response.data);
