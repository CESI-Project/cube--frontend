import axios from 'axios';
import { BACKEND_URI } from './index';
import { Consumer } from '../models/Consumer';

interface postConncetionProps {
    username: string
    password: string
}

export const postConnection = async ({ username, password }: postConncetionProps) => axios.post(`${BACKEND_URI}/user/auth/log-in`, { username, password }).then((response) => response.data);

export const postCreationAccount = async ({
  username, firstName, name, birthDate, email, password,
}: Consumer) => axios.post(`${BACKEND_URI}/user/auth/sign-up`, {
  username, firstName, name, birthDate, email, password,
}).then((response) => response.data);
